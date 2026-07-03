import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Gravity Forms Alternative DSGVO: Flinkform im ehrlichen Vergleich",
  description:
    "Gravity Forms hat keine kostenlose Version und startet bei 59 Dollar pro Jahr. Flinkform bietet Multi-Step, bedingte Logik und Submissions-Dashboard kostenlos, mit Spam-Schutz ohne US-Dienste.",
  alternates: {
    canonical: `${SITE_URL}/vergleich/gravity-forms-alternative`,
  },
};

const tldrRows = [
  { feature: "Kostenlose Version", cells: [true, false] },
  {
    feature: "Einstiegspreis",
    cells: ["0 € (Pro ab 59 €/Jahr)", "59 $/Jahr (Basic, 1 Site)"],
  },
  {
    feature: "Multi-Step + bedingte Logik",
    cells: ["kostenlos", "im Preis enthalten"],
  },
  {
    feature: "Zahlungs-Add-ons",
    cells: ["Pro: Stripe inkl. SEPA + Wallets", "erst ab Pro (159 $/Jahr)"],
  },
  { feature: "Formular-Aufbau", cells: ["Blöcke im Editor", "eigener Builder im Admin"] },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA / Turnstile / Akismet"],
  },
  { feature: "Keine IP-Speicherung ab Werk", cells: [true, false] },
  { feature: "Erbt Theme-Design (theme.json)", cells: [true, "eigene Styles"] },
  { feature: "Sitz / Datenverständnis", cells: ["Deutschland, DSGVO by design", "USA"] },
] as const;

