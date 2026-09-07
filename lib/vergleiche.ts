export type Vergleich = {
  slug: string;
  competitor: string;
  title: string;
  badge: string;
  desc: string;
  /** Erstveröffentlichung, wird zu datePublished. */
  published: string;
  /** Letzte inhaltliche Änderung, wird zu dateModified. */
  updated: string;
  /**
   * Thematisch passende Wissens- und Blog-Artikel als interne Links.
   * Pfade, damit hier auch auf den Blog verwiesen werden kann.
   */
  related: readonly string[];
};

export const vergleiche: Vergleich[] = [
  {
    slug: "contact-form-7-alternative",
    competitor: "Contact Form 7",
    title: "Contact Form 7 Alternative",
    badge: "Feature Freeze",
    desc: "CF7 ist seit 2026 im Feature Freeze: Version 6.2 ist die letzte mit neuen Funktionen. Warum jetzt der richtige Zeitpunkt für den Wechsel ist und wie die Migration abläuft.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/wordpress-formular-ohne-recaptcha",
      "/wissen/wordpress-formular-mails-kommen-nicht-an",
      "/blog/contact-form-7-feature-freeze",
    ],
  },
  {
    slug: "wpforms-alternative",
    competitor: "WPForms",
    title: "WPForms Alternative",
    badge: "Paywall-Check",
    desc: "Multi-Step und bedingte Logik kosten bei WPForms regulär ab 199 Dollar pro Jahr, die Lite-Version speichert keine Einsendungen. Der ehrliche Preis- und Funktionsvergleich.",
    published: "2026-07-03",
    updated: "2026-09-07",
    related: [
      "/wissen/was-kostet-wordpress-formular-plugin",
      "/wissen/multi-step-formular-wordpress",
      "/wissen/bedingte-logik-wordpress-formular",
    ],
  },
  {
    slug: "gravity-forms-alternative",
    competitor: "Gravity Forms",
    title: "Gravity Forms Alternative",
    badge: "DSGVO-Fokus",
    desc: "Gravity Forms hat keine kostenlose Version und speichert ab Werk IP-Adressen. Wann Flinkform die bessere Wahl ist und wann Gravity sein Geld wert bleibt.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/was-kostet-wordpress-formular-plugin",
      "/wissen/dsgvo-konformes-formular-plugin",
      "/wissen/multi-step-formular-wordpress",
    ],
  },
  {
    slug: "sureforms-alternative",
    competitor: "SureForms",
    title: "SureForms Alternative",
    badge: "Block vs. Block",
    desc: "Beide block-nativ, der ehrlichste Vergleich der Serie. Der Flinkform-Vorsprung: Spam-Schutz ohne reCAPTCHA, theme.json-Vererbung und unter 15 KB Frontend-JS.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/was-ist-ein-block-natives-formular-plugin",
      "/wissen/gutenberg-formular-erstellen",
      "/wissen/wordpress-formular-ohne-recaptcha",
    ],
  },
  {
    slug: "fluent-forms-alternative",
    competitor: "Fluent Forms",
    title: "Fluent Forms Alternative",
    badge: "Preis-Check",
    desc: "Fluent Forms bietet viel fürs Geld, sperrt Multi-Step aber hinter Pro und setzt auf US-Spam-Dienste. Flinkform kann beides kostenlos, ohne externe Dienste.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/multi-step-formular-wordpress",
      "/wissen/wordpress-formular-ohne-recaptcha",
      "/wissen/was-kostet-wordpress-formular-plugin",
    ],
  },
  {
    slug: "ninja-forms-alternative",
    competitor: "Ninja Forms",
    title: "Ninja Forms Alternative",
    badge: "Add-on-Kosten",
    desc: "Bei Ninja Forms kosten bedingte Logik, Multi-Step und Uploads je ein eigenes Add-on, das Komplettpaket regulär 499 Dollar pro Jahr. Flinkform hat das Wichtigste eingebaut.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/was-kostet-wordpress-formular-plugin",
      "/wissen/bedingte-logik-wordpress-formular",
      "/wissen/bewerbungsformular-wordpress",
    ],
  },
  {
    slug: "forminator-alternative",
    competitor: "Forminator",
    title: "Forminator Alternative",
    badge: "Leichtgewicht-Check",
    desc: "Forminator hat eine großzügige Free-Version, speichert aber ab Werk IP-Adressen und lädt schwere Assets. Flinkform bleibt unter 15 KB und speichert keine IPs.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/dsgvo-konformes-formular-plugin",
      "/wissen/formular-spam-stoppen-wordpress",
      "/wissen/was-kostet-wordpress-formular-plugin",
    ],
  },
  {
    slug: "formidable-forms-alternative",
    competitor: "Formidable Forms",
    title: "Formidable Forms Alternative",
    badge: "Rechner-Check",
    desc: "Formidable ist ein starkes Power-User-Tool, aber Rechner gibt es erst ab regulär 399 Dollar pro Jahr. Flinkform Pro liefert Berechnungsfelder ab 59 Euro pro Jahr.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/angebotsrechner-wordpress",
      "/wissen/bedingte-logik-wordpress-formular",
      "/wissen/was-kostet-wordpress-formular-plugin",
    ],
  },
  {
    slug: "elementor-forms-alternative",
    competitor: "Elementor Forms",
    title: "Elementor Forms Alternative",
    badge: "Ohne Page Builder",
    desc: "Elementor Forms gibt es nur mit Elementor Pro, inklusive Lock-in an den Builder. Flinkform funktioniert kostenlos in jedem Theme und im nativen WordPress-Editor.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/gutenberg-formular-erstellen",
      "/wissen/was-ist-ein-block-natives-formular-plugin",
      "/wissen/multi-step-formular-wordpress",
    ],
  },
  {
    slug: "typeform-alternative",
    competitor: "Typeform",
    title: "Typeform Alternative",
    badge: "SaaS vs. WordPress",
    desc: "Typeform kostet 39 bis 169 Dollar pro Monat, die Daten liegen beim Anbieter. Flinkform bringt das Eine-Frage-pro-Schritt-Gefühl kostenlos auf deinen eigenen Server.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/dsgvo-konformes-formular-plugin",
      "/blog/wordpress-formular-daten-usa",
      "/wissen/multi-step-formular-wordpress",
    ],
  },
  {
    slug: "jotform-alternative",
    competitor: "Jotform",
    title: "Jotform Alternative",
    badge: "Cloud-Limits",
    desc: "Jotform limitiert den Free-Plan auf 100 Einsendungen pro Monat, alle Daten liegen in der Anbieter-Cloud. Flinkform speichert unbegrenzt auf deinem Server.",
    published: "2026-07-03",
    updated: "2026-07-03",
    related: [
      "/wissen/dsgvo-konformes-formular-plugin",
      "/blog/wordpress-formular-daten-usa",
      "/wissen/bewerbungsformular-wordpress",
    ],
  },
];

export function getVergleich(slug: string): Vergleich {
  const entry = vergleiche.find((v) => v.slug === slug);
  if (!entry) throw new Error(`Unbekannter Vergleich: ${slug}`);
  return entry;
}
