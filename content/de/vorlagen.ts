import type { Widen } from "@/lib/i18n/widen";

export const vorlagenUi = {
  meta: {
    title: "Formular-Vorlagen für WordPress: kopieren, anpassen, fertig",
    description:
      "Acht Formular-Vorlagen für den WordPress-Block-Editor: Kontakt, Rückruf, Projektanfrage, Termin, Bewerbung, Angebotsrechner, Event mit Zahlung, Newsletter. Mit Feldliste, Anleitung und Block-Markup.",
  },
  breadcrumb: { home: "Flinkform", vorlagen: "Vorlagen" },
  hero: {
    eyebrow: "Formular-Vorlagen",
    title: "Formular-Vorlagen für WordPress. Kopieren, anpassen, fertig.",
    sub: "Acht Formulare, die fast jede Website braucht. Jede Vorlage zeigt die Felder, den Aufbau in fünf Minuten und, wo es geht, das Block-Markup zum Einfügen.",
  },
  badges: { free: "Kostenlos", pro: "Pro", "free-pro": "Kostenlos + Pro" },
  cardLink: "Zur Vorlage →",
  cf7: {
    title: "Kommst du von Contact Form 7?",
    desc: "Dann brauchst du keine Vorlage. Der Import übernimmt deine Formulare samt Mails und stellt die Seiten automatisch um.",
    link: "So läuft der Umzug →",
    href: "/vergleich/contact-form-7-alternative",
  },
  detail: {
    problemHeading: "Wofür",
    fieldsHeading: "Die Felder",
    stepsHeading: "In 5 Minuten gebaut",
    tipHeading: "Tipp",
    proHeading: "Was Pro dazu beiträgt",
    demo: "Live-Formular ansehen",
    markupHeading: "Block-Markup zum Kopieren",
    markupSub:
      "Im Block-Editor oben rechts über das Drei-Punkte-Menü in den Code-Editor wechseln, Markup einfügen, zurück in den visuellen Editor und speichern. Fertig ist das Formular, mit Flinkform ab Version 1.15.0.",
    copy: "Markup kopieren",
    copied: "Kopiert",
    noMarkup:
      "Für diese Vorlage gibt es kein Markup zum Kopieren, weil sie Pro-Felder nutzt. Mit den Schritten oben steht sie trotzdem in fünf Minuten.",
    relatedHeading: "Passend dazu",
    otherHeading: "Weitere Vorlagen",
    ctaTitle: "Flinkform ist kostenlos. Probier die Vorlage gleich aus.",
    ctaPrimary: "Kostenlos auf WordPress.org",
    ctaPlayground: "Im Editor ausprobieren, ohne Installation",
    ctaPro: "Flinkform Pro ansehen",
    updated: "Zuletzt aktualisiert:",
  },
};

export type VorlagenUiDict = Widen<typeof vorlagenUi>;
