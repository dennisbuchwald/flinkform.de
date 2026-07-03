"use client";

import { useMemo, useState } from "react";

/**
 * Nachgebautes Flinkform-Mockup (HTML/CSS/React, kein iframe, kein WordPress):
 * ein durchklickbares Multi-Step-Formular mit live rechnendem Berechnungsfeld.
 * Show, don't tell.
 */

const PROJECT_OPTIONS = [
  { label: "Website", price: 0 },
  { label: "Onlineshop", price: 400 },
  { label: "Landingpage", price: 0 },
] as const;

const HOURLY_RATE = 90;

type Step = 0 | 1 | 2 | 3;

export default function HeroFormDemo() {
  const [step, setStep] = useState<Step>(0);
  const [project, setProject] = useState<string>("");
  const [hours, setHours] = useState<number>(10);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const surcharge =
    PROJECT_OPTIONS.find((o) => o.label === project)?.price ?? 0;
  const total = useMemo(
    () => hours * HOURLY_RATE + surcharge,
    [hours, surcharge],
  );

  const fmt = (n: number) =>
    n.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
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
      setError("Bitte fülle Name und E-Mail aus.");
      return;
    }
    if (!consent) {
      setError("Bitte stimme zu, um fortzufahren.");
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
          deine-website.de/anfrage
        </span>
      </div>

      <div className="p-6 sm:p-8" aria-live="polite">
        {step < 3 && (
          <>
            {/* Fortschritt */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-ink-muted">
                <span>Schritt {step + 1} von 3</span>
                <span>
                  {step === 0 && "Projekt"}
                  {step === 1 && "Umfang"}
                  {step === 2 && "Kontakt"}
                </span>
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
                  Was möchtest du anfragen?{" "}
                  <span aria-hidden="true" className="text-brand-pink">
                    *
                  </span>
                </legend>
                <div className="grid gap-2.5">
                  {PROJECT_OPTIONS.map((option) => (
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
                  onClick={() =>
                    next(1, project !== "", "Bitte wähle eine Option aus.")
                  }
                  className="mt-5 w-full rounded-xl bg-ink py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-ink-soft"
                >
                  Weiter
                </button>
              </fieldset>
            )}

            {step === 1 && (
              <div>
                <label
                  htmlFor="demo-hours"
                  className="mb-3 block text-[0.95rem] font-semibold text-ink"
                >
                  Geschätzter Umfang: {hours} Stunden
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
                  <span>5 h</span>
                  <span>60 h</span>
                </div>

                {/* Berechnungsfeld (Pro) */}
                <div className="mt-5 rounded-xl border border-brand-violet/30 bg-brand-violet/5 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-ink-muted">
                        Geschätzter Preis
                        <span className="ml-2 whitespace-nowrap rounded-full bg-gradient-pro px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white">
                          Berechnungsfeld · Pro
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
                      rechnet live, serverseitig verifiziert
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="rounded-xl border border-line bg-white px-5 py-3 text-[0.95rem] font-semibold text-ink-soft transition-colors hover:border-ink-muted/40"
                  >
                    Zurück
                  </button>
                  <button
                    type="button"
                    onClick={() => next(2, true, "")}
                    className="grow rounded-xl bg-ink py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-ink-soft"
                  >
                    Weiter
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
                    Name{" "}
                    <span aria-hidden="true" className="text-brand-pink">
                      *
                    </span>
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Max Mustermann"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="demo-email"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    E-Mail{" "}
                    <span aria-hidden="true" className="text-brand-pink">
                      *
                    </span>
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="max@beispiel.de"
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
                  <span>
                    Ich stimme zu, dass meine Angaben zur Bearbeitung der
                    Anfrage gespeichert werden. (Consent-Feld, eingebaut)
                  </span>
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-xl border border-line bg-white px-5 py-3 text-[0.95rem] font-semibold text-ink-soft transition-colors hover:border-ink-muted/40"
                  >
                    Zurück
                  </button>
                  <button
                    type="button"
                    onClick={submit}
                    disabled={sending}
                    className="grow rounded-xl bg-ink py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-ink-soft disabled:opacity-70"
                  >
                    {sending ? "Wird gesendet …" : "Anfrage absenden"}
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
              Danke! Deine Anfrage ist da.
            </p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
              Genau so fühlt sich Flinkform für deine Besucher an. Gebaut in
              5 Minuten, direkt im Block-Editor.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink-muted/40"
            >
              Nochmal durchklicken
            </button>
          </div>
        )}
      </div>

      {/* Fußzeile des Mockups */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t border-line bg-paper px-4 py-2.5 text-[0.7rem] text-ink-muted">
        <span>Spam-Schutz aktiv: ohne reCAPTCHA</span>
        <span aria-hidden="true">·</span>
        <span>Frontend-JS unter 15 KB</span>
        <span aria-hidden="true">·</span>
        <span>Erbt dein Theme-Design</span>
      </div>
    </div>
  );
}
