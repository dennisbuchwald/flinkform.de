import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";
import { wissen } from "@/lib/wissen";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/pro`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/vergleich`, lastModified: now, priority: 0.8 },
    {
      url: `${SITE_URL}/vergleich/contact-form-7-alternative`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/vergleich/wpforms-alternative`,
      lastModified: now,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/vergleich/gravity-forms-alternative`,
      lastModified: now,
      priority: 0.8,
    },
    { url: `${SITE_URL}/blog`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/wissen`, lastModified: now, priority: 0.7 },
    {
      url: `${SITE_URL}/wissen/flinkform-fakten`,
      lastModified: now,
      priority: 0.8,
    },
    { url: `${SITE_URL}/docs`, lastModified: now, priority: 0.6 },
  ];

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

  return [...staticRoutes, ...blogRoutes, ...wissenRoutes];
}
