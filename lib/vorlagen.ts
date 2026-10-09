import { DEMO_URL } from "@/lib/site";
import { VORLAGEN_SLUGS, type VorlageSlug } from "@/lib/vorlagen-slugs";
import type { Locale } from "@/lib/i18n/routes";

/**
 * Formular-Vorlagen nach Anwendungsfall (/vorlagen, /en/templates).
 *
 * Abgrenzung zu /wissen: Eine Vorlage ist "zum Kopieren" (Felder, Aufbau in
 * fünf Minuten, Block-Markup). Die Wissensseiten erklären das Thema. Beide
 * verlinken sich gegenseitig, damit sie nicht um dieselbe Suche konkurrieren.
 *
 * Das Block-Markup entspricht 1:1 den Startvorlagen im Plugin (Flinkform
 * 1.15.0, src/form-container/templates.js, Texte aus flinkform-de_DE.po).
 * Pro-Vorlagen haben kein Markup: Ihre Felder gibt es nur mit Pro.
 */

type Block = [name: string, attrs: Record<string, unknown>];
type FormSpec = { attrs: Record<string, unknown>; blocks: Block[] };

type VorlageText = {
  /** Kurzname für Karten und Breadcrumb. */
  name: string;
  /** <title>, ohne " | Flinkform". */
  metaTitle: string;
  description: string;
  h1: string;
  /** Problem in zwei Sätzen. */
  problem: string;
  fields: string[];
  steps: string[];
  tip?: string;
  /** Was Pro dazu beiträgt bzw. warum Pro nötig ist. */
  proNote?: string;
};

export type Vorlage = {
  slug: VorlageSlug;
  enSlug: string;
  tier: "free" | "pro" | "free-pro";
  /** Erstveröffentlichung und letzte inhaltliche Änderung. */
  published: string;
  updated: string;
  demoUrl?: string;
  /** Interne Links (deutsche Pfade). EN zeigt nur übersetzte Ziele. */
  related: string[];
  de: VorlageText;
  en: VorlageText;
  markup?: { de: FormSpec; en: FormSpec };
};

const opt = (label: string, value: string) => ({ label, value });

// Gemeinsame Felder der Plugin-Vorlagen.
const nameDe: Block = ["flinkform/field-text", { fieldName: "name", label: "Name", required: true, autocomplete: "name" }];
const nameEn: Block = ["flinkform/field-text", { fieldName: "name", label: "Name", required: true, autocomplete: "name" }];
const emailDe: Block = ["flinkform/field-email", { fieldName: "email", label: "E-Mail", required: true }];
const emailEn: Block = ["flinkform/field-email", { fieldName: "email", label: "Email", required: true }];
const consent: Block = ["flinkform/field-consent", { fieldName: "consent" }];

const SLUG_EN = Object.fromEntries(VORLAGEN_SLUGS.map((s) => [s.de, s.en])) as Record<VorlageSlug, string>;

