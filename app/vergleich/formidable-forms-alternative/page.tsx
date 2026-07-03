import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Formidable Forms Alternative auf Deutsch: Flinkform im ehrlichen Vergleich",
  description:
    "Formidable Forms ist ein starkes Power-User-Tool, aber Rechner gibt es erst ab regulär 399 Dollar pro Jahr. Flinkform liefert Formulare kostenlos und Berechnungsfelder ab 59 Euro pro Jahr, DSGVO by design.",
  alternates: {
    canonical: `${SITE_URL}/vergleich/formidable-forms-alternative`,
  },
};

const tldrRows = [
  {
    feature: "Bedingte Logik + Multi-Step",
    cells: ["kostenlos", "erst ab Basic (79 $/Jahr regulär)"],
  },
  {
    feature: "Berechnungsfelder / Rechner",
    cells: ["Pro, ab 59 €/Jahr", "erst ab Business (399 $/Jahr regulär)"],
  },
  {
    feature: "Frontend-Views (Tabellen, Kalender)",
    cells: [false, "ab Plus (199 $/Jahr), Alleinstellungsmerkmal"],
  },
  {
    feature: "Formular-Aufbau",
    cells: ["Blöcke im Editor", "eigener Fullscreen-Builder"],
  },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA / hCaptcha / Turnstile / Akismet"],
  },
  { feature: "Keine IP-Speicherung ab Werk", cells: [true, false] },
  {
    feature: "Datei-Uploads",
    cells: ["Pro, bis 10 Dateien pro Feld", "erst ab Basic (bezahlt)"],
  },
  {
    feature: "Alle Features in jedem Bezahlplan",
    cells: [true, "Feature-Treppe über 4 Stufen"],
  },
  {
    feature: "Preis nach dem ersten Jahr",
    cells: ["unverändert", "Renewal zum doppelten Erstjahrespreis"],
  },
  {
    feature: "Sitz / Datenverständnis",
    cells: ["Deutschland, DSGVO by design", "USA (Strategy11, Utah)"],
  },
] as const;