const faqs = [
  {
    q: "Gibt es Gravity Forms kostenlos?",
    a: "Nein. Gravity Forms hat keine kostenlose Version auf WordPress.org. Der Einstieg kostet 59 $ pro Jahr (Basic, 1 Website, ohne Zahlungs-Add-ons), die größeren Pläne 159 $ (Pro) und 259 $ (Elite) pro Jahr.",
  },
  {
    q: "Ist Gravity Forms schlecht?",
    a: "Im Gegenteil, Gravity Forms ist eines der mächtigsten Formular-Systeme für WordPress mit einem riesigen Add-on-Ökosystem. Für komplexe Workflows mit Drittanbieter-Erweiterungen wie Gravity Flow oder GravityView ist es weiterhin erste Wahl. Für die typischen 90 % der Formulare (Kontakt, Anfrage, Bewerbung, Buchung) ist es aber Overkill mit laufenden Kosten.",
  },
  {
    q: "Speichert Gravity Forms IP-Adressen?",
    a: "Ja, Gravity Forms speichert bei Einsendungen standardmäßig die IP-Adresse (per Filter oder Feld-Einstellung deaktivierbar). Flinkform speichert grundsätzlich keine IP-Adressen und keine User-Agents.",
  },
  {
    q: "Kann Flinkform Zahlungen wie Gravity Forms?",
    a: "Ja, über Flinkform Pro (ab 59 €/Jahr): Stripe Payments mit Kreditkarte, SEPA-Lastschrift, Apple Pay und Google Pay direkt im Formular, inklusive Berechnungsfeldern für dynamische Beträge. Bei Gravity Forms brauchst du dafür mindestens den Pro-Plan (159 $/Jahr) plus Add-on-Konfiguration.",
  },
  {
    q: "Für wen bleibt Gravity Forms die bessere Wahl?",
    a: "Für komplexe Enterprise-Workflows: mehrstufige Freigabeprozesse (Gravity Flow), Frontend-Tabellen aus Einsendungen (GravityView), dynamisch befüllte Felder (Populate Anything) oder tiefe CRM-Automatisierung. Dieses Drittanbieter-Ökosystem hat Flinkform nicht.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="gravity-forms-alternative"
      competitor="Gravity Forms"
      h1="Gravity Forms Alternative: Kostenlos, DSGVO-konform und block-nativ"
      updated="2026-07-03"
      answerFirst="Flinkform ist eine kostenlose Gravity Forms Alternative für WordPress: Multi-Step-Formulare, bedingte Logik und Submissions-Dashboard sind im freien Plugin enthalten, das es bei Gravity Forms gar nicht gibt (Einstieg: 59 Dollar pro Jahr). Dazu kommt der Datenschutz-Unterschied: Flinkform schützt vor Spam ohne US-Dienste und speichert keine IP-Adressen."
      tldrColumns={["Flinkform", "Gravity Forms"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026, Listenpreise laut gravityforms.com/pricing."
      sections={[
        {
          heading: "Was Gravity Forms gut macht",
          body: (
            <>
              <p>
                Gravity Forms ist seit 2009 das Formular-System für
                Power-User: extrem stabil, mit sauberer Entwickler-API und
                einem Ökosystem aus offiziellen und Drittanbieter-Add-ons,
                das kein anderes Formular-Plugin erreicht. Gravity Flow für
                Freigabeprozesse, GravityView für Frontend-Ansichten,
                Populate Anything für dynamische Felder: Wer solche Workflows
                baut, findet hier ein ausgewachsenes Framework.
              </p>
              <p>
                Der Preis dafür: Es gibt keine kostenlose Version, die
                Zahlungs-Add-ons stecken in den teureren Plänen, und die
                Bedienung findet in einer eigenen Admin-Oberfläche statt, die
                mit dem modernen WordPress-Editor wenig zu tun hat.
              </p>
            </>
          ),
        },
        {
          heading: "Die Preisstruktur",
          body: (
            <>
              <ul>
                <li>
                  <strong>Basic (59 $/Jahr):</strong> 1 Website, Kern-Features
                  inklusive bedingter Logik und Multi-Page. Keine
                  Zahlungs-Add-ons.
                </li>
                <li>
                  <strong>Pro (159 $/Jahr):</strong> 3 Websites, dazu Stripe,
                  PayPal und weitere Pro-Add-ons.
                </li>
                <li>
                  <strong>Elite (259 $/Jahr):</strong> unbegrenzte Websites,
                  alle Add-ons inklusive Umfragen, Quiz, Web-API.
                </li>
              </ul>
              <p>
                Fair ist: Gravity verkauft anders als WPForms keine
                Kernfunktionen einzeln, Multi-Page und bedingte Logik sind ab
                Basic drin. Aber der Einstieg kostet eben 59 Dollar pro Jahr,
                jedes Jahr, pro Projekt-Setup. Für ein simples
                Kontaktformular auf einer Kundenseite ist das ein laufender
                Posten ohne Mehrwert.
              </p>
            </>
          ),
        },
        {
          heading: "Der Datenschutz-Unterschied",
          body: (
            <>
              <p>
                Gravity Forms ist ein US-Produkt. Der empfohlene Spam-Schutz
                läuft über reCAPTCHA, Cloudflare Turnstile oder Akismet,
                alles Dienste, die Besucherdaten an externe Server senden.
                Das österreichische Bundesverwaltungsgericht hat am
                13.09.2024 entschieden, dass reCAPTCHA ohne vorherige
                Einwilligung gegen die DSGVO verstößt; die französische CNIL
                hat entsprechende Bußgelder verhängt. Zusätzlich speichert
                Gravity Forms standardmäßig die IP-Adresse jeder Einsendung.
              </p>
              <p>
                Flinkform braucht das alles nicht: Honeypot, signierter
                Zeit-Check und Proof-of-Work laufen auf deinem Server, ohne
                externen Dienst, ohne Einwilligungspflicht, ohne
                IP-Speicherung. Hintergründe im Artikel{" "}
                <Link href="/blog/recaptcha-dsgvo-rechtsrisiko">
                  reCAPTCHA und die DSGVO
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Block-Editor statt Admin-Builder",
          body: (
            <p>
              Gravity Forms verwaltet Formulare in einer eigenen
              Admin-Sektion; in die Seite kommen sie per Block-Embed oder
              Shortcode. Flinkform baut das Formular direkt in der Seite,
              Feld für Feld als Gutenberg-Block, mit Live-Vorschau in deinem
              Theme-Design. Änderungen macht der Redakteur dort, wo er
              sowieso arbeitet. Und weil Flinkform die Design-Tokens aus
              theme.json erbt, sieht das Formular ohne CSS-Nacharbeit aus wie
              der Rest der Website.
            </p>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Deine Workflows hängen an Gravity-Add-ons wie Gravity Flow,
                GravityView oder Populate Anything. Dieses Ökosystem gibt es
                bei Flinkform nicht.
              </li>
              <li>
                Du brauchst Umfragen, Quiz oder Nutzer-Registrierung direkt
                im Formular-Plugin.
              </li>
              <li>
                Deine Site läuft ohne Block-Editor (Flinkform braucht
                WordPress 6.5+ und PHP 8.1+).
              </li>
            </ul>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              Gravity Forms ist das richtige Werkzeug für komplexe
              Formular-Workflows mit Add-on-Bedarf. Für alles andere, also
              die typischen Kontakt-, Anfrage-, Bewerbungs- und
              Buchungsformulare, zahlst du bei Gravity jedes Jahr für
              Funktionen, die Flinkform kostenlos mitbringt: Multi-Step,
              bedingte Logik, Submissions-Dashboard und DSGVO-sauberen
              Spam-Schutz. Wenn Zahlungen dazukommen sollen, ist{" "}
              <Link href="/pro">Flinkform Pro</Link> mit SEPA, Apple Pay und
              Google Pay ab 59 €/Jahr auch dann noch günstiger als der
              Gravity-Pro-Plan.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
