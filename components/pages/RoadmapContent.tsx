import JsonLd from "@/components/JsonLd";
import { breadcrumbNode, graph } from "@/lib/schema";
import { Section, Eyebrow } from "@/components/Section";
import { GITHUB_URL } from "@/lib/site";
import { localizedHref, type Locale } from "@/lib/i18n/routes";
import type { RoadmapDict } from "@/content/de/roadmap";

export default function RoadmapContent({ locale, t }: { locale: Locale; t: RoadmapDict }) {
  return (
    <>
      <JsonLd
        data={graph([breadcrumbNode([
          { name: t.breadcrumb.home, path: localizedHref(locale, "/") },
          { name: t.breadcrumb.roadmap, path: localizedHref(locale, "/roadmap") },
        ])])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {t.hero.introPre}
            <a
              href={GITHUB_URL}
              className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
            >
              {t.hero.introLinkText}
            </a>
            {t.hero.introPost}
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <h2 className="mb-6 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          {t.inProgress.heading}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.inProgress.items.map((item) => (
            <div key={item.title} className="card p-6">
              <span className="inline-block rounded-full bg-gradient-pro px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                {item.area}
              </span>
              <h3 className="mt-3 font-bold">{item.title}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-6 mt-14 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          {t.planned.heading}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.planned.items.map((item) => (
            <div key={item.title} className="card p-6">
              <span className="inline-block rounded-full bg-line/60 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink-soft">
                {item.area}
              </span>
              <h3 className="mt-3 font-bold">{item.title}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mb-2 mt-14 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          {t.radar.heading}
        </h2>
        <p className="mb-6 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">{t.radar.sub}</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.radar.items.map((item) => (
            <div key={item.title} className="card p-6">
              <span className="inline-block rounded-full bg-line/60 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-ink-soft">
                {item.area}
              </span>
              <h3 className="mt-3 font-bold">{item.title}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-8">
        <h2 className="mb-6 font-(family-name:--font-display) text-2xl font-bold tracking-tight">
          {t.changelogHeading}
        </h2>
        <div className="space-y-6">
          {t.changelog.map((release) => (
            <div key={`${release.area} ${release.version}`} className="card p-7">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-(family-name:--font-display) text-lg font-bold">
                  <span
                    className={`mr-2.5 rounded-full px-2.5 py-1 align-middle text-xs font-semibold uppercase tracking-wide ${
                      release.area === "Pro" ? "bg-gradient-brand text-white" : "bg-ink/5 text-ink-soft"
                    }`}
                  >
                    {release.area}
                  </span>
                  {release.version}
                </h3>
                <span className="text-sm text-ink-muted">{release.date}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {release.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          {t.changelogFooterPre}
          <a
            href="https://wordpress.org/plugins/flinkform/#developers"
            className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
          >
            {t.changelogFooterLinkText}
          </a>
          {t.changelogFooterPost}
        </p>
      </Section>
    </>
  );
}
