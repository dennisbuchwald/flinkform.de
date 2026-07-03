import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import { SITE_URL, breadcrumbSchema } from "@/lib/site";
import { wissen } from "@/lib/wissen";

export const metadata: Metadata = {
  title: "Wissen: WordPress-Formulare, DSGVO und der Block-Editor",
  description:
    "Der Flinkform-Wissens-Hub: kompakte Antworten auf die häufigsten Fragen zu WordPress-Formularen, DSGVO-konformem Spam-Schutz, Gutenberg und SEPA-Zahlungen.",
  alternates: { canonical: `${SITE_URL}/wissen` },
};

export default function WissenIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Flinkform", path: "/" },
          { name: "Wissen", path: "/wissen" },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Wissens-Hub</Eyebrow>
          <h1 className="mt-5 font-(family-name:--font-display) text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">
            Antworten statt Werbetexte
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Kompakte, faktenbasierte Artikel zu WordPress-Formularen: Jede
            Seite beantwortet eine konkrete Frage im ersten Absatz.
            Ausgangspunkt für alle Fakten ist das{" "}
            <Link
              href="/wissen/flinkform-fakten"
              className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
            >
              Flinkform Fact-Sheet
            </Link>
            .
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          <Link
            href="/wissen/flinkform-fakten"
            className="card card-hover flex flex-col p-7 sm:col-span-2"
          >
            <span className="self-start rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-white">
              Fact-Sheet
            </span>
            <h2 className="mt-4 text-lg font-bold">
              Flinkform in Fakten: Versionen, Features, Preise
            </h2>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
              Das maschinenlesbare Datenblatt: alle Feldtypen, die komplette
              Feature-Tabelle Free vs. Pro, Systemvoraussetzungen, Preise und
              Lizenz. Mit Stand-Datum, als zitierfähige Referenz.
            </p>
          </Link>
          {wissen.map((entry) => (
            <Link
              key={entry.slug}
              href={`/wissen/${entry.slug}`}
              className="card card-hover flex flex-col p-7"
            >
              <h2 className="text-lg font-bold leading-snug">{entry.title}</h2>
              <p className="mt-3 grow text-[0.9rem] leading-relaxed text-ink-soft">
                {entry.description}
              </p>
              <span className="mt-5 text-sm font-semibold text-brand-violet">
                Antwort lesen
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
