import Link from "next/link";
import CompareTable from "@/components/CompareTable";
import JsonLd from "@/components/JsonLd";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { breadcrumbSchema } from "@/lib/site";
import { localizedHref, type Locale } from "@/lib/i18n/routes";
import type { VergleichDict } from "@/content/de/vergleich";

const i18n = {
  de: { yes: "Ja", no: "Nein" },
  en: { yes: "Yes", no: "No" },
} as const;

export default function VergleichContent({ locale, t }: { locale: Locale; t: VergleichDict }) {
  const ui = i18n[locale];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumb.home, path: localizedHref(locale, "/") },
          { name: t.breadcrumb.vergleich, path: localizedHref(locale, "/vergleich") },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">{t.hero.sub}</p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {t.cards.map((c) => (
            <Link key={c.slug} href={`/vergleich/${c.slug}`} className="card card-hover flex flex-col p-7">
              <span className="self-start rounded-full bg-line/60 px-3 py-1 text-xs font-bold text-ink-soft">
                {c.badge}
              </span>
              <h2 className="mt-4 text-lg font-bold">{c.title}</h2>
              <p className="mt-2 grow text-[0.9rem] leading-relaxed text-ink-soft">{c.desc}</p>
              <span className="mt-5 text-sm font-semibold text-brand-violet">{t.cardLinkText}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading sub={t.overview.sub}>{t.overview.heading}</SectionHeading>
        <CompareTable
          caption={t.overview.caption}
          columns={t.overview.columns}
          rows={t.overview.rows}
          note={t.overview.note}
          yesLabel={ui.yes}
          noLabel={ui.no}
        />
      </Section>
    </>
  );
}
