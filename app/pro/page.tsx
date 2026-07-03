import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CompareTable from "@/components/CompareTable";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import ProInquiryForm from "@/components/ProInquiryForm";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import {
  ENTITY_PRO,
  LIFETIME,
  PRICING,
  SITE_URL,
  breadcrumbSchema,
  softwareSchemaPro,
  type FaqItem,
} from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Flinkform Pro - Stripe-Zahlungen mit SEPA, Berechnungsfelder und Webhooks für WordPress-Formulare",
  description:
    "Flinkform Pro: Stripe Payments mit Kreditkarte, SEPA, Apple Pay und Google Pay direkt im Formular. Berechnungsfelder, Webhooks, Multi-Upload, SMTP, Newsletter. Ab 59 € pro Jahr.",
  alternates: { canonical: `${SITE_URL}/pro` },
  openGraph: {
    title: "Flinkform Pro - Das Formular, das Geld verdient.",
    description:
      "Stripe-Zahlungen mit SEPA und Wallets, Berechnungsfelder, Webhooks, SMTP, Multi-Upload und Newsletter: ein Add-on statt fünf Plugins. Ab 59 € pro Jahr.",
    url: `${SITE_URL}/pro`,
  },
};

const needs = [
  "Buchungsformular mit Anzahlung: Der Kunde will direkt im Formular bezahlen, am liebsten per SEPA oder Apple Pay.",
  "Angebotsrechner: Der Preis soll sich live aus Menge und Optionen berechnen.",
  "Einsendungen sollen automatisch ins CRM oder Projektmanagement fließen.",
  "Der Hoster verschluckt Mails. Du brauchst zuverlässigen SMTP-Versand.",
  "Bewerbungsformular: Lebenslauf, Anschreiben und Zeugnisse als Upload.",
  "Newsletter-Anmeldung direkt im Kontaktformular, ohne Zapier-Umwege.",
];

const modules = [
  {
    title: "Stripe Payments",
    desc: "Zahlungen direkt im Formular: Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay und Link über das Stripe Payment Element. Fester Betrag oder Produktauswahl, serverseitige Verifizierung, Zahlungsstatus in der Einsendung. Kartendaten berühren nie deinen Server.",
  },
  {
    title: "Berechnungsfelder",
    desc: "Angebotsrechner und Konfiguratoren direkt im Formular: Formeln wie (Menge × 49,90) + Setup rechnen live, während der Besucher tippt. Felder per Dropdown einfügen, serverseitig sicher nachgerechnet, kein eval.",
  },
  {
    title: "Multi-Datei-Upload",
    desc: "Besucher hängen bis zu 10 Dateien pro Feld an, ideal für Bewerbungen. Dateitypen und Maximalgröße konfigurierbar, Größen-Check vor dem Absenden, geschützter Upload-Ordner, DSGVO-Löschkaskade.",
  },
  {
    title: "SMTP-Versand",
    desc: "Alle Formular-Mails gehen zuverlässig raus. 7 Provider-Presets (Gmail, Outlook, SendGrid, Mailgun, Brevo, Postmark, Amazon SES), AES-256-verschlüsselte Zugangsdaten, Sende-Log mit Fehlerdiagnose.",
  },
  {
    title: "Webhooks",
    desc: "Einsendungen automatisch an dein CRM, Projektmanagement oder jeden Endpoint senden. JSON oder form-encoded, eigene Header, Field-Mapping, Bedingungen, Retry-Logik und komplettes Delivery-Log. SSRF-gehärtet.",
  },
  {
    title: "Newsletter-Anbindung",
    desc: "Brevo, Mailchimp und CleverReach direkt integriert. Double-Opt-in, Pflicht-Einwilligungsfeld und asynchroner Versand. Kein Extra-Plugin, keine Umwege.",
  },
  {
    title: "CSV-Export",
    desc: "Gefilterte Einsendungen als CSV exportieren, inklusive Datumsbereich und Zahlungsspalten (Status, Betrag, Währung). Excel-kompatibel, direkt aus dem WordPress-Admin.",
  },
  {
    title: "Custom CSS",
    desc: "CSS pro Formular direkt im Editor schreiben. Für Anpassungen, die über die Theme-Einstellungen hinausgehen. Gegen XSS abgesichert.",
  },
];

