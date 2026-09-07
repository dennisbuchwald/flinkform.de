import { SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";
import { wissen } from "@/lib/wissen";
import { vergleiche } from "@/lib/vergleiche";

/** Bereiche, für die es Artikel-Vorschaubilder gibt. */
export const OG_SECTIONS = ["wissen", "blog", "vergleich"] as const;
export type OgSection = (typeof OG_SECTIONS)[number];

const KICKER: Record<OgSection, string> = {
  wissen: "Wissen",
  blog: "Blog",
  vergleich: "Vergleich",
};

type OgEntry = { kicker: string; title: string; subtitle: string };

/** Zu lange Zeilen sprengen das 1200x630-Layout, deshalb hart begrenzen. */
function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

function entries(section: OgSection): { slug: string; entry: OgEntry }[] {
  switch (section) {
    case "wissen":
      return wissen.map((e) => ({
        slug: e.slug,
        entry: {
          kicker: KICKER.wissen,
          title: clamp(e.title, 90),
          subtitle: clamp(e.description, 130),
        },
      }));
    case "blog":
      return posts.map((p) => ({
        slug: p.slug,
        entry: {
          kicker: KICKER.blog,
          title: clamp(p.title, 90),
          subtitle: clamp(p.description, 130),
        },
      }));
    case "vergleich":
      return vergleiche.map((v) => ({
        slug: v.slug,
        entry: {
          kicker: KICKER.vergleich,
          title: clamp(`Flinkform statt ${v.competitor}`, 90),
          subtitle: clamp(v.desc, 130),
        },
      }));
  }
}

export const articleOgImage = {
  slugs(section: OgSection): string[] {
    return entries(section).map((e) => e.slug);
  },
  find(section: OgSection, slug: string): OgEntry | undefined {
    if (!OG_SECTIONS.includes(section)) return undefined;
    return entries(section).find((e) => e.slug === slug)?.entry;
  },
};

/** Absolute URL des Artikel-Vorschaubilds, für Article.image und Metadaten. */
export function ogImageUrl(section: OgSection, slug: string): string {
  return `${SITE_URL}/og/${section}/${slug}.png`;
}
