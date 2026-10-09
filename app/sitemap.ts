import type { MetadataRoute } from "next";
import { FACTS_UPDATED, HOME_URL, SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";
import { wissen } from "@/lib/wissen";
import { vergleiche } from "@/lib/vergleiche";
import { vorlagen } from "@/lib/vorlagen";
import { TRANSLATED_PATHS, enPathFor } from "@/lib/i18n/routes";
import { latest, pageUpdated } from "@/lib/updated";

export default function sitemap(): MetadataRoute.Sitemap {
  /**
   * P1-Seiten existieren zweisprachig unter identischen Slugs unter /en.
   * Jeder DE- und EN-Eintrag bekommt gegenseitige hreflang-Alternates,
   * x-default zeigt auf die deutsche Version (Haupt-URL der Marke).
   */
  const bilingualRoutes: MetadataRoute.Sitemap = TRANSLATED_PATHS.flatMap((path) => {
    // Die Startseite trägt dieselbe Schreibweise wie ihr Canonical.
    const deUrl = path === "/" ? HOME_URL : `${SITE_URL}${path}`;
    const enUrl = `${SITE_URL}${enPathFor(path)}`;
    const languages = { de: deUrl, en: enUrl, "x-default": deUrl };
    const priority = path === "/" ? 1 : path === "/pro" ? 0.9 : 0.8;
    const lastModified = pageUpdated(path);
    return [
      { url: deUrl, lastModified, priority, alternates: { languages } },
      { url: enUrl, lastModified, priority, alternates: { languages } },
    ];
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    // Übersichten ändern sich mit ihrem jüngsten Eintrag.
    {
      url: `${SITE_URL}/blog`,
      lastModified: latest(posts.map((p) => p.updated ?? p.date)),
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/wissen`,
      lastModified: latest(wissen.map((w) => w.updated)),
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/wissen/flinkform-fakten`,
      lastModified: new Date(FACTS_UPDATED),
      priority: 0.8,
    },
    { url: `${SITE_URL}/docs`, lastModified: pageUpdated("/docs"), priority: 0.6 },
    { url: `${SITE_URL}/ueber`, lastModified: pageUpdated("/ueber"), priority: 0.5 },
    { url: `${SITE_URL}/presse`, lastModified: pageUpdated("/presse"), priority: 0.5 },
    { url: `${SITE_URL}/impressum`, lastModified: pageUpdated("/impressum"), priority: 0.2 },
    { url: `${SITE_URL}/datenschutz`, lastModified: pageUpdated("/datenschutz"), priority: 0.2 },
  ];

  const vergleichRoutes: MetadataRoute.Sitemap = vergleiche.map((v) => ({
    url: `${SITE_URL}/vergleich/${v.slug}`,
    lastModified: new Date(v.updated),
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    priority: 0.7,
  }));

  const wissenRoutes: MetadataRoute.Sitemap = wissen.map((entry) => ({
    url: `${SITE_URL}/wissen/${entry.slug}`,
    lastModified: new Date(entry.updated),
    priority: 0.7,
  }));

  /** Vorlagen: DE unter /vorlagen, EN unter /en/templates mit eigenen Slugs. */
  const vorlagenPair = (de: string, en: string, lastModified: Date, priority: number) => {
    const languages = { de, en, "x-default": de };
    return [
      { url: de, lastModified, priority, alternates: { languages } },
      { url: en, lastModified, priority, alternates: { languages } },
    ];
  };
  const vorlagenRoutes: MetadataRoute.Sitemap = [
    ...vorlagenPair(
      `${SITE_URL}/vorlagen`,
      `${SITE_URL}/en/templates`,
      latest(vorlagen.map((v) => v.updated)),
      0.8,
    ),
    ...vorlagen.flatMap((v) =>
      vorlagenPair(
        `${SITE_URL}/vorlagen/${v.slug}`,
        `${SITE_URL}/en/templates/${v.enSlug}`,
        new Date(v.updated),
        0.7,
      ),
    ),
  ];

  return [
    ...bilingualRoutes,
    ...staticRoutes,
    ...vorlagenRoutes,
    ...vergleichRoutes,
    ...blogRoutes,
    ...wissenRoutes,
  ];
}
