import type { Widen } from "@/lib/i18n/widen";
import { CONTACT_MAIL, DEMO_URL, LIFETIME, MIN_FREE_FOR_PRO, PRICING, PRO_VERSION } from "@/lib/site";
import { LIFETIME_UNTIL } from "@/lib/pro-checkout";

/** 2026-12-31 → 31.12.2026 */
const lifetimeUntil = LIFETIME_UNTIL.split("-").reverse().join(".");

export const pro = {
  meta: {
    title:
      "Flinkform Pro: Stripe, SEPA und Berechnungsfelder für WordPress-Formulare",
    description:
      "Flinkform Pro: Stripe Payments mit Kreditkarte, SEPA, Apple Pay und Google Pay direkt im Formular. Berechnungsfelder, Webhooks, Multi-Upload, SMTP, Newsletter. Ab 59 € pro Jahr.",
    ogTitle: "Flinkform Pro - Das Formular, das Geld verdient.",
    ogDescription:
      "Stripe-Zahlungen mit SEPA und Wallets, Berechnungsfelder, Webhooks, SMTP, Multi-Upload und Newsletter: ein Add-on statt fünf Plugins. Ab 59 € pro Jahr.",
  },
  breadcrumb: { home: "Flinkform", pro: "Flinkform Pro" },
  hero: {
    // Auf Mobil nur eyebrow, ab sm mit Präfix, damit die Pille nicht umbricht.
    eyebrowPrefix: "Premium Add-on · ",
    eyebrow: "Jetzt verfügbar",
    titlePre: "Das Formular, das ",
    titleHighlight: "Geld verdient",
    titlePost: ".",
    // Dekorative Zeile über der H1, passt zu "Ein Add-on statt fünf Plugins".
    replaces: ["Zahlungs-Plugin", "Rechner-Plugin", "Upload-Plugin", "SMTP-Plugin", "Webhook-Plugin"],
    entity:
      "Flinkform Pro ist das kommerzielle Add-on für das kostenlose WordPress-Formular-Plugin Flinkform. Es ergänzt Stripe-Zahlungen (Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay), Berechnungsfelder, Multi-Datei-Upload, SMTP-Versand, Webhooks, Newsletter-Anbindung, CSV-Export und Custom CSS.",
    sub: "Zahlung im Formular statt Shop-System. Live-Preis statt Rückfrage. CRM-Eintrag statt Copy-Paste. Ein Add-on statt fünf Plugins.",
    ctaPrimary: "Unverbindlich vormerken",
    ctaBuy: "Jetzt Pro kaufen",
    ctaSecondary: "Preise ansehen",
    ctaDemo: "Live-Demo ansehen",
    demoUrl: `${DEMO_URL}/angebotsrechner/`,
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
    heading: "Alle Features. In jedem Plan.",
    sub: "Du zahlst nach Anzahl deiner Websites, nicht nach Funktionen. Jährliche Abrechnung, Updates und Support inklusive. Download und Lizenzschlüssel bekommst du direkt nach dem Kauf.",
    plans: PRICING.map(({ sites, perSite, desc }) => ({ sites, perSite, desc })),
    perYear: "/Jahr",
    bestseller: "Empfohlen",
    includedModules: "✓ Alle 8 Pro-Module",
    includedSupport: "✓ Updates & Support",
    ctaBuy: "Jetzt kaufen",
    ctaSoon: "Bald verfügbar",
    guarantee: {
      title: "14 Tage Geld zurück. Ohne Nachfragen.",
      desc: "Passt Flinkform Pro nicht zu deinem Projekt, schreib eine kurze Mail und du bekommst den vollen Betrag zurück. Auch nach dem Download.",
      note: "Eine freiwillige Garantie von uns, zusätzlich zu deinen gesetzlichen Rechten.",
    },
    footNotes: [
      "✓ Sofort nutzbar nach dem Kauf",
      "✓ Jährlich kündbar",
    ],
    // TODO Dennis: Formulierung freigeben. Die Preise sind netto, Freemius
    // schlägt die Umsatzsteuer im Checkout auf (bei 59 € sind das 70,21 €
    // brutto in Deutschland). Zielgruppe ist B2B, deshalb hier netto
    // ausgezeichnet und der Hinweis direkt darunter. Wenn du auch Privatkunden
    // ansprechen willst, muss stattdessen der Bruttopreis nach oben.
    vatNote:
      "Alle Preise verstehen sich zzgl. Umsatzsteuer. Der Kauf läuft über Freemius: Freemius ist Verkäufer (Merchant of Record) und berechnet die Umsatzsteuer im Checkout nach deinem Land. Mit gültiger USt-IdNr. entfällt sie innerhalb der EU.",
    termsPre: "Für den Kauf gelten die ",
    termsLink: "Bedingungen von Freemius",
    termsUrl: "https://freemius.com/terms/",
    termsPost: ".",
    lifetime: {
      badge: `Launch-Angebot · nur bis ${lifetimeUntil}`,
      title: "Einmal zahlen. Für immer nutzen.",
      desc: `Bis zum ${lifetimeUntil} gibt es Flinkform Pro auch als Lifetime-Lizenz: alle Pro-Features auf bis zu 25 Websites, keine jährliche Verlängerung, Updates inklusive. Danach schalten wir das Angebot dauerhaft ab, Flinkform Pro gibt es dann nur noch im Abo.`,
      sites: LIFETIME.sites,
      once: "einmalig",
      ctaBuy: "Lifetime sichern",
      ctaSoon: "Unverbindlich vormerken",
      noteBuy: "Einmalzahlung, keine Verlängerung. 14 Tage Geld zurück.",
      noteSoon: "Verkauf startet in Kürze. Vorgemerkte erfahren es zuerst.",
    },
  },
  inquiry: {
    title: "Interesse an Flinkform Pro?",
    desc: "Sag kurz, wofür du Pro einsetzen willst. Du bekommst eine persönliche Antwort von Dennis.",
    // Sobald verkauft wird: Kontaktbox statt Vormerk-Formular.
    salesTitle: "Fragen vor dem Kauf? Schreib mir.",
    salesDesc: "Sag mir, wofür du Pro einsetzen willst, und ich sag dir ehrlich, ob es passt. Die Antwort kommt von mir persönlich, nicht von einem Ticket-System.",
    salesCta: "Mail an Dennis",
    salesMail: CONTACT_MAIL,
    salesSubject: "Frage zu Flinkform Pro",
  },
  faq: {
    items: [
      {
        q: "Was kostet Flinkform Pro?",
        a: "Flinkform Pro kostet 59 € pro Jahr für 1 Website, 99 € für 3 Websites (Studio), 149 € für bis zu 25 Websites (Agency) und 299 € ohne Site-Limit (Unlimited). Alle Pläne enthalten sämtliche Pro-Features, die Staffelung richtet sich nur nach der Anzahl der Websites. Dazu gibt es eine 14-Tage-Geld-zurück-Garantie.",
      },
      {
        q: "Für wie viele Websites gilt meine Lizenz?",
        a: "Das ist der einzige Unterschied zwischen den Plänen: Single gilt für 1 Website, Studio für 3, Agency für bis zu 25 und Unlimited ohne Limit. Der Funktionsumfang ist bei allen identisch. Du kannst später auf eine größere Staffel wechseln, ohne neu zu kaufen.",
      },
      {
        q: "Bekomme ich eine Rechnung, und wie ist das mit der Umsatzsteuer?",
        a: "Ja. Den Verkauf wickelt Freemius als Merchant of Record ab, du bekommst deine Rechnung direkt von dort. Die angegebenen Preise sind Nettopreise, die Umsatzsteuer kommt im Checkout nach deinem Land dazu. Trägst du eine gültige USt-IdNr. ein, entfällt sie innerhalb der EU (Reverse Charge).",
      },
      {
        q: "Kann ich mein Geld zurückbekommen?",
        a: "Ja, 14 Tage lang, ohne Nachfragen. Wenn Flinkform Pro nicht das tut, was du brauchst, schreibst du eine Mail und bekommst den vollen Betrag zurück. Keine Begründung nötig.",
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
        a: `Ja. Flinkform Pro ist ein Add-on, das auf dem kostenlosen Flinkform-Plugin (ab Version ${MIN_FREE_FOR_PRO}) aufbaut. Du installierst zuerst das kostenlose Plugin und aktivierst Pro als Erweiterung. Alle Free-Features bleiben erhalten.`,
      },
      {
        q: "Ist Flinkform Pro DSGVO-konform?",
        a: "Ja. Kartendaten laufen nur über Stripe, nicht über deinen Server. Alle Pro-Module sind in die WordPress-Privacy-Tools integriert: Datenexport, Löschung, Löschkaskaden für Uploads. API-Keys werden AES-256-verschlüsselt gespeichert. Das Mail-Log speichert bewusst keine Mail-Inhalte.",
      },
      {
        q: "Was passiert mit meinen Daten, wenn die Lizenz ausläuft?",
        a: "Nichts. Deine Webhooks, SMTP-Einstellungen, Stripe-Keys und Upload-Dateien bleiben gespeichert. Pro-Datenbanktabellen werden nur bei einer kompletten Deinstallation entfernt, nie bei Deaktivierung oder Lizenz-Ablauf.",
      },
    ],
    /** Nur sichtbar, solange der Verkauf noch nicht freigeschaltet ist. */
    soon: {
      q: "Wann kann ich kaufen?",
      a: "Der Verkauf startet in Kürze über einen Checkout mit Lizenz-Key und automatischen Updates. Trag dich über das Anfrage-Formular ein, dann erfährst du es zuerst und sicherst dir den Zugriff auf die limitierte Lifetime-Lizenz zum Launch.",
    },
    /**
     * Nur sichtbar, sobald verkauft wird. Entspricht der Freemius-Einstellung
     * "Keep features, only block updates and support" (28.09.2026).
     */
    expiry: {
      q: "Was passiert, wenn meine Lizenz ausläuft?",
      a: "Alle Pro-Funktionen laufen weiter, auch deine Zahlungsformulare. Es enden nur Updates und Support. Sobald du verlängerst, bekommst du beides wieder. Einstellungen, Uploads und Schlüssel bleiben unangetastet.",
    },
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
