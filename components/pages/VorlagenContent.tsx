import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import { breadcrumbNode, graph } from "@/lib/schema";
import { localizedHref, type Locale } from "@/lib/i18n/routes";
import { vorlagen, vorlagePath, type Vorlage } from "@/lib/vorlagen";
import type { VorlagenUiDict } from "@/content/de/vorlagen";

export function TierBadge({ tier, t }: { tier: Vorlage["tier"]; t: VorlagenUiDict }) {
  const style =
    tier === "free"
      ? "bg-line/60 text-ink-soft"
      : tier === "pro"
        ? "bg-gradient-pro text-white"
        : "bg-white text-brand-violet ring-1 ring-brand-violet/30";
  return (
    <span className={`self-start rounded-full px-3 py-1 text-xs font-bold ${style}`}>{t.badges[tier]}</span>
  );
}

export default function VorlagenContent({ locale, t }: { locale: Locale; t: VorlagenUiDict }) {
  const overviewPath = localizedHref(locale, "/vorlagen");
  return (
    <>
      <JsonLd
        data={graph([
          breadcrumbNode([
            { name: t.breadcrumb.home, path: localizedHref(locale, "/") },
            { name: t.breadcrumb.vorlagen, path: overviewPath },
          ]),
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vorlagen.map((v) => {
            const text = v[locale];
            return (
              <Link key={v.slug} href={vorlagePath(v, locale)} className="card card-hover flex flex-col p-7">
                <TierBadge tier={v.tier} t={t} />
                <h2 className="mt-4 text-lg font-bold">{text.name}</h2>
                <p className="mt-2 grow text-[0.9rem] leading-relaxed text-ink-soft">{text.problem}</p>
                <span className="mt-5 text-sm font-semibold text-brand-violet">{t.cardLink}</span>
              </Link>
            );
          })}
          <Link
            href={localizedHref(locale, t.cf7.href)}
            className="card card-hover flex flex-col border-dashed p-7"
          >
            <h2 className="text-lg font-bold">{t.cf7.title}</h2>
            <p className="mt-2 grow text-[0.9rem] leading-relaxed text-ink-soft">{t.cf7.desc}</p>
            <span className="mt-5 text-sm font-semibold text-brand-violet">{t.cf7.link}</span>
          </Link>
        </div>
      </Section>
    </>
  );
}
