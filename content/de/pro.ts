import type { Widen } from "@/lib/i18n/widen";
import { MIN_FREE_FOR_PRO, PRO_VERSION } from "@/lib/site";

export const pro = {
  meta: {
    title:
      "Flinkform Pro - Stripe-Zahlungen mit SEPA, Berechnungsfelder und Webhooks für WordPress-Formulare",
    description:
      "Flinkform Pro: Stripe Payments mit Kreditkarte, SEPA, Apple Pay und Google Pay direkt im Formular. Berechnungsfelder, Webhooks, Multi-Upload, SMTP, Newsletter. Ab 59 € pro Jahr.",
    ogTitle: "Flinkform Pro - Das Formular, das Geld verdient.",
    ogDescription:
      "Stripe-Zahlungen mit SEPA und Wallets, Berechnungsfelder, Webhooks, SMTP, Multi-Upload und Newsletter: ein Add-on statt fünf Plugins. Ab 59 € pro Jahr.",
  },
  breadcrumb: { home: "Flinkform", pro: "Flinkform Pro" },
  hero: {
    eyebrow: "Premium Add-on",
    titlePre: "Das Formular, das ",
    titleHighlight: "Geld verdient",
    titlePost: ".",
    entity:
      "Flinkform Pro ist das kommerzielle Add-on für das kostenlose WordPress-Formular-Plugin Flinkform. Es ergänzt Stripe-Zahlungen (Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay), Berechnungsfelder, Multi-Datei-Upload, SMTP-Versand, Webhooks, Newsletter-Anbindung, CSV-Export und Custom CSS.",
    sub: "Besucher zahlen per SEPA, Apple Pay oder Karte, ohne Shop-System. Preise berechnen sich live. Einsendungen fließen automatisch ins CRM. Ein Add-on statt fünf Plugins.",
    ctaPrimary: "Unverbindlich vormerken",
    ctaSecondary: "Preise ansehen",
    versionLine: `Version ${PRO_VERSION} · benötigt Flinkform (kostenlos) ab ${MIN_FREE_FOR_PRO} · 14 Tage Geld-zurück-Garantie`,
  },
  needs: {
    heading: "Ein Kontaktformular reicht? Nicht lange.",
    sub: "Flinkform löst das Formular-Problem. Aber dann kommen die echten Anforderungen:",
    items: [
      "Buchungsformular mit Anzahlung: Der Kunde will direkt im Formular bezahlen, am liebsten per SEPA oder Apple Pay.",
      "Angebotsrechner: Der Preis soll sich live aus Menge und Optionen berechnen.",
      "Einsendungen sollen automatisch ins CRM oder Projektmanagement fließen.",
      "Der Hoster verschluckt Mails. Du brauchst zuverlässigen SMTP-Versand.",
      "Bewerbungsformular: Lebenslauf, Anschreiben und Zeugnisse als Upload.",
      "Newsletter-Anmeldung direkt im Kontaktformular, ohne Zapier-Umwege.",
    ],
    outroPre: "Normalerweise heißt das: fünf weitere Plugins installieren. Fünf Konfigurationen, fünf Update-Zyklen, fünf potenzielle Konflikte. Bei WPForms brauchst du für dieses Paket den Pro-Plan, regulär 399 Dollar pro Jahr. ",
    outroStrong: "Flinkform Pro packt alles in ein Add-on.",
    outroPost: " Nahtlos integriert, DSGVO-konform, aus einer Hand.",
  },
  modules: {
    heading: "Acht Module. Ein Add-on.",
    items: [
      {
        title: "Stripe Payments",
        desc: "Zahlungen direkt im Formular: Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay und Link über das Stripe Payment Element. Fester Betrag oder Produktauswahl, serverseitige Verifizierung, Zahlungsstatus in der Einsendung. Kartendaten berühren nie deinen Server.",
      },
      {
        title: "Berechnungsfelder",
        desc: "Angebotsrechner und Konfiguratoren direkt im Formular: Formeln wie (Menge × 49,90) + Setup rechnen live, während der Besucher tippt. Felder per Dropdown einfügen, serverseitig sicher nachgerechnet, kein eval.",
      },
      {
        title: "Multi-Datei-Upload",
        desc: "Besucher hängen bis zu 10 Dateien pro Feld an, ideal für Bewerbungen. Dateitypen und Maximalgröße konfigurierbar, Größen-Check vor dem Absenden, geschützter Upload-Ordner, DSGVO-Löschkaskade.",
      },
      {
        title: "SMTP-Versand",
        desc: "Alle Formular-Mails gehen zuverlässig raus. 7 Provider-Presets (Gmail, Outlook, SendGrid, Mailgun, Brevo, Postmark, Amazon SES), AES-256-verschlüsselte Zugangsdaten, Sende-Log mit Fehlerdiagnose.",
      },
      {
        title: "Webhooks",
        desc: "Einsendungen automatisch an dein CRM, Projektmanagement oder jeden Endpoint senden. JSON oder form-encoded, eigene Header, Field-Mapping, Bedingungen, Retry-Logik und komplettes Delivery-Log. SSRF-gehärtet.",
      },
      {
        title: "Newsletter-Anbindung",
        desc: "Brevo, Mailchimp und CleverReach direkt integriert. Double-Opt-in, Pflicht-Einwilligungsfeld und asynchroner Versand. Kein Extra-Plugin, keine Umwege.",
      },
      {
        title: "CSV-Export",
        desc: "Gefilterte Einsendungen als CSV exportieren, inklusive Datumsbereich und Zahlungsspalten (Status, Betrag, Währung). Excel-kompatibel, direkt aus dem WordPress-Admin.",
      },
      {
        title: "Custom CSS",
        desc: "CSS pro Formular direkt im Editor schreiben. Für Anpassungen, die über die Theme-Einstellungen hinausgehen. Gegen XSS abgesichert.",
      },
    ],
  },
  highlights: {
    heading: "Im Detail",
    sub: "Alles zusätzlich zu den 14 Feldtypen, Multi-Step, bedingter Logik und dem Spam-Schutz des kostenlosen Plugins.",
    items: [
      "Stripe Payments: Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay, Link",
      "Fester Betrag oder Produktauswahl mit individuellen Preisen",
      "Zahlungsstatus, Betrag und Zahlart direkt in der Einsendung sichtbar",
      "Automatische Stripe-Quittung per E-Mail an den Zahlenden",
      "SEPA-Zahlungen werden per Stripe-Webhook automatisch bestätigt",
      "Berechnungsfelder mit Live-Vorschau, serverseitig verifiziert",
      "Multi-Upload: bis zu 10 Dateien pro Feld, Größen-Check vor dem Absenden",
      "Dateien als echter Mail-Anhang an die Admin-Benachrichtigung",
      "SMTP mit 7 Provider-Presets und verschlüsselten Zugangsdaten",
      "Webhooks mit Retry-Logik und vollständigem Delivery-Log",
      "Newsletter-Anbindung: Brevo, Mailchimp, CleverReach",
      "CSV-Export mit Datumsbereich und Zahlungsspalten",
      "Custom CSS pro Formular im Editor",
      "Doppelklick-Schutz: keine doppelten Einsendungen, Mails oder Zahlungen",
      "AES-256-Verschlüsselung für alle gespeicherten Zugangsdaten",
      "Saubere Bridge-Architektur: Pro verändert keine Core-Dateien",
    ],
  },
  compare: {
    heading: "Flinkform Pro vs. WPForms, Gravity Forms und WooCommerce",
    caption: "Funktionsvergleich: Flinkform Pro, WPForms, Gravity Forms und WooCommerce",
    columns: ["Flinkform Pro", "WPForms", "Gravity Forms", "WooCommerce"],
    rows: [
      {
        feature: "Stripe Payments im Formular",
        cells: [true, "+3 % Gebühr unter Pro (399 $)", "Add-on nötig", true],
      },
      { feature: "SEPA, Apple Pay & Google Pay", cells: [true, "teils", "Add-on", "Plugin nötig"] },
      { feature: "Kein Shop/Checkout nötig", cells: [true, true, true, false] },
      { feature: "Berechnungsfelder", cells: [true, "nur in Bezahlplänen", true, false] },
      { feature: "Multi-Datei-Upload", cells: [true, "ab 99 $/Jahr", true, false] },
      { feature: "Block-Editor nativ", cells: [true, false, false, false] },
      {
        feature: "Webhooks mit Retry-Logik",
        cells: [true, "Add-on in höheren Plänen", "Add-on", false],
      },
      { feature: "SMTP + Sende-Log", cells: [true, false, false, false] },
      {
        feature: "Newsletter-Integration",
        cells: [true, "ab Plus (199 $/Jahr)", "Add-on", "Plugin nötig"],
      },
      { feature: "Spam-Schutz ohne US-Dienst", cells: [true, false, false, false] },
      { feature: "Preis (1 Website)", cells: ["59 €/Jahr", "ab 99 $/Jahr", "ab 59 $/Jahr", "kostenlos*"] },
    ],
    note: "* WooCommerce ist kostenlos, aber ein kompletter Shop. Für ein einzelnes Zahlungsformular brauchst du trotzdem Gateway-Plugin und Checkout-Konfiguration. Preise: Stand Juli 2026, reguläre Listenpreise.",
  },
  steps: {
    heading: "So funktioniert es",
    items: [
      {
        title: "Flinkform installieren",
        desc: "Das kostenlose Plugin aus dem WordPress.org-Verzeichnis. 14 Feldtypen, Multi-Step, bedingte Logik, Spam-Schutz.",
      },
      {
        title: "Pro aktivieren",
        desc: "Flinkform Pro als zweites Plugin installieren und aktivieren. Pro dockt automatisch an den Free-Core an.",
      },
      {
        title: "Module konfigurieren",
        desc: "Stripe, SMTP, Webhooks, Newsletter: alles direkt im WordPress-Admin. Pro-Panels erscheinen automatisch im Block-Editor.",
      },
    ],
  },
  pricing: {
    heading: "Preise",
    sub: "Alle Pläne enthalten sämtliche Pro-Features, gestaffelt wird nur nach der Anzahl deiner Websites. Jährliche Abrechnung, Updates und Support inklusive.",
    perYear: "/Jahr",
    bestseller: "Bestseller",
    includedModules: "✓ Alle 8 Pro-Module",
    includedSupport: "✓ Updates & Support",
    cta: "Vormerken",
    footNotes: ["✓ 14 Tage Geld-zurück-Garantie", "✓ Jeder Plan enthält alle Features", "✓ Jährlich kündbar"],
    lifetime: {
      badge: "Nur zum Launch · Limitiert",
      title: "Einmal zahlen. Für immer nutzen.",
      desc: "Zum Launch gibt es eine limitierte Lifetime-Lizenz: alle Pro-Features auf bis zu 25 Websites, keine jährliche Verlängerung, Updates inklusive. Das Angebot wird nach der Launch-Phase dauerhaft abgeschaltet. Danach gibt es Flinkform Pro nur noch im Abo.",
      once: "einmalig",
      cta: "Unverbindlich vormerken",
      note: "Verkauf startet in Kürze. Vorgemerkte erfahren es zuerst.",
    },
  },
  inquiry: {
    title: "Interesse an Flinkform Pro?",
    desc: "Sag kurz, wofür du Pro einsetzen willst. Du bekommst eine persönliche Antwort von Dennis und erfährst als Erster, wenn der Verkauf startet.",
  },
  faq: {
    items: [
      {
        q: "Was kostet Flinkform Pro?",
        a: "Flinkform Pro kostet 59 € pro Jahr für 1 Website, 99 € für 3 Websites (Studio), 149 € für bis zu 25 Websites (Agency) und 299 € ohne Site-Limit (Unlimited). Alle Pläne enthalten sämtliche Pro-Features, die Staffelung richtet sich nur nach der Anzahl der Websites. Dazu gibt es eine 14-Tage-Geld-zurück-Garantie.",
      },
      {
        q: "Welche Zahlungsarten unterstützt das Payment-Feld?",
        a: "Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay und Stripe Link über das Stripe Payment Element. Welche Zahlarten deine Besucher sehen, steuerst du im Stripe-Dashboard. SEPA-Zahlungen werden als 'in Bearbeitung' angenommen und automatisch bestätigt, sobald Stripe die Abbuchung meldet.",
      },
      {
        q: "Brauche ich ein Stripe-Konto?",
        a: "Ja, aber es ist kostenlos und in zwei Minuten erstellt. Du bekommst sofort Test-Keys zum Ausprobieren. Im Live-Betrieb gehen Zahlungen direkt auf dein Stripe-Konto, Flinkform Pro ist nie dazwischen.",
      },
      {
        q: "Sind die Zahlungen PCI-konform?",
        a: "Ja. Zahlungsdaten verarbeitet ausschließlich Stripe (Payment Element), sie berühren nie deinen Server. Der Server prüft nur, ob die Zahlung bestätigt wurde und ob Betrag und Währung zum Formular passen, bevor die Einsendung gespeichert wird.",
      },
      {
        q: "Was passiert, wenn die Zahlung fehlschlägt?",
        a: "Das Formular wird nicht abgeschickt. Der Besucher sieht eine Fehlermeldung direkt am Zahlungsfeld und kann es erneut versuchen. Keine Einsendung ohne bestätigte Zahlung.",
      },
      {
        q: "Brauche ich das kostenlose Flinkform, um Pro zu nutzen?",
        a: "Ja. Flinkform Pro ist ein Add-on, das auf dem kostenlosen Flinkform-Plugin (ab Version 1.3.0) aufbaut. Du installierst zuerst das kostenlose Plugin und aktivierst Pro als Erweiterung. Alle Free-Features bleiben erhalten.",
      },
      {
        q: "Ist Flinkform Pro DSGVO-konform?",
        a: "Ja. Kartendaten laufen nur über Stripe, nicht über deinen Server. Alle Pro-Module sind in die WordPress-Privacy-Tools integriert: Datenexport, Löschung, Löschkaskaden für Uploads. API-Keys werden AES-256-verschlüsselt gespeichert. Das Mail-Log speichert bewusst keine Mail-Inhalte.",
      },
      {
        q: "Was passiert mit meinen Daten, wenn die Lizenz ausläuft?",
        a: "Nichts. Deine Webhooks, SMTP-Einstellungen, Stripe-Keys und Upload-Dateien bleiben gespeichert. Pro-Datenbanktabellen werden nur bei einer kompletten Deinstallation entfernt, nie bei Deaktivierung oder Lizenz-Ablauf.",
      },
      {
        q: "Wann kann ich kaufen?",
        a: "Der Verkauf startet in Kürze über einen Checkout mit Lizenz-Key und automatischen Updates. Trag dich über das Anfrage-Formular ein, dann erfährst du es zuerst und sicherst dir den Zugriff auf die limitierte Lifetime-Lizenz zum Launch.",
      },
    ],
  },
  requirements: {
    heading: "Voraussetzungen",
    items: [
      { label: "WordPress", value: "6.5+" },
      { label: "PHP", value: "8.1+" },
      { label: "Flinkform", value: `${MIN_FREE_FOR_PRO}+` },
      { label: "Preis", value: "Ab 59 €/J." },
    ],
    noFlinkformPre: "Noch kein Flinkform? ",
    noFlinkformLink: "Hier geht es zum kostenlosen Plugin.",
  },
} as const;

export type ProDict = Widen<typeof pro>;
