"use client";

import { useMemo, useState } from "react";

/**
 * Interaktiver 3-Jahres-Kostenvergleich. Datenbasis: reguläre Listenpreise
 * (Renewal) laut Anbieter-Preisseiten, Stand Juli 2026. Planwahl-Logik:
 * günstigster Plan, der die Site-Anzahl und den Feature-Bedarf abdeckt.
 */

type PlanPicker = (sites: number, proFeatures: boolean) => {
  price: number;
  currency: "EUR" | "USD";
  plan: string;
} | null;

const ANBIETER: { name: string; flink?: boolean; pick: PlanPicker; note: string }[] = [
  {
    name: "Flinkform",
    flink: true,
    pick: (sites, pro) => {
      if (!pro) return { price: 0, currency: "EUR", plan: "Free (alles drin)" };
      if (sites <= 1) return { price: 59, currency: "EUR", plan: "Pro Single" };
      if (sites <= 3) return { price: 99, currency: "EUR", plan: "Pro Studio" };
      if (sites <= 25) return { price: 149, currency: "EUR", plan: "Pro Agency" };
      return { price: 299, currency: "EUR", plan: "Pro Unlimited" };
    },
    note: "Multi-Step, bedingte Logik und Spam-Schutz sind schon im Free-Plugin.",
  },
  {
    name: "WPForms",
    pick: (sites, pro) => {
      // Logik + mehrseitige Formulare erst ab Basic; Pro-Paket (Zahlungen
      // ohne Gebühr, Webhooks) erst ab Pro. Site-Limits: 1/3/5/unbegrenzt.
      if (pro) {
        if (sites <= 5) return { price: 399, currency: "USD", plan: "Pro" };
        return { price: 599, currency: "USD", plan: "Elite" };
      }
      if (sites <= 1) return { price: 99, currency: "USD", plan: "Basic" };
      if (sites <= 3) return { price: 199, currency: "USD", plan: "Plus" };
      if (sites <= 5) return { price: 399, currency: "USD", plan: "Pro" };
      return { price: 599, currency: "USD", plan: "Elite" };
    },
    note: "Lite speichert keine Einsendungen; unterhalb Pro 3 % Stripe-Zusatzgebühr.",
  },
  {
    name: "Gravity Forms",
    pick: (sites, pro) => {
      // Kein Free-Tier. Zahlungs-Add-ons ab Pro. Limits: 1/3/unbegrenzt.
      if (pro) {
        if (sites <= 3) return { price: 159, currency: "USD", plan: "Pro" };
        return { price: 259, currency: "USD", plan: "Elite" };
      }
      if (sites <= 1) return { price: 59, currency: "USD", plan: "Basic" };
      if (sites <= 3) return { price: 159, currency: "USD", plan: "Pro" };
      return { price: 259, currency: "USD", plan: "Elite" };
    },
    note: "Keine kostenlose Version, jede Website braucht eine Lizenz.",
  },
  {
    name: "Fluent Forms",
    pick: (sites, pro) => {
      // Multi-Step + erweiterte Features nur in Pro. Limits: 1/5/unbegrenzt.
      void pro;
      if (sites <= 1) return { price: 79, currency: "USD", plan: "Pro Single" };
      if (sites <= 5) return { price: 159, currency: "USD", plan: "Pro Agency" };
      return { price: 299, currency: "USD", plan: "Pro Unlimited" };
    },
    note: "Free-Version solide, Multi-Step und Zahlungen stecken in Pro.",
  },
];

const JAHRE = 3;

