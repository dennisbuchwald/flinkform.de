import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { SITE_URL, WPORG_URL, breadcrumbSchema } from "@/lib/site";
import { getWissen } from "@/lib/wissen";

/**
 * Rahmen für Wissens-Artikel (GEO): Die H1 trägt die Frage, der erste Absatz
 * beantwortet sie in sich geschlossen und zitierfähig.
 */
export default function WissenArticle({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) {
  const entry = getWissen(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description,
    inLanguage: "de",
    dateModified: entry.updated,
    author: {
      "@type": "Person",
      name: "Dennis Buchwald",
      url: "https://www.dennisbuchwald.de",
    },
    mainEntityOfPage: `${SITE_URL}/wissen/${entry.slug}`,
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Flinkform", path: "/" },
            { name: "Wissen", path: "/wissen" },
            { name: entry.title, path: `/wissen/${entry.slug}` },
          ]),
        ]}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8">
          <nav aria-label="Brotkrumen" className="mb-6 text-sm text-ink-muted">
            <Link href="/" className="hover:text-ink">
              Flinkform
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/wissen" className="hover:text-ink">
              Wissen
            </Link>
          </nav>
          <h1 className="max-w-3xl font-(family-name:--font-display) text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-[2.5rem]">
            {entry.title}
          </h1>
          <p className="mt-4 text-sm text-ink-muted">
            Zuletzt aktualisiert:{" "}
            <time dateTime={entry.updated}>
              {new Date(entry.updated).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <article className="prose-flink">{children}</article>

        <aside className="prose-flink mt-14">
          <div className="rounded-2xl border border-line bg-white p-7">
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
              <Link href="/wissen/flinkform-fakten">
                Alle Fakten im Überblick
              </Link>
            </p>
          </div>
        </aside>
      </Section>
    </>
  );
}
