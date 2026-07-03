import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "WPForms Alternative auf Deutsch: Flinkform im ehrlichen Vergleich",
  description:
    "WPForms kostet regulär 99 bis 599 Dollar pro Jahr, die Lite-Version speichert keine Einsendungen. Flinkform bietet Multi-Step, bedingte Logik und Submissions-Dashboard kostenlos, DSGVO by design.",
  alternates: { canonical: `${SITE_URL}/vergleich/wpforms-alternative` },
};

const tldrRows = [
  {
    feature: "Preis für Multi-Step + bedingte Logik",
    cells: ["Kostenlos", "ab 199 $/Jahr (Plus)"],
  },
  {
    feature: "Einsendungen speichern",
    cells: ["kostenlos", "erst ab Basic (99 $/Jahr)"],
  },
  { feature: "Formular-Aufbau", cells: ["Blöcke im Editor", "eigener Drag-&-Drop-Builder"] },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA / hCaptcha / Turnstile"],
  },
  { feature: "Keine IP-Speicherung ab Werk", cells: [true, false] },
  { feature: "Erbt Theme-Design (theme.json)", cells: [true, "eigene Styles"] },
  {
    feature: "Stripe ohne Zusatzgebühr",
    cells: ["Pro-Add-on, 0 % Aufschlag", "erst ab Pro (399 $/Jahr), darunter +3 %"],
  },
  { feature: "Sitz / Datenverständnis", cells: ["Deutschland, DSGVO by design", "USA"] },
] as const;

