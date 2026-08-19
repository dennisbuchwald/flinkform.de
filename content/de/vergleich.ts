import type { Widen } from "@/lib/i18n/widen";
import { vergleiche } from "@/lib/vergleiche";

export const vergleich = {
  meta: {
    title: "Flinkform im Vergleich: Contact Form 7, WPForms, Gravity Forms & Co.",
    description:
      "Ehrliche Vergleiche: Flinkform gegen Contact Form 7, WPForms, Gravity Forms, Fluent Forms, SureForms, Typeform und weitere. Funktionen, Preise und Datenschutz im Detail.",
  },
  breadcrumb: { home: "Flinkform", vergleich: "Vergleich" },
  hero: {
    eyebrow: "Vergleichs-Hub",
    title: "Flinkform gegen den Rest: ehrliche Vergleiche",
    sub: "Flinkform ist ein block-natives, kostenloses Formular-Plugin mit Spam-Schutz ohne externe Dienste. Hier vergleichen wir es offen mit Contact Form 7, WPForms, Gravity Forms und SureForms: inklusive der Punkte, in denen die Konkurrenz besser ist. Jede Behauptung ist belegbar, alle Preise sind reguläre Listenpreise.",
  },
  cardLinkText: "Zum Vergleich",
  cards: vergleiche.map((v) => ({
    slug: v.slug,
    title: v.title,
    badge: v.badge,
    desc: v.desc,
  })),
  overview: {
    heading: "Die große Übersicht",
    sub: "Die Kurzfassung über alle Kandidaten hinweg. Details, Preise und Quellen stehen auf den einzelnen Vergleichsseiten.",
    caption: "Übersichtsvergleich: Flinkform, Contact Form 7, WPForms, Gravity Forms, SureForms",
    columns: ["Flinkform", "Contact Form 7", "WPForms", "Gravity Forms", "SureForms"],
    rows: [
      {
        feature: "Kostenlose Version mit Multi-Step + Logik",
        cells: [true, "nur mit Zusatz-Plugins", false, false, true],
      },
      { feature: "Spam-Schutz ohne US-Dienst", cells: [true, false, false, false, false] },
      {
        feature: "Keine IP-Speicherung ab Werk",
        cells: [true, "mit Akismet nicht", false, false, "teils"],
      },
      { feature: "Block-Editor nativ", cells: [true, false, false, false, true] },
      { feature: "Aktive Weiterentwicklung", cells: [true, "Feature Freeze", true, true, true] },
      { feature: "Preis Pro (1 Website/Jahr)", cells: ["59 €", "kein Pro", "99 $", "59 $", "59 $"] },
    ],
    note: "Stand Juli 2026. SureForms ist wie Flinkform block-nativ und einen ehrlichen Blick wert; der Flinkform-Vorsprung liegt beim Privacy-Default (kein reCAPTCHA/hCaptcha nötig), der theme.json-Übernahme und dem Frontend unter 15 KB.",
  },
} as const;

export type VergleichDict = Widen<typeof vergleich>;
