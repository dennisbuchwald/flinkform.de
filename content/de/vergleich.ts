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
        feature: "Multi-Step + bedingte Logik kostenlos",
        cells: [true, "nur mit Zusatz-Plugins", false, "keine Gratis-Version", false],
      },
      {
        feature: "Spam-Schutz ab Werk, ohne externen Dienst",
        cells: ["dreistufig", "nein", "Anti-Spam-Token", "Honeypot, einschalten", "Honeypot, einschalten"],
      },
      {
        feature: "Keine IP-Speicherung ab Werk",
        cells: [true, "speichert keine Einsendungen", "Pro speichert IP, abschaltbar", "speichert IP, abschaltbar", true],
      },
      { feature: "Formular entsteht im Block-Editor", cells: [true, false, false, false, true] },
      { feature: "Neue Funktionen", cells: [true, "nach 6.2 nur Wartung", true, true, true] },
      { feature: "Preis Pro (1 Website/Jahr)", cells: ["59 €", "kein Pro", "99 $", "59 $", "kein Einzelplan, 149 $ für 5"] },
    ],
    note: "Stand 28. September 2026, reguläre Listenpreise und Herstellerdokumentation. SureForms ist wie Flinkform block-nativ, speichert ebenfalls keine IP-Adressen ab Werk und ist einen ehrlichen Blick wert. Der Unterschied: Bei Flinkform sind Multi-Step und bedingte Logik kostenlos.",
  },
} as const;

export type VergleichDict = Widen<typeof vergleich>;