const highlights = [
  "Stripe Payments: Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay, Link",
  "Fester Betrag oder Produktauswahl mit individuellen Preisen",
  "Zahlungsstatus, Betrag und Zahlart direkt in der Einsendung sichtbar",
  "Automatische Stripe-Quittung per E-Mail an den Zahlenden",
  "SEPA-Zahlungen werden per Stripe-Webhook automatisch bestätigt",
  "Berechnungsfelder mit Live-Vorschau, serverseitig verifiziert",
  "Multi-Upload: bis zu 10 Dateien pro Feld, Größen-Check vor dem Absenden",
  "Dateien als echter Mail-Anhang an die Admin-Benachrichtigung",
  "SMTP mit 7 Provider-Presets und verschlüsselten Zugangsdaten",
  "Webhooks mit Retry-Logik und vollständigem Delivery-Log",
  "Newsletter-Anbindung: Brevo, Mailchimp, CleverReach",
  "CSV-Export mit Datumsbereich und Zahlungsspalten",
  "Custom CSS pro Formular im Editor",
  "Doppelklick-Schutz: keine doppelten Einsendungen, Mails oder Zahlungen",
  "AES-256-Verschlüsselung für alle gespeicherten Zugangsdaten",
  "Saubere Bridge-Architektur: Pro verändert keine Core-Dateien",
];

const compareRows = [
  {
    feature: "Stripe Payments im Formular",
    cells: [true, "+3 % Gebühr unter Pro (399 $)", "Add-on nötig", true],
  },
  {
    feature: "SEPA, Apple Pay & Google Pay",
    cells: [true, "teils", "Add-on", "Plugin nötig"],
  },
  { feature: "Kein Shop/Checkout nötig", cells: [true, true, true, false] },
  {
    feature: "Berechnungsfelder",
    cells: [true, "nur in Bezahlplänen", true, false],
  },
  { feature: "Multi-Datei-Upload", cells: [true, "ab 99 $/Jahr", true, false] },
  { feature: "Block-Editor nativ", cells: [true, false, false, false] },
  {
    feature: "Webhooks mit Retry-Logik",
    cells: [true, "Add-on in höheren Plänen", "Add-on", false],
  },
  { feature: "SMTP + Sende-Log", cells: [true, false, false, false] },
  {
    feature: "Newsletter-Integration",
    cells: [true, "ab Plus (199 $/Jahr)", "Add-on", "Plugin nötig"],
  },
  {
    feature: "Spam-Schutz ohne US-Dienst",
    cells: [true, false, false, false],
  },
  {
    feature: "Preis (1 Website)",
    cells: ["59 €/Jahr", "ab 99 $/Jahr", "ab 59 $/Jahr", "kostenlos*"],
  },
] as const;

