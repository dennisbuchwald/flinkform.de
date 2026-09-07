import {
  ENTITY_FREE,
  ENTITY_PRO,
  FREE_VERSION,
  GITHUB_URL,
  MIN_FREE_FOR_PRO,
  PRICING,
  PRO_VERSION,
  SITE_URL,
  WPORG_URL,
  type FaqItem,
} from "@/lib/site";
import type { Locale } from "@/lib/i18n/routes";

/**
 * Zentrale JSON-LD-Erzeugung (GEO). Jede Seite baut ihr Markup aus diesen
 * Bausteinen, damit die Marken-Entität überall identisch beschrieben ist.
 *
 * Aufbau: Die beiden Layouts geben einmal pro Seite den vollständigen
 * siteGraph() aus (Organization, Person, WebSite, SoftwareApplication).
 * Alle Unterseiten wiederholen diese Knoten NICHT, sondern verweisen per
 * @id darauf und ergänzen nur ihren seitenspezifischen Knoten.
 */

/** Stabile Knoten-IDs. Nur hier definieren, überall per ref() referenzieren. */
export const ID = {
  organization: `${SITE_URL}/#organization`,
  person: `${SITE_URL}/#dennis`,
  website: `${SITE_URL}/#website`,
  /** Die Produkt-Entität "Flinkform" (Free). */
  flinkform: `${SITE_URL}/#flinkform`,
  /** Das kommerzielle Add-on als eigene Entität. */
  flinkformPro: `${SITE_URL}/#flinkform-pro`,
  /** Das Pro-Preisbündel, von beiden Produktknoten referenziert. */
  proOffer: `${SITE_URL}/#pro-offer`,
} as const;

export type SchemaNode = Record<string, unknown>;

/** Verweis auf einen bereits definierten Knoten. */
export function ref(id: string) {
  return { "@id": id };
}

/** Adresse und Kontakt: Quelle ist das Impressum von dbw media. */
const organizationNode: SchemaNode = {
  "@type": "Organization",
  "@id": ID.organization,
  name: "dbw media",
  legalName: "dbw media – Dennis Buchwald",
  url: "https://dbw-media.de",
  vatID: "DE420957545",
  telephone: "+49 7131 3859840",
  email: "hallo@dbw-media.de",
  founder: ref(ID.person),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Oststraße 12",
    postalCode: "74072",
    addressLocality: "Heilbronn",
    addressRegion: "Baden-Württemberg",
    addressCountry: "DE",
  },
  sameAs: ["https://www.dennisbuchwald.de", "https://github.com/dbwmedia"],
};

const personNode: SchemaNode = {
  "@type": "Person",
  "@id": ID.person,
  name: "Dennis Buchwald",
  url: `${SITE_URL}/ueber`,
  jobTitle: "WordPress-Entwickler und Gründer von dbw media",
  knowsAbout: [
    "WordPress-Entwicklung",
    "Gutenberg Block-Editor",
    "WordPress Interactivity API",
    "DSGVO-konforme Formulare",
    "Barrierefreiheit WCAG 2.1",
  ],
  worksFor: ref(ID.organization),
  sameAs: [
    "https://www.dennisbuchwald.de",
    "https://github.com/dennisbuchwald",
    "https://profiles.wordpress.org/dbwmediadennis/",
  ],
};

function websiteNode(locale: Locale): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: SITE_URL,
    name: "Flinkform",
    inLanguage: locale,
    publisher: ref(ID.organization),
    about: ref(ID.flinkform),
  };
}

/** Preisspanne der Pro-Lizenzen, abgeleitet aus der Preistabelle. */
const proPrices = PRICING.map((plan) => plan.price);

const proOfferNode: SchemaNode = {
  "@type": "AggregateOffer",
  "@id": ID.proOffer,
  name: "Flinkform Pro",
  url: `${SITE_URL}/pro`,
  priceCurrency: "EUR",
  lowPrice: String(Math.min(...proPrices)),
  highPrice: String(Math.max(...proPrices)),
  offerCount: String(PRICING.length),
};

