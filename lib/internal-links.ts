import { posts } from "@/lib/posts";
import { wissen } from "@/lib/wissen";
import { vergleiche } from "@/lib/vergleiche";

export type InternalLink = { href: string; title: string };

/**
 * Löst einen internen Pfad in seinen echten Seitentitel auf. So steht der
 * Linktext nur an einer Stelle: in der Content-Liste der Zielseite.
 */
export function resolveInternalLink(href: string): InternalLink | null {
  const wissenMatch = /^\/wissen\/(.+)$/.exec(href);
  if (wissenMatch) {
    const entry = wissen.find((w) => w.slug === wissenMatch[1]);
    return entry ? { href, title: entry.title } : null;
  }

  const blogMatch = /^\/blog\/(.+)$/.exec(href);
  if (blogMatch) {
    const post = posts.find((p) => p.slug === blogMatch[1]);
    return post ? { href, title: post.title } : null;
  }

  const vergleichMatch = /^\/vergleich\/(.+)$/.exec(href);
  if (vergleichMatch) {
    const entry = vergleiche.find((v) => v.slug === vergleichMatch[1]);
    return entry ? { href, title: entry.title } : null;
  }

  return null;
}

/** Unbekannte Pfade fallen still heraus, statt einen toten Link zu rendern. */
export function resolveInternalLinks(
  hrefs: readonly string[],
): InternalLink[] {
  return hrefs
    .map(resolveInternalLink)
    .filter((link): link is InternalLink => link !== null);
}
