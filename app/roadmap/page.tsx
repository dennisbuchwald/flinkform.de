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

/**
 * Kuratierte Auswahl, keine Vollspiegelung: reine Wartungs-Patches bleiben
 * draußen, das vollständige Changelog steht unter der Liste verlinkt auf
 * WordPress.org. Regel für die Einträge: `version` nennt immer den echten
 * Bereich, in dem die aufgeführten Punkte erschienen sind. Nichts unter einer
 * Versionsnummer bündeln, zu der es nicht gehört.
 */
const changelog = [
  {
    bereich: "Free",
    version: "1.8.0",
    date: "27.07.2026",
    items: [
      "Absender pro Formular: Name und E-Mail-Adresse lassen sich jetzt direkt einstellen. Beide Mails kommen dann von deiner eigenen Adresse statt von \"wordpress@deine-domain\". Ganz ohne SMTP-Plugin, weil der Absender eine wp_mail-Einstellung ist und unabhängig davon greift, wie deine Seite Mails verschickt",
      "Antwort-an für die Bestätigungsmail an den Absender. Bisher hatte nur die Admin-Benachrichtigung eins. Damit kann das Formular von der Website-Adresse senden, während Antworten dort landen, wo du sie tatsächlich liest",
      "Der Editor warnt, wenn die Absenderadresse auf einer anderen Domain liegt als die Website. Der eigene Server darf nicht für fremde Domains senden, solche Mails scheitern an SPF und landen im Spam",
    ],
  },
  {
    bereich: "Free",
    version: "1.7.2",
    date: "27.07.2026",
    items: [
      "Die Spam-Frage (\"Was ergibt 2 + 2?\") blitzt beim harten Neuladen nicht mehr auf. Sie ist der Fallback für Besucher ohne JavaScript und stand bisher so lange auf dem Schirm, bis die Rechenaufgabe im Hintergrund gelöst war. Jetzt ist sie von Anfang an ausgeblendet, wo JavaScript läuft, und kommt zurück, sobald der Löser nicht durchkommt oder ein langsames Gerät zu lange braucht",
      "Gleichmäßige Abstände bei Floating Labels. Der Platz für die angehobene Beschriftung hing bisher am einzelnen Textfeld, weshalb Zeilen je nach Nachbarblock unterschiedlich weit auseinanderlagen. Er sitzt jetzt am Zeilenabstand des Formulars und gilt für jede Zeile gleich",
      "Kein Springen mehr beim Laden: Dieser Platz ändert seine Größe nicht mehr, wenn die Farberkennung der Label-Kerbe greift",
    ],
  },
  {
    bereich: "Free",
    version: "1.7.1",
    date: "27.07.2026",
    items: [
      "Bedingte Felder und Hinweise blitzen beim Laden nicht mehr kurz auf. Bisher wurde alles zunächst sichtbar ausgeliefert und erst ausgeblendet, sobald das JavaScript lief. Der Server ermittelt den Anfangszustand jetzt selbst und liefert ausgeblendete Blöcke von vornherein ausgeblendet aus",
    ],
  },
  {
    bereich: "Free",
    version: "1.7.0",
    date: "27.07.2026",
    items: [
      "Neuer Block: Hinweis. Eine hervorgehobene Box zwischen den Feldern, in vier Typen (Info, Erfolg, Warnung, Wichtig) mit passendem Icon. Sie übermittelt nichts und taucht deshalb weder in den Einsendungen noch im CSV-Export auf",
      "Die eigentliche Stärke ist die bedingte Logik: Der Hinweis erscheint nur, wenn er zutrifft. Etwa eine Anfahrtspauschale, die ab einer bestimmten Entfernung gilt, oder eine Erklärung, die an genau einer Antwort hängt",
      "Text mit fett, kursiv und Links. Die Farben folgen dem Theme, wo es welche vorgibt",
    ],
  },
  {
    bereich: "Free",
    version: "1.6.4",
    date: "27.07.2026",
    items: [
      "Floating Labels: hinter der angehobenen Beschriftung erschien auf jeder Seite, deren Hintergrund nicht rein weiß ist, ein weißer Kasten. Die Kerbe wird jetzt nur noch gezeichnet, wenn die Flächenfarbe sicher erkannt wurde, sonst sitzt die Beschriftung einfach oberhalb der Rahmenlinie",
      "Die Farberkennung beherrscht jetzt auch halbtransparente Flächen, verrechnet sie mit dem Untergrund und läuft bei Fenstergröße und Dark-Mode-Wechsel erneut. Bei Verläufen und Hintergrundbildern verzichtet sie bewusst auf die Kerbe, statt eine Farbe zu raten, die es dort gar nicht gibt",
      "Der Editor nutzt dieselbe Erkennung wie das Frontend, Vorschau und veröffentlichte Seite können damit nicht mehr auseinanderlaufen",
    ],
  },
  {
    bereich: "Free",
    version: "1.6.3",
    date: "27.07.2026",
    items: [
      "Deutsche Übersetzung wiederhergestellt: Version 1.6.1 hatte die Sprachdateien aus einer unvollständigen Vorlage neu erzeugt und dabei 243 bereits übersetzte Texte verloren. Deutsche Installationen sahen große Teile der Oberfläche wieder auf Englisch. Jetzt sind 387 von 392 Texten übersetzt (der Rest sind URLs)",
      "Adressfeld: bei der Label-Position \"Floating\" lagen Beschriftung und Platzhalter übereinander. Die Unterfelder folgen jetzt der Label-Einstellung des Formulars, genau wie jedes andere Textfeld",
      "Der rote Rahmen an fehlerhaften Feldern erscheint wieder. Ein CSS-Selektor traf ins Leere, dadurch war die Fehlermarkierung am Eingabefeld unsichtbar (die Fehlermeldung darunter war immer da)",
      "Bedingte Logik kann sich jetzt auf Adressfelder beziehen. Die Regel-Auswahl bietet die einzelnen Unterfelder an (Straße, PLZ, Ort) statt des Sammelfelds, gegen das eine Regel nie greifen konnte",
    ],
  },
  {
    bereich: "Free",
    version: "1.6.0 - 1.6.2",
    date: "24.07.2026",
    items: [
      "Neuer Feldtyp: Adressfeld mit Straße, PLZ und Ort in kompaktem Grid-Layout. Optional Adresszusatz und Land. Jedes Unterfeld wird separat gespeichert, das ergibt saubere CSV-Spalten",
      "Die Unterfelder des Adressfelds übernehmen alle Formular-Einstellungen: Feldstil, Label-Position, Abstände und Fehlerzustände",
    ],
  },
  {
    bereich: "Free",
    version: "1.5.2 - 1.5.3",
    date: "24.07.2026",
    items: [
      "Bedingte Logik: neue Datums-Operatoren \"ist vor (Datum)\" und \"ist am oder nach (Datum)\" für Vergleiche gegen einen festen Stichtag im Format JJJJ-MM-TT",
      "Floating Labels: die Hintergrundfarbe der Label-Kerbe wird automatisch vom umgebenden Container erkannt und passt damit auf jeder Fläche, ohne manuelle Einstellung",
      "Bugfix: bedingte Logik blendet Felder jetzt korrekt aus (CSS-Spezifitätsproblem)",
    ],
  },
  {
    bereich: "Free",
    version: "1.5.0 - 1.5.1",
    date: "17.07.2026",
    items: [
      "Das Radio-Feld kann seine Auswahl als anklickbare Buttons statt als Liste darstellen. Die aktive Option füllt sich mit der Primärfarbe des Formulars. Technisch bleiben es echte Radio-Inputs, Tastatur und Screenreader funktionieren unverändert",
      "Button-Form wählbar: Pille, abgerundet oder eckig",
    ],
  },
  {
    bereich: "Free",
    version: "1.4.0 - 1.4.4",
    date: "14.07.2026",
    items: [
      "Formulare in Popups und Modals senden jetzt ohne Seitenreload. Erfolgsmeldung und Validierungsfehler erscheinen direkt im Popup, es bleibt offen und die Besucherin sieht das Ergebnis. Alle serverseitigen Schutzmechanismen laufen unverändert mit",
      "Wichtiger Fix: Formulare außerhalb des Seiteninhalts, etwa im Footer, in einem Header-Template-Teil oder in einem seitenweiten Popup, wurden beim Absenden still verworfen. Sie werden jetzt zuverlässig gefunden und gespeichert",
      "Die Gültigkeit des Spam-Tokens beträgt 30 Minuten statt 5. Wer eine lange Seite liest oder ein Popup erst später öffnet, wird nicht mehr grundlos abgewiesen",
    ],
  },
  {
    bereich: "Free",
    version: "1.3.0 - 1.3.1",
    date: "03.07.2026",
    items: [
      "Doppelklick-Schutz: Doppelklick, Zurück-Taste oder parallele Requests erzeugen keine doppelten Einsendungen, Mails oder Zahlungen mehr",
      "Neuer Erweiterungspunkt für Add-ons zur Darstellung von Feldwerten im Admin (Flinkform Pro zeigt damit Upload-Dateien als Download-Links)",
    ],
  },
  {
    bereich: "Pro",
    version: "1.2.0 - 1.2.1",
    date: "05.07.2026",
    items: [
      "Stripe Payment Element: Apple Pay, Google Pay und Link zusätzlich zu Kreditkarte und SEPA-Lastschrift",
      "SEPA-Lastschrift mit automatischer Bestätigung per Stripe-Webhook",
      "Multi-Datei-Upload: bis zu 10 Dateien pro Feld mit Größen-Check vor dem Absenden",
      "Berechnungsfelder: Live-Vorschau im Browser, serverseitig sicher nachgerechnet",
      "CSV-Export um Zahlungsspalten erweitert (Status, Betrag, Währung)",
    ],
  },
  {
    bereich: "Free",
    version: "1.1.0 - 1.2.1",
    date: "30.06.2026",
    items: [
      "Consent-Feld wird serverseitig zuverlässig als Pflichtfeld erzwungen",
      "Datenschutz-Link als Platzhalter direkt im Einwilligungstext",
      "Neu gestaltete Fehlermeldungen mit Inline-Icons und sanfter Animation",
      "Seiten mit Formular werden vom Full-Page-Caching ausgenommen, das verhindert abgelaufene Spam-Tokens",
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
            <div
              key={`${release.bereich} ${release.version}`}
              className="card p-7"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-(family-name:--font-display) text-lg font-bold">
                  <span
                    className={`mr-2.5 rounded-full px-2.5 py-1 align-middle text-xs font-semibold uppercase tracking-wide ${
                      release.bereich === "Pro"
                        ? "bg-gradient-brand text-white"
                        : "bg-ink/5 text-ink-soft"
                    }`}
                  >
                    {release.bereich}
                  </span>
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
