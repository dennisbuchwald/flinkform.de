import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Website flinkform.de.",
  alternates: { canonical: `${SITE_URL}/impressum` },
  robots: { index: false },
};

/**
 * PLATZHALTER: Dennis trägt die vollständigen Impressums-Daten ein
 * (Rechtsform, Straße, USt-IdNr. etc.), bevor die Seite live geht.
 */
export default function ImpressumPage() {
  return (
    <Section>
      <h1 className="font-(family-name:--font-display) text-3xl font-extrabold tracking-tight">
        Impressum
      </h1>
      <div className="prose-flink mt-8">
        <h2 className="!mt-0">Angaben gemäß § 5 DDG</h2>
        <p>
          <strong>[PLATZHALTER: Vollständiger Name / Firmierung]</strong>
          <br />
          [PLATZHALTER: Straße und Hausnummer]
          <br />
          [PLATZHALTER: PLZ] Heilbronn
          <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: [PLATZHALTER: E-Mail-Adresse]
          <br />
          Telefon: [PLATZHALTER: Telefonnummer]
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          [PLATZHALTER: USt-IdNr. gemäß § 27a UStG oder Hinweis auf
          Kleinunternehmerregelung]
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          [PLATZHALTER: Name, Anschrift wie oben]
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          https://ec.europa.eu/consumers/odr/. Wir sind nicht bereit oder
          verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </Section>
  );
}
