import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import { SITE_URL, WPORG_URL } from "@/lib/site";
import { articleNode, breadcrumbNode, faqNode, graph } from "@/lib/schema";
import { ogImageUrl } from "@/lib/og-articles";
import { faqFromMdx } from "@/lib/faq-mdx";
import { getPost } from "@/lib/posts";

/** Gemeinsamer Rahmen für Blog-Artikel: Kopf, Datum, Schema, Prosa, CTA. */
export default function BlogArticle({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const post = getPost(slug);
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  // Fragen und Antworten kommen aus dem sichtbaren FAQ-Block dieses Artikels.
  const faqs = faqFromMdx("blog", post.slug);

  const articleSchema = articleNode({
    url: pageUrl,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    image: ogImageUrl("blog", post.slug),
  });

  return (
    <>
      <JsonLd
        data={graph([
          articleSchema,
          breadcrumbNode([
            { name: "Flinkform", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(faqs.length > 0
            ? [
                faqNode(faqs, {
                  url: pageUrl,
                  isPartOf: `${pageUrl}#article`,
                }),
              ]
            : []),
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8">
          <nav aria-label="Brotkrumen" className="mb-6 text-sm text-ink-muted">
            <Link href="/" className="hover:text-ink">
              Flinkform
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/blog" className="hover:text-ink">
              Blog
            </Link>
          </nav>
          <Eyebrow>{post.tag}</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-[2.5rem]">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-ink-muted">
            Von{" "}
            <Link
              href="/ueber"
              className="font-medium text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
            >
              Dennis Buchwald
            </Link>{" "}
            ·{" "}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>{" "}
            · Lesezeit ca. {post.readingMinutes} Minuten
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <article className="prose-flink">{children}</article>

        <aside className="prose-flink mt-14">
          <div className="rounded-2xl border border-line bg-white p-7 not-italic">
            <p className="!mb-2 text-sm font-bold uppercase tracking-widest text-ink-muted">
              Über Flinkform
            </p>
            <p className="!mb-4">
              Flinkform ist ein block-natives Formular-Plugin für den
              WordPress-Block-Editor. Es bietet Multi-Step-Formulare,
              bedingte Logik und Spam-Schutz ohne externe Dienste,
              kostenlos. Entwickelt in Deutschland, DSGVO by design.
            </p>
            <p className="!mb-0">
              <a href={WPORG_URL}>Kostenlos auf WordPress.org laden</a>
              {" · "}
              <Link href="/pro">Flinkform Pro entdecken</Link>
            </p>
          </div>
        </aside>
      </Section>
    </>
  );
}
