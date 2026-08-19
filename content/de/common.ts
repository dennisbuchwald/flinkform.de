import { WPORG_URL, GITHUB_URL } from "@/lib/site";

export const common = {
  skipLink: "Zum Inhalt springen",
  nav: [
    { label: "Pro", href: "/pro" },
    { label: "Vergleich", href: "/vergleich" },
    { label: "Blog", href: "/blog" },
    { label: "Wissen", href: "/wissen" },
    { label: "Docs", href: "/docs" },
  ],
  navLabel: "Hauptnavigation",
  mobileNavLabel: "Mobile Navigation",
  menuOpenLabel: "Menü öffnen",
  downloadFree: "Kostenlos laden",
  liveDemo: "Demo",
  liveDemoTitle: "Live-Demo öffnen: Flinkform zum Ausprobieren",
  languageSwitcher: {
    label: "Sprache",
    de: "Deutsch",
    en: "English",
    switchToEn: "Auf Englisch anzeigen",
    switchToDe: "Auf Deutsch anzeigen",
  },
  footer: {
    tagline: "Das privacy-first Formular-Plugin für den WordPress-Block-Editor.",
    madeBy: "Entwickelt von",
    inCity: "in Heilbronn.",
    columns: [
      {
        heading: "Produkt",
        links: [
          { label: "Flinkform (kostenlos)", href: "/" },
          { label: "Flinkform Pro", href: "/pro" },
          { label: "Preise", href: "/pro#preise" },
          { label: "Kostenrechner", href: "/rechner" },
          { label: "Roadmap & Changelog", href: "/roadmap" },
          { label: "Dokumentation", href: "/docs" },
        ],
      },
      {
        heading: "Vergleich",
        links: [
          { label: "Alle Vergleiche", href: "/vergleich" },
          { label: "Contact Form 7 Alternative", href: "/vergleich/contact-form-7-alternative" },
          { label: "WPForms Alternative", href: "/vergleich/wpforms-alternative" },
          { label: "Gravity Forms Alternative", href: "/vergleich/gravity-forms-alternative" },
        ],
      },
      {
        heading: "Ressourcen",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Wissen", href: "/wissen" },
          { label: "Fakten zu Flinkform", href: "/wissen/flinkform-fakten" },
          { label: "WordPress.org", href: WPORG_URL, external: true },
          { label: "GitHub", href: GITHUB_URL, external: true },
        ],
      },
      {
        heading: "Über",
        links: [
          { label: "Über Flinkform", href: "/ueber" },
          { label: "Presse & Media-Kit", href: "/presse" },
          { label: "RSS-Feed", href: "/feed.xml" },
          { label: "Impressum", href: "https://dbw-media.de/impressum/", external: true },
          {
            label: "Datenschutz",
            href: "https://dbw-media.de/datenschutzerklaerung/",
            external: true,
          },
        ],
      },
    ],
    privacyNote:
      "Diese Website lädt nichts von Drittservern. Nur ein rein funktionaler Cookie für die Sprachwahl, kein Tracking, kein Banner nötig.",
    madeWith: "Gemacht mit ❤️ und viel ☕ von",
  },
} as const;
