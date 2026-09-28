import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "SureForms Alternative aus Deutschland: Flinkform im ehrlichen Vergleich",
  description:
    "SureForms und Flinkform sind beide block-nativ. Der Unterschied: Bei Flinkform sind Multi-Step und bedingte Logik kostenlos, und der Spam-Schutz ist ab Werk dreistufig, ohne externen Dienst. Der ehrliche Vergleich.",
  alternates: { canonical: `${SITE_URL}/vergleich/sureforms-alternative` },
};

const tldrRows = [
  {
    feature: "Formular-Aufbau",
    cells: ["Blöcke im Editor", "Blöcke im Editor"],
  },
  {
    feature: "Multi-Step-Formulare",
    cells: ["kostenlos", "nur Pro"],
  },
  { feature: "Bedingte Logik", cells: ["kostenlos", "nur Pro"] },
  {
    feature: "Spam-Schutz ab Werk, ohne externen Dienst",
    cells: ["Honeypot, Zeit-Check, Proof-of-Work", "Honeypot einschalten, mehr über reCAPTCHA, hCaptcha, Turnstile"],
  },
  { feature: "Keine IP-Speicherung ab Werk", cells: [true, true] },
  {
    feature: "AI-Formular-Generator",
    cells: [false, "ja, auch kostenlos (limitiert)"],
  },
  {
    feature: "Stripe-Zahlungen",
    cells: [
      "Pro-Add-on, inkl. SEPA-Lastschrift",
      "Basis-Zahlungen kostenlos",
    ],
  },
  {
    feature: "Sitz / Hersteller",
    cells: ["Deutschland (dbw media, Heilbronn)", "Indien (Brainstorm Force)"],
  },
] as const;

