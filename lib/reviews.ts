import { WPORG_URL } from "@/lib/site";

/**
 * Bewertungen von WordPress.org, wörtlich übernommen (Stand 28.09.2026).
 *
 * Regeln:
 * - Nichts umformulieren, nichts glätten, keine Rechtschreibung korrigieren.
 *   Ein Zitat, das wir verändern, ist kein Zitat mehr.
 * - Nicht übersetzen. `quoteEn` gibt es nur, wenn der Autor selbst eine
 *   englische Fassung geschrieben hat. Sonst zeigt auch die englische Seite
 *   das Original.
 * - `published: false` blendet eine Bewertung aus, ohne sie zu löschen.
 *   Veröffentlicht wird erst nach dem Okay der jeweiligen Person.
 * - Bewertungen von Mitarbeitern, Verwandten oder Geschäftspartnern gehören
 *   nicht hierher, auch wenn sie echt sind: Ohne Kennzeichnung ist das
 *   irreführend (§ 5 UWG).
 */
export type Review = {
  author: string;
  /** Link auf die Bewertung auf WordPress.org. */
  href: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  quoteEn?: string;
  /** Sprache des Originals, für das lang-Attribut. */
  lang: "de" | "en";
  published: boolean;
};

export const REVIEWS: Review[] = [
  {
    author: "Eric Saner (eSaner)",
    href: "https://wordpress.org/support/topic/excellent-14330/",
    rating: 5,
    quote:
      "Very intuitive to use and lots of attention given to accessibility. This is best block-based form plugin currently available.",
    lang: "en",
    published: true,
  },
  {
    author: "Daniel Fink (danielfinkfotografie)",
    href: "https://wordpress.org/support/topic/starkes-wordpress-formular-plugin-mit-schnellem-support/",
    rating: 5,
    quote:
      "Ein von mir gemeldetes Problem war bereits am nächsten Tag behoben und die gewünschte Anpassung umgesetzt. So einen direkten Support erlebt man bei WordPress-Plugins nicht besonders oft.",
    quoteEn:
      "An issue I reported was fixed by the very next day, and the requested adjustment was implemented as well. This level of direct support is quite rare among WordPress plugins.",
    lang: "de",
    published: true,
  },
  {
    author: "robinherbeck",
    href: "https://wordpress.org/support/topic/omg-endlich/",
    rating: 5,
    quote:
      "Fande die anderen Führenden Plugins viel zu bloated endlich gibt es eine simple Lösung!",
    lang: "de",
    published: true,
  },
];

/** Alle Bewertungen auf WordPress.org, auch die hier ausgeblendeten. */
export const REVIEWS_URL = `${WPORG_URL.replace("/plugins/", "/support/plugin/")}reviews/`;

/**
 * Durchschnitt und Anzahl über ALLE Bewertungen auf WordPress.org, nicht nur
 * die angezeigten. Beim Nachtragen neuer Bewertungen hier mitpflegen.
 */
export const REVIEW_SUMMARY = { average: 5, count: 3 } as const;

/**
 * Zahl der Kundenseiten von dbw media, auf denen Flinkform läuft.
 * TODO Dennis: Zahl eintragen. Solange null, bleibt die Zeile unsichtbar.
 */
export const CLIENT_SITES_COUNT: number | null = null;

/**
 * Längeres Zitat von Eric Saner (JMU Libraries) für einen eigenen Block.
 * TODO Dennis: Erst eintragen, wenn Eric der Veröffentlichung zugestimmt hat.
 * Solange null, erscheint der Block nicht.
 */
export const FEATURED_QUOTE: {
  text: string;
  author: string;
  role: string;
} | null = null;
