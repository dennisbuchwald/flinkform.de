import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ninja Forms Alternative: Flinkform im ehrlichen Vergleich",
  description:
    "Bei Ninja Forms kosten bedingte Logik, Multi-Step und Uploads je ein eigenes Add-on, das Komplettpaket regulär 499 Dollar pro Jahr. Flinkform bringt Multi-Step und bedingte Logik kostenlos mit, DSGVO by design.",
  alternates: { canonical: `${SITE_URL}/vergleich/ninja-forms-alternative` },
};

const tldrRows = [
  {
    feature: "Bedingte Logik",
    cells: ["kostenlos", "nur als Add-on (einzeln ca. 49 $)"],
  },
  {
    feature: "Multi-Step-Formulare",
    cells: ["kostenlos", "nur als Add-on"],
  },
  {
    feature: "Einsendungen speichern + verwalten",
    cells: ["kostenlos", "kostenlos"],
  },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA / hCaptcha / Turnstile / Akismet"],
  },
  {
    feature: "Formular-Aufbau",
    cells: ["Blöcke im Editor", "eigener Drag-&-Drop-Builder"],
  },
  { feature: "Erbt Theme-Design (theme.json)", cells: [true, "eigene Styles"] },
  {
    feature: "Zahlungen (Stripe)",
    cells: ["Pro-Add-on, ab 59 €/Jahr", "nur als Add-on / ab Pro-Bundle"],
  },
  {
    feature: "Alle Features im Paket",
    cells: ["Pro: 59 bis 299 €/Jahr", "Elite: 499 $/Jahr"],
  },
  {
    feature: "Frontend-Gewicht",
    cells: ["unter 15 KB JS, kein jQuery", "eigenes CSS/JS pro Add-on"],
  },
  {
    feature: "Sitz / Datenverständnis",
    cells: ["Deutschland, DSGVO by design", "USA (Tennessee)"],
  },
] as const;

