import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Forminator Alternative: Flinkform im ehrlichen Vergleich",
  description:
    "Forminator hat eine großzügige Free-Version, speichert aber ab Werk IP-Adressen und lädt rund 129 KB Assets. Flinkform: Multi-Step, bedingte Logik, Spam-Schutz ohne US-Dienste, unter 15 KB JS.",
  alternates: { canonical: `${SITE_URL}/vergleich/forminator-alternative` },
};

const tldrRows = [
  {
    feature: "Multi-Step + bedingte Logik kostenlos",
    cells: [true, true],
  },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA / hCaptcha / Turnstile / Akismet"],
  },
  {
    feature: "Keine IP-Speicherung ab Werk",
    cells: [true, "IP wird standardmäßig gespeichert"],
  },
  {
    feature: "Frontend-Gewicht auf Formular-Seiten",
    cells: ["unter 15 KB JS", "ca. 47 KB CSS + 82 KB JS"],
  },
  {
    feature: "Formular-Aufbau",
    cells: ["Blöcke im Editor, Live-Vorschau", "eigener Builder, Vorschau separat"],
  },
  { feature: "Erbt Theme-Design (theme.json)", cells: [true, "eigene Styles"] },
  {
    feature: "Zahlungen in der Free-Version",
    cells: ["Pro-Add-on (Stripe)", "Stripe + PayPal kostenlos"],
  },
  { feature: "Quizze & Umfragen", cells: [false, true] },
  {
    feature: "Pro-Updates ohne Extra-Plugin",
    cells: [true, "braucht WPMU DEV Dashboard"],
  },
  {
    feature: "Sitz / Datenverständnis",
    cells: ["Deutschland, DSGVO by design", "USA (Incsub / WPMU DEV)"],
  },
] as const;