export const vorlagen: Vorlage[] = [
  {
    slug: "kontaktformular",
    enSlug: SLUG_EN.kontaktformular,
    tier: "free",
    published: "2026-10-09",
    updated: "2026-10-09",
    demoUrl: `${DEMO_URL}/kontakt/`,
    related: [
      "/wissen/formular-spam-stoppen-wordpress",
      "/wissen/wordpress-formular-ohne-recaptcha",
      "/vergleich/contact-form-7-alternative",
    ],
    de: {
      name: "Kontaktformular",
      metaTitle: "Kontaktformular-Vorlage für WordPress: datenschutzfreundlich, ohne reCAPTCHA",
      description:
        "Kostenlose Kontaktformular-Vorlage für den WordPress-Block-Editor: Name, E-Mail, Nachricht, Einwilligung. Spam-Schutz ohne reCAPTCHA, Einsendungen in WordPress. In fünf Minuten fertig.",
      h1: "Kontaktformular-Vorlage für WordPress",
      problem:
        "Ein Kontaktformular soll in fünf Minuten stehen und dann einfach laufen. Ohne Captcha-Rätsel für Besucher, ohne Drittanbieter in der Datenschutzerklärung und ohne dass eine verlorene Mail eine Anfrage kostet.",
      fields: ["Name (Pflicht)", "E-Mail (Pflicht)", "Nachricht (Pflicht)", "Einwilligung zur Datenverarbeitung"],
      steps: [
        "Auf der Kontaktseite den Block „Flinkform-Formular“ einfügen.",
        "In der Startauswahl die Vorlage „Kontakt“ wählen.",
        "In der Seitenleiste die Empfänger-Adresse für die Benachrichtigung eintragen.",
        "Seite veröffentlichen. Der Spam-Schutz ist ab Werk aktiv.",
      ],
      tip: "Jede Einsendung landet zusätzlich unter Flinkform → Einsendungen. Kommt eine Mail nicht an, ist die Anfrage trotzdem da.",
    },
    en: {
      name: "Contact form",
      metaTitle: "Contact form template for WordPress: privacy-friendly, no reCAPTCHA",
      description:
        "Free contact form template for the WordPress block editor: name, email, message, consent. Spam protection without reCAPTCHA, submissions stored in WordPress. Done in five minutes.",
      h1: "Contact form template for WordPress",
      problem:
        "A contact form should be up in five minutes and then just work. No CAPTCHA puzzles for visitors, no third party in your privacy policy, and no lost inquiry because one email didn't arrive.",
      fields: ["Name (required)", "Email (required)", "Message (required)", "Consent to data processing"],
      steps: [
        "Add the “Flinkform Form” block to your contact page.",
        "Pick the “Contact” template in the start screen.",
        "Enter the recipient address for notifications in the sidebar.",
        "Publish the page. Spam protection is on by default.",
      ],
      tip: "Every submission is also stored under Flinkform → Submissions. If an email gets lost, the inquiry is still there.",
    },
    markup: {
      de: {
        attrs: { title: "Kontaktformular" },
        blocks: [nameDe, emailDe, ["flinkform/field-textarea", { fieldName: "message", label: "Nachricht", required: true }], consent],
      },
      en: {
        attrs: { title: "Contact form" },
        blocks: [nameEn, emailEn, ["flinkform/field-textarea", { fieldName: "message", label: "Message", required: true }], consent],
      },
    },
  },
  {
    slug: "rueckruf-formular",
    enSlug: SLUG_EN["rueckruf-formular"],
    tier: "free",
    published: "2026-10-09",
    updated: "2026-10-09",
    related: [
      "/wissen/bedingte-logik-wordpress-formular",
      "/wissen/wordpress-formular-mails-kommen-nicht-an",
      "/wissen/formular-spam-stoppen-wordpress",
    ],
    de: {
      name: "Rückruf-Formular",
      metaTitle: "Rückruf-Formular für WordPress: Vorlage für Handwerker und Dienstleister",
      description:
        "Kostenlose Vorlage für ein Rückruf-Formular in WordPress: Name, Telefon, beste Rückrufzeit, Anliegen. Ideal für Handwerker. Mit bedingter Logik erweiterbar, ohne reCAPTCHA.",
      h1: "Rückruf-Formular für WordPress: Vorlage für Handwerker",
      problem:
        "Kunden auf der Baustelle schreiben keine langen Mails. Sie wollen eine Nummer hinterlassen und zurückgerufen werden, zu einer Zeit, die passt.",
      fields: [
        "Name (Pflicht)",
        "Telefon (Pflicht)",
        "Wann bist du am besten erreichbar? (Vormittags, Nachmittags, Abends)",
        "Worum geht es?",
        "Einwilligung zur Datenverarbeitung",
      ],
      steps: [
        "Den Block „Flinkform-Formular“ einfügen.",
        "Die Vorlage „Rückrufbitte“ wählen.",
        "Empfänger-Adresse eintragen, zum Beispiel das Büro.",
        "Seite veröffentlichen.",
      ],
      tip: "Mit bedingter Logik fragst du nur bei „Notfall“ nach der Adresse: ein Auswahlfeld „Dringlichkeit“ ergänzen und das Adressfeld nur bei „Notfall“ einblenden.",
    },
    en: {
      name: "Callback form",
      metaTitle: "Callback request form for WordPress: template for trades and services",
      description:
        "Free callback request form template for WordPress: name, phone, best time to call, topic. Built for trades and service businesses. Extend it with conditional logic, no reCAPTCHA.",
      h1: "Callback request form for WordPress",
      problem:
        "Customers on a job site don't write long emails. They want to leave a number and get a call back at a time that works for them.",
      fields: [
        "Name (required)",
        "Phone (required)",
        "Best time to call (morning, afternoon, evening)",
        "What is it about?",
        "Consent to data processing",
      ],
      steps: [
        "Add the “Flinkform Form” block.",
        "Pick the “Callback request” template.",
        "Enter the recipient address, for example your office.",
        "Publish the page.",
      ],
      tip: "With conditional logic you only ask for the address in an emergency: add an “Urgency” choice and show the address field only for “Emergency”.",
    },
    markup: {
      de: {
        attrs: { title: "Rückrufbitte", submitLabel: "Rückruf anfordern" },
        blocks: [
          nameDe,
          ["flinkform/field-phone", { fieldName: "phone", label: "Telefon", required: true }],
          [
            "flinkform/field-radio",
            {
              fieldName: "best_time",
              label: "Wann bist du am besten erreichbar?",
              display: "buttons",
              options: [opt("Vormittags", "morning"), opt("Nachmittags", "afternoon"), opt("Abends", "evening")],
            },
          ],
          ["flinkform/field-textarea", { fieldName: "topic", label: "Worum geht es?" }],
          consent,
        ],
      },
      en: {
        attrs: { title: "Callback request", submitLabel: "Request a callback" },
        blocks: [
          nameEn,
          ["flinkform/field-phone", { fieldName: "phone", label: "Phone", required: true }],
          [
            "flinkform/field-radio",
            {
              fieldName: "best_time",
              label: "Best time to call",
              display: "buttons",
              options: [opt("Morning", "morning"), opt("Afternoon", "afternoon"), opt("Evening", "evening")],
            },
          ],
          ["flinkform/field-textarea", { fieldName: "topic", label: "What is it about?" }],
          consent,
        ],
      },
    },
  },
  {
    slug: "projektanfrage-formular",
    enSlug: SLUG_EN["projektanfrage-formular"],
    tier: "free",
    published: "2026-10-09",
    updated: "2026-10-09",
    demoUrl: `${DEMO_URL}/projektanfrage/`,
    related: [
      "/wissen/multi-step-formular-wordpress",
      "/wissen/bedingte-logik-wordpress-formular",
      "/wissen/conversion-tracking-wordpress-formular",
    ],
    de: {
      name: "Projektanfrage in 3 Schritten",
      metaTitle: "Projektanfrage-Formular für Agenturen: mehrstufige WordPress-Vorlage",
      description:
        "Kostenlose Vorlage für eine mehrstufige Projektanfrage in WordPress: Vorhaben und Budget, Details, Kontakt. Kurze Schritte statt eines langen Formulars, im Block-Editor gebaut.",
      h1: "Projektanfrage-Formular in 3 Schritten",
      problem:
        "Ein langes Anfrageformular schreckt ab, ein zu kurzes liefert Anfragen ohne Substanz. Drei kurze Schritte holen beides: erst das Vorhaben, dann die Details, zum Schluss die Kontaktdaten.",
      fields: [
        "Schritt 1: Was hast du vor? (Neue Website, Relaunch, Onlineshop, Etwas anderes) · Budget",
        "Schritt 2: Erzähl uns von deinem Projekt (Pflicht) · Aktuelle Website",
        "Schritt 3: Name (Pflicht) · Firma · E-Mail (Pflicht) · Telefon · Einwilligung",
      ],
      steps: [
        "Den Block „Flinkform-Formular“ einfügen.",
        "Die Vorlage „Projektanfrage (3 Schritte)“ wählen.",
        "Budget-Spannen und Projektarten an dein Angebot anpassen.",
        "Seite veröffentlichen. Die Fortschrittsanzeige ist schon dabei.",
      ],
      tip: "Leite nach dem Absenden auf eine Danke-Seite weiter: Flinkform hängt Parameter an, mit denen du die Anfrage in deinem Analyse-Tool als Conversion zählst.",
    },
    en: {
      name: "Project inquiry in 3 steps",
      metaTitle: "Project inquiry form for agencies: multi-step WordPress template",
      description:
        "Free multi-step project inquiry template for WordPress: project and budget, details, contact. Short steps instead of one long form, built in the block editor.",
      h1: "Project inquiry form in 3 steps",
      problem:
        "A long inquiry form scares people off, a short one gets you inquiries with no substance. Three short steps get both: the project first, then the details, contact info last.",
      fields: [
        "Step 1: What are you planning? (new website, relaunch, online shop, something else) · Budget",
        "Step 2: Tell us about the project (required) · Current website",
        "Step 3: Name (required) · Company · Email (required) · Phone · Consent",
      ],
      steps: [
        "Add the “Flinkform Form” block.",
        "Pick the “Project inquiry (3 steps)” template.",
        "Adjust the budget ranges and project types to your offer.",
        "Publish the page. The progress bar is already included.",
      ],
      tip: "Redirect to a thank-you page after submission: Flinkform adds parameters so your analytics tool can count the inquiry as a conversion.",
    },
    markup: {
      de: {
        attrs: { title: "Projektanfrage", submitLabel: "Anfrage senden" },
        blocks: [
          [
            "flinkform/field-radio",
            {
              fieldName: "project_type",
              label: "Was hast du vor?",
              required: true,
              display: "buttons",
              options: [opt("Neue Website", "new-website"), opt("Relaunch", "relaunch"), opt("Onlineshop", "shop"), opt("Etwas anderes", "other")],
            },
          ],
          [
            "flinkform/field-select",
            {
              fieldName: "budget",
              label: "Budget",
              options: [
                opt("Noch unklar", "unsure"),
                opt("Bis 5.000 €", "up-to-5000"),
                opt("5.000 bis 15.000 €", "5000-15000"),
                opt("Mehr als 15.000 €", "over-15000"),
              ],
            },
          ],
          ["flinkform/page-break", { label: "Details" }],
          ["flinkform/field-textarea", { fieldName: "description", label: "Erzähl uns von deinem Projekt", required: true }],
          ["flinkform/field-url", { fieldName: "website", label: "Deine aktuelle Website (falls vorhanden)" }],
          ["flinkform/page-break", { label: "Kontakt" }],
          nameDe,
          ["flinkform/field-text", { fieldName: "company", label: "Firma", autocomplete: "organization" }],
          emailDe,
          ["flinkform/field-phone", { fieldName: "phone", label: "Telefon" }],
          consent,
        ],
      },
      en: {
        attrs: { title: "Project inquiry", submitLabel: "Send inquiry" },
        blocks: [
          [
            "flinkform/field-radio",
            {
              fieldName: "project_type",
              label: "What are you planning?",
              required: true,
              display: "buttons",
              options: [opt("New website", "new-website"), opt("Relaunch", "relaunch"), opt("Online shop", "shop"), opt("Something else", "other")],
            },
          ],
          [
            "flinkform/field-select",
            {
              fieldName: "budget",
              label: "Budget",
              options: [
                opt("Not sure yet", "unsure"),
                opt("Up to 5,000", "up-to-5000"),
                opt("5,000 to 15,000", "5000-15000"),
                opt("More than 15,000", "over-15000"),
              ],
            },
          ],
          ["flinkform/page-break", { label: "Details" }],
          ["flinkform/field-textarea", { fieldName: "description", label: "Tell us about the project", required: true }],
          ["flinkform/field-url", { fieldName: "website", label: "Current website (if any)" }],
          ["flinkform/page-break", { label: "Contact" }],
          nameEn,
          ["flinkform/field-text", { fieldName: "company", label: "Company", autocomplete: "organization" }],
          emailEn,
          ["flinkform/field-phone", { fieldName: "phone", label: "Phone" }],
          consent,
        ],
      },
    },
  },
  {
    slug: "terminanfrage-formular",
    enSlug: SLUG_EN["terminanfrage-formular"],
    tier: "free",
    published: "2026-10-09",
    updated: "2026-10-09",
    related: ["/wissen/gutenberg-formular-erstellen", "/wissen/wordpress-formular-mails-kommen-nicht-an"],
    de: {
      name: "Terminanfrage",
      metaTitle: "Terminanfrage-Formular für WordPress: kostenlose Vorlage mit Wunschtermin",
      description:
        "Kostenlose Vorlage für eine Terminanfrage in WordPress: Kontaktdaten, Wunschtermin, Tageszeit. Für Praxen, Studios und Beratung. Kein Buchungskalender, sondern eine Anfrage, die du bestätigst.",
      h1: "Terminanfrage-Formular für WordPress",
      problem:
        "Nicht jeder Betrieb braucht einen Buchungskalender mit freien Slots. Oft reicht es, wenn Kunden einen Wunschtermin nennen und du ihn bestätigst.",
      fields: [
        "Name (Pflicht)",
        "E-Mail (Pflicht)",
        "Telefon",
        "Wunschtermin (Pflicht, Datumsfeld)",
        "Tageszeit (Vormittags, Nachmittags)",
        "Gibt es etwas, das wir wissen sollten?",
        "Einwilligung zur Datenverarbeitung",
      ],
      steps: [
        "Den Block „Flinkform-Formular“ einfügen.",
        "Die Vorlage „Terminanfrage“ wählen.",
        "Im Datumsfeld bei Bedarf frühestes und spätestes Datum festlegen.",
        "Seite veröffentlichen und die Bestätigungsmail an den Kunden einschalten.",
      ],
      tip: "Ehrlich gesagt: Freie Zeitfenster und Kalender-Abgleich kann Flinkform nicht. Dafür gibt es Buchungs-Plugins. Für eine Anfrage, die du per Mail bestätigst, reicht diese Vorlage.",
    },
    en: {
      name: "Appointment request",
      metaTitle: "Appointment request form for WordPress: free template with preferred date",
      description:
        "Free appointment request template for WordPress: contact details, preferred date, time of day. For practices, studios and consultants. Not a booking calendar, but a request you confirm.",
      h1: "Appointment request form for WordPress",
      problem:
        "Not every business needs a booking calendar with open slots. Often it's enough for customers to name a preferred date and for you to confirm it.",
      fields: [
        "Name (required)",
        "Email (required)",
        "Phone",
        "Preferred date (required, date field)",
        "Time of day (morning, afternoon)",
        "Anything we should know?",
        "Consent to data processing",
      ],
      steps: [
        "Add the “Flinkform Form” block.",
        "Pick the “Appointment request” template.",
        "Set an earliest and latest date on the date field if you need to.",
        "Publish the page and turn on the confirmation email to the customer.",
      ],
      tip: "To be honest: Flinkform doesn't do open time slots or calendar sync. That's what booking plugins are for. For a request you confirm by email, this template is all you need.",
    },
    markup: {
      de: {
        attrs: { title: "Terminanfrage", submitLabel: "Termin anfragen" },
        blocks: [
          nameDe,
          emailDe,
          ["flinkform/field-phone", { fieldName: "phone", label: "Telefon" }],
          ["flinkform/field-date", { fieldName: "date", label: "Wunschtermin", required: true }],
          [
            "flinkform/field-radio",
            {
              fieldName: "time_of_day",
              label: "Tageszeit",
              display: "buttons",
              options: [opt("Vormittags", "morning"), opt("Nachmittags", "afternoon")],
            },
          ],
          ["flinkform/field-textarea", { fieldName: "message", label: "Gibt es etwas, das wir wissen sollten?" }],
          consent,
        ],
      },
      en: {
        attrs: { title: "Appointment request", submitLabel: "Request appointment" },
        blocks: [
          nameEn,
          emailEn,
          ["flinkform/field-phone", { fieldName: "phone", label: "Phone" }],
          ["flinkform/field-date", { fieldName: "date", label: "Preferred date", required: true }],
          [
            "flinkform/field-radio",
            {
              fieldName: "time_of_day",
              label: "Time of day",
              display: "buttons",
              options: [opt("Morning", "morning"), opt("Afternoon", "afternoon")],
            },
          ],
          ["flinkform/field-textarea", { fieldName: "message", label: "Anything we should know?" }],
          consent,
        ],
      },
    },
  },
  {
    slug: "bewerbungsformular",
    enSlug: SLUG_EN.bewerbungsformular,
    tier: "pro",
    published: "2026-10-09",
    updated: "2026-10-09",
    related: ["/wissen/bewerbungsformular-wordpress", "/pro", "/wissen/multi-step-formular-wordpress"],
    de: {
      name: "Bewerbungsformular mit Upload",
      metaTitle: "Bewerbungsformular-Vorlage für WordPress: Lebenslauf-Upload ohne Zusatz-Plugin",
      description:
        "Vorlage für ein Bewerbungsformular in WordPress: Kontaktdaten, Stelle, Lebenslauf und Zeugnisse als Upload. Dateien liegen geschützt auf deinem Server. Upload mit Flinkform Pro.",
      h1: "Bewerbungsformular-Vorlage mit Datei-Upload",
      problem:
        "Bewerbungen per Mail landen verstreut in Postfächern, mit Anhängen, die keiner wiederfindet. Ein Formular sammelt alles an einem Ort, und die Unterlagen bleiben auf deinem Server statt bei einem Drittanbieter.",
      fields: [
        "Name (Pflicht)",
        "E-Mail (Pflicht)",
        "Telefon",
        "Stelle (Auswahlfeld)",
        "Lebenslauf, Anschreiben, Zeugnisse (Datei-Upload, bis zu 10 Dateien, Pro)",
        "Nachricht",
        "Einwilligung zur Datenverarbeitung",
      ],
      steps: [
        "Den Block „Flinkform-Formular“ einfügen und die Vorlage „Kontakt“ als Basis wählen.",
        "Telefon und ein Auswahlfeld „Stelle“ mit deinen offenen Stellen ergänzen.",
        "Über „Feld hinzufügen“ das Feld „Datei-Upload“ einfügen, Dateitypen (PDF) und Maximalgröße festlegen.",
        "Eine Löschfrist für Einsendungen setzen und die Seite veröffentlichen.",
      ],
      tip: "Bei vielen Feldern lohnt sich ein zweiter Schritt: erst Kontaktdaten, dann Unterlagen. Das senkt die Hürde, überhaupt anzufangen.",
      proNote:
        "Der Datei-Upload gehört zu Flinkform Pro. Hochgeladene Dateien sind nicht öffentlich abrufbar, Admins laden sie über einen geschützten Link, und beim Löschen einer Einsendung verschwinden auch die Dateien.",
    },
    en: {
      name: "Job application with upload",
      metaTitle: "Job application form template for WordPress: CV upload without an extra plugin",
      description:
        "Job application form template for WordPress: contact details, position, CV and certificates as uploads. Files stay protected on your server. Upload requires Flinkform Pro.",
      h1: "Job application form template with file upload",
      problem:
        "Applications by email end up scattered across inboxes, with attachments nobody can find. A form collects everything in one place, and the documents stay on your server instead of with a third party.",
      fields: [
        "Name (required)",
        "Email (required)",
        "Phone",
        "Position (select field)",
        "CV, cover letter, certificates (file upload, up to 10 files, Pro)",
        "Message",
        "Consent to data processing",
      ],
      steps: [
        "Add the “Flinkform Form” block and start from the “Contact” template.",
        "Add phone and a “Position” select field with your open roles.",
        "Use “Add field” to insert the “File upload” field, set file types (PDF) and the size limit.",
        "Set a retention period for submissions and publish the page.",
      ],
      tip: "With many fields, a second step helps: contact details first, documents second. That lowers the barrier to start at all.",
      proNote:
        "File upload is part of Flinkform Pro. Uploaded files are not publicly accessible, admins download them through a protected link, and deleting a submission deletes its files too.",
    },
  },
  {
    slug: "angebotsrechner",
    enSlug: SLUG_EN.angebotsrechner,
    tier: "pro",
    published: "2026-10-09",
    updated: "2026-10-09",
    demoUrl: `${DEMO_URL}/angebotsrechner/`,
    related: ["/wissen/angebotsrechner-wordpress", "/pro", "/wissen/bedingte-logik-wordpress-formular"],
    de: {
      name: "Angebotsrechner",
      metaTitle: "Angebotsrechner-Vorlage für WordPress: Preis live im Formular berechnen",
      description:
        "Vorlage für einen Angebotsrechner in WordPress: Menge und Optionen wählen, der Preis rechnet live mit, die Anfrage kommt mit Summe bei dir an. Berechnungsfelder mit Flinkform Pro.",
      h1: "Angebotsrechner-Vorlage für WordPress",
      problem:
        "Wer auf deiner Website nach dem Preis sucht und ihn nicht findet, fragt selten nach. Ein Rechner zeigt den Richtwert sofort, und die Anfrage kommt mit allen Angaben und der Summe bei dir an.",
      fields: [
        "Leistung (Auswahlfeld, Preis als Wert)",
        "Menge (Zahlenfeld)",
        "Extra (Auswahlfeld, Aufpreis als Wert)",
        "Berechnete Summe (Berechnungsfeld, Pro)",
        "Name, E-Mail (Pflicht)",
        "Einwilligung zur Datenverarbeitung",
      ],
      steps: [
        "Den Block „Flinkform-Formular“ einfügen und mit der Vorlage „Kontakt“ starten.",
        "Auswahlfeld „Leistung“ und „Extra“ mit dem Preis als Wert ergänzen, dazu ein Zahlenfeld „Menge“.",
        "Über „Feld hinzufügen“ ein Berechnungsfeld einfügen und die Formel aus den Feldern zusammenklicken, zum Beispiel (Menge × Leistung) + Extra.",
        "Seite veröffentlichen. Der Server rechnet beim Absenden nach.",
      ],
      tip: "Kennzeichne den Wert als Richtpreis. So bleibt die Anfrage unverbindlich, und du kannst im Angebot noch anpassen.",
      proNote:
        "Berechnungsfelder gehören zu Flinkform Pro. Die Summe rechnet live im Browser und wird serverseitig nachgerechnet, ohne eval. Den berechneten Betrag direkt per Stripe kassieren ist in Arbeit, siehe Roadmap.",
    },
    en: {
      name: "Quote calculator",
      metaTitle: "Quote calculator template for WordPress: live price in your form",
      description:
        "Quote calculator template for WordPress: visitors pick quantity and options, the price updates live, and the inquiry reaches you with the total. Calculation fields with Flinkform Pro.",
      h1: "Quote calculator template for WordPress",
      problem:
        "Visitors who look for a price on your site and don't find one rarely ask. A calculator shows a ballpark right away, and the inquiry reaches you with every detail and the total.",
      fields: [
        "Service (select field, price as value)",
        "Quantity (number field)",
        "Extra (select field, surcharge as value)",
        "Calculated total (calculation field, Pro)",
        "Name, email (required)",
        "Consent to data processing",
      ],
      steps: [
        "Add the “Flinkform Form” block and start from the “Contact” template.",
        "Add “Service” and “Extra” select fields with the price as value, plus a “Quantity” number field.",
        "Use “Add field” to insert a calculation field and click the formula together, for example (quantity × service) + extra.",
        "Publish the page. The server recalculates on submit.",
      ],
      tip: "Label the result as an estimate. The inquiry stays non-binding, and you can still adjust the quote.",
      proNote:
        "Calculation fields are part of Flinkform Pro. The total updates live in the browser and is recalculated on the server, no eval. Charging the calculated amount via Stripe is in progress, see the roadmap.",
    },
  },
  {
    slug: "event-anmeldung-mit-zahlung",
    enSlug: SLUG_EN["event-anmeldung-mit-zahlung"],
    tier: "pro",
    published: "2026-10-09",
    updated: "2026-10-09",
    demoUrl: `${DEMO_URL}/workshop/`,
    related: ["/blog/stripe-zahlungen-wordpress-formular", "/wissen/sepa-zahlung-wordpress-formular", "/pro"],
    de: {
      name: "Event-Anmeldung mit Zahlung",
      metaTitle: "Event- und Workshop-Anmeldung mit Zahlung in WordPress: Vorlage ohne Shop",
      description:
        "Vorlage für eine Event- oder Workshop-Anmeldung mit Zahlung in WordPress: Teilnehmerdaten, Ticket, Bezahlung per Karte, SEPA, Apple Pay oder Google Pay. Ohne WooCommerce, mit Flinkform Pro.",
      h1: "Event-Anmeldung mit Zahlung: Vorlage für WordPress",
      problem:
        "Für einen Workshop mit 20 Plätzen willst du keinen Onlineshop aufsetzen. Die Anmeldung soll bezahlt ankommen, und zwar in einem Schritt.",
      fields: [
        "Name (Pflicht)",
        "E-Mail (Pflicht)",
        "Zahlung mit Ticket-Auswahl (zum Beispiel Standard und Frühbucher mit festen Preisen; Stripe: Karte, SEPA-Lastschrift, Apple Pay, Google Pay, Pro)",
        "Einwilligung zur Datenverarbeitung",
      ],
      steps: [
        "Den Block „Flinkform-Formular“ einfügen und mit der Vorlage „Kontakt“ starten.",
        "Über „Feld hinzufügen“ das Zahlungsfeld einfügen und auf „Produktauswahl“ stellen.",
        "Die Tickets mit Preisen anlegen. Stripe-Keys trägst du einmal in den Einstellungen ein.",
        "Im Testmodus einmal durchbuchen, dann veröffentlichen.",
      ],
      tip: "Eine Einsendung gibt es nur mit bestätigter Zahlung. SEPA-Zahlungen kommen als „in Bearbeitung“ an und werden automatisch bestätigt, sobald Stripe die Abbuchung meldet.",
      proNote:
        "Zahlungen gehören zu Flinkform Pro. Das Geld geht direkt auf dein Stripe-Konto, Kartendaten berühren nie deinen Server.",
    },
    en: {
      name: "Event registration with payment",
      metaTitle: "Event and workshop registration with payment in WordPress: no shop needed",
      description:
        "Event or workshop registration template with payment for WordPress: attendee details, ticket, payment by card, SEPA, Apple Pay or Google Pay. No WooCommerce, with Flinkform Pro.",
      h1: "Event registration with payment: WordPress template",
      problem:
        "You don't want to set up an online shop for a workshop with 20 seats. Registrations should arrive paid, in one step.",
      fields: [
        "Name (required)",
        "Email (required)",
        "Payment with ticket choice (for example standard and early bird at fixed prices; Stripe: card, SEPA direct debit, Apple Pay, Google Pay, Pro)",
        "Consent to data processing",
      ],
      steps: [
        "Add the “Flinkform Form” block and start from the “Contact” template.",
        "Use “Add field” to insert the payment field and switch it to “Product choices”.",
        "Create the tickets with their prices. You enter your Stripe keys once in the settings.",
        "Run one test booking in test mode, then publish.",
      ],
      tip: "A submission only exists with a confirmed payment. SEPA payments arrive as “processing” and are confirmed automatically once Stripe reports the debit.",
      proNote:
        "Payments are part of Flinkform Pro. Money goes straight to your Stripe account, and card data never touches your server.",
    },
  },
  {
    slug: "newsletter-anmeldung",
    enSlug: SLUG_EN["newsletter-anmeldung"],
    tier: "free-pro",
    published: "2026-10-09",
    updated: "2026-10-09",
    related: ["/wissen/dsgvo-konformes-formular-plugin", "/pro"],
    de: {
      name: "Newsletter-Anmeldung",
      metaTitle: "Newsletter-Anmeldeformular für WordPress: Vorlage mit Einwilligung und Double-Opt-in",
      description:
        "Kostenlose Vorlage für eine Newsletter-Anmeldung in WordPress: Vorname, E-Mail, ausdrückliche Einwilligung. Mit Flinkform Pro direkt an Brevo, Mailchimp oder CleverReach, inklusive Double-Opt-in.",
      h1: "Newsletter-Anmeldeformular für WordPress",
      problem:
        "Eine Newsletter-Anmeldung braucht eine ausdrückliche Einwilligung und eine Bestätigung per Mail. Das Embed-Formular des Anbieters lädt dafür meist dessen Skripte auf deine Seite.",
      fields: ["Vorname", "E-Mail (Pflicht)", "Einwilligung zum Newsletter (mit Link zur Datenschutzerklärung)"],
      steps: [
        "Den Block „Flinkform-Formular“ einfügen.",
        "Die Vorlage „Newsletter-Anmeldung“ wählen.",
        "Kostenlos: Anmeldungen landen als Einsendung in WordPress. Mit Pro: Newsletter-Verbindung wählen (Brevo, Mailchimp, CleverReach).",
        "Double-Opt-in ist für neue Verbindungen voreingestellt. Prüfen, veröffentlichen.",
      ],
      tip: "Die Anmeldung läuft über deinen Server. Auf der Seite lädt kein Skript des Newsletter-Anbieters.",
      proNote:
        "Die direkte Übergabe an Brevo, Mailchimp und CleverReach gehört zu Flinkform Pro. Den Double-Opt-in verschickt dein Newsletter-Anbieter, Flinkform übergibt nur Kontakte mit Einwilligung.",
    },
    en: {
      name: "Newsletter sign-up",
      metaTitle: "Newsletter sign-up form for WordPress: template with consent and double opt-in",
      description:
        "Free newsletter sign-up template for WordPress: first name, email, explicit consent. With Flinkform Pro, straight to Brevo, Mailchimp or CleverReach, including double opt-in.",
      h1: "Newsletter sign-up form for WordPress",
      problem:
        "A newsletter sign-up needs explicit consent and an email confirmation. The provider's embed form usually loads the provider's scripts onto your site to do that.",
      fields: ["First name", "Email (required)", "Newsletter consent (with a link to your privacy policy)"],
      steps: [
        "Add the “Flinkform Form” block.",
        "Pick the “Newsletter sign-up” template.",
        "Free: sign-ups are stored as submissions in WordPress. With Pro: choose a newsletter connection (Brevo, Mailchimp, CleverReach).",
        "Double opt-in is on by default for new connections. Check it, then publish.",
      ],
      tip: "The sign-up runs through your server. No newsletter provider script loads on the page.",
      proNote:
        "Passing contacts straight to Brevo, Mailchimp and CleverReach is part of Flinkform Pro. Your newsletter provider sends the double opt-in, Flinkform only passes on contacts with consent.",
    },
    markup: {
      de: {
        attrs: { title: "Newsletter-Anmeldung", submitLabel: "Anmelden" },
        blocks: [
          ["flinkform/field-text", { fieldName: "first_name", label: "Vorname", autocomplete: "given-name" }],
          emailDe,
          [
            "flinkform/field-consent",
            {
              fieldName: "consent",
              consentText: "Ja, ich möchte den Newsletter erhalten. Ich kann mich jederzeit abmelden. Details in der {privacy_policy}.",
            },
          ],
        ],
      },
      en: {
        attrs: { title: "Newsletter sign-up", submitLabel: "Subscribe" },
        blocks: [
          ["flinkform/field-text", { fieldName: "first_name", label: "First name", autocomplete: "given-name" }],
          emailEn,
          [
            "flinkform/field-consent",
            {
              fieldName: "consent",
              consentText: "Yes, I would like to receive the newsletter. I can unsubscribe at any time. Details in the {privacy_policy}.",
            },
          ],
        ],
      },
    },
  },
];

