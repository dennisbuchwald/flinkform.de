import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import KostenRechner from "@/components/KostenRechner";
import Faq from "@/components/Faq";
import { Section, Eyebrow } from "@/components/Section";
import { WPORG_URL, breadcrumbSchema } from "@/lib/site";
import { localizedHref, type Locale } from "@/lib/i18n/routes";
import type { RechnerDict } from "@/content/de/rechner";

const i18n = {
  de: { faqHeading: "Häufige Fragen" },
  en: { faqHeading: "Frequently Asked Questions" },
} as const;

export default function RechnerContent({ locale, t }: { locale: Locale; t: RechnerDict }) {
  const ui = i18n[locale];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: t.breadcrumb.home, path: localizedHref(locale, "/") },
          { name: t.breadcrumb.rechner, path: localizedHref(locale, "/rechner") },
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
        <KostenRechner locale={locale} t={t.calc} />
        <p className="mt-6 text-center text-sm text-ink-muted">
          {t.demoLinkPre}
          <Link
            href="/wissen/angebotsrechner-wordpress"
            className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
          >
            {t.demoLinkText}
          </Link>
          {t.demoLinkPost}
        </p>
      </Section>

      <Section>
        <Faq items={t.faq.items} heading={ui.faqHeading} />
      </Section>

      <Section className="pb-8">
        <div className="rounded-3xl bg-gradient-brand p-[2px]">
          <div className="rounded-[calc(1.5rem-2px)] bg-white px-8 py-10 text-center">
            <h2 className="font-(family-name:--font-display) text-2xl font-bold tracking-tight sm:text-3xl">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-ink-soft">{t.finalCta.desc}</p>
            <a
              href={WPORG_URL}
              className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
            >
              {t.finalCta.cta}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
