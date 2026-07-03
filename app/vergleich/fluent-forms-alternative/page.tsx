import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fluent Forms Alternative auf Deutsch: Flinkform im ehrlichen Vergleich",
  description:
    "Fluent Forms bietet viel fürs Geld, sperrt aber Multi-Step hinter Pro und setzt auf US-Spam-Dienste. Flinkform: Multi-Step und bedingte Logik kostenlos, Spam-Schutz ohne externe Dienste, keine IP-Speicherung.",
  alternates: { canonical: `${SITE_URL}/vergleich/fluent-forms-alternative` },
};

const tldrRows = [
  {
    feature: "Multi-Step-Formulare",
    cells: ["kostenlos", "nur Pro (regulär ab 79 $/Jahr)"],
  },
  { feature: "Bedingte Logik", cells: ["kostenlos", "kostenlos"] },
  {
    feature: "Formular-Aufbau",
    cells: ["Blöcke im Editor", "eigener Drag-&-Drop-Builder"],
  },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA / hCaptcha / Turnstile"],
  },
  {
    feature: "Keine IP-Speicherung ab Werk",
    cells: [true, "IP-Logging vorhanden, per Schalter abschaltbar"],
  },
  { feature: "Erbt Theme-Design (theme.json)", cells: [true, "eigene Styles"] },
  {
    feature: "Alle Features in jedem Bezahl-Tarif",
    cells: [true, true],
  },
  {
    feature: "Regulärer Einstiegspreis Pro",
    cells: ["59 €/Jahr (1 Website)", "79 $/Jahr (1 Website)"],
  },
  {
    feature: "Sitz / Datenverständnis",
    cells: ["Deutschland, DSGVO by design", "WPManageNinja, Bangladesch"],
  },
] as const;

