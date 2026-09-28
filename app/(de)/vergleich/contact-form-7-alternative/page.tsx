import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { CF7_IMPORT_SINCE, SITE_URL } from "@/lib/site";

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
  { feature: "Datei-Upload", cells: ["nur in Pro", true] },
  { feature: "Formular-Aufbau", cells: ["Blöcke im Editor", "Markup-Textfeld + Shortcode"] },
  {
    feature: "Einsendungen speichern",
    cells: [true, "Extra-Plugin (Flamingo)"],
  },
  { feature: "Multi-Step", cells: [true, "Extra-Plugin"] },
  { feature: "Bedingte Logik", cells: [true, "Extra-Plugin"] },
  {
    feature: "Spam-Schutz ab Werk, ohne externen Dienst",
    cells: ["Honeypot, Zeit-Check, Proof-of-Work", "nein, Hersteller rät zu Turnstile oder reCAPTCHA"],
  },
  {
    feature: "Assets nur bei Bedarf",
    cells: [true, "lädt standardmäßig auf jeder Seite"],
  },
  { feature: "Styling ab Werk", cells: ["erbt dein Theme", "ungestylt"] },
] as const;

/** CF7-Form-Tags und ihr Gegenstück. Blocknamen wie im deutschen Inserter. */
const cf7Mapping = [
  ["[text]", "Textfeld"],
  ["[email]", "E-Mail-Feld"],
  ["[textarea]", "Mehrzeiliges Textfeld"],
  ["[number]", "Zahlenfeld"],
  ["[date]", "Datumsfeld"],
  ["[url]", "URL-Feld"],
  ["[tel]", "Telefonfeld"],
  ["[select]", "Dropdown"],
  ["[checkbox]", "Checkbox-Gruppe"],
  ["[radio]", "Radio-Gruppe"],
  ["[acceptance]", "Einwilligung (Datenschutz-Link per {privacy_policy})"],
  ["[hidden]", "Verstecktes Feld"],
  ["[submit]", "Button-Text im Form-Block"],
  ["[quiz], [recaptcha]", "entfällt, Spam-Schutz ist eingebaut"],
  ["[file]", "Datei-Upload nur in Flinkform Pro"],
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
    a: CF7_IMPORT_SINCE
      ? `Ja. Seit Version ${CF7_IMPORT_SINCE} bringt Flinkform einen Import für Contact-Form-7-Formulare mit: Felder, Labels, Admin- und Bestätigungsmail und Erfolgsmeldung werden übernommen, und die Seiten mit dem CF7-Shortcode werden automatisch umgestellt. Vorher zeigt eine Vorschau, was klappt, jeder Import lässt sich pro Formular rückgängig machen, und Contact Form 7 selbst bleibt unverändert. Logik aus CF7-Zusatz-Plugins wie Conditional Fields oder Multi-Step stellst du in Flinkform neu ein. Datei-Uploads gibt es bei Flinkform nur in Pro.`
      : "Nein, einen automatischen Importer gibt es aktuell nicht. Ein typisches Kontaktformular ist in Flinkform in unter 5 Minuten neu gebaut, direkt im Block-Editor. Mehr Zeit brauchst du für große Formulare und für Logik aus CF7-Zusatz-Plugins wie Conditional Fields oder Multi-Step: Die stellst du in Flinkform neu ein. Datei-Uploads gibt es bei Flinkform nur in Pro.",
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
      answerFirst="Flinkform ist eine moderne Contact Form 7 Alternative für WordPress: block-nativ, kostenlos, mit Multi-Step-Formularen, bedingter Logik, Submissions-Dashboard und Spam-Schutz ohne externe Dienste. Der Wechsel ist 2026 besonders naheliegend, weil Contact Form 7 offiziell im Feature Freeze ist: Version 6.2 ist die letzte mit neuen Funktionen."
      tldrColumns={["Flinkform", "Contact Form 7"]}
      tldrRows={tldrRows}
      tldrNote="Stand September 2026. Contact Form 7 lässt sich mit Zusatz-Plugins erweitern, jedes davon bedeutet aber eine weitere Abhängigkeit."
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
                (Contactable.io), das frühestens 2028 starten soll (
                <a
                  href="https://www.wpbeginner.com/news/contact-form-7-freezes-new-features-what-wordpress-users-should-do-next/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quelle: WPBeginner, Mai 2026
                </a>
                ).
              </p>
              <p>
                Ende September 2026 ist Version 6.1.7 aktuell, 6.2 steht
                also noch aus. Große Sprünge sind davon nicht zu erwarten:
                Was CF7 bis dahin nicht kann, kommt danach laut Ankündigung
                nicht mehr dazu. Heute fehlen ab Werk Multi-Step, bedingte
                Logik, ein Submissions-Archiv und Block-Editor-Integration.
                Auch der Hersteller selbst sagt offen, dass CF7 Einsendungen
                nirgends speichert und du für Spam-Schutz Turnstile oder
                reCAPTCHA brauchst. Details dazu im Blog-Artikel{" "}
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
                sechs potenzielle Konflikte. Und beim Spam-Schutz ist der
                Hersteller selbst deutlich: Turnstile oder reCAPTCHA seien
                ein Muss, einen eingebauten Honeypot gibt es nicht. Beides
                sind externe Dienste mit AV-Vertrag und Eintrag in der
                Datenschutzerklärung.
              </p>
            </>
          ),
        },
        {
          heading: "Was Flinkform anders macht",
          body: (
            <>
              <p>
                Flinkform packt fast den ganzen Stack in ein einziges,
                kostenloses Plugin und baut ihn nativ in den Block-Editor.
                Nur der SMTP-Versand steckt in Pro, oder du nutzt dafür
                weiter WP Mail SMTP:
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
                  komplett auf deinem Server. Kein reCAPTCHA, kein
                  Turnstile, kein AV-Vertrag mit einem Dritten.
                </li>
                <li>
                  <strong>Sieht ab Werk gut aus.</strong> Flinkform erbt
                  Farben, Typografie und Abstände aus deinem Theme
                  (theme.json). CF7 überlässt das Styling dir.
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
                  Wenn deine Formulare Datei-Uploads brauchen: Die kann CF7
                  kostenlos, bei Flinkform stecken sie in{" "}
                  <Link href="/pro">Flinkform Pro</Link>.
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
              {/* Zwei Fassungen: ohne und mit CF7-Import (Schalter in lib/site.ts). */}
              {CF7_IMPORT_SINCE ? (
                <>
                  <p>
                    Seit Version {CF7_IMPORT_SINCE} übernimmt Flinkform deine
                    Contact-Form-7-Formulare per Import:
                  </p>
                  <ol>
                    <li>
                      Flinkform aus dem WordPress.org-Verzeichnis installieren und
                      aktivieren. CF7 bleibt aktiv, beide laufen parallel.
                    </li>
                    <li>
                      Unter Flinkform → Aus CF7 importieren die Vorschau
                      ansehen. Eine Ampel zeigt pro Formular, ob alles
                      übertragbar ist oder wo du nachsehen solltest.
                    </li>
                    <li>
                      Importieren. Felder, Labels, Admin- und Bestätigungsmail
                      und Erfolgsmeldung werden übernommen, aus Mail-Tags wie{" "}
                      <code>[your-name]</code> werden Platzhalter wie{" "}
                      <code>{"{field:your-name}"}</code>. Jedes Formular landet
                      als synchronisiertes Muster, und die Seiten mit dem
                      CF7-Shortcode werden automatisch umgestellt. Contact Form 7
                      selbst bleibt unverändert.
                    </li>
                    <li>
                      Jede Seite einmal testen, inklusive Testversand. Passt
                      etwas nicht, machst du den Import pro Formular rückgängig:
                      Die Seiten bekommen ihren CF7-Shortcode zurück.
                    </li>
                    <li>
                      Formulare in Page Buildern oder Widgets stellt der Import
                      nicht selbst um, er zeigt dir aber, wo sie stecken. Die
                      tauschst du von Hand gegen das Muster aus.
                    </li>
                    <li>
                      Wenn alles läuft: CF7, Flamingo und die Zusatz-Plugins deaktivieren.
                      Flamingo-Daten vorher als CSV sichern, falls du die Alt-Einsendungen
                      brauchst.
                    </li>
                  </ol>
                </>
              ) : (
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
                      Flinkform einfügen und die Felder nachbauen (Zuordnung
                      siehe Tabelle unten). Ein typisches Kontaktformular: unter
                      5 Minuten.
                    </li>
                    <li>
                      Empfänger-Adresse und Bestätigungsmail im Block-Inspector
                      setzen. Aus Mail-Tags wie <code>[your-name]</code> werden
                      Platzhalter wie <code>{"{field:your-name}"}</code>. Formular
                      testen.
                    </li>
                    <li>
                      CF7-Shortcode entfernen. Wenn alle Formulare umgezogen
                      sind: CF7, Flamingo und die Zusatz-Plugins deaktivieren und
                      löschen. Flamingo-Daten vorher als CSV sichern, falls du
                      die Alt-Einsendungen brauchst.
                    </li>
                  </ol>
                </>
              )}
              <h3>Welches CF7-Feld wird welcher Block?</h3>
              <table>
                <thead>
                  <tr>
                    <th>Contact Form 7</th>
                    <th>Flinkform-Block</th>
                  </tr>
                </thead>
                <tbody>
                  {cf7Mapping.map(([tag, block]) => (
                    <tr key={tag}>
                      <td>
                        <code>{tag}</code>
                      </td>
                      <td>{block}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {CF7_IMPORT_SINCE ? (
                <p>
                  Der Import behält die Feldnamen aus CF7 bei. Deine Mail-Vorlagen bleiben
                  dadurch fast unverändert, nur die eckigen Klammern werden zu{" "}
                  <code>{"{field:…}"}</code>. Dazu gibt es <code>{"{form:title}"}</code>,{" "}
                  <code>{"{site:name}"}</code>, <code>{"{site:url}"}</code>,{" "}
                  <code>{"{submission:id}"}</code> und <code>{"{submission:date}"}</code>.
                </p>
              ) : (
                <p>
                  Tipp: Gib jedem Block im Inspector denselben Feldnamen wie in
                  CF7 (<code>your-name</code>, <code>your-email</code> …). Dann
                  kannst du deine alten Mail-Vorlagen fast eins zu eins
                  übernehmen, nur die eckigen Klammern werden zu{" "}
                  <code>{"{field:…}"}</code>. Dazu gibt es{" "}
                  <code>{"{form:title}"}</code>, <code>{"{site:name}"}</code>,{" "}
                  <code>{"{site:url}"}</code>, <code>{"{submission:id}"}</code>{" "}
                  und <code>{"{submission:date}"}</code>.
                </p>
              )}
              <h3>Wie lange dauert der Umstieg?</h3>
              {CF7_IMPORT_SINCE ? (
                <p>
                  Der Import selbst dauert Sekunden, die Seiten stellt er gleich mit
                  um. Die Zeit geht ins Testen: jede Seite mit Formular einmal
                  aufrufen und einen Testversand machen. Nacharbeit
                  brauchst du bei allem, was in CF7 über Zusatz-Plugins lief: Die Logik aus
                  CF7 Conditional Fields oder Multi-Step-Add-ons stellst du in Flinkform im
                  Editor neu ein.
                </p>
              ) : (
                <p>
                  Ein Kontaktformular mit Name, E-Mail und Nachricht baust du in
                  unter 5 Minuten nach. Rechne danach noch den Testversand
                  dazu. Länger wird es bei Formularen mit vielen Feldern oder
                  mehreren Empfängern, und bei allem, was in CF7 über
                  Zusatz-Plugins lief: Die Logik aus CF7 Conditional Fields
                  oder Multi-Step-Add-ons stellst du in Flinkform im Editor neu
                  ein. Übernehmen lässt sie sich nicht.
                </p>
              )}
            </>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              Contact Form 7 war über 15 Jahre die Standard-Antwort auf
              WordPress-Formulare und hat sich seinen Ruhestand verdient.
              Genau das ist der Punkt: Nach Version 6.2 geht es in den
              Ruhestand. Wer 2026 ein Formular-Plugin auswählt, sollte eines
              wählen, das weiterentwickelt wird, im Block-Editor zu Hause
              ist und Spam ohne externen Dienst abwehrt. Flinkform macht
              genau das, kostenlos.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
