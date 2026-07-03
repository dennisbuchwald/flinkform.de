import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Form 7 Alternative: Flinkform im ehrlichen Vergleich 2026",
  description:
    "Contact Form 7 ist seit 2026 im Feature Freeze. Flinkform ist die block-native Alternative: Multi-Step, bedingte Logik, Submissions-Dashboard und Spam-Schutz ohne reCAPTCHA, kostenlos.",
  alternates: {
    canonical: `${SITE_URL}/vergleich/contact-form-7-alternative`,
  },
};

const tldrRows = [
  { feature: "Preis", cells: ["Kostenlos", "Kostenlos"] },
  {
    feature: "Weiterentwicklung",
    cells: [true, "Feature Freeze: 6.2 ist die letzte Feature-Version"],
  },
  { feature: "Formular-Aufbau", cells: ["Blöcke im Editor", "Markup-Textfeld + Shortcode"] },
  {
    feature: "Einsendungen speichern",
    cells: [true, "Extra-Plugin (Flamingo)"],
  },
  { feature: "Multi-Step", cells: [true, "Extra-Plugin"] },
  { feature: "Bedingte Logik", cells: [true, "Extra-Plugin"] },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA oder Akismet empfohlen"],
  },
  {
    feature: "Assets nur bei Bedarf",
    cells: [true, "lädt standardmäßig auf jeder Seite"],
  },
  { feature: "Styling ab Werk", cells: ["erbt dein Theme", "ungestylt"] },
] as const;