const faqs = [
  {
    q: "Was kostet Fluent Forms wirklich?",
    a: "Die regulären Jahrespreise liegen bei 79 $ (Single Site), 159 $ (Agency, 5 Websites) und 299 $ (Unlimited). Die beworbenen niedrigeren Preise sind Erstjahres-Rabatte von bis zu 30 Prozent, das Renewal läuft zum Listenpreis. Fair: Alle Bezahl-Tarife enthalten alle Features, und es gibt Lifetime-Optionen ab regulär 349 $.",
  },
  {
    q: "Ist Fluent Forms schlecht?",
    a: "Nein, im Gegenteil: Fluent Forms gehört zu den fairsten Angeboten am Markt. Die kostenlose Version kann bedingte Logik, Conversational Forms und Entry-Export, alle Bezahl-Tarife enthalten alle Features. Die Schwachpunkte liegen woanders: Multi-Step ist Pro-only, der Spam-Schutz hängt an US-Diensten wie reCAPTCHA, und die Formulare entstehen in einem eigenen Builder statt im Block-Editor.",
  },
  {
    q: "Hat Flinkform so viele Feldtypen wie Fluent Forms?",
    a: "Nein. Fluent Forms Pro wirbt mit über 55 Feldtypen inklusive Quiz, Umfragen und Nutzer-Registrierung. Flinkform konzentriert sich auf 13 Feldtypen plus Section-Heading und Page-Break, dazu Multi-Step und bedingte Logik kostenlos. Wer Quiz- oder Registrierungs-Formulare braucht, ist bei Fluent Forms besser aufgehoben.",
  },
  {
    q: "Speichert Fluent Forms IP-Adressen?",
    a: "Fluent Forms erfasst bei Einsendungen IP-Adressen und bietet dafür einen globalen Schalter zum Abschalten des IP-Loggings. Du musst also selbst daran denken und es dokumentieren. Flinkform speichert grundsätzlich keine IP-Adressen und keine User-Agents, ohne dass du etwas konfigurieren musst.",
  },
  {
    q: "Für wen ist Fluent Forms die bessere Wahl?",
    a: "Wenn du Conversational Forms, Quiz- und Umfrage-Funktionen, Nutzer-Registrierung oder eine der über 60 Integrationen brauchst. Auch wer bereits FluentCRM oder FluentSMTP einsetzt, profitiert vom Ökosystem aus einem Haus. Für ein klassisches Kontakt-, Anfrage- oder Bewerbungsformular mit DSGVO-Fokus ist Flinkform die schlankere Wahl.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="fluent-forms-alternative"
      competitor="Fluent Forms"
      h1="Fluent Forms Alternative: Block-nativ und DSGVO-sauber"
      updated="2026-07-03"
      answerFirst="Flinkform ist eine Fluent-Forms-Alternative aus Deutschland: Multi-Step-Formulare und bedingte Logik sind im kostenlosen Plugin enthalten, der Spam-Schutz läuft ohne reCAPTCHA oder andere US-Dienste, und es werden keine IP-Adressen gespeichert. Fluent Forms bietet viel fürs Geld, sperrt Multi-Step aber hinter der Pro-Version (regulär ab 79 Dollar pro Jahr) und setzt beim Spam-Schutz auf reCAPTCHA, hCaptcha oder Turnstile. Dazu baut Flinkform Formulare direkt im WordPress-Block-Editor statt in einem eigenen Builder."
      tldrColumns={["Flinkform", "Fluent Forms"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026, reguläre Listenpreise laut fluentforms.com/pricing (Renewal-Preise, nicht die Erstjahres-Rabatte von bis zu 30 %)."
      sections={[
        {
          heading: "Was Fluent Forms gut macht",
          body: (
            <>
              <p>
                Fluent Forms ist einer der stärksten Formular-Builder im
                WordPress-Ökosystem, und das muss dieser Vergleich klar
                sagen. Die kostenlose Version kann mehr als die meisten
                Free-Versionen der Konkurrenz: bedingte Logik, Conversational
                Forms, über 25 Feldtypen, Entry-Export als CSV, Excel oder
                JSON. Über 700.000 aktive Installationen und 4,8 von 5
                Sternen auf WordPress.org sprechen für sich.
              </p>
              <p>
                Auch das Preismodell ist fair: Alle Bezahl-Tarife enthalten
                alle Pro-Features, der Unterschied ist nur die Anzahl der
                Websites. Es gibt Lifetime-Lizenzen und 14 Tage
                Geld-zurück-Garantie. Dazu kommt das Ökosystem aus einem
                Haus: FluentCRM und FluentSMTP integrieren nativ.
              </p>
              <p>
                Wo also liegt der Unterschied? An drei Stellen: Multi-Step,
                Spam-Schutz und Builder-Philosophie.
              </p>
            </>
          ),
        },
        {
          heading: "Der Multi-Step-Haken",
          body: (
            <>
              <p>
                Fluent Forms macht bedingte Logik kostenlos, sperrt
                Multi-Step-Formulare aber in die Pro-Version, regulär ab 79
                Dollar pro Jahr. Genau umgekehrt wäre es für viele Nutzer
                sinnvoller: Mehrstufige Formulare sind der größte
                Conversion-Hebel bei längeren Anfrage- und
                Bewerbungsformularen.
              </p>
              <p>
                Flinkform liefert beides kostenlos: Multi-Step mit
                Fortschrittsanzeige (Balken, Punkte oder Zahlen),
                Validierung pro Schritt und bedingte Logik, die Felder und
                ganze Schritte ein- oder ausblendet und Schritte
                überspringen kann. Einzelne Fluent-Forms-Nutzer kritisieren
                in Reviews auf WordPress.org gerade das Fehlen eines
                konditionalen Seiten-Skips in Multi-Step-Formularen. Wie du
                so ein Formular aufbaust, zeigt der Leitfaden{" "}
                <Link href="/wissen/multi-step-formular-wordpress">
                  Multi-Step-Formular in WordPress erstellen
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Spam-Schutz: US-Dienste gegen lokale Prüfung",
          body: (
            <>
              <p>
                Für den Spam-Schutz bindet Fluent Forms externe Dienste an:
                Google reCAPTCHA, hCaptcha oder Cloudflare Turnstile,
                ergänzt um Honeypot und optionale Anbindungen wie Akismet.
                Alle drei CAPTCHA-Dienste sind US-Dienste, die Besucherdaten
                verarbeiten. Das österreichische Bundesverwaltungsgericht
                hat am 13.09.2024 entschieden, dass reCAPTCHA ohne vorherige
                Einwilligung DSGVO-widrig ist, und die französische CNIL hat
                2023 in zwei Fällen Bußgelder verhängt, in denen reCAPTCHA
                eine Rolle spielte. Ein Nutzer-Review kritisiert zudem, dass
                das reCAPTCHA-Badge bei Fluent Forms seitenweit eingeblendet
                wird.
              </p>
              <p>
                Flinkform braucht keinen dieser Dienste: Honeypot,
                signierter Zeit-Check und Proof-of-Work laufen komplett auf
                deinem Server, mit Mathe-Fallback für Besucher ohne
                JavaScript. Kein API-Key, kein externer Request, kein
                Eintrag in der Datenschutzerklärung. Hintergründe:{" "}
                <Link href="/blog/recaptcha-dsgvo-rechtsrisiko">
                  reCAPTCHA und die DSGVO
                </Link>{" "}
                und{" "}
                <Link href="/wissen/formular-spam-stoppen-wordpress">
                  Formular-Spam stoppen ohne CAPTCHA
                </Link>
                .
              </p>
              <p>
                Dazu kommt das IP-Logging: Fluent Forms erfasst bei
                Einsendungen IP-Adressen und bietet einen globalen Schalter,
                um das abzustellen. Das ist besser als gar keine Option,
                aber du musst selbst daran denken. Flinkform speichert von
                vornherein keine IP-Adressen und keine User-Agents.
              </p>
            </>
          ),
        },
        {
          heading: "Builder-Philosophie: Block-Editor statt Extra-UI",
          body: (
            <>
              <p>
                Fluent Forms baut Formulare in einem eigenen
                Drag-&-Drop-Builder in einer separaten Admin-Oberfläche und
                bettet sie per Shortcode oder Embed-Block ein. Der Builder
                ist mächtig, aber genau diese Fülle an Optionen macht die
                Oberfläche für Einsteiger komplex, ein wiederkehrender Punkt
                in Reviews.
              </p>
              <p>
                Flinkform geht den nativen Weg: Jedes Feld ist ein
                Gutenberg-Block, das Formular entsteht direkt in der Seite,
                mit Live-Vorschau in deinem Theme-Design. Farben, Schrift
                und Eckenradius kommen automatisch aus theme.json, ergänzt
                um ein Style-Panel mit 4 Feld-Stilen, 4 Label-Positionen und
                3 Button-Stilen. Kein Kontextwechsel, keine zweite UI. Was
                das im Detail bedeutet, erklärt{" "}
                <Link href="/wissen/was-ist-ein-block-natives-formular-plugin">
                  Was ist ein block-natives Formular-Plugin?
                </Link>
              </p>
            </>
          ),
        },
        {
          heading: "Preisvergleich: fair gegen fair",
          body: (
            <>
              <p>
                Beim Preis nehmen sich beide wenig, und das soll dieser
                Vergleich nicht verschleiern. Die regulären Preise, Stand
                Juli 2026:
              </p>
              <ul>
                <li>
                  <strong>Fluent Forms Pro:</strong> 79 $ (1 Website), 159 $
                  (5 Websites), 299 $ (unbegrenzt) pro Jahr. Beworbene
                  Rabatte gelten nur im ersten Jahr. Lifetime ab regulär
                  349 $.
                </li>
                <li>
                  <strong>Flinkform Pro:</strong> 59 € (1 Website), 99 €
                  (3 Websites), 149 € (bis 25 Websites, unter 6 € pro
                  Website), 299 € (unbegrenzt) pro Jahr. Zum Launch gibt es
                  eine Lifetime-Lizenz für einmalig 399 € (bis 25 Websites).
                  14 Tage Geld-zurück-Garantie.
                </li>
              </ul>
              <p>
                Der größere Unterschied liegt in der kostenlosen Version:
                Bei Flinkform sind Multi-Step, bedingte Logik,
                Submissions-Dashboard, Danke-Seiten-Redirect mit
                Tracking-Parametern und Auto-Löschung nach Aufbewahrungsfrist
                schon im freien Plugin enthalten.{" "}
                <Link href="/pro">Flinkform Pro</Link> ergänzt Stripe-Zahlungen
                (Kreditkarte, SEPA, Apple Pay, Google Pay), Berechnungsfelder,
                Multi-Datei-Upload, SMTP, Webhooks, Newsletter-Anbindung und
                CSV-Export.
              </p>
            </>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Du brauchst Conversational Forms, Quiz- und
                Umfrage-Funktionen, Inventory oder Nutzer-Registrierung.
                Das kann Flinkform nicht und es steht auch nicht auf der
                Roadmap.
              </li>
              <li>
                Du nutzt bereits FluentCRM oder FluentSMTP und willst das
                Ökosystem aus einem Haus behalten.
              </li>
              <li>
                Du bist auf eine der über 60 Pro-Integrationen von Fluent
                Forms angewiesen. Flinkform deckt Anbindungen über Webhooks
                und drei Newsletter-Dienste (Brevo, Mailchimp, CleverReach)
                ab, mehr nicht.
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
              Fluent Forms ist ein faires, funktionsreiches Produkt und
              einer der besten eigenständigen Builder am Markt. Wer aber ein
              Formular sucht, das Multi-Step und bedingte Logik kostenlos
              mitbringt, direkt im Block-Editor entsteht und ohne
              US-Spam-Dienste und IP-Speicherung auskommt, bekommt mit
              Flinkform das konsequentere Werkzeug für den DACH-Raum. Und wenn
              es später Zahlungen oder Webhooks braucht, ist{" "}
              <Link href="/pro">Flinkform Pro</Link> mit 59 € im Jahr sogar
              günstiger als der Einstieg bei Fluent Forms. Weitere
              Vergleiche findest du in der{" "}
              <Link href="/vergleich">Vergleichsübersicht</Link>.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
