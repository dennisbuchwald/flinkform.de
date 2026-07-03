import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import { SITE_URL, WPORG_URL, GITHUB_URL, breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über Flinkform: Wer dahintersteckt und warum es das Plugin gibt",
  description:
    "Flinkform wird von Dennis Buchwald entwickelt, WordPress-Entwickler und Gründer der Digitalagentur dbw media aus Heilbronn. Die Geschichte hinter dem privacy-first Formular-Plugin.",
  alternates: { canonical: `${SITE_URL}/ueber` },
};

const werte = [
  {
    title: "Ehrlichkeit vor Conversion",
    desc: "Keine erfundenen Nutzerzahlen, keine Fake-Testimonials, keine Streichpreise. Unsere Vergleiche nennen die Stärken der Konkurrenz und sagen dir, wann du NICHT wechseln solltest. Das kostet kurzfristig Klicks und baut langfristig das auf, was zählt: Vertrauen.",
  },
  {
    title: "Privacy ist Architektur, kein Feature",
    desc: "Datenschutz lässt sich nicht nachrüsten. Deshalb ist Flinkform von der ersten Zeile an so gebaut, dass keine Daten den Server verlassen: kein reCAPTCHA, keine IP-Speicherung, kein Tracking. Diese Website lebt das vor, sie lädt nichts von Drittservern.",
  },
  {
    title: "Nativ statt aufgesetzt",
    desc: "WordPress hat mit dem Block-Editor und der Interactivity API ein modernes Fundament. Flinkform baut darauf, statt eine eigene Welt daneben zu stellen. Deshalb fühlt es sich an wie WordPress und bleibt unter 15 KB.",
  },
  {
    title: "Aus der Praxis, für die Praxis",
    desc: "Flinkform entsteht nicht im Labor, sondern in echten Kundenprojekten einer Agentur, die für die DSGVO-Konformität ihrer Kunden geradesteht. Jedes Feature hat einen realen Anwendungsfall hinter sich.",
  },
];

export default function UeberPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Flinkform", path: "/" },
          { name: "Über", path: "/ueber" },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Über Flinkform</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            Gebaut aus Frust. Im besten Sinne.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Flinkform wird von Dennis Buchwald entwickelt, WordPress-Entwickler
            und Gründer der Digitalagentur dbw media aus Heilbronn. Das Plugin
            entstand aus neun Jahren Agentur-Alltag und der immer gleichen
            Frage: Warum braucht ein Kontaktformular sechs Plugins und einen
            US-Konzern?
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section className="!py-10">
        <div className="prose-flink">
          <h2 className="!mt-0">Die Geschichte</h2>
          <p>
            Neun Jahre lang lief in der Agentur bei fast jedem Projekt
            dasselbe Ritual ab: Contact Form 7 installieren. Dann Flamingo,
            damit Einsendungen nicht verloren gehen. Dann ein Plugin für
            bedingte Felder, eins für Multi-Step, WP Mail SMTP für den
            Versand. Und am Ende reCAPTCHA gegen den Spam, inklusive
            Cookie-Banner-Eintrag und einem unguten Gefühl beim Thema
            Datenschutz.
          </p>
          <p>
            Sechs Plugins, sechs Update-Zyklen, sechs potenzielle Konflikte.
            Für ein Formular. Und das ungute Gefühl wurde konkreter: Als
            Agentur haftest du für die Compliance der Websites, die du
            auslieferst. Spätestens seit ein österreichisches Gericht 2024
            entschied, dass reCAPTCHA ohne Einwilligung DSGVO-widrig ist, war
            klar: Das Standard-Setup der WordPress-Welt hat ein strukturelles
            Problem.
          </p>
          <p>
            Also entstand Flinkform: ein Formular-Plugin, das alles Wichtige
            eingebaut hat, direkt im Block-Editor lebt und Datenschutz nicht
            als Einstellung versteht, sondern als Architektur. Kostenlos,
            weil gute Formulare Grundausstattung sind. Mit einem Pro-Add-on
            für die Fälle, in denen Formulare Geld verdienen sollen.
          </p>

          <h2>Wer dahintersteckt</h2>
          <p>
            <strong>Dennis Buchwald</strong> entwickelt seit fast einem
            Jahrzehnt WordPress-Websites für Unternehmen im DACH-Raum. Mit
            seiner Agentur{" "}
            <a href="https://dbw-media.de">dbw media</a> in Heilbronn baut
            und betreut er Websites, die auf ein Ziel einzahlen: Anfragen,
            Bewerbungen, Verkäufe. Flinkform ist das Werkzeug, das dafür
            immer gefehlt hat, jetzt einmal richtig gebaut und für alle
            verfügbar.
          </p>
          <p>
            Flinkform ist <a href={GITHUB_URL}>Open Source auf GitHub</a>,
            das kostenlose Plugin liegt im{" "}
            <a href={WPORG_URL}>WordPress.org-Verzeichnis</a>. Fragen,
            Feedback und Bug-Reports sind ausdrücklich willkommen.
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="mb-8 font-(family-name:--font-display) text-3xl font-bold tracking-tight">
          Woran du uns messen kannst
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {werte.map((wert) => (
            <div key={wert.title} className="card p-7">
              <h3 className="text-[1.05rem] font-bold">{wert.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                {wert.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-8">
        <div className="card flex flex-col items-start gap-4 !rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">
              Schau, was als Nächstes kommt
            </h2>
            <p className="mt-1 max-w-xl text-[0.95rem] text-ink-soft">
              Flinkform wird öffentlich weiterentwickelt: Roadmap und
              Changelog sind für alle einsehbar.
            </p>
          </div>
          <Link
            href="/roadmap"
            className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
          >
            Zur Roadmap
          </Link>
        </div>
      </Section>
    </>
  );
}
