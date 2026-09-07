export const SITE_URL = "https://flinkform.de";
/**
 * Die kanonische Schreibweise der Startseite: ohne Schrägstrich.
 *
 * Nicht willkürlich gewählt - Next.js normalisiert Canonical-URLs bei
 * trailingSlash: false ohnehin auf diese Form. Damit Canonical, hreflang,
 * Sitemap und llms.txt nicht auseinanderlaufen, gilt sie überall.
 */
export const HOME_URL = SITE_URL;
export const SITE_NAME = "Flinkform";

export const WPORG_URL = "https://wordpress.org/plugins/flinkform/";
export const GITHUB_URL = "https://github.com/dennisbuchwald/Flinkform";
/** Live demo: a real WordPress install running Flinkform + Flinkform Pro. */
export const DEMO_URL = "https://demo.flinkform.de";
export const CONTACT_MAIL = "dennis@dbw-media.de";

/**
 * Anbieterangaben. Eine Quelle für Impressum, JSON-LD und llms.txt - so kann
 * die Marke nirgends widersprüchlich beschrieben werden.
 */
export const LEGAL = {
  company: "dbw media",
  legalName: "dbw media – Dennis Buchwald",
  owner: "Dennis Buchwald",
  street: "Oststraße 12",
  postalCode: "74072",
  city: "Heilbronn",
  region: "Baden-Württemberg",
  country: "DE",
  countryName: "Deutschland",
  phone: "+49 7131 3859840",
  /** In der Schreibweise für tel:-Links. */
  phoneHref: "+4971313859840",
  email: "hallo@dbw-media.de",
  vatId: "DE420957545",
  companyUrl: "https://dbw-media.de",
  /** Auslieferung der Website. Verifiziert über den Response-Header. */
  host: "Vercel Inc.",
  hostPrivacyUrl: "https://vercel.com/legal/privacy-policy",
} as const;

/**
 * Die einzige Stelle für Versionsnummern. Speist JSON-LD, llms.txt und jede
 * sichtbare Versionsangabe - nirgendwo sonst eine Version hart schreiben.
 */
export const FREE_VERSION = "1.14.1";
export const PRO_VERSION = "1.2.2";
/** Kleinste Free-Version, auf der Flinkform Pro läuft. */
export const MIN_FREE_FOR_PRO = "1.3.0";
export const FACTS_UPDATED = "2026-09-07";

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

/**
 * Das JSON-LD selbst liegt in lib/schema.ts - hier stehen nur die Daten,
 * aus denen es gebaut wird.
 */
