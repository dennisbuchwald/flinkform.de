import type { Metadata } from "next";
import Link from "next/link";
import VergleichArticle from "@/components/VergleichArticle";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Typeform Alternative für WordPress: DSGVO-konform, ohne Abo",
  description:
    "Typeform kostet 39 bis 169 Dollar pro Monat und speichert Daten im Standard auf US-Servern. Flinkform bringt Multi-Step-Formulare mit einer Frage pro Schritt auf deinen eigenen Server, kostenlos.",
  alternates: { canonical: `${SITE_URL}/vergleich/typeform-alternative` },
};

const tldrRows = [
  {
    feature: "Modell",
    cells: ["WordPress-Plugin, self-hosted", "Cloud-SaaS, Embed"],
  },
  {
    feature: "Preis",
    cells: ["0 €", "0 bis 169 $/Monat je Plan"],
  },
  {
    feature: "Antworten pro Monat",
    cells: ["Unbegrenzt", "100 (Free) bis 10.000 je Plan"],
  },
  {
    feature: "Wo liegen die Daten?",
    cells: ["Auf deinem Server", "AWS Virginia, USA (EU nur Enterprise)"],
  },
  {
    feature: "Eine Frage pro Schritt (Multi-Step)",
    cells: [true, true],
  },
  {
    feature: "Bedingte Logik",
    cells: ["kostenlos", "ab Basic (39 $/Monat)"],
  },
  {
    feature: "Ohne eigenes Branding",
    cells: [true, "erst ab Plus (79 $/Monat)"],
  },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA, erst ab Talent (169 $/Monat)"],
  },
  {
    feature: "Einwilligung vor dem Laden nötig",
    cells: ["Nein", "Ja (Embed lädt US-Dienst)"],
  },
  {
    feature: "Funktioniert außerhalb von WordPress",
    cells: [false, true],
  },
] as const;

const faqs = [
  {
    q: "Ist Typeform DSGVO-konform nutzbar?",
    a: "Nur mit Aufwand. Typeform speichert alle Formulardaten im Standard auf AWS-Servern in Virginia, USA; EU-Hosting gibt es erst auf Enterprise-Level. Datenschutz-Dienste wie avalex stufen Typeform als nicht unterstützt ein, und nach Einschätzung von legalweb.io braucht das Embed eine explizite Einwilligung, bevor es lädt. Du brauchst außerdem einen AV-Vertrag mit Typeform. Bei einem self-hosted Plugin wie Flinkform entfällt das alles, weil kein Drittanbieter beteiligt ist.",
  },
  {
    q: "Was kostet Typeform?",
    a: "Stand Juli 2026 laut typeform.com/pricing: Free (100 Antworten/Monat), Basic 39 $, Plus 79 $, Business 129 $ und Talent 169 $ pro Monat bei monatlicher Zahlung, jährlich rund 30 Prozent günstiger. Alle Pläne haben monatliche Response-Limits. Ein Formular, das ein Jahr auf der Website läuft, kostet im Basic-Plan somit 468 Dollar pro Jahr. Flinkform kostet 0 Euro ohne Antwort-Limit.",
  },
  {
    q: "Kann Flinkform das Typeform-Gefühl mit einer Frage pro Schritt nachbauen?",
    a: "Ja, über Multi-Step-Formulare: Du setzt nach jeder Frage einen Page-Break-Block und bekommst Fortschrittsanzeige (Balken, Punkte oder Zahlen), Schritt-Validierung und bedingte Logik zum Überspringen von Schritten, alles kostenlos. Die verspielten Animationen und das Vollbild-Design von Typeform bildet Flinkform nicht nach; das Formular übernimmt stattdessen das Design deines Themes.",
  },
  {
    q: "Kann ich meine Typeform-Formulare zu Flinkform importieren?",
    a: "Nein, einen Importer gibt es nicht. Du baust das Formular im Block-Editor neu auf, was bei typischen Lead- und Kontaktformularen schnell geht, weil jedes Feld ein Gutenberg-Block ist. Bestehende Typeform-Antworten exportierst du vorher als CSV oder XLS aus Typeform.",
  },
  {
    q: "Für wen bleibt Typeform die bessere Wahl?",
    a: "Wenn du Formulare außerhalb von WordPress brauchst (z. B. in Notion, auf Landingpage-Baukästen oder als Stand-alone-Link), wenn du auf Typeforms Umfrage-Features wie Drop-off-Analysen und Video-Fragen angewiesen bist oder wenn das markante Conversational-Design mit Animationen genau der Look ist, den du willst. Dafür ist Typeform weiterhin das stärkste Produkt am Markt.",
  },
];