const faqs = [
  {
    q: "Was kostet Ninja Forms wirklich?",
    a: "Die regulären Jahrespreise liegen bei 99 $ (Plus, 3 Websites, 16 Add-ons), 199 $ (Pro, 20 Websites, 28 Add-ons) und 499 $ (Elite, alle Add-ons, unbegrenzte Websites). Die beworbenen Rabattpreise gelten nur im ersten Jahr. Einzelne Add-ons wie Conditional Logic kosten à la carte rund 49 $ pro Jahr.",
  },
  {
    q: "Ist Ninja Forms kostenlos nutzbar?",
    a: "Ja, die Core-Version ist kostenlos und erlaubt unbegrenzte Formulare und Einsendungen. Aber bedingte Logik, Datei-Uploads, Multi-Step-Formulare und alle Zahlungsarten fehlen komplett und sind nur als bezahlte Add-ons erhältlich. Flinkform liefert Multi-Step und bedingte Logik im kostenlosen Plugin mit.",
  },
  {
    q: "Ist Ninja Forms schlecht oder veraltet?",
    a: "Nein. Ninja Forms ist seit vielen Jahren am Markt, hat über 600.000 aktive Installationen und einen sehr einsteigerfreundlichen Builder. Das Preismodell stammt aber aus einer anderen Zeit: Funktionen, die Konkurrenten längst kostenlos mitliefern, kosten hier je ein eigenes Add-on, und der Builder ist eine separate Umgebung außerhalb des Block-Editors.",
  },
  {
    q: "Kann ich meine Ninja-Forms-Formulare zu Flinkform importieren?",
    a: "Nein, einen automatischen Importer gibt es nicht. Da Flinkform-Formulare aus Gutenberg-Blöcken bestehen, baust du sie direkt im Editor neu auf. Ein typisches Kontakt- oder Anfrage-Formular ist in wenigen Minuten nachgebaut, mit Live-Vorschau im eigenen Theme-Design.",
  },
  {
    q: "Ist Ninja Forms DSGVO-konform?",
    a: "Ninja Forms bringt brauchbare Datenschutz-Werkzeuge mit, etwa ein Ablaufdatum für Einsendungen, und speichert die IP-Adresse nach Doku-Lage nicht ab Werk. Der Spam-Schutz hängt aber an US-Diensten wie reCAPTCHA, hCaptcha oder Turnstile. Das österreichische Bundesverwaltungsgericht hat am 13.09.2024 entschieden, dass reCAPTCHA ohne Einwilligung DSGVO-widrig ist. Flinkform braucht keinen dieser Dienste.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="ninja-forms-alternative"
      competitor="Ninja Forms"
      h1="Ninja Forms Alternative: Ohne Add-on-Rechnung"
      updated="2026-07-03"
      answerFirst="Flinkform ist eine kostenlose Ninja-Forms-Alternative aus Deutschland: Multi-Step-Formulare, bedingte Logik und Spam-Schutz ohne externe Dienste sind im freien Plugin enthalten. Bei Ninja Forms ist jede dieser Funktionen ein eigenes bezahltes Add-on, das Komplettpaket kostet regulär 499 Dollar pro Jahr. Dazu baut Flinkform Formulare direkt im Block-Editor statt in einer separaten Builder-Umgebung."
      tldrColumns={["Flinkform", "Ninja Forms"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026, reguläre Listenpreise laut ninjaforms.com/pricing (nicht die Erstjahres-Rabatte von aktuell 40 %)."
      sections={[
        {
          heading: "Was Ninja Forms gut macht",
          body: (
            <>
              <p>
                Ninja Forms gehört zu den Veteranen unter den
                WordPress-Formular-Plugins: über 600.000 aktive
                Installationen, 4,4 von 5 Sternen auf WordPress.org und ein
                Drag-&-Drop-Builder, der als besonders einsteigerfreundlich
                gilt. Die kostenlose Core-Version erlaubt unbegrenzte
                Formulare und Einsendungen inklusive CSV-Export. Und beim
                Datenschutz gibt es echte Pluspunkte: feldselektive
                Speicherung und ein automatisches Ablaufdatum für
                Einsendungen sind schon im kostenlosen Kern dabei.
              </p>
              <p>
                Das Problem liegt woanders: im Preismodell und im Alter der
                Architektur.
              </p>
            </>
          ),
        },
        {
          heading: "Das Add-on-Modell: Jede Funktion kostet extra",
          body: (
            <>
              <p>
                Ninja Forms verkauft Funktionen als einzelne Add-ons. Was
                anderswo Grundausstattung ist, steht hier je auf einer
                eigenen Rechnung:
              </p>
              <ul>
                <li>
                  <strong>Bedingte Logik:</strong> eigenes Add-on, einzeln
                  ca. 49 $ pro Jahr. Bei Flinkform, Forminator und Fluent
                  Forms kostenlos enthalten.
                </li>
                <li>
                  <strong>Multi-Step-Formulare (Layout & Styles):</strong>{" "}
                  eigenes Add-on.
                </li>
                <li>
                  <strong>Datei-Uploads:</strong> eigenes Add-on.
                </li>
                <li>
                  <strong>Zahlungen (Stripe, PayPal):</strong> je eigenes
                  Add-on.
                </li>
                <li>
                  <strong>Jede CRM- oder Newsletter-Anbindung:</strong>{" "}
                  eigenes Add-on.
                </li>
              </ul>
              <p>
                Alternativ gibt es Bundles: Plus für regulär 99 $ pro Jahr
                (16 Add-ons, 3 Websites), Pro für 199 $ (28 Add-ons, 20
                Websites), Elite für 499 $ (alle Add-ons, unbegrenzt).
                Achtung: Die beworbenen Preise sind Erstjahres-Rabatte von
                aktuell 40 %, ab dem zweiten Jahr zahlst du den vollen
                Preis. Wer nur zwei oder drei Add-ons à la carte kauft,
                landet schnell über dem Preis gebündelter Konkurrenz. Eine
                Einordnung, was Formular-Plugins insgesamt kosten, findest
                du unter{" "}
                <Link href="/wissen/was-kostet-wordpress-formular-plugin">
                  Was kostet ein WordPress-Formular-Plugin?
                </Link>
              </p>
            </>
          ),
        },
        {
          heading: "Die enge Free-Version im Vergleich",
          body: (
            <>
              <p>
                Die Core-Version von Ninja Forms kann Felder, E-Mails und
                Einsendungen, mehr nicht. Sobald ein Formular auf Eingaben
                reagieren soll (Felder ein- und ausblenden, Schritte
                überspringen) oder mehr als eine Seite braucht, stehst du
                vor der Add-on-Kasse.
              </p>
              <p>
                Flinkform zieht die Grenze anders: Das kostenlose Plugin
                enthält 13 Feldtypen,{" "}
                <Link href="/wissen/multi-step-formular-wordpress">
                  Multi-Step-Formulare
                </Link>{" "}
                mit Fortschrittsanzeige und Schritt-Validierung sowie{" "}
                <Link href="/wissen/bedingte-logik-wordpress-formular">
                  bedingte Logik
                </Link>{" "}
                für Felder und ganze Schritte. Dazu ein
                Submissions-Dashboard mit Suche und Filtern,
                Bestätigungsmails mit Merge-Tags und eine
                Aufbewahrungsfrist mit Auto-Löschung pro Formular. Bezahlt
                wird bei Flinkform erst, wenn du Zahlungen, Uploads, SMTP
                oder Webhooks brauchst: <Link href="/pro">Flinkform Pro</Link>{" "}
                kostet 59 € pro Jahr für eine Website, und jeder Plan
                enthält alle Pro-Features.
              </p>
            </>
          ),
        },
        {
          heading: "Spam-Schutz und Datenschutz",
          body: (
            <>
              <p>
                Fairerweise zuerst das Positive: Ninja Forms speichert die
                IP-Adresse nach Doku-Lage nicht automatisch mit jeder
                Einsendung, und das Ablaufdatum für Einsendungen ist ein
                gutes Datenschutz-Feature. Beim Spam-Schutz setzt Ninja
                Forms aber auf externe US-Dienste: reCAPTCHA, hCaptcha,
                Cloudflare Turnstile oder Akismet. Alle verarbeiten
                Besucherdaten auf fremden Servern. Das österreichische
                Bundesverwaltungsgericht hat am 13.09.2024 entschieden,
                dass reCAPTCHA ohne vorherige Einwilligung DSGVO-widrig
                ist, und die französische CNIL hat den Einsatz bereits
                zweimal mit Bußgeldern belegt.
              </p>
              <p>
                Flinkform braucht keinen dieser Dienste: Honeypot,
                signierter Zeit-Check und Proof-of-Work laufen komplett auf
                deinem Server, mit Mathe-Fallback ohne JavaScript. Keine
                IP-Speicherung, kein User-Agent-Logging, kein Eintrag in
                der Datenschutzerklärung nötig. Die Details stehen im
                Artikel{" "}
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
          heading: "Architektur: Extra-Builder von damals, Blöcke von heute",
          body: (
            <>
              <p>
                Ninja Forms stammt aus der Zeit vor dem Block-Editor. Der
                Formular-Aufbau passiert in einem eigenen Builder, der
                Gutenberg-Block dient nur zum Einbetten des fertigen
                Formulars. Du wechselst also für jede Änderung die
                Umgebung und siehst erst im Frontend, wie das Formular im
                Theme wirklich aussieht. Dazu kam 2022 eine kritische
                Sicherheitslücke (CVSS 9.8), bei der WordPress.org ein
                Zwangs-Update an hunderttausende Websites ausrollte. Das
                Team hat schnell reagiert und auch alte Versionszweige
                gepatcht, aber es zeigt, wie viel gewachsener Code in dem
                Plugin steckt.
              </p>
              <p>
                Flinkform ist von Grund auf{" "}
                <Link href="/wissen/was-ist-ein-block-natives-formular-plugin">
                  block-nativ
                </Link>{" "}
                gebaut: Jedes Feld ist ein Gutenberg-Block, das Formular
                entsteht direkt in der Seite mit Live-Vorschau im
                Theme-Design, das über theme.json automatisch übernommen
                wird. Im Frontend läuft die Interactivity API ohne jQuery,
                unter 15 KB JavaScript, und Assets laden nur auf Seiten,
                die tatsächlich ein Formular enthalten. Voraussetzung:
                WordPress 6.5+ und PHP 8.1+.
              </p>
            </>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Du nutzt Ninja-Forms-Add-ons, für die Flinkform kein
                Gegenstück hat, etwa bestimmte CRM-Anbindungen oder
                PayPal-Zahlungen (Flinkform Pro setzt auf Stripe).
              </li>
              <li>
                Du brauchst wirklich nur ein einziges Zusatz-Feature: Dann
                kann ein einzelnes À-la-carte-Add-on günstiger sein als
                jedes Bundle.
              </li>
              <li>
                Deine Website läuft noch auf dem Classic Editor. Flinkform
                braucht den Block-Editor mit WordPress 6.5+.
              </li>
              <li>
                Du verwaltest viele bestehende Ninja-Forms-Formulare und
                der Nachbau lohnt den Aufwand aktuell nicht, denn einen
                Importer gibt es nicht.
              </li>
            </ul>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              Ninja Forms ist ein solides Plugin mit langer Historie, aber
              das Add-on-Preismodell rechnet sich fast nie: Bedingte
              Logik, Multi-Step und Uploads kosten je extra, das
              Komplettpaket regulär 499 Dollar pro Jahr, und der
              Spam-Schutz hängt an US-Diensten. Flinkform liefert
              Multi-Step, bedingte Logik und DSGVO-sauberen Spam-Schutz
              kostenlos, direkt im Block-Editor. Brauchst du Zahlungen,
              Uploads oder Webhooks, kostet{" "}
              <Link href="/pro">Flinkform Pro</Link> 59 € pro Jahr mit
              allen Features. Wie sich Flinkform gegen andere Builder
              schlägt, zeigt die{" "}
              <Link href="/vergleich">Vergleichsübersicht</Link>.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
