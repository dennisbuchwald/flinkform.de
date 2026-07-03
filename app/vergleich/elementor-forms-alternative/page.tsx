import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Elementor Forms Alternative ohne Elementor: Flinkform im Vergleich",
  description:
    "Elementor Forms gibt es nur mit Elementor Pro ab 59 Dollar pro Jahr, im Essential-Plan ohne gespeicherte Einsendungen. Flinkform funktioniert kostenlos in jedem Theme und im nativen WordPress-Editor.",
  alternates: { canonical: `${SITE_URL}/vergleich/elementor-forms-alternative` },
};

const tldrRows = [
  {
    feature: "Funktioniert ohne Page Builder",
    cells: [true, "nur mit Elementor + Elementor Pro"],
  },
  {
    feature: "Preis für Formulare",
    cells: ["Kostenlos", "ab 59 $/Jahr (Elementor Pro Essential)"],
  },
  {
    feature: "Einsendungen speichern",
    cells: ["kostenlos", "erst ab Advanced Solo, nicht im Essential-Plan"],
  },
  {
    feature: "Formular-Aufbau",
    cells: ["Blöcke im WordPress-Editor", "Widget im Elementor-Builder"],
  },
  {
    feature: "Formular in jedem Theme nutzbar",
    cells: [true, "nur innerhalb von Elementor-Layouts"],
  },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA v2/v3 + Honeypot"],
  },
  { feature: "Keine IP-Speicherung ab Werk", cells: [true, false] },
  {
    feature: "Frontend-Gewicht",
    cells: [
      "unter 15 KB JS, nur auf Formular-Seiten",
      "läuft im kompletten Elementor-Stack",
    ],
  },
  {
    feature: "Multi-Step + bedingte Logik",
    cells: ["kostenlos", "Multi-Step in Pro enthalten"],
  },
  {
    feature: "Sitz / Datenverständnis",
    cells: ["Deutschland, DSGVO by design", "Elementor Ltd., Israel"],
  },
] as const;

