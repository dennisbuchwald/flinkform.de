import type { MetadataRoute } from "next";
import { HOME_URL, SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";
import { wissen } from "@/lib/wissen";
import { vergleiche } from "@/lib/vergleiche";
import { TRANSLATED_PATHS, enPathFor } from "@/lib/i18n/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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
    return [
      { url: deUrl, lastModified: now, priority, alternates: { languages } },
      { url: enUrl, lastModified: now, priority, alternates: { languages } },
    ];
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/wissen`, lastModified: now, priority: 0.7 },
    {
      url: `${SITE_URL}/wissen/flinkform-fakten`,
      lastModified: now,
      priority: 0.8,
    },
    { url: `${SITE_URL}/docs`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/ueber`, lastModified: now, priority: 0.5 },
    { url: `${SITE_URL}/presse`, lastModified: now, priority: 0.5 },
    { url: `${SITE_URL}/impressum`, lastModified: now, priority: 0.2 },
    { url: `${SITE_URL}/datenschutz`, lastModified: now, priority: 0.2 },
  ];

  const vergleichRoutes: MetadataRoute.Sitemap = vergleiche.map((v) => ({
    url: `${SITE_URL}/vergleich/${v.slug}`,
    lastModified: new Date(v.updated),
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
  }));

  const wissenRoutes: MetadataRoute.Sitemap = wissen.map((entry) => ({
    url: `${SITE_URL}/wissen/${entry.slug}`,
    lastModified: new Date(entry.updated),
    priority: 0.7,
  }));

  return [...bilingualRoutes, ...staticRoutes, ...vergleichRoutes, ...blogRoutes, ...wissenRoutes];
}
