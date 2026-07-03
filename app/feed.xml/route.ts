import { SITE_URL } from "@/lib/site";
import { posts } from "@/lib/posts";
import { wissen } from "@/lib/wissen";

export const dynamic = "force-static";

function esc(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function GET() {
  const items = [
    ...posts.map((p) => ({
      title: p.title,
      link: `${SITE_URL}/blog/${p.slug}`,
      description: p.description,
      date: p.date,
      category: "Blog",
    })),
    ...wissen.map((w) => ({
      title: w.title,
      link: `${SITE_URL}/wissen/${w.slug}`,
      description: w.description,
      date: w.updated,
      category: "Wissen",
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Flinkform Blog &amp; Wissen</title>
    <link>${SITE_URL}</link>
    <description>Artikel zu WordPress-Formularen, DSGVO-konformem Spam-Schutz, Payments und dem Block-Editor. Vom Team hinter dem Formular-Plugin Flinkform.</description>
    <language>de</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items
  .map(
    (item) => `    <item>
      <title>${esc(item.title)}</title>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <description>${esc(item.description)}</description>
      <category>${item.category}</category>
      <pubDate>${new Date(item.date + "T08:00:00+02:00").toUTCString()}</pubDate>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
