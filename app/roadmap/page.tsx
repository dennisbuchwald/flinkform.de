import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import { GITHUB_URL, SITE_URL, breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roadmap & Changelog: Woran Flinkform gerade arbeitet",
  description:
    "Die öffentliche Flinkform-Roadmap: was zuletzt erschienen ist, woran gerade gearbeitet wird und was als Nächstes kommt. Build in public, ohne Termin-Versprechen.",
  alternates: { canonical: `${SITE_URL}/roadmap` },
};

const inArbeit = [
  {
    title: "Zahlbetrag aus Berechnungsfeldern",
    desc: "Die berechnete Summe eines Angebotsrechners direkt als Stripe-Zahlbetrag verwenden, serverseitig aus der Formel abgeleitet und manipulationssicher.",
    bereich: "Pro",
  },
  {
    title: "Weitere Zahlungsarten",
    desc: "Redirect-Zahlarten über das Stripe Payment Element, damit auch Methoden mit Seitenwechsel sauber durchlaufen.",
    bereich: "Pro",
  },
  {
    title: "PDF-Eingangsbestätigung",
    desc: "Automatische PDF-Quittung an der Bestätigungsmail, für Buchungen und Zahlungen mit Beleg-Pflicht.",
    bereich: "Pro",
  },
];

const geplant = [
  {
    title: "Entry-Management-Tiefe",
    desc: "Status pro Einsendung (neu, in Bearbeitung, erledigt), interne Notizen und Ungelesen-Badge im Admin-Menü.",
    bereich: "Pro",
  },
  {
    title: "Optionale CAPTCHA-Anbindung",
    desc: "Für Betreiber, die zusätzlich einen externen Dienst einsetzen wollen. Der serverseitige Spam-Schutz bleibt der Standard und braucht weiterhin keinen.",
    bereich: "Pro",
  },
  {
    title: "SMTP OAuth2",
    desc: "Google Workspace und Microsoft 365 mit moderner Authentifizierung statt App-Passwörtern.",
    bereich: "Pro",
  },
  {
    title: "Weitere Newsletter-Anbieter",
    desc: "MailerLite und tiefere Feld-Zuordnung (Custom Fields, Tags, Gruppen) für die bestehenden Integrationen.",
    bereich: "Pro",
  },
];

const changelog = [
  {
    version: "Free 1.6.0",
    date: "2026-07",
    items: [
      "Neuer Feldtyp: Adressfeld mit Straße, PLZ und Ort in kompaktem Grid-Layout. Optional: Adresszusatz und Land. Jedes Unterfeld wird separat gespeichert (saubere CSV-Spalten)",
      "Bedingte Logik: neue Datums-Operatoren \"ist vor (Datum)\" und \"ist am oder nach (Datum)\" für Vergleiche gegen einen festen Stichtag im Format JJJJ-MM-TT",
      "Floating Labels: Hintergrundfarbe der Label-Kerbe wird automatisch vom umgebenden Container erkannt, funktioniert jetzt auf jeder Hintergrundfarbe ohne manuelle Einstellung",
      "Bugfix: Bedingte Logik blendet Felder jetzt korrekt aus (CSS-Spezifitätsproblem behoben)",
    ],
  },
  {
    version: "Free 1.3.0",
    date: "2026-07-03",
    items: [
      "Doppelklick-Schutz: Doppelklick, Zurück-Taste oder parallele Requests erzeugen keine doppelten Einsendungen, Mails oder Zahlungen mehr",
      "Neuer Erweiterungspunkt für Add-ons zur Darstellung von Feldwerten im Admin (Flinkform Pro zeigt damit Upload-Dateien als Download-Links)",
    ],
  },
  {
    version: "Pro 1.2.0",
    date: "2026-07",
    items: [
      "Stripe Payment Element: Apple Pay, Google Pay und Link zusätzlich zu Kreditkarte und SEPA-Lastschrift",
      "SEPA-Lastschrift mit automatischer Bestätigung per Stripe-Webhook",
      "Multi-Datei-Upload: bis zu 10 Dateien pro Feld mit Größen-Check vor dem Absenden",
      "Berechnungsfelder: Live-Vorschau im Browser, serverseitig sicher nachgerechnet",
      "CSV-Export um Zahlungsspalten erweitert (Status, Betrag, Währung)",
    ],
  },
  {
    version: "Free 1.2.x",
    date: "2026-06",
    items: [
      "Neu gestaltete Fehlermeldungen mit Inline-Icons und sanfter Animation",
      "Seiten mit Formular werden vom Full-Page-Caching ausgenommen (verhindert abgelaufene Spam-Tokens)",
    ],
  },
  {
    version: "Free 1.1.0",
    date: "2026-06",
    items: [
      "Consent-Feld wird serverseitig zuverlässig als Pflichtfeld erzwungen",
      "Datenschutz-Link als Platzhalter direkt im Einwilligungstext",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Flinkform", path: "/" },
          { name: "Roadmap", path: "/roadmap" },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Roadmap & Changelog</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            Woran wir gerade bauen
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Flinkform wird öffentlich weiterentwickelt. Hier siehst du, was
            zuletzt erschienen ist und was als Nächstes kommt. Ehrlicherweise:
            ohne Datums-Versprechen, dafür mit echtem Fortschritt. Wünsche
            und Bug-Reports gehören auf{" "}
            <a
              href={GITHUB_URL}
              className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <h2 className="mb-6 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          In Arbeit
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {inArbeit.map((item) => (
            <div key={item.title} className="card p-6">
              <span className="inline-block rounded-full bg-gradient-pro px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                {item.bereich}
              </span>
              <h3 className="mt-3 font-bold">{item.title}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-soft">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-14 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          Geplant
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {geplant.map((item) => (
            <div key={item.title} className="card p-6">
              <span className="inline-block rounded-full bg-line/60 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink-soft">
                {item.bereich}
              </span>
              <h3 className="mt-3 font-bold">{item.title}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-soft">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-8">
        <h2 className="mb-6 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          Zuletzt erschienen
        </h2>
        <div className="space-y-6">
          {changelog.map((release) => (
            <div key={release.version} className="card p-7">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-(family-name:--font-display) text-lg font-bold">
                  {release.version}
                </h3>
                <span className="text-sm text-ink-muted">{release.date}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {release.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.92rem] leading-relaxed text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          Das vollständige Changelog aller Versionen steht im{" "}
          <a
            href="https://wordpress.org/plugins/flinkform/#developers"
            className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
          >
            WordPress.org-Verzeichnis
          </a>
          .
        </p>
      </Section>
    </>
  );
}
