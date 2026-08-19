"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/routes";

/**
 * Nachgebautes Flinkform-Mockup (HTML/CSS/React, kein iframe, kein WordPress):
 * ein durchklickbares Multi-Step-Formular mit live rechnendem Berechnungsfeld.
 * Show, don't tell.
 */

const STRINGS = {
  de: {
    urlBar: "deine-website.de/anfrage",
    stepOf: (step: number) => `Schritt ${step} von 3`,
    stepLabels: ["Projekt", "Umfang", "Kontakt"],
    projectOptions: [
      { label: "Website", price: 0 },
      { label: "Onlineshop", price: 400 },
      { label: "Landingpage", price: 0 },
    ],
    projectLegend: "Was möchtest du anfragen?",
    projectError: "Bitte wähle eine Option aus.",
    next: "Weiter",
    back: "Zurück",
    hoursLabel: (hours: number) => `Geschätzter Umfang: ${hours} Stunden`,
    hoursMin: "5 h",
    hoursMax: "60 h",
    priceLabel: "Geschätzter Preis",
    priceBadge: "Berechnungsfeld · Pro",
    priceNote: "rechnet live, serverseitig verifiziert",
    nameLabel: "Name",
    namePlaceholder: "Max Mustermann",
    emailLabel: "E-Mail",
    emailPlaceholder: "max@beispiel.de",
    consent:
      "Ich stimme zu, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden. (Consent-Feld, eingebaut)",
    nameEmailError: "Bitte fülle Name und E-Mail aus.",
    consentError: "Bitte stimme zu, um fortzufahren.",
    sending: "Wird gesendet …",
    submit: "Anfrage absenden",
    thanksTitle: "Danke! Deine Anfrage ist da.",
    thanksDesc:
      "Genau so fühlt sich Flinkform für deine Besucher an. Gebaut in 5 Minuten, direkt im Block-Editor.",
    again: "Nochmal durchklicken",
    footer: ["Spam-Schutz aktiv: ohne reCAPTCHA", "Frontend-JS unter 15 KB", "Erbt dein Theme-Design"],
    numberLocale: "de-DE",
    currency: "EUR" as const,
  },
  en: {
    urlBar: "your-website.com/inquiry",
    stepOf: (step: number) => `Step ${step} of 3`,
    stepLabels: ["Project", "Scope", "Contact"],
    projectOptions: [
      { label: "Website", price: 0 },
      { label: "Online store", price: 400 },
      { label: "Landing page", price: 0 },
    ],
    projectLegend: "What would you like to request?",
    projectError: "Please choose an option.",
    next: "Next",
    back: "Back",
    hoursLabel: (hours: number) => `Estimated scope: ${hours} hours`,
    hoursMin: "5 h",
    hoursMax: "60 h",
    priceLabel: "Estimated price",
    priceBadge: "Calculation field · Pro",
    priceNote: "calculates live, verified server-side",
    nameLabel: "Name",
    namePlaceholder: "Jane Smith",
    emailLabel: "Email",
    emailPlaceholder: "jane@example.com",
    consent:
      "I agree that my details will be stored to process this request. (Built-in consent field)",
    nameEmailError: "Please fill in your name and email.",
    consentError: "Please agree to continue.",
    sending: "Sending …",
    submit: "Send request",
    thanksTitle: "Thanks! Your request is in.",
    thanksDesc:
      "This is exactly what Flinkform feels like for your visitors. Built in 5 minutes, right in the block editor.",
    again: "Click through again",
    footer: ["Spam protection active: no reCAPTCHA", "Frontend JS under 15 KB", "Inherits your theme design"],
    numberLocale: "en-US",
    currency: "EUR" as const,
  },
} as const;

const HOURLY_RATE = 90;

type Step = 0 | 1 | 2 | 3;

