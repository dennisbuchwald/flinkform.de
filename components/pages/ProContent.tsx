import Link from "next/link";
import Image from "next/image";
import CompareTable from "@/components/CompareTable";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import ProInquiryForm from "@/components/ProInquiryForm";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { LIFETIME, PRICING } from "@/lib/site";
import { breadcrumbNode, flinkformProNode, graph } from "@/lib/schema";
import { localizedHref, type Locale } from "@/lib/i18n/routes";
import type { ProDict } from "@/content/de/pro";

const i18n = {
  de: { faqHeading: "Häufige Fragen", yes: "Ja", no: "Nein" },
  en: { faqHeading: "Frequently Asked Questions", yes: "Yes", no: "No" },
} as const;

export default function ProContent({ locale, t }: { locale: Locale; t: ProDict }) {
  const ui = i18n[locale];
  const proHref = localizedHref(locale, "/pro");
  const homeHref = localizedHref(locale, "/");

  return (
    <>
      <JsonLd
        data={graph([
          flinkformProNode(locale),
          breadcrumbNode([
            { name: t.breadcrumb.home, path: homeHref },
            { name: t.breadcrumb.pro, path: proHref },
          ]),
        ])}
      />

      {/* ── HERO ── */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 lg:pb-20 lg:pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Image src="/icons/flinkform-app.svg" alt="" width={44} height={44} priority />
              <Eyebrow variant="pro">{t.hero.eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-6 font-(family-name:--font-display) text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              {t.hero.titlePre}
              <span className="text-gradient-pro">{t.hero.titleHighlight}</span>
              {t.hero.titlePost}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{t.hero.entity}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#anfrage"
                className="rounded-full bg-gradient-pro px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#preise"
                className="rounded-full border border-line bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-muted">{t.hero.versionLine}</p>
          </div>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-pro" />
      </div>

      {/* ── NEEDS ── */}
      <Section>
        <SectionHeading sub={t.needs.sub}>{t.needs.heading}</SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {t.needs.items.map((need) => (
            <li key={need} className="card flex items-start gap-3 p-5 text-[0.95rem] leading-relaxed text-ink-soft">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-pro text-xs font-bold text-white"
              >
                !
              </span>
              {need}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
          {t.needs.outroPre}
          <strong className="text-ink">{t.needs.outroStrong}</strong>
          {t.needs.outroPost}
        </p>
      </Section>

      {/* ── 8 MODULE ── */}
      <Section>
        <SectionHeading>{t.modules.heading}</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.modules.items.map((m) => (
            <div key={m.title} className="card card-hover p-7">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-gradient-pro" />
                <h3 className="text-[1.05rem] font-bold">{m.title}</h3>
              </div>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HIGHLIGHTS ── */}
      <Section>
        <SectionHeading sub={t.highlights.sub}>{t.highlights.heading}</SectionHeading>
        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {t.highlights.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
              <span
                aria-hidden="true"
                className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-pro text-white"
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
      <Section>
        <SectionHeading>{t.compare.heading}</SectionHeading>
        <CompareTable
          accent="pro"
          caption={t.compare.caption}
          columns={t.compare.columns}
          rows={t.compare.rows}
          note={t.compare.note}
          yesLabel={ui.yes}
          noLabel={ui.no}
        />
      </Section>

      {/* ── SO FUNKTIONIERT ES ── */}
      <Section>
        <SectionHeading>{t.steps.heading}</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-3">
          {t.steps.items.map((step, i) => (
            <div key={step.title} className="card p-7">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-pro font-(family-name:--font-display) text-lg font-bold text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-[1.05rem] font-bold">{step.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PREISE ── */}
      <Section id="preise" className="scroll-mt-16">
        <SectionHeading sub={t.pricing.sub}>{t.pricing.heading}</SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PRICING.map((plan) => (
            <div
              key={plan.name}
              className={`card relative flex flex-col p-7 ${
                plan.featured
                  ? "border-transparent shadow-[0_0_0_2px_#7e56ff,0_24px_48px_-24px_rgba(126,86,255,0.4)]"
                  : ""
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-pro px-4 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-white">
                  {t.pricing.bestseller}
                </span>
              )}
              <h3 className="text-sm font-bold uppercase tracking-widest text-ink-muted">{plan.name}</h3>
              <p className="mt-3 font-(family-name:--font-display) text-4xl font-extrabold">
                {plan.price} €<span className="text-base font-medium text-ink-muted"> {t.pricing.perYear}</span>
              </p>
              <p className="mt-2 text-[0.95rem] font-semibold text-ink">{plan.sites}</p>
              <p
                className={`mt-1 inline-block self-start rounded-full px-2.5 py-1 text-xs font-bold ${
                  plan.featured ? "bg-gradient-pro text-white" : "bg-line/60 text-ink-soft"
                }`}
              >
                {plan.perSite}
              </p>
              <p className="mt-3 grow text-[0.85rem] leading-relaxed text-ink-soft">{plan.desc}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[0.85rem] text-ink-soft">
                <li>{t.pricing.includedModules}</li>
                <li>{t.pricing.includedSupport}</li>
              </ul>
              <a
                href="#anfrage"
                className={`mt-6 rounded-full py-3 text-center text-[0.9rem] font-semibold transition-all hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-gradient-pro text-white hover:opacity-90"
                    : "border border-line bg-white text-ink hover:border-ink-muted/40"
                }`}
              >
                {t.pricing.cta}
              </a>
            </div>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-ink-soft">
          {t.pricing.footNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>

        {/* ── LIFETIME (dunkel, Scarcity) ── */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-ink bg-ink text-white">
          <div aria-hidden="true" className="h-1.5 bg-gradient-scarcity" />
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-gradient-scarcity px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white">
                {t.pricing.lifetime.badge}
              </span>
              <h3 className="mt-5 font-(family-name:--font-display) text-3xl font-bold tracking-tight">
                {t.pricing.lifetime.title}
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/70">{t.pricing.lifetime.desc}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
              <p className="font-(family-name:--font-display) text-5xl font-extrabold">
                {LIFETIME.price} €
                <span className="block text-sm font-medium text-white/50">{t.pricing.lifetime.once}</span>
              </p>
              <p className="mt-3 text-sm font-semibold">{LIFETIME.sites}</p>
              <a
                href="#anfrage"
                className="mt-5 block rounded-full bg-white py-3 text-[0.9rem] font-bold text-ink transition-all hover:-translate-y-0.5"
              >
                {t.pricing.lifetime.cta}
              </a>
              <p className="mt-3 text-xs text-white/50">{t.pricing.lifetime.note}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── ANFRAGE ── */}
      <Section id="anfrage" className="scroll-mt-16">
        <div className="card mx-auto max-w-3xl !rounded-3xl p-8 sm:p-10">
          <h2 className="font-(family-name:--font-display) text-3xl font-bold tracking-tight">
            {t.inquiry.title}
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">{t.inquiry.desc}</p>
          <div className="mt-8">
            <ProInquiryForm locale={locale} />
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <Faq items={t.faq.items} heading={ui.faqHeading} />
      </Section>

      {/* ── VORAUSSETZUNGEN ── */}
      <Section className="pb-8">
        <SectionHeading>{t.requirements.heading}</SectionHeading>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {t.requirements.items.map((req) => (
            <div key={req.label} className="card p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">{req.label}</p>
              <p className="mt-1.5 font-(family-name:--font-display) text-2xl font-bold">{req.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-muted">
          {t.requirements.noFlinkformPre}
          <Link
            href={homeHref}
            className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4 hover:decoration-brand-violet"
          >
            {t.requirements.noFlinkformLink}
          </Link>
        </p>
      </Section>
    </>
  );
}