const steps = [
  {
    title: "Flinkform installieren",
    desc: "Das kostenlose Plugin aus dem WordPress.org-Verzeichnis. 13 Feldtypen, Multi-Step, bedingte Logik, Spam-Schutz.",
  },
  {
    title: "Pro aktivieren",
    desc: "Flinkform Pro als zweites Plugin installieren und aktivieren. Pro dockt automatisch an den Free-Core an.",
  },
  {
    title: "Module konfigurieren",
    desc: "Stripe, SMTP, Webhooks, Newsletter: alles direkt im WordPress-Admin. Pro-Panels erscheinen automatisch im Block-Editor.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Was kostet Flinkform Pro?",
    a: "Flinkform Pro kostet 59 € pro Jahr für 1 Website, 99 € für 3 Websites (Studio), 149 € für bis zu 25 Websites (Agency) und 299 € ohne Site-Limit (Unlimited). Alle Pläne enthalten sämtliche Pro-Features, die Staffelung richtet sich nur nach der Anzahl der Websites. Dazu gibt es eine 14-Tage-Geld-zurück-Garantie.",
  },
  {
    q: "Welche Zahlungsarten unterstützt das Payment-Feld?",
    a: "Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay und Stripe Link über das Stripe Payment Element. Welche Zahlarten deine Besucher sehen, steuerst du im Stripe-Dashboard. SEPA-Zahlungen werden als 'in Bearbeitung' angenommen und automatisch bestätigt, sobald Stripe die Abbuchung meldet.",
  },
  {
    q: "Brauche ich ein Stripe-Konto?",
    a: "Ja, aber es ist kostenlos und in zwei Minuten erstellt. Du bekommst sofort Test-Keys zum Ausprobieren. Im Live-Betrieb gehen Zahlungen direkt auf dein Stripe-Konto, Flinkform Pro ist nie dazwischen.",
  },
  {
    q: "Sind die Zahlungen PCI-konform?",
    a: "Ja. Zahlungsdaten verarbeitet ausschließlich Stripe (Payment Element), sie berühren nie deinen Server. Der Server prüft nur, ob die Zahlung bestätigt wurde und ob Betrag und Währung zum Formular passen, bevor die Einsendung gespeichert wird.",
  },
  {
    q: "Was passiert, wenn die Zahlung fehlschlägt?",
    a: "Das Formular wird nicht abgeschickt. Der Besucher sieht eine Fehlermeldung direkt am Zahlungsfeld und kann es erneut versuchen. Keine Einsendung ohne bestätigte Zahlung.",
  },
  {
    q: "Brauche ich das kostenlose Flinkform, um Pro zu nutzen?",
    a: "Ja. Flinkform Pro ist ein Add-on, das auf dem kostenlosen Flinkform-Plugin (ab Version 1.3.0) aufbaut. Du installierst zuerst das kostenlose Plugin und aktivierst Pro als Erweiterung. Alle Free-Features bleiben erhalten.",
  },
  {
    q: "Ist Flinkform Pro DSGVO-konform?",
    a: "Ja. Kartendaten laufen nur über Stripe, nicht über deinen Server. Alle Pro-Module sind in die WordPress-Privacy-Tools integriert: Datenexport, Löschung, Löschkaskaden für Uploads. API-Keys werden AES-256-verschlüsselt gespeichert. Das Mail-Log speichert bewusst keine Mail-Inhalte.",
  },
  {
    q: "Was passiert mit meinen Daten, wenn die Lizenz ausläuft?",
    a: "Nichts. Deine Webhooks, SMTP-Einstellungen, Stripe-Keys und Upload-Dateien bleiben gespeichert. Pro-Datenbanktabellen werden nur bei einer kompletten Deinstallation entfernt, nie bei Deaktivierung oder Lizenz-Ablauf.",
  },
  {
    q: "Wann kann ich kaufen?",
    a: "Der Verkauf startet in Kürze über einen Checkout mit Lizenz-Key und automatischen Updates. Trag dich über das Anfrage-Formular ein, dann erfährst du es zuerst und sicherst dir den Zugriff auf die limitierte Lifetime-Lizenz zum Launch.",
  },
];