const faqs = [
  {
    q: "Was kostet Formidable Forms wirklich?",
    a: "Die beworbenen Preise sind Erstjahres-Rabatte von 50 Prozent. Regulär (Renewal) kosten die Pläne 79 $ (Basic), 199 $ (Plus), 399 $ (Business) und 599 $ (Elite) pro Jahr, Stand Juli 2026. Berechnungsfelder, Zahlungen und Quiz-Funktionen gibt es erst ab Business, also regulär 399 Dollar pro Jahr.",
  },
  {
    q: "Was sind Formidable Views und hat Flinkform das auch?",
    a: "Views geben eingereichte Formulardaten im Frontend aus, etwa als Tabelle, Kalender oder Verzeichnis. Damit lassen sich datengetriebene Mini-Anwendungen bauen. Das ist ein echtes Alleinstellungsmerkmal von Formidable Forms. Flinkform hat keine Views: Es konzentriert sich auf Formulare, Einsendungen und Zahlungen.",
  },
  {
    q: "Kann Flinkform Preisrechner wie Formidable Forms?",
    a: "Ja, mit Flinkform Pro (ab 59 € pro Jahr): Berechnungsfelder rechnen live im Browser und werden serverseitig nachgerechnet, ohne eval. Damit baust du Angebots- und Preisrechner. Bei Formidable Forms brauchst du dafür den Business-Plan für regulär 399 Dollar pro Jahr.",
  },
  {
    q: "Speichert Formidable Forms IP-Adressen?",
    a: "Ja, standardmäßig wird bei jeder Einsendung die IP-Adresse gespeichert. Abschaltbar ist das in den Global Settings, die Einstellung wirkt aber nur auf künftige Einsendungen. Flinkform speichert grundsätzlich keine IP-Adressen und keine User-Agents, ohne Konfiguration.",
  },
  {
    q: "Für wen ist Formidable Forms die bessere Wahl?",
    a: "Wenn du datengetriebene Anwendungen im Frontend bauen willst: Verzeichnisse, Kalender, Mitgliederlisten, Frontend-Editing. Formidable Views und die DIY-Applications im Elite-Plan haben in WordPress kein direktes Gegenstück. Für reine Formulare plus Rechner ist der Preis dagegen schwer zu rechtfertigen.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="formidable-forms-alternative"
      competitor="Formidable Forms"
      h1="Formidable Forms Alternative: Formulare und Rechner ohne 399-Dollar-Plan"
      updated="2026-07-03"
      answerFirst="Flinkform ist eine Formidable-Forms-Alternative aus Deutschland für alle, die Formulare und Preisrechner brauchen, aber keine komplette App-Plattform: Multi-Step, bedingte Logik und Submissions-Dashboard sind kostenlos, Berechnungsfelder kosten mit Flinkform Pro ab 59 Euro pro Jahr. Bei Formidable Forms liegen Rechner erst im Business-Plan für regulär 399 Dollar pro Jahr, und die kostenlose Version hat weder bedingte Logik noch mehrseitige Formulare. Nur wer Formidable Views braucht, also Frontend-Ausgabe von Daten, ist dort richtig."
      tldrColumns={["Flinkform", "Formidable Forms"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026, reguläre Listenpreise laut formidableforms.com/pricing (Renewal-Preise, nicht die Erstjahres-Rabatte von 50 %)."
      sections={[
        {
          heading: "Was Formidable Forms gut macht",
          body: (
            <>
              <p>
                Formidable Forms ist das mächtigste der klassischen
                WordPress-Formular-Plugins, und das muss man neidlos
                anerkennen. Das Alleinstellungsmerkmal heißt{" "}
                <strong>Formidable Views</strong>: Eingereichte Daten lassen
                sich im Frontend als Tabelle, Kalender, Verzeichnis oder
                Timeline ausgeben. Damit baust du keine Formulare mehr,
                sondern kleine Anwendungen: Immobilienlisten,
                Veranstaltungskalender, Mitgliederverzeichnisse.
              </p>
              <p>
                Dazu kommen sehr starke Berechnungsfelder mit großer
                Template-Bibliothek (Hypothekenrechner, Preisrechner), ein
                Quiz-Maker, Umfragen und im Elite-Plan sogenannte DIY
                Applications. Wer das alles nutzt, bekommt für sein Geld ein
                Werkzeug, das kein anderes Formular-Plugin ersetzt. Auf
                WordPress.org steht Formidable bei 4,8 von 5 Sternen mit über
                300.000 Installationen.
              </p>
              <p>
                Die entscheidende Frage ist nur: Brauchst du eine
                App-Plattform, oder brauchst du Formulare?
              </p>
            </>
          ),
        },
        {
          heading: "Der Preis der Power",
          body: (
            <>
              <p>
                Formidable verteilt seine Funktionen auf eine Feature-Treppe
                mit vier Stufen. Die regulären Jahrespreise (Renewal, Stand
                Juli 2026):
              </p>
              <ul>
                <li>
                  <strong>Lite (kostenlos):</strong> Basis-Formulare mit
                  Einsendungs-Verwaltung, aber ohne bedingte Logik, ohne
                  mehrseitige Formulare und ohne Datei-Uploads. Stripe geht,
                  aber mit zusätzlicher Transaktionsgebühr.
                </li>
                <li>
                  <strong>Basic (79 $/Jahr):</strong> bedingte Logik,
                  Multi-Page, Uploads, Repeater. 1 Website.
                </li>
                <li>
                  <strong>Plus (199 $/Jahr):</strong> Formidable Views,
                  Graphen und Charts. 3 Websites.
                </li>
                <li>
                  <strong>Business (399 $/Jahr):</strong> Rechner,
                  Quiz-Maker, Umfragen, Zahlungen ohne Aufschlag, Signaturen,
                  PDF, Zapier. 7 Websites.
                </li>
                <li>
                  <strong>Elite (599 $/Jahr):</strong> Salesforce, HubSpot,
                  WooCommerce, White Label, DIY Applications. Unbegrenzte
                  Websites.
                </li>
              </ul>
              <p>
                Zwei Dinge solltest du dabei wissen. Erstens: Die auf der
                Website beworbenen Preise sind Erstjahres-Rabatte von 50
                Prozent. Ab dem zweiten Jahr verdoppelt sich der Preis, und
                genau diese Renewals sind in Reviews der häufigste
                Kritikpunkt. Zweitens: Die Lite-Version ist ungewöhnlich
                mager. Bedingte Logik, die bei Flinkform, Forminator und
                Fluent Forms kostenlos ist, gibt es bei Formidable erst gegen
                Geld. Wie das bei Flinkform ohne Aufpreis funktioniert:{" "}
                <Link href="/wissen/bedingte-logik-wordpress-formular">
                  Bedingte Logik in WordPress-Formularen
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Angebotsrechner ohne 399-Dollar-Plan",
          body: (
            <>
              <p>
                Der häufigste Grund, warum kleine Unternehmen und Agenturen
                bei Formidable landen, sind die Rechner: ein
                Konfigurationsformular, das live einen Preis kalkuliert.
                Dafür brauchst du dort den Business-Plan, regulär 399 Dollar
                pro Jahr für 7 Websites.
              </p>
              <p>
                Flinkform löst denselben Anwendungsfall deutlich günstiger.
                Das kostenlose Plugin liefert Multi-Step-Formulare mit
                Fortschrittsanzeige und bedingter Logik, also das Gerüst
                jedes Angebotsrechners.{" "}
                <Link href="/pro">Flinkform Pro</Link> ergänzt ab 59 Euro pro
                Jahr die Berechnungsfelder: Sie rechnen live im Browser,
                werden serverseitig nachgerechnet und verzichten dabei auf
                eval. Eine Schritt-für-Schritt-Anleitung findest du unter{" "}
                <Link href="/wissen/angebotsrechner-wordpress">
                  Angebotsrechner mit WordPress bauen
                </Link>
                .
              </p>
              <p>
                Fair ist auch die Gegenrechnung: Wer neben dem Rechner
                Frontend-Views, Quiz-Auswertungen oder Signaturen braucht,
                bekommt das bei Flinkform nicht. Wer nur Formulare plus
                Rechner braucht, zahlt bei Formidable für Funktionen mit, die
                er nie anfasst.
              </p>
            </>
          ),
        },
        {
          heading: "Der Datenschutz-Unterschied",
          body: (
            <>
              <p>
                Formidable Forms speichert standardmäßig die IP-Adresse jeder
                Einsendung. Abschalten kannst du das in den Global Settings,
                die Einstellung wirkt aber nur auf künftige Einsendungen,
                Bestandsdaten musst du manuell bereinigen. Für den
                Spam-Schutz setzt Formidable neben einem Honeypot auf
                Akismet, reCAPTCHA, hCaptcha oder Cloudflare Turnstile, also
                US-Dienste, die Besucherdaten verarbeiten. Das
                österreichische Bundesverwaltungsgericht hat am 13.09.2024
                entschieden, dass reCAPTCHA ohne vorherige Einwilligung
                DSGVO-widrig ist.
              </p>
              <p>
                Flinkform speichert keine IP-Adressen und keine User-Agents,
                ohne dass du etwas konfigurieren musst. Der Spam-Schutz
                (Honeypot, signierter Zeit-Check, Proof-of-Work mit
                Mathe-Fallback ohne JavaScript) läuft komplett auf deinem
                Server. Dazu kommen eine Aufbewahrungsfrist pro Formular mit
                automatischer Löschung und die Anbindung an die
                WordPress-Privacy-Tools. Hintergründe:{" "}
                <Link href="/blog/recaptcha-dsgvo-rechtsrisiko">
                  reCAPTCHA und die DSGVO: Warum dein Kontaktformular ein
                  Rechtsrisiko ist
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Block-Editor statt Fullscreen-Builder",
          body: (
            <>
              <p>
                Formidable öffnet einen eigenen Fullscreen-Builder, der den
                kompletten Bildschirm übernimmt. Das Formular baust du in
                dieser separaten Umgebung und bettest es dann per Shortcode
                oder Embed-Block in die Seite ein. Genau dieser
                Fullscreen-Takeover und die steile Lernkurve für Views und
                Workflows werden in Nutzer-Reviews regelmäßig kritisiert.
              </p>
              <p>
                Flinkform ist block-nativ: Jedes Feld ist ein
                Gutenberg-Block, das Formular entsteht direkt in der Seite,
                mit Live-Vorschau in deinem Theme-Design. Farben, Schrift und
                Eckenradius kommen automatisch aus der theme.json. Kein
                Kontextwechsel, keine zweite UI. Im Frontend lädt Flinkform
                unter 15 KB JavaScript, ohne jQuery, und nur auf Seiten mit
                Formular.
              </p>
            </>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Du nutzt Formidable Views produktiv: Verzeichnisse,
                Kalender, Frontend-Editing oder datengetriebene
                Applications. Dafür gibt es bei Flinkform kein Gegenstück,
                und das ist auch nicht geplant.
              </li>
              <li>
                Du brauchst Quiz-Auswertungen, Umfragen, Signaturen oder
                PDF-Ausgabe. Das kann Flinkform nicht.
              </li>
              <li>
                Deine Site läuft noch auf dem Classic Editor. Flinkform
                braucht WordPress 6.5+ mit Block-Editor.
              </li>
            </ul>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              Formidable Forms ist ein Power-User-Tool mit echtem
              Alleinstellungsmerkmal: Wer Frontend-Views und Applications
              braucht, findet keinen gleichwertigen Ersatz. Wer aber
              Formulare, Multi-Step und einen Angebotsrechner braucht, zahlt
              dort regulär 399 Dollar pro Jahr für eine Plattform, von der er
              einen Bruchteil nutzt. Flinkform liefert die Formular-Basis
              kostenlos und die Berechnungsfelder mit{" "}
              <Link href="/pro">Flinkform Pro</Link> ab 59 Euro pro Jahr,
              DSGVO-sauber und ohne Renewal-Sprung. Wie sich Flinkform gegen
              die anderen großen Builder schlägt, zeigt die{" "}
              <Link href="/vergleich">Vergleichsübersicht</Link>.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