const FEATURE_LIST = [
  "Multi-Step-Formulare mit Fortschrittsanzeige und Schritt-Validierung",
  "Bedingte Logik für Felder, Schritte und Submit",
  "13 Feldtypen inklusive Consent-Feld",
  "Spam-Schutz per Honeypot, signiertem Zeit-Check und Proof-of-Work",
  "Kein reCAPTCHA, kein hCaptcha, kein Turnstile",
  "Submissions-Dashboard in WordPress mit Suche und Filter",
  "Automatische theme.json-Übernahme",
  "Frontend-JavaScript unter 15 KB gzipped, kein jQuery",
  "WCAG 2.1 AA",
];

function flinkformNode(locale: Locale): SchemaNode {
  return {
    "@type": "SoftwareApplication",
    "@id": ID.flinkform,
    name: "Flinkform",
    alternateName: "Flinkform – GDPR Contact Forms for the Block Editor",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "WordPress-Plugin",
    operatingSystem: "WordPress 6.5+, PHP 8.1+",
    softwareVersion: FREE_VERSION,
    softwareRequirements:
      "WordPress 6.5 oder neuer, PHP 8.1 oder neuer, Block-Editor",
    url: SITE_URL,
    downloadUrl: WPORG_URL,
    installUrl: WPORG_URL,
    codeRepository: GITHUB_URL,
    license: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
    inLanguage: locale,
    description: ENTITY_FREE,
    featureList: FEATURE_LIST,
    author: ref(ID.person),
    publisher: ref(ID.organization),
    offers: [
      {
        "@type": "Offer",
        name: "Flinkform (Free)",
        price: "0",
        priceCurrency: "EUR",
        url: WPORG_URL,
        availability: "https://schema.org/InStock",
      },
      proOfferNode,
    ],
  };
}

/**
 * Das Pro-Add-on als eigener Knoten. Wird nur auf den Seiten ausgegeben, die
 * Pro tatsächlich behandeln (/pro, Fact-Sheet), nie im globalen Graph.
 */
export function flinkformProNode(locale: Locale = "de"): SchemaNode {
  return {
    "@type": "SoftwareApplication",
    "@id": ID.flinkformPro,
    name: "Flinkform Pro",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "WordPress-Plugin",
    operatingSystem: "WordPress 6.5+, PHP 8.1+",
    softwareVersion: PRO_VERSION,
    softwareRequirements: `WordPress 6.5 oder neuer, PHP 8.1 oder neuer, Flinkform ${MIN_FREE_FOR_PRO} oder neuer`,
    url: `${SITE_URL}/pro`,
    inLanguage: locale,
    description: ENTITY_PRO,
    isAccessibleForFree: false,
    author: ref(ID.person),
    publisher: ref(ID.organization),
    offers: ref(ID.proOffer),
  };
}

/** Der vollständige Marken-Graph. Genau einmal pro Seite, aus dem Layout. */
export function siteGraph(locale: Locale) {
  return graph([
    organizationNode,
    personNode,
    websiteNode(locale),
    flinkformNode(locale),
  ]);
}

/** Bündelt Seiten-Knoten in einen einzigen JSON-LD-Block. */
export function graph(nodes: readonly SchemaNode[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

export function breadcrumbNode(
  items: readonly { name: string; path: string }[],
): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * FAQPage-Knoten. `text` muss wörtlich dem sichtbaren Antworttext
 * entsprechen, deshalb kommen die Items immer aus derselben Quelle wie das
 * gerenderte Markup.
 */
export function faqNode(
  items: readonly FaqItem[],
  options: { url?: string; isPartOf?: string } = {},
): SchemaNode {
  return {
    "@type": "FAQPage",
    ...(options.url ? { "@id": `${options.url}#faq` } : {}),
    ...(options.isPartOf ? { isPartOf: ref(options.isPartOf) } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export type ArticleInput = {
  /** Absolute URL der Seite, ohne Fragment. */
  url: string;
  headline: string;
  description?: string;
  datePublished: string;
  dateModified: string;
  locale?: Locale;
  /** Absolute URL des Vorschaubilds. */
  image?: string;
};

/** Vollständiger Article-Knoten mit Verweisen in den Marken-Graph. */
export function articleNode({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  locale = "de",
  image,
}: ArticleInput): SchemaNode {
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    ...(description ? { description } : {}),
    inLanguage: locale,
    datePublished,
    dateModified,
    author: ref(ID.person),
    publisher: ref(ID.organization),
    ...(image ? { image } : {}),
    about: ref(ID.flinkform),
    isPartOf: ref(ID.website),
    mainEntityOfPage: url,
  };
}
