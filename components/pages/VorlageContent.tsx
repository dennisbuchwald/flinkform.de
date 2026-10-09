import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CopyMarkup from "@/components/CopyMarkup";
import { Section } from "@/components/Section";
import { TierBadge } from "@/components/pages/VorlagenContent";
import { articleNode, breadcrumbNode, graph } from "@/lib/schema";
import { resolveInternalLinks } from "@/lib/internal-links";
import { isTranslated, localizedHref, type Locale } from "@/lib/i18n/routes";
import { PLAYGROUND_URL, SITE_URL, WPORG_URL } from "@/lib/site";
import { blockMarkup, vorlagen, vorlagePath, type Vorlage } from "@/lib/vorlagen";
import type { VorlagenUiDict } from "@/content/de/vorlagen";

const dateLocale = { de: "de-DE", en: "en-US" } as const;

/** Inline-Code in Schritten (`/`) als Tastenkappe darstellen. */
function withKeys(text: string) {
  return text.split(/(`[^`]+`)/).map((part, i) =>
    part.startsWith("`") ? (
      <kbd key={i} className="kbd">
        {part.slice(1, -1)}
      </kbd>
    ) : (
      part
    ),
  );
}

export default function VorlageContent({
  locale,
  t,
  vorlage,
}: {
  locale: Locale;
  t: VorlagenUiDict;
  vorlage: Vorlage;
}) {
  const text = vorlage[locale];
  const path = vorlagePath(vorlage, locale);
  const pageUrl = `${SITE_URL}${path}`;
  const overviewPath = localizedHref(locale, "/vorlagen");

  // EN zeigt nur Ziele, die es auf Englisch gibt.
  const related = resolveInternalLinks(vorlage.related)
    .filter((link) => locale === "de" || isTranslated(link.href))
    .map((link) => ({ ...link, href: localizedHref(locale, link.href) }));
  const others = vorlagen.filter((v) => v.slug !== vorlage.slug);
  const markup = vorlage.markup ? blockMarkup(vorlage.markup[locale]) : null;

  return (
    <>
      <meta property="article:published_time" content={vorlage.published} />
      <meta property="article:modified_time" content={vorlage.updated} />
      <JsonLd
        data={graph([
          articleNode({
            url: pageUrl,
            headline: text.h1,
            description: text.description,
            datePublished: vorlage.published,
            dateModified: vorlage.updated,
            locale,
          }),
          breadcrumbNode([
            { name: t.breadcrumb.home, path: localizedHref(locale, "/") },
            { name: t.breadcrumb.vorlagen, path: overviewPath },
            { name: text.name, path },
          ]),
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8">
          <nav aria-label={locale === "de" ? "Brotkrumen" : "Breadcrumb"} className="mb-6 text-sm text-ink-muted">
            <Link href={localizedHref(locale, "/")} className="hover:text-ink">
              {t.breadcrumb.home}
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href={overviewPath} className="hover:text-ink">
              {t.breadcrumb.vorlagen}
            </Link>
          </nav>
          <TierBadge tier={vorlage.tier} t={t} />
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-[2.5rem]">
            {text.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">{text.problem}</p>
          <p className="mt-4 text-sm text-ink-muted">
            {t.detail.updated}{" "}
            <time dateTime={vorlage.updated}>
              {new Date(vorlage.updated).toLocaleDateString(dateLocale[locale], {
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
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="font-(family-name:--font-display) text-2xl font-bold tracking-tight">
              {t.detail.fieldsHeading}
            </h2>
            <ul className="mt-5 space-y-2.5">
              {text.fields.map((field) => (
                <li key={field} className="card flex items-start gap-3 px-4 py-3 text-[0.92rem] text-ink-soft">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-brand" />
                  {field}
                </li>
              ))}
            </ul>
            {vorlage.demoUrl && (
              <a
                href={vorlage.demoUrl}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-block text-sm font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-2 hover:decoration-brand-violet"
              >
                {t.detail.demo} →
              </a>
            )}
          </div>
          <div>
            <h2 className="font-(family-name:--font-display) text-2xl font-bold tracking-tight">
              {t.detail.stepsHeading}
            </h2>
            <ol className="mt-5 space-y-4">
              {text.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-(family-name:--font-display) text-sm font-bold text-white"
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1 text-[0.98rem] leading-relaxed text-ink-soft">{withKeys(step)}</p>
                </li>
              ))}
            </ol>
            {text.tip && (
              <div className="mt-8 rounded-2xl border border-line bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">{t.detail.tipHeading}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{text.tip}</p>
              </div>
            )}
            {text.proNote && (
              <div className="mt-4 rounded-2xl border border-brand-violet/25 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-violet">{t.detail.proHeading}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{text.proNote}</p>
                <Link
                  href={localizedHref(locale, "/pro")}
                  className="mt-3 inline-block text-sm font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-2"
                >
                  {t.detail.ctaPro} →
                </Link>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <h2 className="font-(family-name:--font-display) text-2xl font-bold tracking-tight">{t.detail.markupHeading}</h2>
        {markup ? (
          <>
            <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">{t.detail.markupSub}</p>
            <div className="mt-6 max-w-4xl">
              <CopyMarkup markup={markup} copyLabel={t.detail.copy} copiedLabel={t.detail.copied} />
            </div>
          </>
        ) : (
          <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">{t.detail.noMarkup}</p>
        )}
      </Section>

      <Section className="!pt-0">
        <div className="card flex flex-col items-start gap-5 !rounded-3xl p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-md font-(family-name:--font-display) text-2xl font-bold tracking-tight">
            {t.detail.ctaTitle}
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={WPORG_URL}
              className="rounded-full bg-ink px-6 py-3 text-[0.9rem] font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              {t.detail.ctaPrimary}
            </a>
            <a
              href={PLAYGROUND_URL}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-line bg-white px-6 py-3 text-[0.9rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
            >
              {t.detail.ctaPlayground}
            </a>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-10 md:grid-cols-2">
          {related.length > 0 && (
            <div>
              <h2 className="text-lg font-bold">{t.detail.relatedHeading}</h2>
              <ul className="mt-4 space-y-2">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[0.95rem] text-brand-violet underline decoration-brand-violet/30 underline-offset-2 hover:decoration-brand-violet">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2 className="text-lg font-bold">{t.detail.otherHeading}</h2>
            <ul className="mt-4 space-y-2">
              {others.map((v) => (
                <li key={v.slug}>
                  <Link href={vorlagePath(v, locale)} className="text-[0.95rem] text-brand-violet underline decoration-brand-violet/30 underline-offset-2 hover:decoration-brand-violet">
                    {v[locale].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