export default function KostenRechner() {
  const [sites, setSites] = useState(5);
  const [proFeatures, setProFeatures] = useState(true);

  const rows = useMemo(() => {
    return ANBIETER.map((a) => {
      const plan = a.pick(sites, proFeatures);
      return {
        ...a,
        plan,
        total: plan ? plan.price * JAHRE : null,
      };
    });
  }, [sites, proFeatures]);

  const maxTotal = Math.max(...rows.map((r) => r.total ?? 0), 1);
  const flink = rows.find((r) => r.flink);
  const teuerste = rows.reduce((max, r) =>
    (r.total ?? 0) > (max.total ?? 0) ? r : max,
  );
  const ersparnis =
    teuerste.total !== null && flink?.total !== null && flink
      ? teuerste.total - flink.total
      : 0;

  const fmt = (n: number, currency: "EUR" | "USD") =>
    n.toLocaleString("de-DE", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
    });

  return (
    <div className="card overflow-hidden !rounded-3xl">
      <div className="border-b border-line bg-paper p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="rechner-sites"
              className="mb-2 block text-sm font-semibold"
            >
              Anzahl deiner Websites: <strong>{sites}</strong>
            </label>
            <input
              id="rechner-sites"
              type="range"
              min={1}
              max={30}
              value={sites}
              onChange={(e) => setSites(Number(e.target.value))}
              className="w-full accent-brand-violet"
            />
            <div className="mt-1 flex justify-between text-xs text-ink-muted">
              <span>1</span>
              <span>30</span>
            </div>
          </div>
          <div>
            <span className="mb-2 block text-sm font-semibold">
              Was brauchen die Formulare?
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setProFeatures(false)}
                aria-pressed={!proFeatures}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  !proFeatures
                    ? "border-brand-violet bg-brand-violet text-white"
                    : "border-line bg-white text-ink-soft hover:border-ink-muted/40"
                }`}
              >
                Standard (Kontakt, Multi-Step, Logik)
              </button>
              <button
                type="button"
                onClick={() => setProFeatures(true)}
                aria-pressed={proFeatures}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  proFeatures
                    ? "border-brand-violet bg-brand-violet text-white"
                    : "border-line bg-white text-ink-soft hover:border-ink-muted/40"
                }`}
              >
                Plus Zahlungen, Uploads, Webhooks
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-ink-muted">
          Kosten über {JAHRE} Jahre
        </p>
        <ul className="space-y-4">
          {rows.map((r) => (
            <li key={r.name}>
              <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <span className="font-semibold">
                  {r.name}
                  <span className="ml-2 text-xs font-medium text-ink-muted">
                    {r.plan?.plan}
                  </span>
                </span>
                <span
                  className={`font-(family-name:--font-display) text-lg font-bold tabular-nums ${
                    r.flink ? "text-gradient-brand" : ""
                  }`}
                >
                  {r.plan && r.total !== null
                    ? r.total === 0
                      ? "0 €"
                      : fmt(r.total, r.plan.currency)
                    : "n. v."}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-line/60">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    r.flink ? "bg-gradient-brand" : "bg-ink-muted/50"
                  }`}
                  style={{
                    width: `${Math.max(((r.total ?? 0) / maxTotal) * 100, 1.5)}%`,
                  }}
                />
              </div>
              <p className="mt-1 text-xs text-ink-muted">{r.note}</p>
            </li>
          ))}
        </ul>

        {ersparnis > 0 && flink?.plan && (
          <div className="mt-8 rounded-2xl border border-brand-violet/25 bg-brand-violet/5 p-5 text-center">
            <p className="text-sm text-ink-soft">
              Gegenüber {teuerste.name} sparst du mit Flinkform in {JAHRE}{" "}
              Jahren
            </p>
            <p className="mt-1 font-(family-name:--font-display) text-3xl font-extrabold text-gradient-brand">
              {teuerste.plan && teuerste.total !== null && flink.total !== null
                ? `${(teuerste.total - flink.total).toLocaleString("de-DE")} ${teuerste.plan.currency === "USD" ? "$" : "€"}`
                : ""}
            </p>
            <p className="mt-1 text-xs text-ink-muted">
              Näherung ohne Währungsumrechnung; US-Preise in Dollar,
              Flinkform in Euro.
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-line bg-paper px-6 py-4 text-xs leading-relaxed text-ink-muted sm:px-8">
        Reguläre Listenpreise (Renewal) laut Anbieter-Preisseiten, Stand Juli
        2026, ohne Erstjahres-Rabatte. Gewählt wird je der günstigste Plan,
        der Site-Anzahl und Feature-Bedarf abdeckt. Details und Quellen im{" "}
        <a
          href="/wissen/was-kostet-wordpress-formular-plugin"
          className="font-semibold text-brand-violet underline underline-offset-2"
        >
          Preisvergleich
        </a>
        .
      </div>
    </div>
  );
}
