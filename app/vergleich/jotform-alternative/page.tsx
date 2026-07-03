import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jotform Alternative für WordPress: Flinkform im ehrlichen Vergleich",
  description:
    "Jotform limitiert den Free-Plan auf 5 Formulare und 100 Einsendungen pro Monat, alle Daten liegen in der Anbieter-Cloud. Flinkform speichert unbegrenzte Einsendungen auf deinem eigenen Server, DSGVO by design.",
  alternates: { canonical: `${SITE_URL}/vergleich/jotform-alternative` },
};

const tldrRows = [
  {
    feature: "Einsendungen pro Monat",
    cells: ["Unbegrenzt", "100 (Free) bis 10.000 (Gold)"],
  },
  {
    feature: "Anzahl Formulare",
    cells: ["Unbegrenzt", "5 (Free) bis 100 (Gold)"],
  },
  {
    feature: "Wo liegen die Daten?",
    cells: ["In deiner WordPress-Datenbank", "Jotform-Cloud (US-Anbieter)"],
  },
  {
    feature: "Laufende Kosten",
    cells: ["0 € (Pro ab 59 €/Jahr)", "0 bis 1.188 $/Jahr"],
  },
  { feature: "Ohne Anbieter-Branding im Free-Plan", cells: [true, false] },
  { feature: "Keine IP-Speicherung möglich", cells: [true, false] },
  {
    feature: "Einbindung",
    cells: ["Nativ als Blöcke im Editor", "Embed / iFrame / Link"],
  },
  {
    feature: "Vorlagen-Bibliothek",
    cells: [false, "Tausende fertige Vorlagen"],
  },
  { feature: "Approval-Workflows, PDF-Editor, E-Signatur", cells: [false, true] },
  {
    feature: "Erbt Theme-Design (theme.json)",
    cells: [true, "eigenes Formular-Design"],
  },
] as const;

