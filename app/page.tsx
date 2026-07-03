import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroFormDemo from "@/components/HeroFormDemo";
import CompareTable from "@/components/CompareTable";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import {
  ENTITY_FREE,
  SITE_URL,
  WPORG_URL,
  softwareSchemaFree,
  type FaqItem,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Flinkform - Kostenloses WordPress Formular-Plugin, DSGVO by design",
  },
  description:
    "Flinkform ist ein block-natives Formular-Plugin für WordPress: Multi-Step, bedingte Logik, Spam-Schutz ohne reCAPTCHA. Kostenlos, DSGVO-konform, aus Deutschland.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Flinkform - Das privacy-first Formular-Plugin für WordPress",
    description:
      "Multi-Step, bedingte Logik, Spam-Schutz ohne externe Dienste. Kostenlos und DSGVO by design.",
    url: SITE_URL,
  },
};

const pillars = [
  {
    title: "Ein Plugin statt sechs",
    desc: "Multi-Step, bedingte Logik, Spam-Schutz, Submissions-Dashboard, E-Mail-Benachrichtigungen: alles eingebaut. Keine Add-ons, keine Kompatibilitätsprobleme.",
  },
  {
    title: "Nativ im Block-Editor",
    desc: "Jedes Feld ist ein Gutenberg-Block. Kein separater Formular-Builder, kein Shortcode. Du baust Formulare wie einen normalen WordPress-Beitrag.",
  },
  {
    title: "DSGVO ohne Kompromisse",
    desc: "Spam-Schutz läuft komplett auf deinem Server. Kein reCAPTCHA, kein Akismet, keine IP-Speicherung. Consent-Feld, automatische Datenlöschung und WordPress-Privacy-Tools sind eingebaut.",
  },
  {
    title: "Unter 15 KB, ohne jQuery",
    desc: "Das gesamte Frontend-JavaScript bleibt unter 15 KB gzipped. Assets laden nur auf Seiten, die ein Formular enthalten. Server-Side Rendering zeigt Formulare sofort.",
  },
  {
    title: "Submissions-Dashboard",
    desc: "Alle Einsendungen direkt in WordPress: Suche, Filter, Sortierung, Bulk-Aktionen, gelesen/ungelesen. Kein separates Plugin, kein Flamingo.",
  },
  {
    title: "Barrierefrei (WCAG 2.1 AA)",
    desc: "Volle Tastaturnavigation, Screenreader-Support, Fokus-Management bei Multi-Step. Respektiert prefers-reduced-motion.",
  },
];

const features = [
  "13 Feldtypen: Text, E-Mail, Textarea, Zahl, Datum, URL, Telefon, Dropdown, Radio, Checkbox, Toggle, Hidden, Consent",
  "Multi-Step-Formulare mit Fortschrittsanzeige (Balken, Punkte oder Zahlen) und Schritt-Validierung",
  "Bedingte Logik: Felder und Schritte ein-/ausblenden, Schritte überspringen, Submit-Button sperren",
  "Spam-Schutz ohne externe Dienste: Honeypot, signierter Zeit-Check, Proof-of-Work mit Mathe-Fallback ohne JavaScript",
  "Admin- und Bestätigungs-Mails mit Merge-Tags",
  "Automatische theme.json-Übernahme: Farben, Typografie, Abstände, Radius",
  "Style-Panel: 4 Feld-Stile, 4 Label-Positionen, 3 Button-Stile",
  "Weiterleitung auf Danke-Seite mit Conversion-Tracking-Parametern (GA4, Meta Pixel, Plausible)",
  "Automatische Datenlöschung nach konfigurierbarer Aufbewahrungsfrist",
  "Datenexport und Löschung über die WordPress-Privacy-Tools",
  "Zwei-Spalten-Layout mit Volle-Breite-Option pro Feld",
  "Gebaut mit der WordPress Interactivity API, block.json v3",
];

