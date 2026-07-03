import type { ReactNode } from "react";
import Link from "next/link";
import CompareTable, { type CompareCell } from "@/components/CompareTable";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import {
  SITE_URL,
  WPORG_URL,
  breadcrumbSchema,
  type FaqItem,
} from "@/lib/site";

export type VergleichSection = { heading: string; body: ReactNode };

/**
 * Gemeinsames Template für die "Alternative zu X"-Seiten: Antwort-zuerst-
 * Absatz, TL;DR-Tabelle, Prosa-Sektionen, CTA und FAQ mit Schema.
 */
export default function VergleichArticle({
  slug,
  competitor,
  h1,
  updated,
  answerFirst,
  tldrColumns,
  tldrRows,
  tldrNote,
  sections,
  faqs,
}: {
  slug: string;
  competitor: string;
  h1: string;
  updated: string;
  answerFirst: string;
  tldrColumns: readonly string[];
  tldrRows: readonly { feature: string; cells: readonly CompareCell[] }[];
  tldrNote?: ReactNode;
  sections: readonly VergleichSection[];
  faqs: readonly FaqItem[];
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    inLanguage: "de",
    dateModified: updated,
    author: { "@id": `${SITE_URL}/#dennis` },
    mainEntityOfPage: `${SITE_URL}/vergleich/${slug}`,
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          breadcrumbSchema([
            { name: "Flinkform", path: "/" },
            { name: "Vergleich", path: "/vergleich" },
            { name: competitor, path: `/vergleich/${slug}` },
          ]),
        ]}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <nav aria-label="Brotkrumen" className="mb-6 text-sm text-ink-muted">
            <Link href="/" className="hover:text-ink">
              Flinkform
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/vergleich" className="hover:text-ink">
              Vergleich
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-ink-soft">{competitor}</span>
          </nav>
          <Eyebrow>Ehrlicher Vergleich</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            {h1}
          </h1>
          <p className="mt-3 text-sm text-ink-muted">
            Zuletzt aktualisiert:{" "}
            <time dateTime={updated}>
              {new Date(updated).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {answerFirst}
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <h2 className="mb-6 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          Der Vergleich auf einen Blick
        </h2>
        <CompareTable
          caption={`Funktionsvergleich Flinkform und ${competitor}`}
          columns={tldrColumns}
          rows={tldrRows}
          note={tldrNote}
        />
      </Section>

      {sections.map((section) => (
        <Section key={section.heading} className="!py-8">
          <div className="prose-flink">
            <h2 className="!mt-0">{section.heading}</h2>
            {section.body}
          </div>
        </Section>
      ))}

      <Section className="!py-10">
        <div className="rounded-3xl bg-gradient-brand p-[2px]">
          <div className="rounded-[calc(1.5rem-2px)] bg-white px-8 py-10 text-center">
            <h2 className="font-(family-name:--font-display) text-2xl font-bold tracking-tight sm:text-3xl">
              Probier Flinkform einfach aus.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-ink-soft">
              Kostenlos, ohne Registrierung, direkt aus dem
              WordPress.org-Verzeichnis. Ein Testformular ist in 5 Minuten
              gebaut.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={WPORG_URL}
                className="rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                Kostenlos auf WordPress.org
              </a>
              <Link
                href="/#demo"
                className="rounded-full border border-line bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
              >
                Live-Demo ansehen
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Faq items={[...faqs]} />
      </Section>
    </>
  );
}