export default function Page() {
  return (
    <VergleichArticle
      slug="typeform-alternative"
      competitor="Typeform"
      h1="Typeform Alternative: Das gleiche Gefühl, auf deinem Server"
      updated="2026-07-03"
      answerFirst="Flinkform ist eine DSGVO-freundliche Typeform-Alternative für WordPress: Multi-Step-Formulare mit einer Frage pro Schritt, bedingter Logik und Fortschrittsanzeige, kostenlos und ohne Antwort-Limits. Der entscheidende Unterschied ist der Datenfluss: Typeform speichert Einsendungen im Standard auf US-Servern (AWS Virginia) und rechnet monatlich nach Response-Kontingenten ab. Flinkform läuft als Plugin auf deinem eigenen Server, die Daten verlassen deine WordPress-Installation nicht."
      tldrColumns={["Flinkform", "Typeform"]}
      tldrRows={tldrRows}
      tldrNote="Stand Juli 2026, reguläre Listenpreise laut typeform.com/pricing (USD, monatliche Abrechnung; jährlich rund 30 % günstiger)."
      sections={[
        {
          heading: "Was Typeform gut macht",
          body: (
            <>
              <p>
                Typeform hat das Conversational-Formular praktisch erfunden:
                eine Frage pro Screen, flüssige Animationen, Vollbild-Design,
                das ohne eigenen Design-Aufwand gut aussieht. Für Umfragen und
                Quiz-Formate erzielt dieses Format nachweislich hohe
                Abschlussraten, und das Integrations-Ökosystem ist groß.
                Fairerweise auch beim Datenschutz ein Pluspunkt: Typeform
                speichert nach eigener Aussage keine IP-Adressen der
                Ausfüllenden, sondern nur eine anonymisierte Network-ID zur
                Duplikat-Erkennung.
              </p>
              <p>
                Das Problem liegt woanders: beim Preismodell und beim Ort, an
                dem deine Daten landen.
              </p>
            </>
          ),
        },
        {
          heading: "Die Kostenrechnung: Abo plus Response-Limits",
          body: (
            <>
              <p>
                Typeform rechnet monatlich ab und deckelt zusätzlich die Zahl
                der Antworten. Die Pläne, Stand Juli 2026 (USD, monatliche
                Abrechnung):
              </p>
              <ul>
                <li>
                  <strong>Free (0 $):</strong> 100 Antworten/Monat, 1 Nutzer,
                  Typeform-Branding bleibt.
                </li>
                <li>
                  <strong>Basic (39 $/Monat):</strong> 1.000 Antworten/Monat,
                  bedingte Logik, Webhooks.
                </li>
                <li>
                  <strong>Plus (79 $/Monat):</strong> 10.000 Antworten/Monat,
                  Branding entfernbar.
                </li>
                <li>
                  <strong>Business (129 $/Monat):</strong> Drop-off-Raten,
                  Conversion-Tracking.
                </li>
                <li>
                  <strong>Talent (169 $/Monat):</strong> Video-Fragen,
                  Mehrsprachigkeit, und erst hier: reCAPTCHA als Spam-Schutz.
                </li>
              </ul>
              <p>
                Für ein Kontakt- oder Lead-Formular, das dauerhaft auf der
                Website steht, heißt das: Der günstigste Plan mit bedingter
                Logik kostet 468 Dollar pro Jahr, ohne Branding-Entfernung.
                Und läuft eine Kampagne besser als geplant, rennst du ins
                Response-Limit. Flinkform kennt weder Abo noch Limits: Das
                Plugin ist kostenlos, jede Einsendung landet in deiner
                eigenen Datenbank. Was ein Formular-Plugin sonst kostet,
                haben wir hier aufgeschlüsselt:{" "}
                <Link href="/wissen/was-kostet-wordpress-formular-plugin">
                  Was kostet ein WordPress-Formular-Plugin?
                </Link>
              </p>
            </>
          ),
        },
        {
          heading: "Das DSGVO-Problem: US-Server im Standard",
          body: (
            <>
              <p>
                Typeform ist zwar ein spanisches Unternehmen, verarbeitet die
                Daten laut eigenem Help Center aber auf AWS-Servern in
                Virginia, USA. EU-Hosting gibt es erst für Enterprise-Kunden.
                Für deine Website bedeutet das: Jede Formular-Einsendung ist
                eine Drittlandübermittlung, du brauchst einen AV-Vertrag,
                einen Eintrag in der Datenschutzerklärung und nach
                Einschätzung von legalweb.io eine explizite Einwilligung,
                bevor das Embed überhaupt lädt, weil sich die Einbindung
                nicht über berechtigtes Interesse begründen lässt. Der
                Datenschutz-Dienst avalex stuft Typeform als nicht
                unterstützt ein, und für sensible Bereiche wie Kanzleien wird
                explizit abgeraten.
              </p>
              <p>
                Ein Formular hinter einem Consent-Banner ist aber genau das,
                was du bei einem Lead-Formular nicht willst: Wer den Klick
                verweigert, sieht kein Formular. Flinkform umgeht das ganze
                Thema strukturell: Das Formular wird von deinem eigenen
                Server ausgeliefert, kein externer Dienst lädt, keine
                IP-Adressen und keine User-Agents werden gespeichert, die
                Aufbewahrungsfrist mit Auto-Löschung stellst du pro Formular
                ein. Was ein DSGVO-sauberes Setup sonst noch ausmacht, steht
                hier:{" "}
                <Link href="/wissen/dsgvo-konformes-formular-plugin">
                  DSGVO-konformes Formular-Plugin
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          heading: "Eine Frage pro Schritt, gebaut mit Blöcken",
          body: (
            <>
              <p>
                Der Kern des Typeform-Erlebnisses lässt sich in Flinkform
                direkt nachbauen: Du setzt zwischen die Fragen
                Page-Break-Blöcke, und aus einem langen Formular wird ein
                Multi-Step-Formular mit Fortschrittsanzeige (Balken, Punkte
                oder Zahlen) und Validierung pro Schritt. Mit bedingter Logik
                blendest du Felder ein und aus oder überspringst ganze
                Schritte, abhängig von vorherigen Antworten, genau wie bei
                Typeforms Logic Jumps. Beides ist kostenlos. Die Anleitungen:{" "}
                <Link href="/wissen/multi-step-formular-wordpress">
                  Multi-Step-Formular in WordPress
                </Link>{" "}
                und{" "}
                <Link href="/wissen/bedingte-logik-wordpress-formular">
                  Bedingte Logik im WordPress-Formular
                </Link>
                .
              </p>
              <p>
                Ehrlich gesagt: Das Vollbild-Erlebnis mit Animationen und
                Tastatursteuerung, für das Typeform bekannt ist, bildet
                Flinkform nicht nach. Dafür fügt sich das Formular über
                theme.json automatisch in dein Website-Design ein: Farben,
                Schrift, Eckenradius kommen aus deinem Theme statt aus einem
                fremden Look. Das Frontend bleibt dabei unter 15 KB
                JavaScript, ohne jQuery, und lädt nur auf Seiten mit
                Formular.
              </p>
            </>
          ),
        },
        {
          heading: "Deine Daten gehören dir",
          body: (
            <>
              <p>
                Bei Typeform liegen alle Einsendungen in der Anbieter-Cloud;
                Self-Hosting ist nicht vorgesehen, der Export läuft manuell
                über CSV oder XLS. Bei Flinkform landen Einsendungen in
                deiner eigenen WordPress-Datenbank: durchsuchbar und
                filterbar im Submissions-Dashboard, mit
                Gelesen/Ungelesen-Status und Bulk-Aktionen. Die
                WordPress-Privacy-Tools (Auskunft, Löschung) funktionieren
                direkt mit den Formulardaten.
              </p>
              <p>
                Wächst der Bedarf, ergänzt{" "}
                <Link href="/pro">Flinkform Pro</Link> ab 59 € pro Jahr
                Stripe-Zahlungen (Kreditkarte, SEPA, Apple Pay, Google Pay),
                Berechnungsfelder, Multi-Datei-Upload, Webhooks,
                Newsletter-Anbindung und CSV-Export. Auch dann bleiben alle
                Daten auf deinem Server.
              </p>
            </>
          ),
        },
        {
          heading: "Wann du NICHT wechseln solltest",
          body: (
            <ul>
              <li>
                Du brauchst Formulare außerhalb von WordPress: als
                Stand-alone-Link, in Notion, in E-Mails oder auf Plattformen
                ohne eigenes CMS. Flinkform ist ein WordPress-Plugin und
                braucht WordPress 6.5+ mit PHP 8.1+.
              </li>
              <li>
                Deine Formulare sind Umfragen oder Quiz mit
                Auswertungs-Features wie Drop-off-Analysen, Video-Fragen oder
                Antwort-Scoring. Das ist Typeforms Kerngeschäft, Flinkform
                bietet dafür keine Spezial-Features.
              </li>
              <li>
                Das markante Typeform-Design mit Vollbild und Animationen ist
                für dich Teil der Marke. Flinkform übernimmt bewusst dein
                Theme-Design statt einen eigenen Look mitzubringen.
              </li>
              <li>
                Du suchst eine SaaS-Lösung mit EU-Datenstandort statt
                Self-Hosting: Dann schau dir unseren{" "}
                <Link href="/vergleich/jotform-alternative">
                  Jotform-Vergleich
                </Link>{" "}
                an; Jotform bietet ein EU-Datacenter in Frankfurt, hat aber
                eigene Haken.
              </li>
            </ul>
          ),
        },
        {
          heading: "Fazit",
          body: (
            <p>
              Typeform ist das beste Conversational-Formular am Markt, aber
              du bezahlst es doppelt: mit 39 bis 169 Dollar pro Monat plus
              Response-Limits und mit Formulardaten auf US-Servern samt
              DSGVO-Folgeaufwand. Wenn deine Website auf WordPress läuft und
              du vor allem Lead-, Kontakt- oder Bewerbungsformulare mit dem
              Eine-Frage-pro-Schritt-Gefühl willst, bekommst du mit Flinkform
              Multi-Step, bedingte Logik und Spam-Schutz ohne externe Dienste
              kostenlos, und die Daten bleiben auf deinem Server. Für
              Umfrage-Analytics und Formulare außerhalb von WordPress bleibt
              Typeform die richtige Wahl.
            </p>
          ),
        },
      ]}
      faqs={faqs}
    />
  );
}