const compareRows = [
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, "reCAPTCHA / Akismet nötig", "reCAPTCHA / Turnstile", "reCAPTCHA / Turnstile", "reCAPTCHA / hCaptcha"],
  },
  {
    feature: "Keine IP-Speicherung ab Werk",
    cells: [true, "Akismet sendet Daten", false, false, "teils"],
  },
  { feature: "Block-Editor nativ", cells: [true, false, false, false, true] },
  { feature: "Multi-Step kostenlos", cells: [true, false, false, false, true] },
  { feature: "Bedingte Logik kostenlos", cells: [true, false, false, false, true] },
  {
    feature: "Submissions-Dashboard kostenlos",
    cells: [true, "Extra-Plugin (Flamingo)", false, false, true],
  },
  {
    feature: "Erbt Theme-Design (theme.json)",
    cells: [true, false, "eigene Styles", "eigene Styles", "eigene Styles"],
  },
  {
    feature: "Frontend-JS unter 15 KB, nur bei Bedarf geladen",
    cells: [true, "lädt auf jeder Seite", "schwerer", "schwerer", "React-basiert"],
  },
  {
    feature: "Aktive Weiterentwicklung",
    cells: [true, "Feature Freeze seit 2026", true, true, true],
  },
  {
    feature: "Preis Pro-Version (1 Website)",
    cells: ["59 €/Jahr", "kein Pro", "99 $/Jahr", "59 $/Jahr", "59 $/Jahr"],
  },
] as const;

const faqs: FaqItem[] = [
  {
    q: "Ist Flinkform wirklich komplett kostenlos?",
    a: "Ja. Multi-Step, bedingte Logik, Submissions-Dashboard, Spam-Schutz: alles im kostenlosen Plugin auf WordPress.org. Keine künstlichen Limits, kein beschnittener Testmodus. Flinkform Pro ist ein optionales Add-on für Zahlungen, Webhooks, Datei-Uploads und mehr.",
  },
  {
    q: "Warum nicht einfach Contact Form 7?",
    a: "Contact Form 7 ist seit 2026 im Feature Freeze: Version 6.2 ist die letzte mit neuen Funktionen. Für Multi-Step, bedingte Logik oder ein Submissions-Dashboard brauchst du bei CF7 drei bis vier zusätzliche Plugins. Flinkform hat das alles eingebaut.",
  },
  {
    q: "Was unterscheidet Flinkform von WPForms oder Gravity Forms?",
    a: "WPForms und Gravity Forms nutzen einen eigenen, separaten Formular-Builder. Flinkform lebt direkt im WordPress-Block-Editor. Außerdem brauchst du für bedingte Logik und mehrseitige Formulare bei WPForms mindestens den Basic-Plan, regulär 99 Dollar pro Jahr. Bei Flinkform ist beides kostenlos.",
  },
  {
    q: "Brauche ich reCAPTCHA für den Spam-Schutz?",
    a: "Nein. Flinkform bringt einen eigenen Spam-Schutz mit, der komplett auf deinem Server läuft: Honeypot, signierter Zeit-Check und Proof-of-Work. Kein externer Dienst, keine Einwilligung nötig, keine Datenweitergabe in die USA.",
  },
  {
    q: "Ist Flinkform DSGVO-konform?",
    a: "Flinkform ist auf Datenschutz gebaut: keine IP-Speicherung, kein User-Agent-Logging, keine externen Dienste, kein Tracking. Consent-Feld, automatische Datenlöschung pro Formular und die WordPress-Privacy-Tools (Datenexport und Löschung) sind eingebaut.",
  },
  {
    q: "Funktioniert Flinkform mit meinem Theme?",
    a: "Ja. Flinkform liest die Design-Tokens deines Themes aus theme.json und übernimmt Farben, Typografie, Abstände und Eckenradius automatisch. Getestet mit GeneratePress, Twenty Twenty-Five, Astra und Kadence.",
  },
  {
    q: "Kann ich meine Contact-Form-7-Formulare migrieren?",
    a: "Einen automatischen Importer gibt es aktuell nicht. Ein einfaches Kontaktformular baust du in Flinkform aber in unter 5 Minuten neu, direkt im Block-Editor, wie einen normalen Beitrag.",
  },
  {
    q: "Gibt es eine Pro-Version?",
    a: "Ja. Flinkform Pro erweitert das kostenlose Plugin um Stripe-Zahlungen (Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay), Berechnungsfelder, Multi-Datei-Upload, SMTP-Versand, Webhooks, Newsletter-Anbindung, CSV-Export und Custom CSS. Ab 59 € pro Jahr.",
  },
];

