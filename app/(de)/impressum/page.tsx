import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbNode, graph } from "@/lib/schema";
import { Section, Eyebrow } from "@/components/Section";
import { LEGAL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Anbieterangaben zu flinkform.de nach § 5 DDG: dbw media, Inhaber Dennis Buchwald, Oststraße 12, 74072 Heilbronn, mit Kontaktdaten und Umsatzsteuer-Identifikationsnummer.",
  alternates: { canonical: `${SITE_URL}/impressum` },
};

export default function ImpressumPage() {
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbNode([
            { name: "Flinkform", path: "/" },
            { name: "Impressum", path: "/impressum" },
          ]),
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Rechtliches</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            Impressum
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Flinkform ist ein Produkt von {LEGAL.company}, einem
            Einzelunternehmen aus {LEGAL.city}. Hier stehen alle
            Anbieterangaben nach § 5 DDG.
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section className="!py-10">
        <div className="prose-flink">
          <h2 className="!mt-0">Anbieter</h2>
          <p>
            {LEGAL.company}
            <br />
            Inhaber: {LEGAL.owner}
            <br />
            {LEGAL.street}
            <br />
            {LEGAL.postalCode} {LEGAL.city}
            <br />
            {LEGAL.countryName}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={`tel:${LEGAL.phoneHref}`}>{LEGAL.phone}</a>
            <br />
            E-Mail: <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
            <br />
            Website des Unternehmens:{" "}
            <a href={LEGAL.companyUrl}>{LEGAL.companyUrl}</a>
          </p>

          <h2>Umsatzsteuer-Identifikationsnummer</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a
            Umsatzsteuergesetz: {LEGAL.vatId}
          </p>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18
            Abs. 2 MStV: {LEGAL.owner}, Anschrift wie oben.
          </p>

          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/">
              ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse findest du oben unter Kontakt.
          </p>

          <h2>Lizenz und Quellcode</h2>
          <p>
            Flinkform (kostenlose Version) steht unter der GPLv2 oder später.
            Der Quellcode liegt öffentlich auf GitHub. Die Marke Flinkform und
            die Gestaltung dieser Website sind davon nicht erfasst.
          </p>
        </div>
      </Section>
    </>
  );
}
