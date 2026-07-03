import type { Metadata } from "next";
import Link from "next/link";
import CompareTable from "@/components/CompareTable";
import JsonLd from "@/components/JsonLd";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { SITE_URL, breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Flinkform im Vergleich: Contact Form 7, WPForms, Gravity Forms",
  description:
    "Ehrliche Vergleiche: Flinkform gegen Contact Form 7, WPForms, Gravity Forms und SureForms. Funktionen, Preise und Datenschutz im Detail, mit Quellen.",
  alternates: { canonical: `${SITE_URL}/vergleich` },
};

const comparisons = [
  {
    title: "Contact Form 7 Alternative",
    desc: "CF7 ist seit 2026 im Feature Freeze: Version 6.2 ist die letzte mit neuen Funktionen. Warum jetzt der richtige Zeitpunkt für den Wechsel ist und wie die Migration abläuft.",
    href: "/vergleich/contact-form-7-alternative",
    badge: "Feature Freeze",
  },
  {
    title: "WPForms Alternative",
    desc: "Multi-Step und bedingte Logik kosten bei WPForms regulär ab 199 Dollar pro Jahr, die Lite-Version speichert keine Einsendungen. Der ehrliche Preis- und Funktionsvergleich.",
    href: "/vergleich/wpforms-alternative",
    badge: "Paywall-Check",
  },
  {
    title: "Gravity Forms Alternative",
    desc: "Gravity Forms hat keine kostenlose Version und speichert ab Werk IP-Adressen. Wann Flinkform die bessere Wahl ist und wann Gravity sein Geld wert bleibt.",
    href: "/vergleich/gravity-forms-alternative",
    badge: "DSGVO-Fokus",
  },
] as const;

const overviewRows = [
  {
    feature: "Kostenlose Version mit Multi-Step + Logik",
    cells: [true, "nur mit Zusatz-Plugins", false, false, true],
  },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, false, false, false, false],
  },
  {
    feature: "Keine IP-Speicherung ab Werk",
    cells: [true, "mit Akismet nicht", false, false, "teils"],
  },
  { feature: "Block-Editor nativ", cells: [true, false, false, false, true] },
  {
    feature: "Aktive Weiterentwicklung",
    cells: [true, "Feature Freeze", true, true, true],
  },
  {
    feature: "Preis Pro (1 Website/Jahr)",
    cells: ["59 €", "kein Pro", "99 $", "59 $", "59 $"],
  },
] as const;

export default function VergleichPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Flinkform", path: "/" },
          { name: "Vergleich", path: "/vergleich" },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Vergleichs-Hub</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-(family-name:--font-display) text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-[2.75rem]">
            Flinkform gegen den Rest: ehrliche Vergleiche
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
            Flinkform ist ein block-natives, kostenloses Formular-Plugin mit
            Spam-Schutz ohne externe Dienste. Hier vergleichen wir es offen
            mit Contact Form 7, WPForms, Gravity Forms und SureForms:
            inklusive der Punkte, in denen die Konkurrenz besser ist. Jede
            Behauptung ist belegbar, alle Preise sind reguläre Listenpreise.
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {comparisons.map((c) => (
            <Link key={c.href} href={c.href} className="card card-hover flex flex-col p-7">
              <span className="self-start rounded-full bg-line/60 px-3 py-1 text-xs font-bold text-ink-soft">
                {c.badge}
              </span>
              <h2 className="mt-4 text-lg font-bold">{c.title}</h2>
              <p className="mt-2 grow text-[0.9rem] leading-relaxed text-ink-soft">
                {c.desc}
              </p>
              <span className="mt-5 text-sm font-semibold text-brand-violet">
                Zum Vergleich
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading sub="Die Kurzfassung über alle Kandidaten hinweg. Details, Preise und Quellen stehen auf den einzelnen Vergleichsseiten.">
          Die große Übersicht
        </SectionHeading>
        <CompareTable
          caption="Übersichtsvergleich: Flinkform, Contact Form 7, WPForms, Gravity Forms, SureForms"
          columns={["Flinkform", "Contact Form 7", "WPForms", "Gravity Forms", "SureForms"]}
          rows={overviewRows}
          note="Stand Juli 2026. SureForms ist wie Flinkform block-nativ und einen ehrlichen Blick wert; der Flinkform-Vorsprung liegt beim Privacy-Default (kein reCAPTCHA/hCaptcha nötig), der theme.json-Übernahme und dem Frontend unter 15 KB."
        />
      </Section>
    </>
  );
}