export default function ProPage() {
  return (
    <>
      <JsonLd
        data={[
          softwareSchemaPro,
          breadcrumbSchema([
            { name: "Flinkform", path: "/" },
            { name: "Flinkform Pro", path: "/pro" },
          ]),
        ]}
      />

      {/* ── HERO ── */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 lg:pb-20 lg:pt-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/flinkform-app.svg"
                alt=""
                width={44}
                height={44}
                priority
              />
              <Eyebrow variant="pro">Premium Add-on</Eyebrow>
            </div>
            <h1 className="mt-6 font-(family-name:--font-display) text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Das Formular, das{" "}
              <span className="text-gradient-pro">Geld verdient</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {ENTITY_PRO}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
              Besucher zahlen per SEPA, Apple Pay oder Karte, ohne
              Shop-System. Preise berechnen sich live. Einsendungen fließen
              automatisch ins CRM. Ein Add-on statt fünf Plugins.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#anfrage"
                className="rounded-full bg-gradient-pro px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Unverbindlich vormerken
              </a>
              <a
                href="#preise"
                className="rounded-full border border-line bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
              >
                Preise ansehen
              </a>
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              Version 1.2.0 · benötigt Flinkform (kostenlos) ab 1.3.0 · 14
              Tage Geld-zurück-Garantie
            </p>
          </div>
        </div>
        <div aria-hidden="true" className="h-2 bg-gradient-pro" />
      </div>

      {/* ── NEEDS ── */}
      <Section>
        <SectionHeading sub="Flinkform löst das Formular-Problem. Aber dann kommen die echten Anforderungen:">
          Ein Kontaktformular reicht? Nicht lange.
        </SectionHeading>
        <ul className="grid gap-4 sm:grid-cols-2">
          {needs.map((need) => (
            <li
              key={need}
              className="card flex items-start gap-3 p-5 text-[0.95rem] leading-relaxed text-ink-soft"
            >
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
          Normalerweise heißt das: fünf weitere Plugins installieren. Fünf
          Konfigurationen, fünf Update-Zyklen, fünf potenzielle Konflikte.
          Bei WPForms brauchst du für dieses Paket den Pro-Plan, regulär 399
          Dollar pro Jahr.{" "}
          <strong className="text-ink">
            Flinkform Pro packt alles in ein Add-on.
          </strong>{" "}
          Nahtlos integriert, DSGVO-konform, aus einer Hand.
        </p>
      </Section>

      {/* ── 8 MODULE ── */}
      <Section>
        <SectionHeading>Acht Module. Ein Add-on.</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          {modules.map((m) => (
            <div key={m.title} className="card card-hover p-7">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-gradient-pro"
                />
                <h3 className="text-[1.05rem] font-bold">{m.title}</h3>
              </div>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HIGHLIGHTS ── */}
      <Section>
        <SectionHeading sub="Alles zusätzlich zu den 13 Feldtypen, Multi-Step, bedingter Logik und dem Spam-Schutz des kostenlosen Plugins.">
          Im Detail
        </SectionHeading>
        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft"
            >
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
        <SectionHeading>
          Flinkform Pro vs. WPForms, Gravity Forms und WooCommerce
        </SectionHeading>
        <CompareTable
          accent="pro"
          caption="Funktionsvergleich: Flinkform Pro, WPForms, Gravity Forms und WooCommerce"
          columns={["Flinkform Pro", "WPForms", "Gravity Forms", "WooCommerce"]}
          rows={compareRows}
          note="* WooCommerce ist kostenlos, aber ein kompletter Shop. Für ein einzelnes Zahlungsformular brauchst du trotzdem Gateway-Plugin und Checkout-Konfiguration. Preise: Stand Juli 2026, reguläre Listenpreise."
        />
      </Section>

      {/* ── SO FUNKTIONIERT ES ── */}
      <Section>
        <SectionHeading>So funktioniert es</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="card p-7">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-pro font-(family-name:--font-display) text-lg font-bold text-white"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-[1.05rem] font-bold">{step.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PREISE ── */}
      <Section id="preise" className="scroll-mt-16">
        <SectionHeading sub="Alle Pläne enthalten sämtliche Pro-Features, gestaffelt wird nur nach der Anzahl deiner Websites. Jährliche Abrechnung, Updates und Support inklusive.">
          Preise
        </SectionHeading>
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
                  Bestseller
                </span>
              )}
              <h3 className="text-sm font-bold uppercase tracking-widest text-ink-muted">
                {plan.name}
              </h3>
              <p className="mt-3 font-(family-name:--font-display) text-4xl font-extrabold">
                {plan.price} €
                <span className="text-base font-medium text-ink-muted">
                  {" "}
                  /Jahr
                </span>
              </p>
              <p className="mt-2 text-[0.95rem] font-semibold text-ink">
                {plan.sites}
              </p>
              <p
                className={`mt-1 inline-block self-start rounded-full px-2.5 py-1 text-xs font-bold ${
                  plan.featured
                    ? "bg-gradient-pro text-white"
                    : "bg-line/60 text-ink-soft"
                }`}
              >
                {plan.perSite}
              </p>
              <p className="mt-3 grow text-[0.85rem] leading-relaxed text-ink-soft">
                {plan.desc}
              </p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[0.85rem] text-ink-soft">
                <li>✓ Alle 8 Pro-Module</li>
                <li>✓ Updates & Support</li>
              </ul>
              <a
                href="#anfrage"
                className={`mt-6 rounded-full py-3 text-center text-[0.9rem] font-semibold transition-all hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-gradient-pro text-white hover:opacity-90"
                    : "border border-line bg-white text-ink hover:border-ink-muted/40"
                }`}
              >
                Vormerken
              </a>
            </div>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-ink-soft">
          <li>✓ 14 Tage Geld-zurück-Garantie</li>
          <li>✓ Jeder Plan enthält alle Features</li>
          <li>✓ Jährlich kündbar</li>
        </ul>

        {/* ── LIFETIME (dunkel, Scarcity) ── */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-ink bg-ink text-white">
          <div aria-hidden="true" className="h-1.5 bg-gradient-scarcity" />
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-gradient-scarcity px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white">
                Nur zum Launch · Limitiert
              </span>
              <h3 className="mt-5 font-(family-name:--font-display) text-3xl font-bold tracking-tight">
                Einmal zahlen. Für immer nutzen.
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/70">
                Zum Launch gibt es eine limitierte Lifetime-Lizenz: alle
                Pro-Features auf bis zu 25 Websites, keine jährliche
                Verlängerung, Updates inklusive. Das Angebot wird nach der
                Launch-Phase dauerhaft abgeschaltet. Danach gibt es Flinkform
                Pro nur noch im Abo.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
              <p className="font-(family-name:--font-display) text-5xl font-extrabold">
                {LIFETIME.price} €
                <span className="block text-sm font-medium text-white/50">
                  einmalig
                </span>
              </p>
              <p className="mt-3 text-sm font-semibold">{LIFETIME.sites}</p>
              <a
                href="#anfrage"
                className="mt-5 block rounded-full bg-white py-3 text-[0.9rem] font-bold text-ink transition-all hover:-translate-y-0.5"
              >
                Unverbindlich vormerken
              </a>
              <p className="mt-3 text-xs text-white/50">
                Verkauf startet in Kürze. Vorgemerkte erfahren es zuerst.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── ANFRAGE ── */}
      <Section id="anfrage" className="scroll-mt-16">
        <div className="card mx-auto max-w-3xl !rounded-3xl p-8 sm:p-10">
          <h2 className="font-(family-name:--font-display) text-3xl font-bold tracking-tight">
            Interesse an Flinkform Pro?
          </h2>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            Sag kurz, wofür du Pro einsetzen willst. Du bekommst eine
            persönliche Antwort von Dennis und erfährst als Erster, wenn der
            Verkauf startet.
          </p>
          <div className="mt-8">
            <ProInquiryForm />
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <Faq items={faqs} />
      </Section>

      {/* ── VORAUSSETZUNGEN ── */}
      <Section className="pb-8">
        <SectionHeading>Voraussetzungen</SectionHeading>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {[
            { label: "WordPress", value: "6.5+" },
            { label: "PHP", value: "8.1+" },
            { label: "Flinkform", value: "1.3.0+" },
            { label: "Preis", value: "Ab 59 €/J." },
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
        <p className="mt-8 text-sm text-ink-muted">
          Noch kein Flinkform?{" "}
          <Link
            href="/"
            className="font-semibold text-brand-violet underline decoration-brand-violet/30 underline-offset-4 hover:decoration-brand-violet"
          >
            Hier geht es zum kostenlosen Plugin.
          </Link>
        </p>
      </Section>
    </>
  );
}
