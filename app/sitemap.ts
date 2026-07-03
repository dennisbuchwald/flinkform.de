import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";
import { wissen } from "@/lib/wissen";
import { vergleiche } from "@/lib/vergleiche";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1 },
    { url: `${SITE_URL}/pro`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/vergleich`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/wissen`, lastModified: now, priority: 0.7 },
    {
      url: `${SITE_URL}/wissen/flinkform-fakten`,
      lastModified: now,
      priority: 0.8,
    },
    { url: `${SITE_URL}/docs`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/rechner`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/roadmap`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/ueber`, lastModified: now, priority: 0.5 },
    { url: `${SITE_URL}/presse`, lastModified: now, priority: 0.5 },
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

  return [...staticRoutes, ...vergleichRoutes, ...blogRoutes, ...wissenRoutes];
}
