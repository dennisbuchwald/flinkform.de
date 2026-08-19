import Link from "next/link";
import Image from "next/image";
import HeroFormDemo from "@/components/HeroFormDemo";
import CompareTable from "@/components/CompareTable";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { WPORG_URL, softwareSchemaFree } from "@/lib/site";
import { localizedHref, type Locale } from "@/lib/i18n/routes";
import type { HomeDict } from "@/content/de/home";

const i18n = {
  de: { faqHeading: "Häufige Fragen", yes: "Ja", no: "Nein" },
  en: { faqHeading: "Frequently Asked Questions", yes: "Yes", no: "No" },
} as const;

export default function HomeContent({ locale, t }: { locale: Locale; t: HomeDict }) {
  const ui = i18n[locale];
  return (
    <>
      <JsonLd data={softwareSchemaFree} />

      {/* ── HERO ── */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-20 lg:pt-20">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/icons/flinkform-app.svg" alt="" width={44} height={44} priority />
              <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-6 font-(family-name:--font-display) text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {t.hero.titlePre}
              <span className="text-gradient-brand">{t.hero.titleHighlight}</span>
              {t.hero.titlePost}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {t.hero.entity}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              {t.hero.sub}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WPORG_URL}
                className="rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#demo"
                className="rounded-full border border-line bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-muted">{t.hero.versionLine}</p>
          </div>

          <div id="demo" className="scroll-mt-24">
            <HeroFormDemo locale={locale} />
            <p className="mt-3 text-center text-xs text-ink-muted">{t.hero.demoCaption}</p>
          </div>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      {/* ── 6 SÄULEN ── */}
      <Section>
        <SectionHeading sub={t.pillars.sub}>{t.pillars.heading}</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.pillars.items.map((p, i) => (
            <div key={p.title} className="card card-hover p-7">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand font-(family-name:--font-display) text-sm font-bold text-white"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[1.05rem] font-bold">{p.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── DAS PRIVACY-PROBLEM ── */}
      <Section>
        <div className="overflow-hidden rounded-3xl border border-ink bg-ink text-white">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-pink">
                {t.privacyBlock.kicker}
              </p>
              <h2 className="mt-4 font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {t.privacyBlock.title}
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-white/75">
                {t.privacyBlock.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <p className="font-semibold text-white">{t.privacyBlock.highlight}</p>
              </div>
              <Link
                href={t.privacyBlock.linkHref}
                className="mt-6 inline-block text-sm font-semibold text-brand-blue underline decoration-brand-blue/40 underline-offset-4 hover:decoration-brand-blue"
              >
                {t.privacyBlock.linkText}
              </Link>
            </div>
            <div className="grid content-center gap-4">
              {t.privacyBlock.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-(family-name:--font-display) text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── FEATURES ── */}
      <Section>
        <SectionHeading sub={t.features.sub}>{t.features.heading}</SectionHeading>
        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {t.features.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
              <span
                aria-hidden="true"
                className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white"
              >
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6.5 4.8 9 10 3.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── VERGLEICH ── */}
      <Section id="vergleich">
        <SectionHeading sub={t.compare.sub}>{t.compare.heading}</SectionHeading>
        <CompareTable
          caption={t.compare.caption}
          columns={t.compare.columns}
          rows={t.compare.rows}
          note={t.compare.note}
          yesLabel={ui.yes}
          noLabel={ui.no}
        />
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          <Link
            href={localizedHref(locale, "/vergleich")}
            className="text-sm font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4 hover:decoration-brand-violet"
          >
            {t.compare.linkAll}
          </Link>
          <Link
            href={localizedHref(locale, "/rechner")}
            className="text-sm font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4 hover:decoration-brand-violet"
          >
            {t.compare.linkCalc}
          </Link>
        </div>
      </Section>

      {/* ── PRO TEASER ── */}
      <Section>
        <div className="card relative overflow-hidden !rounded-3xl p-8 sm:p-12">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-pro" />
          <div className="max-w-3xl">
            <Eyebrow variant="pro">Flinkform Pro</Eyebrow>
            <h2 className="mt-5 font-(family-name:--font-display) text-3xl font-bold tracking-tight sm:text-4xl">
              {t.proTeaser.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t.proTeaser.desc}</p>
            <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
              {t.proTeaser.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-pro text-white"
                  >
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6.5 4.8 9 10 3.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={localizedHref(locale, "/pro")}
              className="mt-8 inline-block rounded-full bg-gradient-pro px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              {t.proTeaser.cta}
            </Link>
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <Faq items={t.faq.items} heading={ui.faqHeading} />
      </Section>

      {/* ── VORAUSSETZUNGEN ── */}
      <Section>
        <SectionHeading>{t.requirements.heading}</SectionHeading>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {t.requirements.items.map((req) => (
            <div key={req.label} className="card p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                {req.label}
              </p>
              <p className="mt-1.5 font-(family-name:--font-display) text-2xl font-bold">
                {req.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SEO-KEYWORD-KARTEN ── */}
      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.keywordCards.map((card) => (
            <Link key={card.title} href={card.href} className="card card-hover block p-7">
              <h3 className="text-[1.05rem] font-bold">{card.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{card.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-violet">
                {t.keywordReadMore}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <Section className="pb-8">
        <div className="rounded-3xl bg-gradient-brand p-[2px]">
          <div className="rounded-[calc(1.5rem-2px)] bg-white px-8 py-12 text-center sm:px-12">
            <h2 className="font-(family-name:--font-display) text-3xl font-bold tracking-tight sm:text-4xl">
              {t.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">{t.finalCta.desc}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={WPORG_URL}
                className="rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                {t.finalCta.ctaPrimary}
              </a>
              <Link
                href={localizedHref(locale, "/docs")}
                className="rounded-full border border-line bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
              >
                {t.finalCta.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
