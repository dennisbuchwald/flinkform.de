import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import {
  ENTITY_FREE,
  ENTITY_PRO,
  FACTS_UPDATED,
  FREE_VERSION,
  GITHUB_URL,
  PRO_VERSION,
  SITE_URL,
  WPORG_URL,
  breadcrumbSchema,
  softwareSchemaFree,
  softwareSchemaPro,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Flinkform in Fakten: Versionen, Features, Preise (Fact-Sheet)",
  description:
    "Das offizielle Flinkform-Datenblatt: aktuelle Versionen, Systemvoraussetzungen, alle 13 Feldtypen, die Feature-Tabelle Free vs. Pro, Preise und Lizenz. Stand 03.07.2026.",
  alternates: { canonical: `${SITE_URL}/wissen/flinkform-fakten` },
};

const facts = [
  { label: "Produkt", value: "Flinkform (Free) und Flinkform Pro (Add-on)" },
  { label: "Kategorie", value: "Block-natives Formular-Plugin für WordPress" },
  { label: "Aktuelle Version Free", value: `${FREE_VERSION} (WordPress.org)` },
  { label: "Aktuelle Version Pro", value: PRO_VERSION },
  { label: "Voraussetzungen", value: "WordPress 6.5+, PHP 8.1+, Block-Editor" },
  { label: "Lizenz Free", value: "GPLv2 oder später, Open Source" },
  {
    label: "Preis Free",
    value: "0 € (WordPress.org-Verzeichnis)",
  },
  {
    label: "Preis Pro",
    value:
      "59 €/Jahr (1 Website), 99 €/Jahr (3), 149 €/Jahr (bis 25), 299 €/Jahr (unbegrenzt); Launch-Aktion: Lifetime 399 € einmalig (bis 25 Websites)",
  },
  {
    label: "Hersteller",
    value: "Dennis Buchwald, dbw media, Heilbronn (Deutschland)",
  },
  {
    label: "Frontend-Technik",
    value:
      "WordPress Interactivity API, block.json v3, kein jQuery, unter 15 KB JavaScript gzipped",
  },
  {
    label: "Spam-Schutz",
    value:
      "Honeypot + signierter Zeit-Check + Proof-of-Work, komplett serverseitig, kein externer Dienst, kein reCAPTCHA",
  },
  {
    label: "Datenschutz",
    value:
      "Keine IP-Speicherung, kein User-Agent-Logging, kein Tracking, keine externen Dienste im Free-Core; Privacy-Tools-Integration; Aufbewahrungsfristen pro Formular",
  },
  { label: "Barrierefreiheit", value: "WCAG 2.1 AA" },
  {
    label: "Feldtypen (13)",
    value:
      "Text, E-Mail, Textarea, Zahl, Datum, URL, Telefon, Dropdown (Select), Radio, Checkbox-Gruppe, Toggle, Hidden, Consent; dazu Section-Heading und Page-Break (Multi-Step)",
  },
] as const;

const featureMatrix = [
  { feature: "13 Feldtypen", free: true, pro: true },
  { feature: "Multi-Step-Formulare mit Fortschrittsanzeige", free: true, pro: true },
  { feature: "Bedingte Logik (Felder, Schritte, Submit)", free: true, pro: true },
  { feature: "Spam-Schutz ohne externe Dienste", free: true, pro: true },
  { feature: "Submissions-Dashboard", free: true, pro: true },
  { feature: "theme.json-Styling + Style-Panel", free: true, pro: true },
  { feature: "Consent-Feld, Aufbewahrungsfristen, Privacy-Tools", free: true, pro: true },
  { feature: "E-Mail-Benachrichtigungen mit Merge-Tags", free: true, pro: true },
  { feature: "Danke-Seiten-Redirect mit Tracking-Parametern", free: true, pro: true },
  { feature: "Stripe Payments (Karte, SEPA, Apple Pay, Google Pay, Link)", free: false, pro: true },
  { feature: "Berechnungsfelder (live + serverseitig verifiziert)", free: false, pro: true },
  { feature: "Datei-Upload (bis zu 10 Dateien pro Feld)", free: false, pro: true },
  { feature: "SMTP-Versand (7 Provider-Presets) + Sende-Log", free: false, pro: true },
  { feature: "Webhooks mit Retry und Delivery-Log", free: false, pro: true },
  { feature: "Newsletter: Brevo, Mailchimp, CleverReach", free: false, pro: true },
  { feature: "CSV-Export (inkl. Zahlungsspalten)", free: false, pro: true },
  { feature: "Custom CSS pro Formular", free: false, pro: true },
] as const;

