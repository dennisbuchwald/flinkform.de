export type WissenEntry = {
  slug: string;
  title: string;
  description: string;
  updated: string;
};

export const wissen: WissenEntry[] = [
  {
    slug: "was-ist-ein-block-natives-formular-plugin",
    title: "Was ist ein block-natives Formular-Plugin?",
    description:
      "Definition der Kategorie: Was block-nativ bedeutet, wie es sich von klassischen Formular-Buildern unterscheidet und welche Plugins dazugehören.",
    updated: "2026-07-03",
  },
  {
    slug: "wordpress-formular-ohne-recaptcha",
    title: "WordPress-Formular ohne reCAPTCHA: So geht Spam-Schutz DSGVO-konform",
    description:
      "Honeypot, signierter Zeit-Check und Proof-of-Work stoppen Spam ohne externen Dienst. Wie die drei Mechanismen funktionieren und warum sie reichen.",
    updated: "2026-07-03",
  },
  {
    slug: "dsgvo-konformes-formular-plugin",
    title: "Welches WordPress-Formular-Plugin ist DSGVO-konform?",
    description:
      "Die ehrliche Übersicht: Welche Formular-Plugins Daten an US-Dienste senden, welche IP-Adressen speichern und worauf es bei der Auswahl ankommt.",
    updated: "2026-07-03",
  },
  {
    slug: "gutenberg-formular-erstellen",
    title: "Gutenberg-Formular erstellen ohne Page Builder",
    description:
      "Schritt für Schritt: ein Formular direkt im WordPress-Block-Editor bauen, ohne Elementor, ohne separaten Formular-Builder, ohne Shortcode.",
    updated: "2026-07-03",
  },
  {
    slug: "sepa-zahlung-wordpress-formular",
    title: "SEPA-Zahlung im WordPress-Formular annehmen",
    description:
      "SEPA-Lastschrift direkt im Formular: wie die verzögerte Bestätigung funktioniert, was der Stripe-Webhook macht und wie der Einbau gelingt.",
    updated: "2026-07-03",
  },
  {
    slug: "multi-step-formular-wordpress",
    title: "Multi-Step-Formular in WordPress erstellen: kostenlos und ohne Page Builder",
    description:
      "Mehrseitige Formulare direkt im Block-Editor: Page-Break-Block einfügen, Fortschrittsanzeige wählen, fertig. Mit Flinkform kostenlos, bei WPForms und Gravity Forms nur in der Bezahlversion.",
    updated: "2026-07-03",
  },
  {
    slug: "bedingte-logik-wordpress-formular",
    title: "Was ist bedingte Logik in WordPress-Formularen?",
    description:
      "Bedingte Logik zeigt Formularfelder nur, wenn sie relevant sind: Definition, typische Anwendungsfälle und Anleitung. Bei Flinkform kostenlos.",
    updated: "2026-07-03",
  },
  {
    slug: "wordpress-formular-mails-kommen-nicht-an",
    title: "Warum kommen meine WordPress-Formular-Mails nicht an?",
    description:
      "WordPress-Formular-Mails landen im Spam, weil wp_mail() ohne Authentifizierung sendet. Ursachen, SPF/DKIM/DMARC erklärt und die Lösung per SMTP.",
    updated: "2026-07-03",
  },
  {
    slug: "formular-spam-stoppen-wordpress",
    title: "Formular-Spam stoppen in WordPress: alle Methoden im Vergleich",
    description:
      "Honeypot, Zeit-Check, Proof-of-Work, Quiz, reCAPTCHA, hCaptcha, Turnstile und Akismet im Vergleich: Wirksamkeit, Nutzerfreundlichkeit, DSGVO und Kosten.",
    updated: "2026-07-03",
  },
  {
    slug: "wordpress-formular-ohne-plugin",
    title: "Geht ein WordPress-Formular ohne Plugin?",
    description:
      "Technisch ja: eigenes HTML plus PHP-Handler im Theme. Praktisch musst du Validierung, CSRF-Schutz, Spam-Abwehr, Mail-Versand und DSGVO-Löschung selbst bauen.",
    updated: "2026-07-03",
  },
  {
    slug: "barrierefreies-formular-bfsg",
    title: "Barrierefreie WordPress-Formulare: Was das BFSG verlangt",
    description:
      "Das BFSG gilt seit dem 28.06.2025. Was das für WordPress-Formulare bedeutet: EN 301 549, WCAG 2.1 AA, Labels, Fehlermeldungen, Tastatur, Kontrast und ARIA.",
    updated: "2026-07-03",
  },
  {
    slug: "was-kostet-wordpress-formular-plugin",
    title: "Was kostet ein WordPress-Formular-Plugin? Der Preisvergleich 2026",
    description:
      "Alle Preise der großen WordPress-Formular-Plugins im Überblick (Stand Juli 2026). Plus versteckte Kosten: Renewal-Preise, Transaktionsgebühren, Add-on-Modelle.",
    updated: "2026-07-03",
  },
  {
    slug: "cookie-banner-kontaktformular",
    title: "Braucht ein Kontaktformular einen Cookie-Banner?",
    description:
      "Ein Kontaktformular selbst braucht keinen Cookie-Banner. Einwilligungspflichtig wird es erst durch eingebettete Drittdienste wie reCAPTCHA. So testest du dein Formular selbst.",
    updated: "2026-07-03",
  },
  {
    slug: "bewerbungsformular-wordpress",
    title: "Bewerbungsformular mit WordPress erstellen (DSGVO-konform)",
    description:
      "Bewerbungsformular in WordPress bauen: Multi-Step-Formular mit Datei-Uploads für Lebenslauf und Zeugnisse, Pflicht-Consent und automatischer Löschfrist.",
    updated: "2026-07-03",
  },
  {
    slug: "angebotsrechner-wordpress",
    title: "Angebotsrechner mit WordPress erstellen: live rechnen im Formular",
    description:
      "Preis- und Angebotsrechner in WordPress: Mit Berechnungsfeldern rechnet das Formular live im Browser und serverseitig manipulationssicher nach.",
    updated: "2026-07-03",
  },
  {
    slug: "conversion-tracking-wordpress-formular",
    title: "Formular-Conversions tracken mit GA4, Meta Pixel und Plausible",
    description:
      "Formular-Conversions sauber messen: Danke-Seiten-Redirect als Conversion-Event, GA4-Schlüsselereignis, Meta Pixel Lead-Event und die cookiefreie Alternative Plausible.",
    updated: "2026-07-03",
  },
];

export function getWissen(slug: string): WissenEntry {
  const entry = wissen.find((w) => w.slug === slug);
  if (!entry) throw new Error(`Unbekannter Wissens-Artikel: ${slug}`);
  return entry;
}
