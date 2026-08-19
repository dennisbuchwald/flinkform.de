"use client";

import type { FormEvent } from "react";
import { CONTACT_MAIL } from "@/lib/site";
import type { Locale } from "@/lib/i18n/routes";

/**
 * Vormerk-Formular bis der Freemius-Checkout live ist: baut eine mailto-URL,
 * es werden keine Daten an einen Server übertragen.
 */

const STRINGS = {
  de: {
    nameLabel: "Name / Firma",
    namePlaceholder: "Max Mustermann",
    websiteLabel: "Website",
    websitePlaceholder: "www.deine-website.de",
    usecaseLabel: "Wofür brauchst du Pro?",
    usecasePlease: "Bitte wählen",
    usecaseOptions: [
      "Zahlungen (Stripe, SEPA, Wallets)",
      "Berechnungsfelder / Angebotsrechner",
      "Webhooks / CRM-Anbindung",
      "SMTP / Mailversand",
      "Datei-Upload",
      "Newsletter-Integration",
      "Mehrere Features",
      "Das komplette Paket",
    ],
    planLabel: "Welcher Plan interessiert dich?",
    planOpen: "Noch offen",
    planOptions: [
      "Single (59 €/Jahr)",
      "Studio (99 €/Jahr)",
      "Agency (149 €/Jahr)",
      "Unlimited (299 €/Jahr)",
      "Lifetime (399 € einmalig)",
    ],
    submit: "Anfrage absenden",
    note: "Öffnet dein Mail-Programm mit einer vorbereiteten Nachricht. Es werden keine Daten über diese Website übertragen.",
    subject: (name: string) => `Flinkform Pro Anfrage - ${name}`,
    body: (name: string, website: string, usecase: string, plan: string) =>
      `Name: ${name}\nWebsite: ${website}\nEinsatzzweck: ${usecase}\nInteressanter Plan: ${plan}`,
  },
  en: {
    nameLabel: "Name / Company",
    namePlaceholder: "Jane Smith",
    websiteLabel: "Website",
    websitePlaceholder: "www.your-website.com",
    usecaseLabel: "What do you need Pro for?",
    usecasePlease: "Please choose",
    usecaseOptions: [
      "Payments (Stripe, SEPA, wallets)",
      "Calculation fields / quote calculators",
      "Webhooks / CRM integration",
      "SMTP / email delivery",
      "File upload",
      "Newsletter integration",
      "Several features",
      "The complete package",
    ],
    planLabel: "Which plan are you interested in?",
    planOpen: "Not sure yet",
    planOptions: [
      "Single (€59/yr)",
      "Studio (€99/yr)",
      "Agency (€149/yr)",
      "Unlimited (€299/yr)",
      "Lifetime (€399 one-time)",
    ],
    submit: "Send inquiry",
    note: "Opens your email app with a pre-filled message. No data is transmitted through this website.",
    subject: (name: string) => `Flinkform Pro inquiry - ${name}`,
    body: (name: string, website: string, usecase: string, plan: string) =>
      `Name: ${name}\nWebsite: ${website}\nUse case: ${usecase}\nPlan of interest: ${plan}`,
  },
} as const;

export default function ProInquiryForm({ locale = "de" }: { locale?: Locale }) {
  const t = STRINGS[locale];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const website = String(data.get("website") ?? "");
    const usecase = String(data.get("usecase") ?? "");
    const plan = String(data.get("plan") ?? "");
    const subject = encodeURIComponent(t.subject(name));
    const body = encodeURIComponent(t.body(name, website, usecase, plan));
    window.location.href = `mailto:${CONTACT_MAIL}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted/70 focus:border-brand-violet focus:outline-none focus:ring-2 focus:ring-brand-violet/25";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pro-name" className="mb-1.5 block text-sm font-semibold">
            {t.nameLabel}
          </label>
          <input
            id="pro-name"
            name="name"
            type="text"
            required
            placeholder={t.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="pro-website" className="mb-1.5 block text-sm font-semibold">
            {t.websiteLabel}
          </label>
          <input
            id="pro-website"
            name="website"
            type="text"
            placeholder={t.websitePlaceholder}
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pro-usecase" className="mb-1.5 block text-sm font-semibold">
            {t.usecaseLabel}
          </label>
          <select id="pro-usecase" name="usecase" required className={inputClass}>
            <option value="">{t.usecasePlease}</option>
            {t.usecaseOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pro-plan" className="mb-1.5 block text-sm font-semibold">
            {t.planLabel}
          </label>
          <select id="pro-plan" name="plan" className={inputClass}>
            <option value="">{t.planOpen}</option>
            {t.planOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-gradient-pro px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
      >
        {t.submit}
      </button>
      <p className="text-xs text-ink-muted">{t.note}</p>
    </form>
  );
}
