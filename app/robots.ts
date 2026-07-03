import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * KI-Crawler werden bewusst explizit zugelassen (GEO): Sichtbarkeit in
 * ChatGPT, Perplexity, Claude und Google AI Overviews ist ein Projektziel.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "CCBot",
          "Amazonbot",
          "Applebot-Extended",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
