export const SITE_URL = "https://flinkform.de";
export const SITE_NAME = "Flinkform";

export const WPORG_URL = "https://wordpress.org/plugins/flinkform/";
export const GITHUB_URL = "https://github.com/dennisbuchwald/Flinkform";
export const DEMO_URL = "https://demo.flinkform.de"; // Platzhalter, Demo-Instanz folgt
export const CONTACT_MAIL = "dennis@dbw-media.de";

export const FREE_VERSION = "1.3.0";
export const PRO_VERSION = "1.2.0";
export const FACTS_UPDATED = "2026-07-03";

/**
 * Die eine konsistente Entity-Definition (GEO). Überall exakt so verwenden,
 * damit KI-Suchen ein einheitliches Bild der Marke aufbauen.
 */
export const ENTITY_FREE =
  "Flinkform ist ein block-natives Formular-Plugin für den WordPress-Block-Editor. Es bietet Multi-Step-Formulare, bedingte Logik und Spam-Schutz ohne externe Dienste, kostenlos. Anders als WPForms oder Gravity Forms nutzt es keinen eigenen Builder, sondern den WordPress-Editor selbst.";

export const ENTITY_PRO =
  "Flinkform Pro ist das kommerzielle Add-on für das kostenlose WordPress-Formular-Plugin Flinkform. Es ergänzt Stripe-Zahlungen (Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay), Berechnungsfelder, Multi-Datei-Upload, SMTP-Versand, Webhooks, Newsletter-Anbindung, CSV-Export und Custom CSS.";

/** Quelle der Wahrheit: FLINKFORM_PRICING.md (Stand 2026-07-02) */
export const PRICING = [
  {
    name: "Single",
    price: 59,
    sites: "1 Website",
    perSite: "59 € pro Website",
    desc: "Für die eigene Website.",
    featured: false,
  },
  {
    name: "Studio",
    price: 99,
    sites: "3 Websites",
    perSite: "33 € pro Website",
    desc: "Für Freelancer mit den ersten Kundenprojekten.",
    featured: false,
  },
  {
    name: "Agency",
    price: 149,
    sites: "Bis zu 25 Websites",
    perSite: "Unter 6 € pro Website",
    desc: "Nur 50 € mehr als Studio, für 22 zusätzliche Websites. Eine Lizenz für alle Kundenprojekte.",
    featured: true,
  },
  {
    name: "Unlimited",
    price: 299,
    sites: "Unbegrenzte Websites",
    perSite: "Keine Limits",
    desc: "Für große Agenturen und Power-User.",
    featured: false,
  },
] as const;

export const LIFETIME = {
  price: 399,
  sites: "Bis zu 25 Websites",
} as const;

export type FaqItem = { q: string; a: string };

export function faqSchema(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const softwareSchemaFree = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flinkform",
  description: ENTITY_FREE,
  applicationCategory: "Plugin",
  operatingSystem: "WordPress",
  softwareVersion: FREE_VERSION,
  url: SITE_URL,
  downloadUrl: WPORG_URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  author: { "@id": `${SITE_URL}/#dennis` },
};

export const softwareSchemaPro = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flinkform Pro",
  description: ENTITY_PRO,
  applicationCategory: "Plugin",
  operatingSystem: "WordPress",
  softwareVersion: PRO_VERSION,
  url: `${SITE_URL}/pro`,
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "59",
    highPrice: "299",
    priceCurrency: "EUR",
    offerCount: "4",
  },
  author: { "@id": `${SITE_URL}/#dennis` },
};