const faqs = [
  {
    q: "Gibt es Elementor Forms kostenlos?",
    a: "Nein. Das kostenlose Elementor enthält gar kein Formular-Widget. Der Form Builder ist komplett Teil von Elementor Pro, ab 59 Dollar pro Jahr (Essential, Stand Juli 2026). Und selbst im Essential-Plan werden Einsendungen nicht in der Datenbank gespeichert, dafür brauchst du mindestens Advanced Solo.",
  },
  {
    q: "Kann ich Flinkform nutzen, obwohl meine Website mit Elementor gebaut ist?",
    a: "Ja. Flinkform ist ein eigenständiges Plugin und hängt nicht am Page Builder. Auf allen Seiten, die du mit dem WordPress-Block-Editor bearbeitest (etwa Blogartikel, Landingpages oder eine Kontaktseite ohne Elementor), fügst du das Formular als Block ein. Beide Plugins laufen problemlos parallel im selben WordPress.",
  },
  {
    q: "Was passiert mit meinen Elementor-Formularen, wenn ich Elementor deaktiviere?",
    a: "Sie verschwinden mit dem Rest des Layouts. Elementor-Formulare existieren nur innerhalb von Elementor-Layouts, es gibt kein eigenständiges Formular und keinen Shortcode für die Einbindung außerhalb des Builders. Flinkform-Formulare sind dagegen normale Blöcke im Seiteninhalt und überleben jeden Theme-Wechsel.",
  },
  {
    q: "Speichert Elementor Forms IP-Adressen?",
    a: "Ja. Einsendungen speichern standardmäßig IP-Adresse, User Agent, Datum und Seiten-URL als sogenannte system-captured fields. Das ist als DSGVO-Problem in einem offenen GitHub-Issue dokumentiert. Flinkform speichert grundsätzlich keine IP-Adressen und keine User-Agents, ohne dass du etwas konfigurieren musst.",
  },
  {
    q: "Kann Flinkform auch Zahlungen entgegennehmen?",
    a: "Ja, über das kostenpflichtige Add-on Flinkform Pro: Stripe Payments mit Kreditkarte, SEPA-Lastschrift, Apple Pay und Google Pay, ab 59 Euro pro Jahr für eine Website (Stand Juli 2026). Elementor Forms hat keine native Zahlungsfunktion im Formular-Widget.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="elementor-forms-alternative"
      competitor="Elementor Forms"
      h1="Elementor Forms Alternative: Formulare ohne Page-Builder-Abo"
      updated="2026-07-03"
      answerFirst="Elementor Forms gibt es nur als Teil von Elementor Pro: ab 59 Dollar pro Jahr, und im günstigsten Plan werden Einsendungen nicht einmal gespeichert. Flinkform ist die kostenlose Alternative ohne Elementor: ein block-natives Formular-Plugin, das in jedem Theme und im nativen WordPress-Editor funktioniert, mit Multi-Step, bedingter Logik und Spam-Schutz ohne externe Dienste. Fair gesagt: Wer Elementor Pro ohnehin bezahlt, hat den Form Builder schon an Bord."
      tldrColumns={["Flinkform", "Elementor Forms"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026, USD-Listenpreise für Elementor Pro. Der Essential-Plan (59 $/Jahr) enthält den Form Builder, speichert laut offizieller Pricing-Seite aber keine Formular-Einsendungen."
      sections={[
        {
          heading: "Was Elementor Forms gut macht",
          body: (
            <>
              <p>
                Für Elementor-Nutzer ist der eingebaute Form Builder bequem:
                Du stylst das Formular 1:1 im selben visuellen Editor wie den
                Rest der Seite, ohne eine Zeile CSS. Die Integration mit dem
                Popup-Builder ist stark (Formulare in Popups, direkt
                verdrahtet), Multi-Step-Formulare sind enthalten, und
                Marketing-Anbindungen wie Mailchimp, HubSpot oder Webhooks
                gehören zum Pro-Paket. Wer Elementor Pro sowieso bezahlt,
                bekommt die Formulare ohne Aufpreis dazu.
              </p>
              <p>
                Die Frage ist: Was, wenn du Elementor gar nicht willst, oder
                nur wegen der Formulare weiter bezahlen müsstest?
              </p>
            </>
          ),
        },
        {
          heading: "Das Grundproblem: Formulare nur im Pro-Abo",
          body: (
            <>
              <p>
                Elementor Forms ist kein Formular-Plugin, sondern ein Widget
                in Elementor Pro. Das hat zwei Konsequenzen:
              </p>
              <ul>
                <li>
                  <strong>Es gibt keine kostenlose Version.</strong> Das freie
                  Elementor enthält gar keine Formulare. Ein simples
                  Kontaktformular kostet dich also mindestens den
                  Essential-Plan: 59 $ pro Jahr (Stand Juli 2026), jedes Jahr
                  aufs Neue.
                </li>
                <li>
                  <strong>
                    Essential speichert keine Einsendungen.
                  </strong>{" "}
                  Auf der offiziellen Pricing-Seite steht beim Essential-Plan
                  wörtlich, dass Form Submissions nicht enthalten sind. Geht
                  die Benachrichtigungs-Mail verloren, ist die Anfrage weg.
                  Wer Einsendungen in der Datenbank will, braucht mindestens
                  Advanced Solo. Diese Beschneidung des Essential-Plans für
                  Neukunden hat unter anderem WP Tavern dokumentiert.
                </li>
              </ul>
              <p>
                Flinkform dreht das um: Multi-Step, bedingte Logik,
                Submissions-Dashboard mit Suche und Filtern, Spam-Schutz und
                Bestätigungsmails sind im kostenlosen Plugin von
                WordPress.org enthalten. Kein Abo, keine Preisstufen für
                Grundfunktionen.
              </p>
            </>
          ),
        },
        {
          heading: "Lock-in: Deine Formulare gehören dem Page Builder",
          body: (
            <>
              <p>
                Der wichtigste Unterschied ist struktureller Natur.
                Elementor-Formulare existieren nur innerhalb von
                Elementor-Layouts. Es gibt kein eigenständiges Formular, das
                du per Shortcode irgendwo anders einbinden könntest.
                Verlässt du Elementor irgendwann (Theme-Relaunch, Umstieg
                auf den Block-Editor, Performance-Gründe), verlierst du
                nicht nur die Layouts, sondern auch jedes einzelne Formular
                samt Logik und Anbindungen.
              </p>
              <p>
                Flinkform ist bewusst das Gegenteil: ein{" "}
                <Link href="/wissen/was-ist-ein-block-natives-formular-plugin">
                  block-natives Formular-Plugin
                </Link>
                . Jedes Feld ist ein Gutenberg-Block, das Formular ist
                normaler Seiteninhalt und funktioniert in jedem Theme, egal
                ob Block-Theme, klassisches Theme oder eine Site, die
                parallel Elementor nutzt. Wechselst du das Theme, bleibt das
                Formular einfach stehen und übernimmt per theme.json
                automatisch das neue Design. Wie das konkret aussieht, zeigt{" "}
                <Link href="/wissen/gutenberg-formular-erstellen">
                  unsere Anleitung zum Formular im Gutenberg-Editor
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Performance: Formular-Plugin statt Builder-Stack",
          body: (
            <>
              <p>
                Wer Elementor Pro nur (oder hauptsächlich) wegen der
                Formulare installiert, schleppt den kompletten
                Page-Builder-Stack mit: eigene CSS- und JS-Bundles, eigene
                Rendering-Schicht, eigener Editor. Für ein Kontaktformular
                ist das ein unverhältnismäßiger Ballast.
              </p>
              <p>
                Flinkform lädt unter 15 KB Frontend-JavaScript, nutzt die
                WordPress Interactivity API statt jQuery und lädt seine
                Assets ausschließlich auf Seiten, auf denen tatsächlich ein
                Formular steht. Auf allen anderen Seiten: null Overhead.
              </p>
            </>
          ),
        },
        {
          heading: "Datenschutz: IP-Logging und reCAPTCHA ab Werk",
          body: (
            <>
              <p>
                Elementor-Submissions speichern automatisch IP-Adresse, User
                Agent, Datum und Seiten-URL. Diese Erfassung ist
                standardmäßig aktiv und als DSGVO-Problem in einem seit
                Jahren offenen GitHub-Issue dokumentiert. Für den
                Spam-Schutz bietet Elementor nativ Google reCAPTCHA v2 und
                v3 plus ein Honeypot-Feld; hCaptcha oder Turnstile gehen nur
                über Drittanbieter-Plugins. Das österreichische
                Bundesverwaltungsgericht hat am 13.09.2024 entschieden, dass
                reCAPTCHA ohne vorherige Einwilligung DSGVO-widrig ist.
                Details dazu:{" "}
                <Link href="/blog/recaptcha-dsgvo-rechtsrisiko">
                  reCAPTCHA und die DSGVO
                </Link>
                .
              </p>
              <p>
                Flinkform speichert weder IP-Adressen noch User-Agents und
                braucht keinen externen Spam-Dienst: Honeypot, signierter
                Zeit-Check und Proof-of-Work laufen komplett auf deinem
                Server, mit Mathe-Fallback ohne JavaScript. Dazu kommen eine
                Aufbewahrungsfrist pro Formular mit automatischer Löschung
                und die Anbindung an die WordPress-Privacy-Tools.
              </p>
            </>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Deine Site ist komplett mit Elementor gebaut, du zahlst
                Elementor Pro ab dem Advanced-Plan sowieso weiter und bist
                mit den Formularen zufrieden. Dann hast du die Formulare
                schon bezahlt, ein Wechsel bringt dir wenig.
              </li>
              <li>
                Du brauchst Formulare in Elementor-Popups mit der nativen
                Popup-Builder-Verdrahtung. Das kann nur Elementor selbst.
              </li>
              <li>
                Du willst das Formular pixelgenau im visuellen Builder
                stylen, im selben Workflow wie den Rest des Designs.
                Flinkform setzt stattdessen auf theme.json-Vererbung plus
                Style-Panel im Block-Editor.
              </li>
            </ul>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              Elementor Forms ist eine gute Dreingabe für überzeugte
              Elementor-Pro-Kunden, aber ein schlechter Grund, einen Page
              Builder zu abonnieren. Wer Formulare ohne Elementor will,
              zahlt mit Flinkform genau nichts: Multi-Step, bedingte Logik,
              Submissions-Dashboard und DSGVO-sauberer Spam-Schutz sind
              kostenlos, in jedem Theme. Brauchst du später Stripe-Zahlungen,
              Datei-Uploads oder Webhooks, kostet{" "}
              <Link href="/pro">Flinkform Pro</Link> 59 € pro Jahr, exakt so
              viel wie der Elementor-Essential-Plan, der nicht einmal
              Einsendungen speichert. Wie sich Flinkform gegen klassische
              Formular-Plugins schlägt, zeigt der{" "}
              <Link href="/vergleich/wpforms-alternative">
                WPForms-Vergleich
              </Link>
              .
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
