import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Section, Eyebrow } from "@/components/Section";
import { SITE_URL, WPORG_URL, breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dokumentation: Erste Schritte mit Flinkform",
  description:
    "Die Flinkform-Dokumentation: Installation, erstes Formular, Multi-Step, bedingte Logik, Spam-Schutz und Benachrichtigungen. Schritt für Schritt.",
  alternates: { canonical: `${SITE_URL}/docs` },
};

const steps = [
  {
    title: "1. Installation",
    body: 'Im WordPress-Admin unter "Plugins > Installieren" nach "Flinkform" suchen, installieren und aktivieren. Voraussetzungen: WordPress 6.5+, PHP 8.1+. Alternativ das ZIP von WordPress.org hochladen.',
  },
  {
    title: "2. Erstes Formular",
    body: 'Eine Seite im Block-Editor öffnen und den Block "Form" einfügen (Suche: "Flinkform"). Der Block startet mit Name, E-Mail und Nachricht. Felder lassen sich als Blöcke hinzufügen, umsortieren und im Block-Inspector konfigurieren.',
  },
  {
    title: "3. Benachrichtigungen",
    body: 'Im Form-Block unter "Benachrichtigungen" die Empfänger-Adresse eintragen. Merge-Tags wie {feldname} setzen Feldwerte in Betreff und Text ein. Optional: Bestätigungsmail an den Absender aktivieren.',
  },
  {
    title: "4. Multi-Step",
    body: 'Einen "Page Break"-Block zwischen die Felder setzen, um das Formular in Schritte zu teilen. Fortschrittsanzeige (Balken, Punkte, Zahlen) im Form-Block wählen. Jeder Schritt validiert seine Felder, bevor es weitergeht.',
  },
  {
    title: "5. Bedingte Logik",
    body: "Im Block-Inspector eines Feldes die Sichtbarkeits-Regeln konfigurieren: Feld anzeigen oder verstecken, abhängig von den Antworten in anderen Feldern. Auch ganze Schritte lassen sich überspringen und der Submit-Button lässt sich sperren.",
  },
  {
    title: "6. Einsendungen verwalten",
    body: 'Alle Einsendungen erscheinen unter "Flinkform" im Admin-Menü: Suche, Filter nach Formular, gelesen/ungelesen, Bulk-Aktionen. Pro Formular lässt sich eine Aufbewahrungsfrist setzen, ältere Einsendungen werden dann täglich automatisch gelöscht.',
  },
] as const;

export default function DocsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Flinkform", path: "/" },
          { name: "Dokumentation", path: "/docs" },
        ])}
      />

      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8">
          <Eyebrow>Dokumentation</Eyebrow>
          <h1 className="mt-5 font-(family-name:--font-display) text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">
            Erste Schritte
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Von der Installation zum ersten Formular in wenigen Minuten. Die
            Dokumentation wächst mit dem Plugin; Fragen beantwortet auch die
            FAQ auf{" "}
            <a
              href={WPORG_URL}
              className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4"
            >
              WordPress.org
            </a>
            .
          </p>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.title} className="card p-7">
              <h2 className="text-lg font-bold">{step.title}</h2>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="card mt-10 flex flex-col gap-4 !rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold">Pro-Module einrichten</h2>
            <p className="mt-1 max-w-xl text-[0.92rem] text-ink-soft">
              Stripe Payments, Berechnungsfelder, Webhooks, SMTP und Co.
              werden mit Flinkform Pro freigeschaltet. Die
              Einrichtungs-Anleitungen folgen hier mit dem Pro-Launch.
            </p>
          </div>
          <Link
            href="/pro"
            className="shrink-0 rounded-full bg-gradient-pro px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Zu Flinkform Pro
          </Link>
        </div>
      </Section>
    </>
  );
}
