import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import KostenRechner from "@/components/KostenRechner";
import Faq from "@/components/Faq";
import { Section, Eyebrow } from "@/components/Section";
import { SITE_URL, WPORG_URL, breadcrumbSchema, type FaqItem } from "@/lib/site";

export const metadata: Metadata = {
  title: "Formular-Plugin Kostenrechner: Was kostet dich dein Formular-Stack?",
  description:
    "Interaktiver Rechner: Vergleiche die 3-Jahres-Kosten von WPForms, Gravity Forms, Fluent Forms und Flinkform für deine Anzahl Websites. Reguläre Preise, Stand Juli 2026.",
  alternates: { canonical: `${SITE_URL}/rechner` },
};

const faqs: FaqItem[] = [
  {
    q: "Woher kommen die Preise im Rechner?",
    a: "Von den offiziellen Preisseiten der Anbieter, Stand Juli 2026. Wir rechnen mit den regulären Renewal-Preisen, nicht mit den Erstjahres-Rabatten, denn ab dem zweiten Jahr zahlst du den vollen Preis. Alle Quellen stehen im großen Preisvergleich im Wissens-Bereich.",
  },
  {
    q: "Warum werden Dollar und Euro gemischt?",
    a: "WPForms, Gravity Forms und Fluent Forms rechnen in US-Dollar ab, Flinkform in Euro. Wir rechnen bewusst nicht um, weil Wechselkurse schwanken und je nach Zahlungsart Gebühren dazukommen. Die Größenordnungen bleiben trotzdem klar vergleichbar.",
  },
  {
    q: "Ist der Vergleich fair, wenn Flinkform ihn selbst baut?",
    a: "Wir legen die Logik offen: Gewählt wird je der günstigste Plan des Anbieters, der deine Site-Anzahl und deinen Feature-Bedarf abdeckt. Wo die Konkurrenz Vorteile hat, steht es dabei. Rechne gern selbst nach, die Preisseiten sind verlinkt.",
  },
  {
    q: "Was ist mit versteckten Kosten?",
    a: "Der Rechner zeigt Lizenzkosten. Dazu kommen können: 3 % Stripe-Zusatzgebühr bei WPForms unterhalb des Pro-Plans, einzelne Add-on-Käufe bei Ninja Forms und SaaS-Aufpreise bei Antwort-Limits (Typeform, Jotform). Details im Preisvergleich-Artikel.",
  },
];

export default function RechnerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Flinkform", path: "/" },
          { name: "Kostenrechner", path: "/rechner" },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Interaktiver Rechner</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            Was kostet dich dein Formular-Stack wirklich?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Formular-Plugins werden pro Jahr und pro Website bezahlt, und
            die beworbenen Preise sind meist Erstjahres-Rabatte. Dieser
            Rechner vergleicht die regulären 3-Jahres-Kosten von WPForms,
            Gravity Forms, Fluent Forms und Flinkform für deine Situation.
            Stell einfach ein, wie viele Websites du betreust.
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <KostenRechner />
        <p className="mt-6 text-center text-sm text-ink-muted">
          Übrigens: Diese Live-Berechnung ist genau das, was die{" "}
          <Link
            href="/wissen/angebotsrechner-wordpress"
            className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
          >
            Berechnungsfelder von Flinkform Pro
          </Link>{" "}
          in deinen eigenen Formularen können.
        </p>
      </Section>

      <Section>
        <Faq items={faqs} />
      </Section>

      <Section className="pb-8">
        <div className="rounded-3xl bg-gradient-brand p-[2px]">
          <div className="rounded-[calc(1.5rem-2px)] bg-white px-8 py-10 text-center">
            <h2 className="font-(family-name:--font-display) text-2xl font-bold tracking-tight sm:text-3xl">
              Die günstigste Zeile im Rechner ist kostenlos.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-ink-soft">
              Multi-Step, bedingte Logik, Spam-Schutz ohne reCAPTCHA:
              alles im freien Plugin.
            </p>
            <a
              href={WPORG_URL}
              className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
            >
              Kostenlos auf WordPress.org
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
