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
];

export function getWissen(slug: string): WissenEntry {
  const entry = wissen.find((w) => w.slug === slug);
  if (!entry) throw new Error(`Unbekannter Wissens-Artikel: ${slug}`);
  return entry;
}