export function getVorlage(slug: string): Vorlage {
  const v = vorlagen.find((entry) => entry.slug === slug);
  if (!v) throw new Error(`Unbekannte Vorlage: ${slug}`);
  return v;
}

export function getVorlageByEnSlug(enSlug: string): Vorlage {
  const v = vorlagen.find((entry) => entry.enSlug === enSlug);
  if (!v) throw new Error(`Unknown template: ${enSlug}`);
  return v;
}

export function vorlagePath(v: Vorlage, locale: Locale): string {
  return locale === "de" ? `/vorlagen/${v.slug}` : `/en/templates/${v.enSlug}`;
}

/**
 * Block-Attribute so serialisieren wie der Block-Editor
 * (@wordpress/blocks serializeAttributes): Zeichen, die einen
 * HTML-Kommentar beenden oder stören könnten, werden escaped.
 */
function serializeAttributes(attrs: Record<string, unknown>): string {
  return JSON.stringify(attrs)
    .replace(/--/g, "\\u002d\\u002d")
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\\"/g, "\\u0022");
}

/** Block-Markup zum Einfügen im Code-Editor von WordPress. */
export function blockMarkup(spec: FormSpec): string {
  const lines = [`<!-- wp:flinkform/form ${serializeAttributes(spec.attrs)} -->`];
  for (const [name, attrs] of spec.blocks) {
    lines.push(`<!-- wp:${name} ${serializeAttributes(attrs)} /-->`);
  }
  lines.push("<!-- /wp:flinkform/form -->");
  return lines.join("\n");
}