export default function HeroFormDemo({ locale = "de" }: { locale?: Locale }) {
  const t = STRINGS[locale];
  const [step, setStep] = useState<Step>(0);
  const [project, setProject] = useState<string>("");
  const [hours, setHours] = useState<number>(10);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const surcharge = t.projectOptions.find((o) => o.label === project)?.price ?? 0;
  const total = useMemo(() => hours * HOURLY_RATE + surcharge, [hours, surcharge]);

  const fmt = (n: number) =>
    n.toLocaleString(t.numberLocale, {
      style: "currency",
      currency: t.currency,
      minimumFractionDigits: 0,
    });

  function next(target: Step, valid: boolean, message: string) {
    if (!valid) {
      setError(message);
      return;
    }
    setError("");
    setStep(target);
  }

  function submit() {
    if (!name.trim() || !email.includes("@")) {
      setError(t.nameEmailError);
      return;
    }
    if (!consent) {
      setError(t.consentError);
      return;
    }
    setError("");
    setSending(true);
    // Nur Kulisse: es wird nichts gesendet, nirgendwohin.
    window.setTimeout(() => {
      setSending(false);
      setStep(3);
    }, 700);
  }

  function reset() {
    setStep(0);
    setProject("");
    setHours(10);
    setName("");
    setEmail("");
    setConsent(false);
    setError("");
  }

  const progress = step === 3 ? 100 : ((step + 1) / 3) * 100;

  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted/70 focus:border-brand-violet focus:outline-none focus:ring-2 focus:ring-brand-violet/25";

  return (
    <div className="card overflow-hidden shadow-[0_24px_64px_-32px_rgba(17,17,20,0.25)]">
      {/* Browser-Chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-line/60 px-3 py-1 text-xs text-ink-muted">
          {t.urlBar}
        </span>
      </div>

      <div className="p-6 sm:p-8" aria-live="polite">
        {step < 3 && (
          <>
            {/* Fortschritt */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-ink-muted">
                <span>{t.stepOf(step + 1)}</span>
                <span>{(t.stepLabels as readonly string[])[step]}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-gradient-brand-h transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {step === 0 && (
              <fieldset>
                <legend className="mb-3 text-[0.95rem] font-semibold text-ink">
                  {t.projectLegend}{" "}
                  <span aria-hidden="true" className="text-brand-pink">
                    *
                  </span>
                </legend>
                <div className="grid gap-2.5">
                  {t.projectOptions.map((option) => (
                    <label
                      key={option.label}
                      className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-[0.95rem] transition-colors ${
                        project === option.label
                          ? "border-brand-violet bg-brand-violet/5 font-semibold text-ink"
                          : "border-line bg-white text-ink-soft hover:border-ink-muted/40"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="demo-project"
                          checked={project === option.label}
                          onChange={() => {
                            setProject(option.label);
                            setError("");
                          }}
                          className="h-4 w-4 accent-brand-violet"
                        />
                        {option.label}
                      </span>
                      {option.price > 0 && (
                        <span className="text-xs text-ink-muted">
                          + {fmt(option.price)}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => next(1, project !== "", t.projectError)}
                  className="mt-5 w-full rounded-xl bg-ink py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-ink-soft"
                >
                  {t.next}
                </button>
              </fieldset>
            )}

            {step === 1 && (
              <div>
                <label
                  htmlFor="demo-hours"
                  className="mb-3 block text-[0.95rem] font-semibold text-ink"
                >
                  {t.hoursLabel(hours)}
                </label>
                <input
                  id="demo-hours"
                  type="range"
                  min={5}
                  max={60}
                  step={5}
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-brand-violet"
                />
                <div className="mt-1 flex justify-between text-xs text-ink-muted">
                  <span>{t.hoursMin}</span>
                  <span>{t.hoursMax}</span>
                </div>

                {/* Berechnungsfeld (Pro) */}
                <div className="mt-5 rounded-xl border border-brand-violet/30 bg-brand-violet/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-ink-muted">
                        {t.priceLabel}
                        <span className="ml-2 whitespace-nowrap rounded-full bg-gradient-pro px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white">
                          {t.priceBadge}
                        </span>
                      </p>
                      <p
                        className="mt-1 font-(family-name:--font-display) text-2xl font-bold text-ink tabular-nums"
                        aria-live="polite"
                      >
                        {fmt(total)}
                      </p>
                    </div>
                    <p className="max-w-[10rem] text-right text-[0.7rem] leading-snug text-ink-muted">
                      {hours} h × {fmt(HOURLY_RATE)}
                      {surcharge > 0 && <> + {fmt(surcharge)}</>}
                      <br />
                      {t.priceNote}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="rounded-xl border border-line bg-white px-5 py-3 text-[0.95rem] font-semibold text-ink-soft transition-colors hover:border-ink-muted/40"
                  >
                    {t.back}
                  </button>
                  <button
                    type="button"
                    onClick={() => next(2, true, "")}
                    className="grow rounded-xl bg-ink py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-ink-soft"
                  >
                    {t.next}
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4">
                <div>
                  <label
                    htmlFor="demo-name"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    {t.nameLabel}{" "}
                    <span aria-hidden="true" className="text-brand-pink">
                      *
                    </span>
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="demo-email"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    {t.emailLabel}{" "}
                    <span aria-hidden="true" className="text-brand-pink">
                      *
                    </span>
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
                <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-muted">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-brand-violet"
                  />
                  <span>{t.consent}</span>
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-xl border border-line bg-white px-5 py-3 text-[0.95rem] font-semibold text-ink-soft transition-colors hover:border-ink-muted/40"
                  >
                    {t.back}
                  </button>
                  <button
                    type="button"
                    onClick={submit}
                    disabled={sending}
                    className="grow rounded-xl bg-ink py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-ink-soft disabled:opacity-70"
                  >
                    {sending ? t.sending : t.submit}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <p
                role="alert"
                className="mt-4 rounded-xl border border-brand-pink/30 bg-brand-pink/5 px-4 py-2.5 text-sm font-medium text-brand-red"
              >
                {error}
              </p>
            )}
          </>
        )}

        {step === 3 && (
          <div className="py-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m5 12.5 4.5 4.5L19 7.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="mt-4 font-(family-name:--font-display) text-xl font-bold text-ink">
              {t.thanksTitle}
            </p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
              {t.thanksDesc}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink-muted/40"
            >
              {t.again}
            </button>
          </div>
        )}
      </div>

      {/* Fußzeile des Mockups */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-line bg-paper px-4 py-2.5 text-[0.7rem] text-ink-muted">
        {t.footer.map((item, i) => (
          <span key={item} className="flex items-center gap-x-5">
            {i > 0 && <span aria-hidden="true">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