const faqs = [
  {
    q: "Was kostet WPForms wirklich?",
    a: "Die regulären Preise (Renewal-Preise) liegen bei 99 $ (Basic), 199 $ (Plus), 399 $ (Pro) und 599 $ (Elite) pro Jahr. Die beworbenen Rabattpreise gelten nur im ersten Jahr. Die kostenlose Lite-Version speichert keine Einsendungen in der Datenbank.",
  },
  {
    q: "Ist WPForms schlecht?",
    a: "Nein. WPForms ist poliert, hat einen ausgereiften Drag-&-Drop-Builder, viele Vorlagen und ein großes Ökosystem. Es ist aber ein US-Produkt mit Paywall-Modell: Die Funktionen, die Flinkform kostenlos mitbringt, kosten bei WPForms 99 bis 199 Dollar pro Jahr, und der Spam-Schutz hängt an US-Diensten.",
  },
  {
    q: "Kann Flinkform Zahlungen wie WPForms?",
    a: "Ja, über das Pro-Add-on: Stripe Payments mit Kreditkarte, SEPA-Lastschrift, Apple Pay und Google Pay, ohne prozentualen Aufschlag. Bei WPForms zahlst du unterhalb des Pro-Plans (399 $/Jahr) zusätzlich 3 % Gebühr auf jede Stripe-Zahlung.",
  },
  {
    q: "Speichert WPForms IP-Adressen?",
    a: "WPForms speichert bei Einsendungen standardmäßig Metadaten wie die IP-Adresse des Absenders (abschaltbar per Einstellung/GDPR-Modus). Flinkform speichert grundsätzlich keine IP-Adressen und keine User-Agents, ohne dass du etwas konfigurieren musst.",
  },
  {
    q: "Für wen ist WPForms trotzdem die bessere Wahl?",
    a: "Wenn du auf eine der vielen WPForms-spezifischen Integrationen angewiesen bist (etwa Salesforce oder HubSpot im Elite-Plan), sehr viele fertige Formular-Vorlagen willst oder bewusst einen visuellen Builder außerhalb des Block-Editors bevorzugst.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="wpforms-alternative"
      competitor="WPForms"
      h1="WPForms Alternative: Alle Features, ohne die Paywall"
      updated="2026-07-03"
      answerFirst="Flinkform ist eine kostenlose WPForms-Alternative aus Deutschland: Multi-Step-Formulare, bedingte Logik und Submissions-Dashboard sind im freien Plugin enthalten. Bei WPForms kosten dieselben Funktionen regulär ab 199 Dollar pro Jahr, und die Lite-Version speichert nicht einmal Einsendungen. Dazu arbeitet Flinkform ohne US-Spam-Dienste und speichert keine IP-Adressen."
      tldrColumns={["Flinkform", "WPForms"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026, reguläre Listenpreise laut wpforms.com/pricing (Renewal-Preise, nicht die Erstjahres-Rabatte)."
      sections={[
        {
          heading: "Was WPForms gut macht",
          body: (
            <>
              <p>
                WPForms ist der kommerziell erfolgreichste Formular-Builder
                im WordPress-Ökosystem, und das nicht ohne Grund: Der
                Drag-&-Drop-Builder ist ausgereift, es gibt hunderte
                Formular-Vorlagen, der Onboarding-Prozess ist vorbildlich und
                das Add-on-Ökosystem deckt fast jeden Anwendungsfall ab. Wer
                den vollen Pro- oder Elite-Plan bezahlt, bekommt ein sehr
                komplettes Produkt.
              </p>
              <p>Die Frage ist nur: Musst du das alles bezahlen?</p>
            </>
          ),
        },
        {
          heading: "Das Paywall-Modell im Detail",
          body: (
            <>
              <p>
                WPForms verteilt Grundfunktionen auf Preisstufen. Die
                regulären Jahrespreise (nach dem ersten Jahr):
              </p>
              <ul>
                <li>
                  <strong>Lite (kostenlos):</strong> Basis-Felder, aber keine
                  Speicherung der Einsendungen in der Datenbank. Geht eine
                  Benachrichtigungs-Mail verloren, ist die Anfrage weg.
                </li>
                <li>
                  <strong>Basic (99 $/Jahr):</strong> Einsendungen werden
                  gespeichert, bedingte Logik kommt dazu. 1 Website.
                </li>
                <li>
                  <strong>Plus (199 $/Jahr):</strong> Newsletter-Anbindungen.
                </li>
                <li>
                  <strong>Pro (399 $/Jahr):</strong> Multi-Step-Formulare
                  (Lead Forms), Zahlungen ohne 3-%-Aufschlag, Webhooks.
                </li>
                <li>
                  <strong>Elite (599 $/Jahr):</strong> Salesforce, HubSpot,
                  unbegrenzte Websites.
                </li>
              </ul>
              <p>
                Achtung beim Preisvergleich: Die auf der Website beworbenen
                Preise (z. B. 49,50 $ für Basic) sind Erstjahres-Rabatte. Ab
                dem zweiten Jahr zahlst du den vollen Preis. Und unterhalb
                des Pro-Plans erhebt WPForms auf Stripe-Zahlungen zusätzlich
                3 % Gebühr, zusätzlich zu den Stripe-Gebühren selbst.
              </p>
            </>
          ),
        },
        {
          heading: "Der Datenschutz-Unterschied",
          body: (
            <>
              <p>
                Für DACH-Agenturen und Freelancer ist der zweite Unterschied
                oft wichtiger als der Preis: WPForms ist ein US-Produkt und
                setzt für den Spam-Schutz auf reCAPTCHA, hCaptcha oder
                Cloudflare Turnstile, alles US-Dienste, die Besucherdaten
                verarbeiten. Das österreichische Bundesverwaltungsgericht hat
                am 13.09.2024 entschieden, dass reCAPTCHA ohne vorherige
                Einwilligung DSGVO-widrig ist. Zudem speichert WPForms bei
                Einsendungen standardmäßig die IP-Adresse.
              </p>
              <p>
                Flinkform dreht das um: Der Spam-Schutz (Honeypot, signierter
                Zeit-Check, Proof-of-Work) läuft komplett auf deinem Server,
                keine IP-Speicherung, kein User-Agent-Logging, kein externer
                Dienst. Es gibt nichts zu konfigurieren und nichts, was in
                die Datenschutzerklärung eingetragen werden müsste. Mehr
                dazu:{" "}
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
          heading: "Builder-Philosophie: Block-Editor statt Extra-UI",
          body: (
            <>
              <p>
                WPForms öffnet einen eigenen Vollbild-Builder, der nichts mit
                dem WordPress-Editor zu tun hat. Du baust das Formular in
                einer separaten Umgebung und bettest es dann ein. Flinkform
                geht den nativen Weg: Jedes Feld ist ein Gutenberg-Block, das
                Formular entsteht direkt in der Seite, an der Stelle, wo es
                erscheint, mit echter Live-Vorschau in deinem Theme-Design.
                Kein Kontextwechsel, keine zweite UI, die du lernen musst.
              </p>
              <p>
                Dazu erbt Flinkform dein Theme-Design automatisch über
                theme.json: Farben, Schrift, Abstände, Eckenradius. WPForms
                bringt eigene Styles mit, die selten auf Anhieb zum Rest der
                Seite passen.
              </p>
            </>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Du nutzt WPForms-Integrationen, die Flinkform (noch) nicht
                hat, etwa Salesforce, HubSpot oder die Geolocation-Features.
              </li>
              <li>
                Dein Team hat hunderte Formulare auf WPForms-Vorlagen
                aufgebaut und der jährliche Lizenzpreis ist eingepreist.
              </li>
              <li>
                Du willst bewusst einen visuellen Builder außerhalb des
                Block-Editors, z. B. weil deine Site noch auf dem Classic
                Editor läuft. Flinkform braucht WordPress 6.5+ mit
                Block-Editor.
              </li>
            </ul>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              WPForms ist ein gutes, aber teures US-Produkt: Die Funktionen,
              die du wirklich brauchst, liegen hinter einer Paywall von
              regulär 99 bis 399 Dollar pro Jahr, und der Datenschutz ist
              Verhandlungssache. Flinkform liefert Multi-Step, bedingte
              Logik, Submissions-Dashboard und DSGVO-sauberen Spam-Schutz
              kostenlos. Wenn dein Formular später Zahlungen oder Webhooks
              braucht, kostet <Link href="/pro">Flinkform Pro</Link> 59 € im
              Jahr, weniger als der günstigste WPForms-Plan.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
