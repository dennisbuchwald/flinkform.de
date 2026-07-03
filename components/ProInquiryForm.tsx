"use client";

import type { FormEvent } from "react";
import { CONTACT_MAIL } from "@/lib/site";

/**
 * Vormerk-Formular bis der Freemius-Checkout live ist: baut eine mailto-URL,
 * es werden keine Daten an einen Server übertragen.
 */
export default function ProInquiryForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const website = String(data.get("website") ?? "");
    const usecase = String(data.get("usecase") ?? "");
    const plan = String(data.get("plan") ?? "");
    const subject = encodeURIComponent(`Flinkform Pro Anfrage - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nWebsite: ${website}\nEinsatzzweck: ${usecase}\nInteressanter Plan: ${plan}`,
    );
    window.location.href = `mailto:${CONTACT_MAIL}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted/70 focus:border-brand-violet focus:outline-none focus:ring-2 focus:ring-brand-violet/25";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pro-name" className="mb-1.5 block text-sm font-semibold">
            Name / Firma
          </label>
          <input
            id="pro-name"
            name="name"
            type="text"
            required
            placeholder="Max Mustermann"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="pro-website" className="mb-1.5 block text-sm font-semibold">
            Website
          </label>
          <input
            id="pro-website"
            name="website"
            type="text"
            placeholder="www.deine-website.de"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="pro-usecase" className="mb-1.5 block text-sm font-semibold">
            Wofür brauchst du Pro?
          </label>
          <select id="pro-usecase" name="usecase" required className={inputClass}>
            <option value="">Bitte wählen</option>
            <option>Zahlungen (Stripe, SEPA, Wallets)</option>
            <option>Berechnungsfelder / Angebotsrechner</option>
            <option>Webhooks / CRM-Anbindung</option>
            <option>SMTP / Mailversand</option>
            <option>Datei-Upload</option>
            <option>Newsletter-Integration</option>
            <option>Mehrere Features</option>
            <option>Das komplette Paket</option>
          </select>
        </div>
        <div>
          <label htmlFor="pro-plan" className="mb-1.5 block text-sm font-semibold">
            Welcher Plan interessiert dich?
          </label>
          <select id="pro-plan" name="plan" className={inputClass}>
            <option value="">Noch offen</option>
            <option>Single (59 €/Jahr)</option>
            <option>Studio (99 €/Jahr)</option>
            <option>Agency (149 €/Jahr)</option>
            <option>Unlimited (299 €/Jahr)</option>
            <option>Lifetime (399 € einmalig)</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-gradient-pro px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
      >
        Anfrage absenden
      </button>
      <p className="text-xs text-ink-muted">
        Öffnet dein Mail-Programm mit einer vorbereiteten Nachricht. Es werden
        keine Daten über diese Website übertragen.
      </p>
    </form>
  );
}