const keywordCards = [
  {
    title: "Contact Form 7 Alternative",
    text: "Contact Form 7 ist seit 2026 im Feature Freeze. Flinkform bietet alles, was CF7 kann, plus Multi-Step, bedingte Logik und Submissions-Dashboard. In einem Plugin statt sechs.",
    href: "/vergleich/contact-form-7-alternative",
  },
  {
    title: "WPForms Alternative",
    text: "WPForms verlangt für bedingte Logik und mehrseitige Formulare mindestens Basic, regulär 99 Dollar pro Jahr. Die Lite-Version speichert keine Einsendungen. Flinkform kann beides kostenlos.",
    href: "/vergleich/wpforms-alternative",
  },
  {
    title: "Gravity Forms Alternative",
    text: "Gravity Forms hat keine kostenlose Version, der Einstieg kostet 59 Dollar pro Jahr. Flinkform deckt die Standard-Features kostenlos ab, DSGVO-konform und block-nativ.",
    href: "/vergleich/gravity-forms-alternative",
  },
  {
    title: "WordPress-Formular ohne reCAPTCHA",
    text: "Die meisten Formular-Plugins setzen auf reCAPTCHA oder Akismet. Beides sendet Besucherdaten in die USA. Flinkform schützt komplett auf deinem Server.",
    href: "/wissen/wordpress-formular-ohne-recaptcha",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={softwareSchemaFree} />

      {/* ── HERO ── */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-20 lg:pt-20">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/icons/flinkform-app.svg"
                alt=""
                width={44}
                height={44}
                priority
              />
              <Eyebrow>WordPress Formular-Plugin · Kostenlos</Eyebrow>
            </div>
            <h1 className="mt-6 font-(family-name:--font-display) text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Das letzte Formular-Plugin, das du{" "}
              <span className="text-gradient-brand">installieren</span> wirst.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {ENTITY_FREE}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              DSGVO by design: kein reCAPTCHA, kein US-Dienst, keine
              IP-Speicherung. Alles bleibt auf deinem Server.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WPORG_URL}
                className="rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                Kostenlos auf WordPress.org
              </a>
              <a
                href="#demo"
                className="rounded-full border border-line bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
              >
                Live ausprobieren ↓
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              Version 1.3.0 · WordPress 6.5+ · PHP 8.1+ · GPLv2
            </p>
          </div>

          <div id="demo" className="scroll-mt-24">
            <HeroFormDemo />
            <p className="mt-3 text-center text-xs text-ink-muted">
              So fühlt sich Flinkform an: Multi-Step, Live-Berechnung, ohne
              reCAPTCHA. Klick dich durch.
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-brand-h" />
      </div>

      {/* ── DAS PRIVACY-PROBLEM ── */}
      <Section>
        <div className="overflow-hidden rounded-3xl border border-ink bg-ink text-white">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-pink">
                Die unbequeme Wahrheit
              </p>
              <h2 className="mt-4 font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Dein Kontaktformular schickt gerade Besucherdaten in die USA.
                Ohne dass du es weißt.
              </h2>
              <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-white/75">
                <p>
                  Fast jedes große Formular-Plugin löst sein Spam-Problem mit
                  Google reCAPTCHA. Praktisch für das Plugin. Weniger
                  praktisch für dich: Google sammelt dabei Daten deiner
                  Besucher, und du stehst mit deinem Namen im Impressum dafür
                  gerade.
                </p>
                <p>
                  Das ist kein Bauchgefühl, sondern dokumentierte Rechtslage:
                  ein Gerichtsurteil in Österreich, Bußgelder in Frankreich,
                  deutliche Worte der deutschen Aufsicht. Die Kurzfassung
                  steht in den Karten, die Details im Blog.
                </p>
                <p className="font-semibold text-white">
                  Flinkform braucht das alles nicht: Der Spam-Schutz läuft
                  komplett auf deinem Server. Kein Google, keine
                  Einwilligung, kein Cookie-Banner. Dein Formular gehört dir.
                </p>
              </div>
              <Link
                href="/blog/recaptcha-dsgvo-rechtsrisiko"
                className="mt-6 inline-block text-sm font-semibold text-brand-blue underline decoration-brand-blue/40 underline-offset-4 hover:decoration-brand-blue"
              >
                Zum Hintergrund: BVwG-Urteil und CNIL-Bußgelder im Detail
              </Link>
            </div>
            <div className="grid content-center gap-4">
              {[
                {
                  value: "13.09.2024",
                  label:
                    "BVwG-Urteil (W298 2274626-1): reCAPTCHA ohne Einwilligung ist DSGVO-widrig",
                },
                {
                  value: "125.000 €",
                  label:
                    "CNIL-Bußgeld gegen Cityscoot, u. a. wegen reCAPTCHA ohne Einwilligung",
                },
                {
                  value: "0",
                  label:
                    "externe Requests durch den Flinkform-Spam-Schutz. Alles auf deinem Server",
                },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-(family-name:--font-display) text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 6 SÄULEN ── */}
      <Section>
        <SectionHeading sub="Kein aufgesetzter Builder, keine Plugin-Sammlung, keine Datenabflüsse. Flinkform ist das Formular-Plugin, das WordPress von Haus aus haben sollte.">
          Was Flinkform anders macht
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} className="card card-hover p-7">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand font-(family-name:--font-display) text-sm font-bold text-white"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[1.05rem] font-bold">{p.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FEATURES ── */}
      <Section>
        <SectionHeading sub="Multi-Step und bedingte Logik kosten bei WPForms regulär ab 99 Dollar pro Jahr, bei Gravity Forms ab 59 Dollar. Bei Flinkform: nichts.">
          Alles drin. Alles kostenlos.
        </SectionHeading>
        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {features.map((item) => (
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

      {/* ── VERGLEICH ── */}
      <Section id="vergleich">
        <SectionHeading sub="Ehrlich verglichen: SureForms ist ebenfalls block-nativ und gut. Der Flinkform-Vorsprung ist der Privacy-Default, die theme.json-Übernahme und das schlanke Frontend.">
          Flinkform im Vergleich
        </SectionHeading>
        <CompareTable
          caption="Funktionsvergleich: Flinkform, Contact Form 7, WPForms, Gravity Forms und SureForms"
          columns={["Flinkform", "Contact Form 7", "WPForms", "Gravity Forms", "SureForms"]}
          rows={compareRows}
          note="Stand Juli 2026, reguläre Listenpreise der Anbieter. Contact Form 7 ist kostenlos, braucht für Multi-Step, Einsendungen und bedingte Logik aber 3 bis 4 Zusatz-Plugins."
        />
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          <Link
            href="/vergleich"
            className="text-sm font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4 hover:decoration-brand-violet"
          >
            Alle Vergleiche im Detail
          </Link>
          <Link
            href="/rechner"
            className="text-sm font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4 hover:decoration-brand-violet"
          >
            Kostenrechner: Was zahlst du gerade?
          </Link>
        </div>
      </Section>

      {/* ── PRO TEASER ── */}
      <Section>
        <div className="card relative overflow-hidden !rounded-3xl p-8 sm:p-12">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-pro" />
          <div className="max-w-3xl">
            <Eyebrow variant="pro">Flinkform Pro</Eyebrow>
            <h2 className="mt-5 font-(family-name:--font-display) text-3xl font-bold tracking-tight sm:text-4xl">
              Das Formular, das Geld verdient.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Besucher zahlen per SEPA, Apple Pay oder Karte direkt im
              Formular. Preise berechnen sich live, während sie tippen.
              Einsendungen landen automatisch im CRM. Ein Add-on statt fünf
              Plugins.
            </p>
            <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
              {[
                "Stripe Payments: Karte, SEPA-Lastschrift, Apple Pay, Google Pay",
                "Berechnungsfelder für Angebots- und Preisrechner",
                "Webhooks ins CRM, SMTP-Versand mit Sende-Log",
                "Datei-Upload mit bis zu 10 Dateien pro Feld",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-pro text-white"
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
            <Link
              href="/pro"
              className="mt-8 inline-block rounded-full bg-gradient-pro px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Flinkform Pro entdecken · ab 59 €/Jahr
            </Link>
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <Faq items={faqs} />
      </Section>

      {/* ── VORAUSSETZUNGEN ── */}
      <Section>
        <SectionHeading>Voraussetzungen</SectionHeading>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {[
            { label: "WordPress", value: "6.5+" },
            { label: "PHP", value: "8.1+" },
            { label: "Editor", value: "Gutenberg" },
            { label: "Preis", value: "Kostenlos" },
          ].map((req) => (
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
          {keywordCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="card card-hover block p-7"
            >
              <h3 className="text-[1.05rem] font-bold">{card.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                {card.text}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-violet">
                Weiterlesen
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
              In 5 Minuten steht dein erstes Formular.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
              Installieren, Form-Block einfügen, veröffentlichen. Kein
              Account, keine Kreditkarte, kein Haken.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={WPORG_URL}
                className="rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
              >
                Kostenlos auf WordPress.org
              </a>
              <Link
                href="/docs"
                className="rounded-full border border-line bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
              >
                Erste Schritte lesen
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