const faqs = [
  {
    q: "Was kostet Jotform wirklich?",
    a: "Der Free-Plan (Starter) kostet 0 $, ist aber auf 5 Formulare, 100 Einsendungen pro Monat und 100 MB Speicher begrenzt und zeigt Jotform-Branding. Die Bezahlpläne kosten bei jährlicher Zahlung effektiv 34 $ (Bronze), 39 $ (Silver) und 99 $ (Gold) pro Monat, also 408 bis 1.188 $ pro Jahr. Stand Juli 2026, reguläre Listenpreise laut jotform.com/pricing.",
  },
  {
    q: "Ist Jotform DSGVO-konform nutzbar?",
    a: "Jotform bietet mit EU Safe Forms einen Datenstandort in Frankfurt an und stellt auf Anfrage einen AV-Vertrag bereit. Zwei Punkte bleiben aber: Jotform ist ein US-Unternehmen (CLOUD-Act-Problematik trotz EU-Servern), und die IP-Adresse jeder Einsendung wird standardmäßig gespeichert und lässt sich nicht abschalten. Ob das für deinen Anwendungsfall reicht, musst du selbst oder mit deinem Datenschutzbeauftragten bewerten.",
  },
  {
    q: "Speichert Jotform IP-Adressen?",
    a: "Ja. Jotform speichert die IP-Adresse jeder Einsendung standardmäßig, und laut Jotform-Support lässt sich diese Erfassung nicht deaktivieren, nur die Spalte in der Ansicht ausblenden. Flinkform speichert grundsätzlich keine IP-Adressen und keine User-Agents.",
  },
  {
    q: "Kann Flinkform Zahlungen wie Jotform?",
    a: "Ja, über das Pro-Add-on: Stripe Payments mit Kreditkarte, SEPA-Lastschrift, Apple Pay und Google Pay, mit fester Betragsbindung serverseitig. Jotform bietet mehr Payment-Anbieter, limitiert Payment-Einsendungen aber pro Plan: im Free-Plan sind es 10 pro Monat, im Bronze-Plan 100. Flinkform Pro kennt kein Einsendungs-Limit.",
  },
  {
    q: "Für wen ist Jotform trotzdem die bessere Wahl?",
    a: "Wenn du gar keine WordPress-Site hast, Formulare per Link teilen willst, auf Approval-Workflows, den PDF-Editor oder E-Signaturen angewiesen bist oder eine HIPAA-Umgebung brauchst. Für diese Fälle ist Jotform als SaaS-Plattform stark. Für Formulare auf einer WordPress-Site ist ein natives Plugin die schlankere und datensparsamere Wahl.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="jotform-alternative"
      competitor="Jotform"
      h1="Jotform Alternative: Unbegrenzte Einsendungen auf deinem eigenen Server"
      updated="2026-07-03"
      answerFirst="Flinkform ist eine DSGVO-freundliche Jotform-Alternative für WordPress: ein block-natives Formular-Plugin, das unbegrenzte Formulare und Einsendungen kostenlos auf deinem eigenen Server speichert. Jotform ist ein US-Cloud-Dienst mit monatlichen Limits: Der Free-Plan erlaubt 5 Formulare und 100 Einsendungen pro Monat mit Jotform-Branding, größere Pläne kosten 408 bis 1.188 Dollar pro Jahr. Dazu speichert Jotform die IP-Adresse jeder Einsendung, ohne Abschaltmöglichkeit."
      tldrColumns={["Flinkform", "Jotform"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026, reguläre Listenpreise laut jotform.com/pricing (jährliche Abrechnung). Enterprise-Plan mit unbegrenzten Limits nur auf Anfrage."
      sections={[
        {
          heading: "Was Jotform gut macht",
          body: (
            <>
              <p>
                Jotform ist einer der größten Formular-Dienste weltweit, seit
                2006 am Markt, mit zweistelligen Millionen-Nutzerzahlen nach
                eigenen Angaben. Die Stärken
                sind real: Schon der Free-Plan enthält Conditional Logic,
                Payment-Anbindungen und hunderte Widgets. Dazu kommen
                Funktionen, die kaum ein WordPress-Plugin bietet:
                Approval-Workflows mit mehrstufigen Freigaben, ein
                PDF-Editor, E-Signaturen, Jotform Tables als
                Tabellen-Ansicht der Daten und eine riesige Bibliothek
                fertiger Formular-Vorlagen. Wer HIPAA braucht, bekommt das im
                Gold-Plan.
              </p>
              <p>
                Bemerkenswert für einen US-Dienst: Mit EU Safe Forms bietet
                Jotform einen Datenstandort in Frankfurt an, der für
                EU-Accounts automatisch aktiviert wird. Das ist mehr, als die
                meisten SaaS-Formulardienste tun.
              </p>
              <p>
                Die Frage ist eine andere: Brauchst du für ein Formular auf
                deiner WordPress-Site wirklich eine externe Cloud-Plattform
                mit Monats-Limits?
              </p>
            </>
          ),
        },
        {
          heading: "Die Limits im Detail",
          body: (
            <>
              <p>
                Jotform skaliert über Kontingente. Jeder Plan deckelt
                Formulare, Einsendungen, Speicher und Payment-Einsendungen
                (Stand Juli 2026, jährliche Abrechnung):
              </p>
              <ul>
                <li>
                  <strong>Starter (Free):</strong> 5 Formulare, 100
                  Einsendungen/Monat, 100 MB Speicher, 10
                  Payment-Einsendungen, Jotform-Branding auf jedem Formular.
                </li>
                <li>
                  <strong>Bronze (408 $/Jahr):</strong> 25 Formulare, 1.000
                  Einsendungen/Monat, 1 GB Speicher.
                </li>
                <li>
                  <strong>Silver (468 $/Jahr):</strong> 50 Formulare, 2.500
                  Einsendungen/Monat, 10 GB Speicher.
                </li>
                <li>
                  <strong>Gold (1.188 $/Jahr):</strong> 100 Formulare, 10.000
                  Einsendungen/Monat, 100 GB Speicher, HIPAA.
                </li>
                <li>
                  <strong>Enterprise:</strong> unbegrenzt, Preis auf Anfrage.
                </li>
              </ul>
              <p>
                Das Modell hat einen eingebauten Haken: Deine Kosten wachsen
                mit deinem Erfolg. Läuft eine Kampagne gut und dein Formular
                bekommt im Aktionsmonat 150 statt 90 Einsendungen, reißt du
                das Free-Limit und musst upgraden. Auffällig ist auch der
                Preissprung von Silver zu Gold: von 39 auf 99 $ pro Monat.
                Flinkform kennt keines dieser Limits: unbegrenzte Formulare,
                unbegrenzte Einsendungen, keine Speicher-Kontingente außer
                deinem eigenen Hosting. Was WordPress-Formulare generell
                kosten, haben wir hier aufgeschlüsselt:{" "}
                <Link href="/wissen/was-kostet-wordpress-formular-plugin">
                  Was kostet ein WordPress-Formular-Plugin?
                </Link>
              </p>
            </>
          ),
        },
        {
          heading: "Cloud-Zwang: Deine Daten liegen bei Jotform",
          body: (
            <>
              <p>
                Der grundsätzliche Unterschied ist architektonisch. Bei
                Jotform liegen alle Einsendungen in der Anbieter-Cloud,
                Self-Hosting gibt es nicht. Jotform ist ein US-Unternehmen
                aus San Francisco. Der Frankfurt-Standort verbessert die
                Lage, löst aber die CLOUD-Act-Problematik nicht: US-Behörden
                können von US-Unternehmen grundsätzlich Datenzugriff
                verlangen, auch wenn die Server in der EU stehen.
              </p>
              <p>
                Konkreter wird es bei der IP-Adresse: Jotform speichert die
                IP jeder Einsendung standardmäßig, und diese Erfassung lässt
                sich laut Jotform-Support nicht deaktivieren, nur die Spalte
                ausblenden. Das kollidiert mit dem Grundsatz der
                Datenminimierung aus Art. 5 DSGVO. Dazu kommt die
                Einbindung: Jotform-Formulare landen per Embed, iFrame oder
                JavaScript auf deiner Seite. Externe Embeds, die vor einer
                Einwilligung Daten an Dritte übertragen, gehören sauber in
                dein Consent-Management. Warum ein Kontaktformular am besten
                ganz ohne Cookie-Banner-Abhängigkeit auskommt:{" "}
                <Link href="/wissen/cookie-banner-kontaktformular">
                  Cookie-Banner und Kontaktformular
                </Link>
                .
              </p>
              <p>
                Flinkform dreht das Modell um: Das Formular ist Teil deiner
                WordPress-Site, die Einsendungen liegen in deiner eigenen
                Datenbank, bei deinem Hoster, unter deiner Kontrolle. Keine
                Datenübermittlung an einen Formular-Dienst, kein AV-Vertrag
                mit einem US-Anbieter nötig. IP-Adressen und User-Agents
                werden gar nicht erst gespeichert, und pro Formular kannst du
                eine Aufbewahrungsfrist mit automatischer Löschung setzen.
                Mehr dazu:{" "}
                <Link href="/wissen/dsgvo-konformes-formular-plugin">
                  Was macht ein Formular-Plugin DSGVO-konform?
                </Link>
              </p>
            </>
          ),
        },
        {
          heading: "Nativ im Block-Editor statt iFrame",
          body: (
            <>
              <p>
                Flinkform ist ein block-natives Formular-Plugin für den
                WordPress-Block-Editor. Es bietet Multi-Step-Formulare,
                bedingte Logik und Spam-Schutz ohne externe Dienste,
                kostenlos. Jedes Feld ist ein Gutenberg-Block: Du baust das
                Formular direkt in der Seite, mit Live-Vorschau in deinem
                Theme-Design. 13 Feldtypen, Multi-Step mit
                Fortschrittsanzeige, bedingte Logik zum Ein- und Ausblenden
                von Feldern und Schritten, dazu ein Submissions-Dashboard
                mit Suche und Filtern.
              </p>
              <p>
                Ein iFrame kann das nicht: Er lädt ein fremdes Design in
                deine Seite, braucht eigenes JavaScript vom Anbieter-Server
                und passt sich deinem Theme nicht an. Flinkform erbt Farben,
                Schrift und Eckenradius automatisch über theme.json, liefert
                unter 15 KB Frontend-JavaScript aus und lädt Assets nur auf
                Seiten mit Formular. Wie Multi-Step-Formulare damit
                aussehen:{" "}
                <Link href="/wissen/multi-step-formular-wordpress">
                  Multi-Step-Formulare in WordPress
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Zahlungen und Erweiterungen: Pro statt Kontingent",
          body: (
            <p>
              Wenn dein Formular mehr können muss, erweitert{" "}
              <Link href="/pro">Flinkform Pro</Link> das freie Plugin um
              Stripe Payments (Kreditkarte, SEPA-Lastschrift, Apple Pay,
              Google Pay), Berechnungsfelder, Multi-Datei-Upload, SMTP,
              Webhooks, Newsletter-Anbindung und CSV-Export. Der Preis ist
              eine Jahreslizenz pro Website-Kontingent, ab 59 € pro Jahr für
              eine Website, ohne Limits bei Einsendungen oder Zahlungen.
              Jotform deckelt Payment-Einsendungen dagegen pro Plan: 10 im
              Free-Plan, 100 bei Bronze, 1.000 bei Gold. Wer regelmäßig
              Zahlungen über Formulare abwickelt, rechnet bei Jotform also
              dauerhaft mit dem Kontingent, bei Flinkform Pro nur einmal mit
              der Lizenz.
            </p>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Du hast keine WordPress-Site oder willst Formulare als
                eigenständige Links teilen (z. B. per E-Mail oder QR-Code).
                Flinkform lebt in WordPress, Jotform funktioniert überall.
              </li>
              <li>
                Du brauchst Approval-Workflows, den PDF-Editor, E-Signaturen
                oder Jotform Tables. Diese Funktionen hat Flinkform nicht.
              </li>
              <li>
                Du bist auf die Vorlagen-Bibliothek angewiesen und willst
                Formulare aus fertigen Templates zusammenklicken statt selbst
                bauen.
              </li>
              <li>
                Du brauchst eine HIPAA-Umgebung (US-Gesundheitsdaten). Das
                bietet Jotform ab dem Gold-Plan.
              </li>
              <li>
                Deine Site läuft noch nicht auf WordPress 6.5+ mit
                Block-Editor oder PHP 8.1+.
              </li>
            </ul>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              Jotform ist eine starke SaaS-Plattform mit Funktionen, die weit
              über klassische Formulare hinausgehen. Der Preis dafür:
              Monats-Limits, die mit deinem Erfolg wachsen, Branding im
              Free-Plan, Daten in der Cloud eines US-Anbieters und eine
              IP-Speicherung, die sich nicht abschalten lässt. Für Formulare
              auf einer WordPress-Site ist Flinkform die schlankere
              Antwort: unbegrenzte Formulare und Einsendungen auf deinem
              eigenen Server, kostenlos, DSGVO by design. Du suchst noch
              nach der Cloud-Alternative mit Conversational-Formularen?
              Dann lies auch den{" "}
              <Link href="/vergleich/typeform-alternative">
                Typeform-Vergleich
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