const faqs = [
  {
    q: "Ist Contact Form 7 tot?",
    a: "Nein. Contact Form 7 wird weiter gewartet: Sicherheitsupdates und kritische Bugfixes kommen weiterhin. Aber neue Funktionen gibt es nicht mehr, Version 6.2 ist laut Ankündigung des Entwicklers die letzte Feature-Version.",
  },
  {
    q: "Bekommt Contact Form 7 noch Sicherheitsupdates?",
    a: "Ja, der Wartungsmodus umfasst Sicherheits-Patches und kritische Fehlerbehebungen. Bestehende CF7-Installationen sind dadurch nicht akut gefährdet. Es lohnt sich trotzdem, für neue Projekte eine aktiv entwickelte Alternative zu wählen.",
  },
  {
    q: "Was passiert mit meinen bestehenden CF7-Formularen?",
    a: "Sie laufen weiter. Der Feature Freeze bedeutet nicht, dass CF7 abgeschaltet wird. Kritisch wird es erst, wenn zukünftige WordPress- oder PHP-Versionen Anpassungen erfordern würden, die über Wartung hinausgehen.",
  },
  {
    q: "Kann Flinkform meine Contact-Form-7-Formulare importieren?",
    a: "Nein, einen automatischen Importer gibt es aktuell nicht. Da ein typisches Kontaktformular in Flinkform in unter 5 Minuten neu gebaut ist, direkt im Block-Editor, fällt die Migration in der Praxis klein aus.",
  },
  {
    q: "Ist Flinkform genauso kostenlos wie Contact Form 7?",
    a: "Ja. Flinkform ist GPLv2-lizenziert und auf WordPress.org verfügbar. Anders als bei CF7 sind Multi-Step, bedingte Logik und das Submissions-Dashboard ohne Zusatz-Plugins enthalten. Nur Spezialfunktionen wie Stripe-Zahlungen stecken im optionalen Pro-Add-on.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="contact-form-7-alternative"
      competitor="Contact Form 7"
      h1="Contact Form 7 Alternative: Warum jetzt der richtige Zeitpunkt für den Wechsel ist"
      updated="2026-07-03"
      answerFirst="Flinkform ist eine moderne Contact Form 7 Alternative für WordPress: block-nativ, kostenlos, mit Multi-Step-Formularen, bedingter Logik, Submissions-Dashboard und Spam-Schutz ohne externe Dienste. Der Wechsel ist 2026 besonders naheliegend, weil Contact Form 7 offiziell im Feature Freeze ist: Version 6.2 ist die letzte mit neuen Funktionen."
      tldrColumns={["Flinkform", "Contact Form 7"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026. Contact Form 7 lässt sich mit Zusatz-Plugins erweitern, jedes davon bedeutet aber eine weitere Abhängigkeit."
      sections={[
        {
          heading: "Was Contact Form 7 richtig gemacht hat",
          body: (
            <>
              <p>
                Ehre, wem Ehre gebührt: Contact Form 7 ist seit fast zwei
                Jahrzehnten das meistinstallierte Formular-Plugin für
                WordPress, mit über 10 Millionen aktiven Installationen. Es
                ist schlank, komplett kostenlos, verkauft nichts nach und hat
                Generationen von WordPress-Sites zuverlässig mit
                Kontaktformularen versorgt. Wer nur ein simples Formular
                braucht und sich mit dem Markup-Editor anfreunden kann, wurde
                jahrelang gut bedient.
              </p>
              <p>
                Genau diese Verdienste machen die aktuelle Situation so
                relevant: Millionen Websites hängen an einem Plugin, das
                keine neuen Funktionen mehr bekommt.
              </p>
            </>
          ),
        },
        {
          heading: "Der Feature Freeze: Was 2026 passiert ist",
          body: (
            <>
              <p>
                Auf der WordCamp Asia 2026 hat Takayuki Miyoshi, der
                Entwickler von Contact Form 7, angekündigt, dass{" "}
                <strong>
                  Version 6.2 die letzte Version mit neuen Funktionen
                </strong>{" "}
                sein wird. Danach wechselt das Plugin in den Wartungsmodus:
                nur noch Sicherheitsupdates und kritische Bugfixes. Sein
                Fokus liegt künftig auf einem Nachfolge-Projekt
                (Contactable.io), dessen Start für 2028 angepeilt ist.
              </p>
              <p>
                Für Website-Betreiber heißt das konkret: Alles, was CF7 heute
                nicht kann, wird es nie können. Kein Multi-Step, keine
                bedingte Logik, kein eingebautes Submissions-Archiv, keine
                Block-Editor-Integration. Wer eine dieser Funktionen braucht,
                braucht ein anderes Plugin. Details dazu im Blog-Artikel{" "}
                <Link href="/blog/contact-form-7-feature-freeze">
                  Contact Form 7 im Feature Freeze: Was WordPress-Nutzer
                  jetzt wissen müssen
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Das eigentliche Problem: der Plugin-Stack",
          body: (
            <>
              <p>
                Schon vor dem Feature Freeze war CF7 selten allein im
                Einsatz. Ein typisches CF7-Setup für ein ernsthaftes Projekt:
              </p>
              <ul>
                <li>Contact Form 7 (das Formular)</li>
                <li>Flamingo (Einsendungen speichern)</li>
                <li>CF7 Conditional Fields (bedingte Logik)</li>
                <li>CF7 Multi-Step Forms (mehrseitige Formulare)</li>
                <li>WP Mail SMTP (zuverlässiger Mailversand)</li>
                <li>reCAPTCHA- oder Akismet-Anbindung (Spam)</li>
              </ul>
              <p>
                Sechs Plugins für ein Kontaktformular. Sechs Update-Zyklen,
                sechs potenzielle Konflikte, sechs Einträge in der
                Datenschutzerklärung. Und der Spam-Schutz hängt an Google
                reCAPTCHA, das ohne Einwilligung DSGVO-widrig ist (dazu
                gleich mehr).
              </p>
            </>
          ),
        },
        {
          heading: "Was Flinkform anders macht",
          body: (
            <>
              <p>
                Flinkform packt den kompletten Stack in ein einziges,
                kostenloses Plugin und baut ihn nativ in den Block-Editor:
              </p>
              <ul>
                <li>
                  <strong>Jedes Feld ist ein Block.</strong> Du baust
                  Formulare wie einen normalen Beitrag, mit Live-Vorschau.
                  Kein Markup-Textfeld, kein Shortcode.
                </li>
                <li>
                  <strong>Multi-Step und bedingte Logik eingebaut.</strong>{" "}
                  Page-Break-Block einfügen, fertig. Felder und Schritte
                  lassen sich abhängig von Antworten ein- und ausblenden.
                </li>
                <li>
                  <strong>Submissions-Dashboard eingebaut.</strong> Suche,
                  Filter, gelesen/ungelesen, Bulk-Aktionen. Kein Flamingo
                  nötig.
                </li>
                <li>
                  <strong>Spam-Schutz ohne externe Dienste.</strong>{" "}
                  Honeypot, signierter Zeit-Check und Proof-of-Work laufen
                  komplett auf deinem Server. Kein reCAPTCHA, keine
                  Einwilligung nötig. Das österreichische
                  Bundesverwaltungsgericht hat am 13.09.2024 entschieden,
                  dass reCAPTCHA ohne Einwilligung gegen die DSGVO verstößt.
                </li>
                <li>
                  <strong>Sieht ab Werk gut aus.</strong> Flinkform erbt
                  Farben, Typografie und Abstände aus deinem Theme
                  (theme.json). CF7-Formulare sind ungestylt.
                </li>
                <li>
                  <strong>Schlank.</strong> Unter 15 KB Frontend-JS, ohne
                  jQuery, geladen nur auf Seiten mit Formular. CF7 lädt seine
                  Assets standardmäßig überall.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <>
              <p>Ehrlichkeit gehört zum Vergleich dazu:</p>
              <ul>
                <li>
                  Wenn deine CF7-Formulare laufen, du keine neuen Funktionen
                  brauchst und dein Spam-Schutz-Setup DSGVO-sauber gelöst ist
                  (z. B. mit Consent-gestütztem reCAPTCHA), gibt es keinen
                  akuten Zwang. CF7 bekommt weiterhin Sicherheitsupdates.
                </li>
                <li>
                  Wenn du tief in CF7-spezifische Erweiterungen investiert
                  hast, die es woanders nicht gibt, rechne den
                  Migrationsaufwand ehrlich gegen.
                </li>
                <li>
                  Wenn deine Website den Classic Editor ohne Blöcke nutzt:
                  Flinkform braucht den Block-Editor (WordPress 6.5+, PHP
                  8.1+).
                </li>
              </ul>
              <p>
                Für neue Projekte gibt es dagegen kaum noch einen Grund, auf
                ein eingefrorenes Plugin zu setzen.
              </p>
            </>
          ),
        },
        {
          heading: "So migrierst du von Contact Form 7 zu Flinkform",
          body: (
            <>
              <p>
                Einen automatischen Importer gibt es nicht, der manuelle Weg
                ist aber kurz:
              </p>
              <ol>
                <li>
                  Flinkform aus dem WordPress.org-Verzeichnis installieren
                  und aktivieren. CF7 kann parallel aktiv bleiben.
                </li>
                <li>
                  Seite mit dem CF7-Shortcode öffnen, den Form-Block von
                  Flinkform einfügen und die Felder nachbauen. Ein typisches
                  Kontaktformular: unter 5 Minuten.
                </li>
                <li>
                  Empfänger-Adresse und Bestätigungsmail im Block-Inspector
                  setzen, Formular testen.
                </li>
                <li>
                  CF7-Shortcode entfernen. Wenn alle Formulare umgezogen
                  sind: CF7, Flamingo und die Zusatz-Plugins deaktivieren und
                  löschen. Flamingo-Daten vorher als CSV sichern, falls du
                  die Alt-Einsendungen brauchst.
                </li>
              </ol>
            </>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              Contact Form 7 war über 15 Jahre die Standard-Antwort auf
              WordPress-Formulare und hat sich seinen Ruhestand verdient.
              Genau das ist der Punkt: Es ist jetzt im Ruhestand. Wer 2026
              ein Formular-Plugin auswählt, sollte eines wählen, das aktiv
              entwickelt wird, im Block-Editor zu Hause ist und Datenschutz
              nicht an US-Dienste delegiert. Flinkform macht genau das,
              kostenlos.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