const faqs = [
  {
    q: "Ist Forminator wirklich kostenlos?",
    a: "Die Free-Version ist eine der großzügigsten am Markt: Conditional Logic, Multi-Step, Datei-Uploads, Stripe- und PayPal-Zahlungen, Quizze und Umfragen kosten nichts. Bezahlt wird für E-Signatur, Stripe-Abos, PDF-Generierung und Geolocation. Forminator Pro kostet regulär 60 bis 200 Dollar pro Jahr, je nach Anzahl der Websites.",
  },
  {
    q: "Speichert Forminator IP-Adressen?",
    a: "Ja, standardmäßig wird die IP-Adresse jeder Einsendung gespeichert, die Standard-Aufbewahrung liegt bei 12 Monaten. Beides lässt sich in den Privacy-Einstellungen ändern, aber du musst aktiv eingreifen. Flinkform speichert grundsätzlich keine IP-Adressen und keine User-Agents, ohne Konfiguration.",
  },
  {
    q: "Ist Forminator DSGVO-konform nutzbar?",
    a: "Mit Nacharbeit ja: IP-Speicherung abschalten, Aufbewahrungsfristen setzen und beim Spam-Schutz beachten, dass reCAPTCHA, hCaptcha und Turnstile US-Dienste sind, die Besucherdaten verarbeiten. Das österreichische Bundesverwaltungsgericht hat am 13.09.2024 entschieden, dass reCAPTCHA ohne vorherige Einwilligung DSGVO-widrig ist. Flinkform braucht keinen dieser Dienste.",
  },
  {
    q: "Warum ist Forminator so schwer?",
    a: "Forminator lädt auf Formular-Seiten laut unabhängigen Messungen rund 47 KB CSS und 82 KB JavaScript, weil der Funktionsumfang (Zahlungen, Quizze, Umfragen, Berechnungen) mitgeliefert wird. Flinkform kommt mit unter 15 KB Frontend-JS aus und lädt Assets nur auf Seiten, die tatsächlich ein Formular enthalten.",
  },
  {
    q: "Kann Flinkform Quizze und Umfragen wie Forminator?",
    a: "Nein. Flinkform ist bewusst ein Formular-Plugin: Kontakt-, Anfrage-, Bewerbungs- und Bestellformulare mit Multi-Step und bedingter Logik. Quizze, Umfragen und Polls gibt es nicht. Wenn du diese Features brauchst, ist Forminator die bessere Wahl.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="forminator-alternative"
      competitor="Forminator"
      h1="Forminator Alternative: Leichtgewicht statt Feature-Paket"
      updated="2026-07-03"
      answerFirst="Flinkform ist eine leichtgewichtige, DSGVO-freundliche Forminator-Alternative aus Deutschland: Multi-Step-Formulare, bedingte Logik und Spam-Schutz ohne externe Dienste, kostenlos und mit unter 15 KB Frontend-JS. Forminator hat eine sehr großzügige Free-Version, speichert aber ab Werk IP-Adressen, setzt beim Spam-Schutz auf US-Dienste wie reCAPTCHA und lädt auf Formular-Seiten rund 129 KB Assets. Wer schlanke Kontakt- und Anfrage-Formulare ohne Datenschutz-Nacharbeit will, ist mit Flinkform schneller am Ziel."
      tldrColumns={["Flinkform", "Forminator"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026. Forminator-Pro-Preise regulär 60 bis 200 $/Jahr laut wpmudev.com (die aktuelle 40-Prozent-Aktion ist ein Rabatt, kein Normalpreis). Asset-Größen laut unabhängiger Messung (wpmagnetar.com)."
      sections={[
        {
          heading: "Was Forminator gut macht",
          body: (
            <>
              <p>
                Ehrlich gesagt: Forminator hat wahrscheinlich die
                großzügigste Free-Version aller WordPress-Formular-Plugins.
                Conditional Logic, Multi-Step, Datei-Uploads, Berechnungen,
                sogar Stripe- und PayPal-Zahlungen, Quizze und Umfragen
                kosten nichts. Dazu 600.000+ aktive Installationen und
                4,8 von 5 Sternen auf WordPress.org bei über 2.000
                Bewertungen. Und die Pro-Stufen unterscheiden sich nur in
                der Website-Anzahl, nicht im Funktionsumfang, keine
                Feature-Treppe wie bei WPForms oder Formidable.
              </p>
              <p>
                Warum also eine Alternative suchen? Weil die Großzügigkeit
                zwei Preise hat: Gewicht und Datenschutz-Defaults.
              </p>
            </>
          ),
        },
        {
          heading: "Die Datenschutz-Defaults: ab Werk nicht DSGVO-freundlich",
          body: (
            <>
              <p>
                Forminator speichert standardmäßig die IP-Adresse jeder
                Einsendung, mit einer Standard-Aufbewahrung von 12 Monaten.
                Beides lässt sich abschalten bzw. verkürzen, aber du musst
                es wissen und aktiv tun, auf jeder Website neu. Beim
                Spam-Schutz bietet Forminator reCAPTCHA, hCaptcha,
                Cloudflare Turnstile und Akismet an, alles Dienste, die
                Besucherdaten an US-Anbieter übertragen. Das österreichische
                Bundesverwaltungsgericht hat am 13.09.2024 entschieden, dass
                reCAPTCHA ohne vorherige Einwilligung DSGVO-widrig ist, und
                die französische CNIL hat den reCAPTCHA-Einsatz ohne
                Einwilligung bereits mehrfach mitsanktioniert. Mehr dazu:{" "}
                <Link href="/blog/recaptcha-dsgvo-rechtsrisiko">
                  reCAPTCHA und die DSGVO: Warum dein Kontaktformular ein
                  Rechtsrisiko ist
                </Link>
                .
              </p>
              <p>
                Flinkform dreht die Defaults um: keine IP-Speicherung, kein
                User-Agent-Logging, Spam-Schutz komplett auf deinem Server
                (Honeypot, signierter Zeit-Check, Proof-of-Work mit
                Mathe-Fallback ohne JavaScript) und eine Aufbewahrungsfrist
                pro Formular mit automatischer Löschung. Es gibt nichts
                abzuschalten und nichts, was in die Datenschutzerklärung
                eingetragen werden müsste. Was ein DSGVO-sauberes
                Formular-Plugin sonst noch ausmacht, steht hier:{" "}
                <Link href="/wissen/dsgvo-konformes-formular-plugin">
                  DSGVO-konformes Formular-Plugin
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Gewicht: 129 KB gegen unter 15 KB",
          body: (
            <>
              <p>
                Der große Funktionsumfang wird mitgeliefert, auch wenn du
                nur ein Kontaktformular brauchst: Forminator lädt auf
                Formular-Seiten laut unabhängiger Messung rund 47 KB CSS und
                82 KB JavaScript. Dazu kommt, dass die Vorschau im Builder
                ein separater Schritt ist, du siehst beim Bauen nicht live,
                wie das Formular in deinem Theme aussieht.
              </p>
              <p>
                Flinkform ist als{" "}
                <Link href="/wissen/was-ist-ein-block-natives-formular-plugin">
                  block-natives Formular-Plugin
                </Link>{" "}
                gebaut: Jedes Feld ist ein Gutenberg-Block, das Formular
                entsteht direkt in der Seite mit Live-Vorschau in deinem
                Theme-Design. Im Frontend nutzt es die WordPress
                Interactivity API, kein jQuery, unter 15 KB JavaScript, und
                Assets werden nur auf Seiten geladen, die tatsächlich ein
                Formular enthalten. Farben, Schrift und Eckenradius erbt es
                automatisch über theme.json, statt eigene Styles
                mitzubringen.
              </p>
            </>
          ),
        },
        {
          heading: "Teil des WPMU-DEV-Bundles",
          body: (
            <>
              <p>
                Forminator ist kein eigenständiges Produkt, sondern Teil des
                WPMU-DEV-Ökosystems von Incsub (Smush, Defender, Hummingbird
                und mehr). Das hat Vorteile, etwa den schnellen
                WPMU-DEV-Support. Aber es bindet dich: Für Updates der
                Pro-Version musst du das zusätzliche Plugin "WPMU DEV
                Dashboard" installieren, und die Preislogik ist auf die
                Mitgliedschaft ausgerichtet. Wer nur ein Formular-Plugin
                will, kauft ein Stück Ökosystem mit.
              </p>
              <p>
                Flinkform ist genau ein Plugin mit genau einer Aufgabe. Das
                kostenlose Plugin kommt von WordPress.org, das optionale{" "}
                <Link href="/pro">Flinkform Pro</Link> ist ein einzelnes
                Add-on ohne Dashboard-Pflicht und ohne Bundle.
              </p>
            </>
          ),
        },
        {
          heading: "Sicherheitshistorie: CVE-2024-28890",
          body: (
            <p>
              2024 wurde in Forminator eine kritische Lücke gefunden
              (CVE-2024-28890, CVSS 9.8): unbeschränkter Datei-Upload, dazu
              eine XSS- und eine SQL-Injection-Schwachstelle, behoben in
              Version 1.29.3. Betroffen waren mehrere hunderttausend
              Websites. Das ist kein K.-o.-Kriterium, Sicherheitslücken
              treffen früher oder später jedes große Plugin, und WPMU DEV
              hat gepatcht. Aber es zeigt: Je größer die Codebasis, desto
              größer die Angriffsfläche. Ein schlankes Plugin ohne
              Datei-Upload, Zahlungen und Quiz-Engine im kostenlosen Kern
              hat schlicht weniger Stellen, an denen etwas schiefgehen kann.
            </p>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Du brauchst Quizze, Umfragen oder Polls. Die hat Flinkform
                nicht und wird sie auch nicht bekommen.
              </li>
              <li>
                Du willst Zahlungen komplett kostenlos: Forminator bietet
                Stripe und PayPal in der Free-Version. Bei Flinkform sind
                Stripe-Zahlungen Teil von{" "}
                <Link href="/pro">Flinkform Pro</Link> (ab 59 € pro Jahr).
              </li>
              <li>
                Du nutzt die Google-Sheets-Anbindung oder
                Frontend-Post-Submissions von Forminator. Beides gibt es in
                Flinkform nicht.
              </li>
              <li>
                Du bist ohnehin WPMU-DEV-Mitglied und nutzt Hosting, Smush
                und Co. Dann ist Forminator praktisch schon bezahlt.
              </li>
              <li>
                Deine Website läuft noch ohne Block-Editor. Flinkform
                braucht WordPress 6.5+ und PHP 8.1+.
              </li>
            </ul>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              Forminator ist das Schweizer Taschenmesser unter den
              Formular-Plugins: extrem viel kostenlos, aber schwer, mit
              IP-Speicherung ab Werk und Spam-Schutz über US-Dienste. Wenn
              du Quizze, Umfragen oder kostenlose Zahlungen brauchst, bleib
              dabei. Wenn du Kontakt-, Anfrage- oder Multi-Step-Formulare
              willst, die schnell laden, dein Theme-Design erben und ohne
              Datenschutz-Nacharbeit auskommen, ist Flinkform die schlankere
              Wahl: kostenlos, unter 15 KB Frontend-JS, Spam-Schutz ohne
              externe Dienste (wie das funktioniert, steht unter{" "}
              <Link href="/wissen/formular-spam-stoppen-wordpress">
                Formular-Spam stoppen ohne CAPTCHA
              </Link>
              ), und wenn du später Zahlungen brauchst, kostet Flinkform Pro
              59 € im Jahr.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
