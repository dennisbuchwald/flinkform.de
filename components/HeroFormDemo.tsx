"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/routes";
import { DEMO_URL } from "@/lib/site";

/**
 * Formular-Kulisse für den Hero (HTML/CSS/React, kein iframe, kein WordPress).
 *
 * Bewusst NICHT durchklickbar: das echte Erlebnis steht auf demo.flinkform.de,
 * einer laufenden WordPress-Installation. Das Mockup zeigt nur den ersten
 * Schritt und schickt jeden Klick auf "Weiter" dorthin. Die Optionen lassen
 * sich anwählen, damit sich die Kulisse nicht kaputt anfühlt.
 */

const STRINGS = {
  de: {
    urlBar: "deine-website.de/anfrage",
    stepOf: "Schritt 1 von 3",
    stepLabel: "Projekt",
    projectLegend: "Was möchtest du anfragen?",
    projectOptions: [
      { label: "Website", surcharge: "" },
      { label: "Onlineshop", surcharge: "+ 400 €" },
      { label: "Landingpage", surcharge: "" },
    ],
    next: "Weiter",
    demoTitle: "Öffnet die Live-Demo auf demo.flinkform.de",
    footer: [
      "Spam-Schutz aktiv: ohne reCAPTCHA",
      "Frontend-JS unter 15 KB",
      "Erbt dein Theme-Design",
    ],
  },
  en: {
    urlBar: "your-website.com/inquiry",
    stepOf: "Step 1 of 3",
    stepLabel: "Project",
    projectLegend: "What would you like to request?",
    projectOptions: [
      { label: "Website", surcharge: "" },
      { label: "Online store", surcharge: "+ €400" },
      { label: "Landing page", surcharge: "" },
    ],
    next: "Next",
    demoTitle: "Opens the live demo at demo.flinkform.de",
    footer: [
      "Spam protection active: no reCAPTCHA",
      "Frontend JS under 15 KB",
      "Inherits your theme design",
    ],
  },
} as const;

export default function HeroFormDemo({ locale = "de" }: { locale?: Locale }) {
  const t = STRINGS[locale];
  const [project, setProject] = useState<string>("");

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

      <div className="p-6 sm:p-8">
        {/* Fortschritt */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-ink-muted">
            <span>{t.stepOf}</span>
            <span>{t.stepLabel}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-line">
            <div className="h-full w-1/3 rounded-full bg-gradient-brand-h" />
          </div>
        </div>

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
                    onChange={() => setProject(option.label)}
                    className="h-4 w-4 accent-brand-violet"
                  />
                  {option.label}
                </span>
                {option.surcharge && (
                  <span className="text-xs text-ink-muted">{option.surcharge}</span>
                )}
              </label>
            ))}
          </div>

          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener"
            title={t.demoTitle}
            className="mt-5 block w-full rounded-xl bg-ink py-3 text-center text-[0.95rem] font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            {t.next}
          </a>
        </fieldset>
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