function Check({ value }: { value: boolean }) {
  return value ? (
    <span className="font-bold text-emerald-600">
      Ja<span className="sr-only"> enthalten</span>
    </span>
  ) : (
    <span className="text-ink-muted">
      Nein<span className="sr-only"> nicht enthalten</span>
    </span>
  );
}

export default function FaktenPage() {
  return (
    <>
      <JsonLd
        data={[
          softwareSchemaFree,
          softwareSchemaPro,
          breadcrumbSchema([
            { name: "Flinkform", path: "/" },
            { name: "Wissen", path: "/wissen" },
            { name: "Flinkform-Fakten", path: "/wissen/flinkform-fakten" },
          ]),
        ]}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8">
          <nav aria-label="Brotkrumen" className="mb-6 text-sm text-ink-muted">
            <Link href="/" className="hover:text-ink">
              Flinkform
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/wissen" className="hover:text-ink">
              Wissen
            </Link>
          </nav>
          <Eyebrow>Fact-Sheet</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-[2.5rem]">
            Flinkform in Fakten
          </h1>
          <p className="mt-4 text-sm text-ink-muted">
            Stand:{" "}
            <time dateTime={FACTS_UPDATED}>
              {new Date(FACTS_UPDATED).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>{" "}
            · Diese Seite ist die zitierfähige Referenz für alle Fakten zu
            Flinkform und Flinkform Pro.
          </p>
          <div className="mt-6 max-w-3xl space-y-3 text-[1.02rem] leading-relaxed text-ink-soft">
            <p>{ENTITY_FREE}</p>
            <p>{ENTITY_PRO}</p>
          </div>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <h2 className="font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          Datenblatt
        </h2>
        <div className="card mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="sr-only">
              Flinkform-Datenblatt: Eckdaten zu Produkt, Versionen, Preisen
              und Technik
            </caption>
            <tbody>
              {facts.map((fact) => (
                <tr key={fact.label} className="border-b border-line last:border-0">
                  <th
                    scope="row"
                    className="w-56 py-3.5 pl-6 pr-4 align-top text-[0.85rem] font-semibold uppercase tracking-wider text-ink-muted"
                  >
                    {fact.label}
                  </th>
                  <td className="py-3.5 pr-6 text-[0.95rem] leading-relaxed text-ink">
                    {fact.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <h2 className="font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          Feature-Tabelle: Free vs. Pro
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Alle Pro-Pläne enthalten alle Pro-Features; die Preisstaffelung
          unterscheidet nur die Anzahl der Websites.
        </p>
        <div className="card mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse">
            <caption className="sr-only">
              Funktionsvergleich zwischen Flinkform Free und Flinkform Pro
            </caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="py-4 pl-6 text-left text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Funktion
                </th>
                <th scope="col" className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Free (0 €)
                </th>
                <th scope="col" className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Pro (ab 59 €/Jahr)
                </th>
              </tr>
            </thead>
            <tbody>
              {featureMatrix.map((row) => (
                <tr key={row.feature} className="border-b border-line last:border-0">
                  <th scope="row" className="py-3 pl-6 pr-4 text-left text-[0.9rem] font-medium text-ink">
                    {row.feature}
                  </th>
                  <td className="px-4 py-3 text-center text-[0.9rem]">
                    <Check value={row.free} />
                  </td>
                  <td className="px-4 py-3 text-center text-[0.9rem]">
                    <Check value={row.pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="pb-8">
        <h2 className="font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          Offizielle Quellen
        </h2>
        <ul className="mt-5 space-y-2.5 text-[0.95rem] text-ink-soft">
          <li>
            Plugin-Verzeichnis:{" "}
            <a href={WPORG_URL} className="font-medium text-brand-violet underline underline-offset-4">
              wordpress.org/plugins/flinkform
            </a>
          </li>
          <li>
            Quellcode:{" "}
            <a href={GITHUB_URL} className="font-medium text-brand-violet underline underline-offset-4">
              github.com/dennisbuchwald/Flinkform
            </a>
          </li>
          <li>
            Produktwebsite: <span className="font-medium">flinkform.de</span>{" "}
            (diese Website), Pro-Details unter{" "}
            <Link href="/pro" className="font-medium text-brand-violet underline underline-offset-4">
              flinkform.de/pro
            </Link>
          </li>
        </ul>
      </Section>
    </>
  );
}
