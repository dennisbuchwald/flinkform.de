import type { Widen } from "@/lib/i18n/widen";

export const rechner = {
  meta: {
    title: "Formular-Plugin Kostenrechner: Was kostet dich dein Formular-Stack?",
    description:
      "Interaktiver Rechner: Vergleiche die 3-Jahres-Kosten von WPForms, Gravity Forms, Fluent Forms und Flinkform für deine Anzahl Websites. Reguläre Preise, Stand Juli 2026.",
  },
  breadcrumb: { home: "Flinkform", rechner: "Kostenrechner" },
  hero: {
    eyebrow: "Interaktiver Rechner",
    title: "Was kostet dich dein Formular-Stack wirklich?",
    sub: "Formular-Plugins werden pro Jahr und pro Website bezahlt, und die beworbenen Preise sind meist Erstjahres-Rabatte. Dieser Rechner vergleicht die regulären 3-Jahres-Kosten von WPForms, Gravity Forms, Fluent Forms und Flinkform für deine Situation. Stell einfach ein, wie viele Websites du betreust.",
  },
  calc: {
    sitesLabelPrefix: "Anzahl deiner Websites:",
    sitesMin: "1",
    sitesMax: "30",
    needsLabel: "Was brauchen die Formulare?",
    standardOption: "Standard (Kontakt, Multi-Step, Logik)",
    proOption: "Plus Zahlungen, Uploads, Webhooks",
    costsOverYearsPrefix: "Kosten über",
    yearsUnit: "Jahre",
    notAvailable: "n. v.",
    savingsPrePre: "Gegenüber",
    savingsVendorSuffix: "",
    savingsPreMid: "sparst du mit Flinkform in",
    savingsPrePost: "Jahren",
    savingsNote: "Näherung ohne Währungsumrechnung; US-Preise in Dollar, Flinkform in Euro.",
    footnote:
      "Reguläre Listenpreise (Renewal) laut Anbieter-Preisseiten, Stand Juli 2026, ohne Erstjahres-Rabatte. Gewählt wird je der günstigste Plan, der Site-Anzahl und Feature-Bedarf abdeckt. Details und Quellen im",
    footnoteLinkText: "Preisvergleich",
    vendors: {
      flinkform: {
        freeName: "Free (alles drin)",
        note: "Multi-Step, bedingte Logik und Spam-Schutz sind schon im Free-Plugin.",
      },
      wpforms: {
        note: "Lite speichert keine Einsendungen; unterhalb Pro 3 % Stripe-Zusatzgebühr.",
      },
      gravityforms: {
        note: "Keine kostenlose Version, jede Website braucht eine Lizenz.",
      },
      fluentforms: {
        note: "Free-Version solide, Multi-Step und Zahlungen stecken in Pro.",
      },
    },
  },
  demoLinkPre: "Übrigens: Diese Live-Berechnung ist genau das, was die ",
  demoLinkText: "Berechnungsfelder von Flinkform Pro",
  demoLinkPost: " in deinen eigenen Formularen können.",
  faq: {
    items: [
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
    ],
  },
  finalCta: {
    title: "Die günstigste Zeile im Rechner ist kostenlos.",
    desc: "Multi-Step, bedingte Logik, Spam-Schutz ohne reCAPTCHA: alles im freien Plugin.",
    cta: "Kostenlos auf WordPress.org",
  },
} as const;

export type RechnerDict = Widen<typeof rechner>;
