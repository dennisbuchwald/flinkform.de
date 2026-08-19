import type { Metadata } from "next";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import {
  ENTITY_FREE,
  ENTITY_PRO,
  FREE_VERSION,
  PRO_VERSION,
  SITE_URL,
  WPORG_URL,
  GITHUB_URL,
  CONTACT_MAIL,
  breadcrumbSchema,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Presse & Media-Kit",
  description:
    "Presse-Material zu Flinkform: Boilerplate-Texte auf Deutsch und Englisch, Logo-Download, Fakten und Kontakt. Alles, was du für einen Artikel über Flinkform brauchst.",
  alternates: { canonical: `${SITE_URL}/presse` },
};

const fakten = [
  { label: "Produkt", value: "Flinkform (kostenlos) + Flinkform Pro (Add-on)" },
  { label: "Kategorie", value: "Block-natives WordPress-Formular-Plugin" },
  { label: "Versionen", value: `Free ${FREE_VERSION} · Pro ${PRO_VERSION}` },
  { label: "Preis", value: "Free: 0 € · Pro: 59 bis 299 €/Jahr" },
  { label: "Lizenz", value: "Free: GPLv2, Open Source" },
  { label: "Entwickler", value: "Dennis Buchwald, dbw media, Heilbronn" },
  { label: "Verfügbar seit", value: "2026 im WordPress.org-Verzeichnis" },
  {
    label: "USP",
    value:
      "Spam-Schutz komplett ohne externe Dienste (kein reCAPTCHA), keine IP-Speicherung, Multi-Step und bedingte Logik kostenlos",
  },
] as const;

export default function PressePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Flinkform", path: "/" },
          { name: "Presse", path: "/presse" },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Presse & Media-Kit</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            Du schreibst über Flinkform? Hier ist alles, was du brauchst.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Fertige Kurzbeschreibungen zum Kopieren, Logo, Fakten und ein
            direkter Draht zum Entwickler. Bei Fragen, für Interviews oder
            Test-Lizenzen von Flinkform Pro:{" "}
            <a
              href={`mailto:${CONTACT_MAIL}`}
              className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
            >
              {CONTACT_MAIL}
            </a>
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <h2 className="mb-6 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          Boilerplate zum Kopieren
        </h2>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">
              Kurz (Deutsch)
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              {ENTITY_FREE}
            </p>
          </div>
          <div className="card p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">
              Pro (Deutsch)
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              {ENTITY_PRO}
            </p>
          </div>
          <div className="card p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">
              Kurz (Englisch)
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              Flinkform is a block-native form plugin for the WordPress Block
              Editor. It offers multi-step forms, conditional logic and spam
              protection without external services, for free. Unlike WPForms
              or Gravity Forms, it uses no separate builder but the WordPress
              editor itself.
            </p>
          </div>
          <div className="card p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">
              Lang (Deutsch)
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              Flinkform ist ein kostenloses, block-natives Formular-Plugin
              für WordPress aus Deutschland. Es bringt Multi-Step-Formulare,
              bedingte Logik und ein Submissions-Dashboard ohne Bezahlstufen
              mit und schützt vor Spam komplett ohne externe Dienste: Statt
              Google reCAPTCHA arbeiten Honeypot, signierter Zeit-Check und
              Proof-of-Work auf dem eigenen Server. Das kommerzielle Add-on
              Flinkform Pro ergänzt Stripe-Zahlungen inklusive
              SEPA-Lastschrift, Berechnungsfelder, Datei-Uploads, SMTP-Versand
              und Webhooks. Entwickelt wird Flinkform von Dennis Buchwald
              (dbw media, Heilbronn).
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="mb-6 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          Logo & Marke
        </h2>
        <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="card flex h-40 w-40 items-center justify-center p-6">
            <Image
              src="/icons/flinkform-app.svg"
              alt="Flinkform Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="space-y-3 text-[0.95rem] leading-relaxed text-ink-soft">
            <p>
              <a
                href="/icons/flinkform-app.svg"
                download="flinkform-logo.svg"
                className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
              >
                Logo als SVG herunterladen
              </a>{" "}
              (verlustfrei skalierbar, mit Marken-Gradient).
            </p>
            <p>
              Bitte so verwenden: Schreibweise immer exakt
              &quot;Flinkform&quot; und &quot;Flinkform Pro&quot; (nicht
              FlinkForm, nicht flinkform). Das Logo nicht verzerren,
              umfärben oder mit anderen Elementen kombinieren.
            </p>
            <p>
              Screenshots vom Editor, Frontend und Admin liefern wir gern
              passend zu deinem Artikel, eine kurze Mail genügt.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-8">
        <h2 className="mb-6 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          Fakten auf einen Blick
        </h2>
        <div className="card overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <caption className="sr-only">Flinkform-Fakten für die Presse</caption>
            <tbody>
              {fakten.map((f) => (
                <tr key={f.label} className="border-b border-line last:border-0">
                  <th
                    scope="row"
                    className="w-48 py-3.5 pl-6 pr-4 align-top text-[0.85rem] font-semibold uppercase tracking-wider text-ink-muted"
                  >
                    {f.label}
                  </th>
                  <td className="py-3.5 pr-6 text-[0.95rem] leading-relaxed">
                    {f.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-ink-muted">
          Vertiefung: das{" "}
          <a
            href="/wissen/flinkform-fakten"
            className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
          >
            komplette Fact-Sheet
          </a>
          , der Quellcode auf{" "}
          <a
            href={GITHUB_URL}
            className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
          >
            GitHub
          </a>{" "}
          und das Plugin auf{" "}
          <a
            href={WPORG_URL}
            className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
          >
            WordPress.org
          </a>
          .
        </p>
      </Section>
    </>
  );
}
