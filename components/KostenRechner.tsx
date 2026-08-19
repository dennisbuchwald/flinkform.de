"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/routes";
import type { RechnerDict } from "@/content/de/rechner";

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

type Anbieter = { name: string; flink?: boolean; pick: PlanPicker; note: string };

function buildAnbieter(t: RechnerDict["calc"]): Anbieter[] {
  return [
    {
      name: "Flinkform",
      flink: true,
      pick: ((sites, pro) => {
        if (!pro) return { price: 0, currency: "EUR", plan: t.vendors.flinkform.freeName };
        if (sites <= 1) return { price: 59, currency: "EUR", plan: "Pro Single" };
        if (sites <= 3) return { price: 99, currency: "EUR", plan: "Pro Studio" };
        if (sites <= 25) return { price: 149, currency: "EUR", plan: "Pro Agency" };
        return { price: 299, currency: "EUR", plan: "Pro Unlimited" };
      }) as PlanPicker,
      note: t.vendors.flinkform.note,
    },
    {
      name: "WPForms",
      pick: ((sites, pro) => {
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
      }) as PlanPicker,
      note: t.vendors.wpforms.note,
    },
    {
      name: "Gravity Forms",
      pick: ((sites, pro) => {
        // Kein Free-Tier. Zahlungs-Add-ons ab Pro. Limits: 1/3/unbegrenzt.
        if (pro) {
          if (sites <= 3) return { price: 159, currency: "USD", plan: "Pro" };
          return { price: 259, currency: "USD", plan: "Elite" };
        }
        if (sites <= 1) return { price: 59, currency: "USD", plan: "Basic" };
        if (sites <= 3) return { price: 159, currency: "USD", plan: "Pro" };
        return { price: 259, currency: "USD", plan: "Elite" };
      }) as PlanPicker,
      note: t.vendors.gravityforms.note,
    },
    {
      name: "Fluent Forms",
      pick: ((sites, pro) => {
        // Multi-Step + erweiterte Features nur in Pro. Limits: 1/5/unbegrenzt.
        void pro;
        if (sites <= 1) return { price: 79, currency: "USD", plan: "Pro Single" };
        if (sites <= 5) return { price: 159, currency: "USD", plan: "Pro Agency" };
        return { price: 299, currency: "USD", plan: "Pro Unlimited" };
      }) as PlanPicker,
      note: t.vendors.fluentforms.note,
    },
  ];
}

const JAHRE = 3;

export default function KostenRechner({
  locale = "de",
  t,
}: {
  locale?: Locale;
  t: RechnerDict["calc"];
}) {
  const [sites, setSites] = useState(5);
  const [proFeatures, setProFeatures] = useState(true);

  const anbieter = useMemo(() => buildAnbieter(t), [t]);

  const rows = useMemo(() => {
    return anbieter.map((a) => {
      const plan = a.pick(sites, proFeatures);
      return {
        ...a,
        plan,
        total: plan ? plan.price * JAHRE : null,
      };
    });
  }, [anbieter, sites, proFeatures]);

  const maxTotal = Math.max(...rows.map((r) => r.total ?? 0), 1);
  const flink = rows.find((r) => r.flink);
  const teuerste = rows.reduce((max, r) => ((r.total ?? 0) > (max.total ?? 0) ? r : max));
  const ersparnis =
    teuerste.total !== null && flink?.total !== null && flink ? teuerste.total - flink.total : 0;

  const numberLocale = locale === "en" ? "en-US" : "de-DE";
  const fmt = (n: number, currency: "EUR" | "USD") =>
    n.toLocaleString(numberLocale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
    });

  return (
    <div className="card overflow-hidden !rounded-3xl">
      <div className="border-b border-line bg-paper p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="rechner-sites" className="mb-2 block text-sm font-semibold">
              {t.sitesLabelPrefix} <strong>{sites}</strong>
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
              <span>{t.sitesMin}</span>
              <span>{t.sitesMax}</span>
            </div>
          </div>
          <div>
            <span className="mb-2 block text-sm font-semibold">{t.needsLabel}</span>
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
                {t.standardOption}
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
                {t.proOption}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-ink-muted">
          {t.costsOverYearsPrefix} {JAHRE} {t.yearsUnit}
        </p>
        <ul className="space-y-4">
          {rows.map((r) => (
            <li key={r.name}>
              <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <span className="font-semibold">
                  {r.name}
                  <span className="ml-2 text-xs font-medium text-ink-muted">{r.plan?.plan}</span>
                </span>
                <span
                  className={`font-(family-name:--font-display) text-lg font-bold tabular-nums ${
                    r.flink ? "text-gradient-brand" : ""
                  }`}
                >
                  {r.plan && r.total !== null
                    ? r.total === 0
                      ? fmt(0, "EUR")
                      : fmt(r.total, r.plan.currency)
                    : t.notAvailable}
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
              {t.savingsPrePre} {teuerste.name}
              {t.savingsVendorSuffix} {t.savingsPreMid} {JAHRE} {t.savingsPrePost}
            </p>
            <p className="mt-1 font-(family-name:--font-display) text-3xl font-extrabold text-gradient-brand">
              {teuerste.plan && teuerste.total !== null && flink.total !== null
                ? `${(teuerste.total - flink.total).toLocaleString(numberLocale)} ${
                    teuerste.plan.currency === "USD" ? "$" : "€"
                  }`
                : ""}
            </p>
            <p className="mt-1 text-xs text-ink-muted">{t.savingsNote}</p>
          </div>
        )}
      </div>

      <div className="border-t border-line bg-paper px-6 py-4 text-xs leading-relaxed text-ink-muted sm:px-8">
        {t.footnote}{" "}
        <a
          href="/wissen/was-kostet-wordpress-formular-plugin"
          className="font-semibold text-brand-violet underline underline-offset-2"
        >
          {t.footnoteLinkText}
        </a>
        .
      </div>
    </div>
  );
}
