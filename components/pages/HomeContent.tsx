import PluginStrike from "@/components/PluginStrike";
import Link from "next/link";
import HeroFormDemo from "@/components/HeroFormDemo";
import CompareTable from "@/components/CompareTable";
import Faq from "@/components/Faq";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { CF7_IMPORT_SINCE, DEMO_URL, FREE_VERSION, WPORG_URL } from "@/lib/site";
import {
  CLIENT_SITES_COUNT,
  FEATURED_QUOTE,
  REVIEWS,
  REVIEWS_URL,
  REVIEW_SUMMARY,
} from "@/lib/reviews";
import { localizedHref, type Locale } from "@/lib/i18n/routes";
import type { HomeDict } from "@/content/de/home";

const i18n = {
  de: { faqHeading: "Häufige Fragen", yes: "Ja", no: "Nein", quoteOpen: "„", quoteClose: "“" },
  en: { faqHeading: "Frequently Asked Questions", yes: "Yes", no: "No", quoteOpen: "“", quoteClose: "”" },
} as const;

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={i < rating ? "text-amber-400" : "text-line"}
        >
          <path
            fill="currentColor"
            d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z"
          />
        </svg>
      ))}
    </span>
  );
}

function Check({ pro = false }: { pro?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${
        pro ? "bg-gradient-pro" : "bg-gradient-brand"
      }`}
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
  );
}

export default function HomeContent({ locale, t }: { locale: Locale; t: HomeDict }) {
  const ui = i18n[locale];
  return (
    <>
      {/* ── HERO ── */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-20 lg:pt-20">
          <div>
            <PluginStrike words={t.hero.replaces} />
            <h1 className="mt-3 font-(family-name:--font-display) text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
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
              <Link
                href={localizedHref(locale, t.hero.ctaSecondaryHref)}
                className="rounded-full border border-line bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              {t.hero.versionLine.replace("{version}", FREE_VERSION)}
            </p>
          </div>

          <div id="demo" className="scroll-mt-24">
            <HeroFormDemo locale={locale} />
            <p className="mt-3 text-center text-xs text-ink-muted">
              {t.hero.demoCaption}{" "}
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener"
                className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-2 hover:decoration-brand-violet"
              >
                {t.hero.demoLink}
              </a>
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      {/* ── ALLES DRIN ── */}
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

      {/* ── CONTACT FORM 7 ── */}
      <Section id="umstieg" className="scroll-mt-16">
        <SectionHeading>{t.cf7.heading}</SectionHeading>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink-soft">
          {t.cf7.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {CF7_IMPORT_SINCE && (
          <div className="mt-10 overflow-hidden rounded-3xl bg-ink p-7 text-white sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h3 className="font-(family-name:--font-display) text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  {t.cf7.importShowcase.title}
                </h3>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-white/75">{t.cf7.importShowcase.sub}</p>
                <a
                  href={WPORG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5"
                >
                  {t.cf7.importShowcase.cta}
                </a>
                <p className="mt-3 text-xs text-white/50">
                  {t.cf7.importShowcase.note.replace("{version}", CF7_IMPORT_SINCE)}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="mb-3 hidden grid-cols-[1fr_auto_1fr] gap-3 px-1 text-[0.7rem] font-semibold uppercase tracking-wider text-white/50 sm:grid">
                  <span>{t.cf7.importShowcase.fromLabel}</span>
                  <span aria-hidden="true" />
                  <span>{t.cf7.importShowcase.toLabel}</span>
                </div>
                <ul className="space-y-2">
                  {t.cf7.importShowcase.rows.map(([from, to]) => (
                    <li
                      key={from}
                      className="grid gap-1 rounded-xl bg-white/5 px-3 py-2.5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-3"
                    >
                      <code className="break-words font-mono text-[0.8rem] text-white/60 line-through decoration-brand-pink/70">
                        {from}
                      </code>
                      {/* Mobil stehen Pfeil und Ziel in einer Zeile, ab sm im Raster. */}
                      <span className="flex items-center gap-2 sm:contents">
                        <span aria-hidden="true" className="text-brand-magenta sm:text-center">
                          →
                        </span>
                        <span className="text-sm font-semibold">{to}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="card p-7">
            <h3 className="text-[1.05rem] font-bold">{t.cf7.gainsHeading}</h3>
            <ul className="mt-5 space-y-3.5">
              {t.cf7.gains.map((gain) => (
                <li key={gain} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
                  <Check />
                  {gain}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <h3 className="text-[1.05rem] font-bold">{t.cf7.stepsHeading}</h3>
            <ol className="mt-5 space-y-4">
              {t.cf7.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4 text-[0.95rem] leading-relaxed text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink font-(family-name:--font-display) text-xs font-bold text-white"
                  >
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-ink-muted">{t.cf7.honest}</p>
        <Link
          href={localizedHref(locale, t.cf7.ctaHref)}
          className="mt-4 inline-block text-sm font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4 hover:decoration-brand-violet"
        >
          {t.cf7.cta}
        </Link>
      </Section>

      {/* ── AGENTUREN ── */}
      <Section id="agenturen" className="scroll-mt-16">
        <Eyebrow>{t.agency.eyebrow}</Eyebrow>
        <div className="mt-5">
          <SectionHeading sub={t.agency.sub}>{t.agency.heading}</SectionHeading>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.agency.items.map((item) => (
            <div key={item.title} className="card p-7">
              <h3 className="text-[1.05rem] font-bold">{item.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-line bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[1.02rem] font-semibold leading-relaxed text-ink">{t.agency.price}</p>
          <Link
            href={localizedHref(locale, t.agency.ctaHref)}
            className="shrink-0 self-start rounded-full bg-gradient-pro px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90 sm:self-auto"
          >
            {t.agency.cta}
          </Link>
        </div>
      </Section>

      {/* ── PRO: ANWENDUNGSFÄLLE ── */}
      <Section>
        <div className="card relative overflow-hidden !rounded-3xl p-8 sm:p-12">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-pro" />
          <div className="max-w-3xl">
            <Eyebrow variant="pro">{t.proTeaser.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-(family-name:--font-display) text-3xl font-bold tracking-tight sm:text-4xl">
              {t.proTeaser.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t.proTeaser.desc}</p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {t.proTeaser.cases.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
                <h3 className="text-[1.05rem] font-bold">{c.title}</h3>
                <p className="mt-2 grow text-[0.9rem] leading-relaxed text-ink-soft">{c.desc}</p>
                <a
                  href={`${DEMO_URL}${c.demoPath}`}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 text-sm font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4 hover:decoration-brand-violet"
                >
                  {c.demoText}
                </a>
              </div>
            ))}
          </div>
          <h3 className="mt-10 text-sm font-bold uppercase tracking-widest text-ink-muted">
            {t.proTeaser.itemsHeading}
          </h3>
          <ul className="mt-4 grid gap-3.5 sm:grid-cols-2">
            {t.proTeaser.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink-soft">
                <Check pro />
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

      {/* ── DATENSCHUTZ ── */}
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

      {/* ── BELEGE ── */}
      <Section id="bewertungen" className="scroll-mt-16">
        <SectionHeading sub={t.proof.sub}>{t.proof.heading}</SectionHeading>
        <p className="flex flex-wrap items-center gap-3 text-[0.95rem] font-semibold text-ink">
          <Stars
            rating={REVIEW_SUMMARY.average}
            label={t.proof.rating
              .replace("{average}", String(REVIEW_SUMMARY.average))
              .replace("{count}", String(REVIEW_SUMMARY.count))}
          />
          <span>
            {t.proof.rating
              .replace("{average}", String(REVIEW_SUMMARY.average))
              .replace("{count}", String(REVIEW_SUMMARY.count))}
          </span>
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {REVIEWS.filter((r) => r.published).map((review) => {
            const text = locale === "en" && review.quoteEn ? review.quoteEn : review.quote;
            const lang = locale === "en" && review.quoteEn ? "en" : review.lang;
            return (
              <figure key={review.href} className="card flex flex-col p-7">
                <Stars rating={review.rating} label={`${review.rating}/5`} />
                <blockquote lang={lang} className="mt-4 grow text-[0.95rem] leading-relaxed text-ink">
                  <p>{ui.quoteOpen}{text}{ui.quoteClose}</p>
                </blockquote>
                <figcaption className="mt-5 text-sm text-ink-muted">
                  <span className="font-semibold text-ink-soft">{review.author}</span>
                  <br />
                  <a
                    href={review.href}
                    className="underline decoration-line underline-offset-2 hover:text-ink"
                  >
                    {t.proof.source}
                  </a>
                </figcaption>
              </figure>
            );
          })}
        </div>
        {FEATURED_QUOTE && (
          <figure className="card mt-5 p-8">
            <blockquote className="text-lg leading-relaxed text-ink">
              <p>{ui.quoteOpen}{FEATURED_QUOTE.text}{ui.quoteClose}</p>
            </blockquote>
            <figcaption className="mt-4 text-sm text-ink-muted">
              <span className="font-semibold text-ink-soft">{FEATURED_QUOTE.author}</span>, {FEATURED_QUOTE.role}
            </figcaption>
          </figure>
        )}
        {CLIENT_SITES_COUNT !== null && (
          <p className="mt-6 text-[1.02rem] font-semibold text-ink">
            {t.proof.clientSites.replace("{count}", String(CLIENT_SITES_COUNT))}
          </p>
        )}
        <div className="mt-6 flex flex-col gap-2">
          <a
            href={REVIEWS_URL}
            className="text-sm font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4 hover:decoration-brand-violet"
          >
            {t.proof.allReviews}
          </a>
          <p className="max-w-3xl text-xs leading-relaxed text-ink-muted">{t.proof.notice}</p>
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