const faqs = [
  {
    q: "Ist SureForms DSGVO-konform?",
    a: "SureForms macht vieles richtig: IP-Logging ist ab Werk deaktiviert, und es gibt einen GDPR-Compliance-Modus pro Formular. Für Spam-Schutz über den Honeypot hinaus bietet SureForms reCAPTCHA, hCaptcha oder Cloudflare Turnstile an, also externe Dienste. Seit April 2026 ist Google bei reCAPTCHA Auftragsverarbeiter, das bedeutet AV-Vertrag, Eintrag in der Datenschutzerklärung und Übermittlung in die USA. Flinkform braucht gar keinen externen Dienst.",
  },
  {
    q: "Was kostet SureForms?",
    a: "Einen Plan für eine einzelne Website gibt es nicht mehr. Der Einstieg ist Team für 5 Websites, regulär 149 Dollar pro Jahr (99 Dollar im ersten Jahr), darüber Agency für 100 Websites zu 229 Dollar (Stand September 2026). Alle Bezahlpläne enthalten alle Features, es skaliert nur die Anzahl der Websites, und es gibt eine 14-Tage-Geld-zurück-Garantie. Die kostenlose Version auf WordPress.org enthält unter anderem Einsendungen im Dashboard, Stripe-Basiszahlungen und einen limitierten AI-Formular-Generator; Multi-Step und bedingte Logik gehören zu den Bezahlplänen.",
  },
  {
    q: "Was kann SureForms, das Flinkform nicht kann?",
    a: "Einiges: AI-Formular-Generierung per Texteingabe, Stripe-Basiszahlungen schon in der kostenlosen Version, und in Pro Features wie Signatur-Feld, Rating, Repeater, Save & Resume, Quiz und Umfragen, Registrierungs-Formulare, PDF-Generierung und PayPal. Wer eines dieser Features braucht, ist bei SureForms besser aufgehoben.",
  },
  {
    q: "Braucht Flinkform ein CAPTCHA?",
    a: "Nein. Flinkform kombiniert Honeypot, einen signierten Zeit-Check und Proof-of-Work im Browser, mit einer einfachen Mathe-Frage als Fallback ohne JavaScript. Alles läuft auf deinem Server. Flinkform bietet bewusst keine Anbindung an reCAPTCHA, hCaptcha oder Turnstile an, auch nicht optional.",
  },
  {
    q: "Für wen ist SureForms die bessere Wahl?",
    a: "Wenn du kostenlose Stripe-Zahlungen brauchst, den AI-Generator nutzen willst, Pro-Features wie Signatur, Quiz oder Save & Resume benötigst oder ohnehin im Ökosystem von Brainstorm Force (Astra, Spectra, SureCart) arbeitest. SureForms ist ein starkes, modernes Plugin mit einem großen Team dahinter.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="sureforms-alternative"
      competitor="SureForms"
      h1="SureForms Alternative: Block-nativ gegen block-nativ"
      answerFirst="Flinkform ist eine SureForms-Alternative aus Deutschland. Beide Plugins bauen Formulare direkt im WordPress-Block-Editor, doch Flinkform schützt ab Werk dreistufig vor Spam, ohne reCAPTCHA, hCaptcha oder Turnstile, übernimmt dein Theme-Design über theme.json und lädt unter 15 KB Frontend-JavaScript. Multi-Step-Formulare und bedingte Logik sind bei Flinkform kostenlos, bei SureForms Teil des Bezahlplans. SureForms punktet dafür mit AI-Formular-Generator und kostenlosen Stripe-Basiszahlungen."
      tldrColumns={["Flinkform", "SureForms"]}
      tldrRows={tldrRows}
      tldrNote="Stand September 2026. SureForms-Angaben laut wordpress.org/plugins/sureforms und sureforms.com/plans (Team: 149 $ regulär für 5 Websites, einen Einzel-Website-Plan gibt es nicht mehr)."
      sections={[
        {
          heading: "Was SureForms gut macht",
          body: (
            <>
              <p>
                Vorab in aller Klarheit: SureForms ist der stärkste
                Konkurrent in dieser Vergleichsserie. Es kommt von Brainstorm
                Force, dem Haus hinter dem Astra-Theme, Spectra und SureCart,
                mit einem Team von über 130 Leuten. Seit dem Launch 2024 hat
                es über 500.000 aktive Installationen erreicht. Das Plugin
                ist wie Flinkform block-nativ, das Admin-UI ist modern, und
                der AI-Formular-Generator baut Formulare per Texteingabe,
                limitiert sogar in der kostenlosen Version.
              </p>
              <p>
                Auch beim Datenschutz setzt SureForms einen guten Default:
                IP-Logging ist ab Werk deaktiviert, und ein
                GDPR-Compliance-Modus pro Formular verhindert die Speicherung
                von Browser- und Gerätedaten. Das Preismodell ist fair: alle
                Features in jedem Bezahlplan, es skaliert nur die Anzahl der
                Websites. Das respektieren wir, denn Flinkform Pro macht es
                genauso.
              </p>
            </>
          ),
        },
        {
          heading: "Zwei block-native Plugins, zwei Philosophien",
          body: (
            <>
              <p>
                SureForms und Flinkform verfolgen denselben Grundansatz:
                Formulare entstehen direkt im Block-Editor, ohne separaten
                Builder, ohne Shortcode-Zwang. Was das im Alltag bedeutet,
                erklärt unser Artikel{" "}
                <Link href="/wissen/was-ist-ein-block-natives-formular-plugin">
                  Was ist ein block-natives Formular-Plugin?
                </Link>
                . Der Unterschied liegt im Design-Ansatz: SureForms bringt
                ein eigenes Styling-System mit. Flinkform erbt dein
                Theme-Design automatisch über theme.json, also Farben,
                Schrift, Abstände und Eckenradius, ergänzt um ein Style-Panel
                mit 4 Feld-Stilen, 4 Label-Positionen und 3 Button-Stilen.
                Das Formular sieht ohne einen Handgriff so aus wie der Rest
                deiner Website.
              </p>
              <p>
                Beim Frontend-Gewicht legt sich Flinkform fest: unter 15 KB
                JavaScript, gebaut auf der WordPress Interactivity API, ohne
                jQuery, und die Assets laden nur auf Seiten, die tatsächlich
                ein Formular enthalten. SureForms gilt ebenfalls als schnell,
                nennt aber keine offizielle Zahl.
              </p>
            </>
          ),
        },
        {
          heading: "Spam-Schutz: der eigentliche Unterschied",
          body: (
            <>
              <p>
                Hier trennen sich die Wege. SureForms bietet einen Honeypot,
                den du einschaltest, und darüber hinaus Google reCAPTCHA,
                hCaptcha oder Cloudflare Turnstile. Das sind externe Dienste.
                Seit April 2026 arbeitet Google bei reCAPTCHA als
                Auftragsverarbeiter. Das ist einfacher als früher, bleibt
                aber Aufwand: AV-Vertrag, Eintrag in der
                Datenschutzerklärung, Übermittlung in die USA. Details dazu:{" "}
                <Link href="/blog/recaptcha-dsgvo-rechtsrisiko">
                  reCAPTCHA und die DSGVO
                </Link>
                .
              </p>
              <p>
                Flinkform braucht keinen dieser Dienste: Honeypot, ein
                signierter Zeit-Check und Proof-of-Work im Browser laufen
                komplett auf deinem Server, mit einer Mathe-Frage als
                Fallback ohne JavaScript. Nichts zu konfigurieren, kein
                Drittanbieter in der Datenschutzerklärung, kein
                Consent-Banner nötig. Der
                ehrliche Gegenpunkt: Flinkform bietet bewusst gar keine
                CAPTCHA-Provider-Anbindung an, auch nicht optional. Wer
                zwingend Turnstile einsetzen will, kann das mit Flinkform
                nicht. Wie der Schutz im Detail funktioniert, steht in{" "}
                <Link href="/wissen/wordpress-formular-ohne-recaptcha">
                  WordPress-Formular ohne reCAPTCHA
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Free gegen Free: Wo die Grenzen liegen",
          body: (
            <>
              <p>
                Beide kostenlosen Versionen sind stark, ziehen die Grenze zu
                Pro aber an unterschiedlichen Stellen:
              </p>
              <ul>
                <li>
                  <strong>Flinkform kostenlos:</strong> 14 Feldtypen
                  inklusive Datum, Multi-Step mit Fortschrittsanzeige und
                  Schritt-Validierung, bedingte Logik inklusive
                  Schritte-Überspringen, Submissions-Dashboard,
                  Aufbewahrungsfrist mit Auto-Löschung.
                </li>
                <li>
                  <strong>SureForms kostenlos:</strong> über 15 Feldtypen,
                  Entries-Verwaltung, Stripe-Basiszahlungen und der limitierte
                  AI-Generator. Multi-Step und bedingte Logik sind dagegen
                  Bezahlfunktionen.
                </li>
              </ul>
              <p>
                Ehrlich eingeordnet: Kostenlose Stripe-Zahlungen sind ein
                echter SureForms-Vorteil gegenüber Flinkform, bei dem Stripe
                zu Pro gehört. Umgekehrt bekommst du{" "}
                <Link href="/wissen/multi-step-formular-wordpress">
                  Multi-Step-Formulare
                </Link>{" "}
                bei Flinkform kostenlos, bei SureForms erst im Bezahlplan.
              </p>
            </>
          ),
        },
        {
          heading: "Preise und SEPA (Stand September 2026)",
          body: (
            <>
              <p>
                Beide Anbieter verzichten auf Feature-Gates: Jeder Bezahlplan
                enthält alle Features, nur die Website-Anzahl skaliert. Beide
                geben eine 14-Tage-Geld-zurück-Garantie.
              </p>
              <ul>
                <li>
                  <strong>SureForms:</strong> Einen Plan für eine einzelne
                  Website gibt es nicht mehr. Team kostet regulär 149 $ pro
                  Jahr für 5 Websites (99 $ im ersten Jahr), Agency 229 $ für
                  100 Websites.
                </li>
                <li>
                  <strong>Flinkform Pro:</strong> 59 € (1 Website), 99 € (3),
                  149 € (bis 25 Websites, unter 6 € pro Website), 299 €
                  (unbegrenzt), jeweils pro Jahr. Zum Launch zusätzlich eine
                  Lifetime-Lizenz für einmalig 399 € (bis 25 Websites).
                </li>
              </ul>
              <p>
                Für den DACH-Raum zählt noch ein Detail:{" "}
                <Link href="/pro">Flinkform Pro</Link> wickelt Zahlungen über
                das Stripe Payment Element ab, inklusive SEPA-Lastschrift mit
                Bestätigung per Stripe-Webhook, dazu Kreditkarte, Apple Pay
                und Google Pay. Warum SEPA für deutsche Websites so wichtig
                ist, liest du in{" "}
                <Link href="/wissen/sepa-zahlung-wordpress-formular">
                  SEPA-Zahlung im WordPress-Formular
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Du brauchst Stripe-Zahlungen ohne jedes Budget: SureForms
                bietet Basiszahlungen kostenlos, bei Flinkform ist Stripe
                Teil des Pro-Add-ons (ab 59 € pro Jahr).
              </li>
              <li>
                Du willst Formulare per AI-Texteingabe generieren. Das kann
                Flinkform nicht.
              </li>
              <li>
                Du brauchst SureForms-Pro-Features, die Flinkform nicht hat:
                Signatur-Feld, Rating, Repeater, Save & Resume, Quiz und
                Umfragen, Registrierungs-Formulare, PDF-Generierung oder
                PayPal.
              </li>
              <li>
                Du arbeitest ohnehin im Sure-Ökosystem (Astra, Spectra,
                SureCart) und willst alles aus einer Hand.
              </li>
            </ul>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              SureForms ist die ehrlichste Empfehlung in dieser Serie: Wer
              AI-Generierung, kostenlose Stripe-Basiszahlungen oder das
              große Sure-Ökosystem will, macht damit nichts falsch. Flinkform
              ist die bessere Wahl, wenn dir drei Dinge wichtiger sind:
              Spam-Schutz komplett ohne externe Dienste (kein reCAPTCHA, kein
              Turnstile, kein Consent-Thema), automatische Theme-Integration
              über theme.json und ein Frontend unter 15 KB. Dazu Multi-Step
              kostenlos, ein Hersteller in Deutschland und im{" "}
              <Link href="/pro">Pro-Add-on</Link> SEPA-Lastschrift für den
              DACH-Raum. Den Vergleich mit anderen Builder-Plugins findest du
              unter <Link href="/vergleich">allen Vergleichen</Link>.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
