import { WPORG_URL, GITHUB_URL } from "@/lib/site";

export const common = {
  skipLink: "Skip to content",
  nav: [
    { label: "Pro", href: "/pro" },
    { label: "Compare", href: "/vergleich" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/wissen" },
    { label: "Docs", href: "/docs" },
  ],
  navLabel: "Main navigation",
  mobileNavLabel: "Mobile navigation",
  menuOpenLabel: "Open menu",
  downloadFree: "Get it free",
  liveDemo: "Demo",
  liveDemoTitle: "Open the live demo: Flinkform to try out",
  languageSwitcher: {
    label: "Language",
    de: "Deutsch",
    en: "English",
    switchToEn: "Switch to English",
    switchToDe: "Auf Deutsch anzeigen",
  },
  footer: {
    tagline: "The privacy-first form plugin for the WordPress block editor.",
    madeBy: "Built by",
    inCity: "in Heilbronn, Germany.",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Flinkform (free)", href: "/" },
          { label: "Flinkform Pro", href: "/pro" },
          { label: "Pricing", href: "/pro#preise" },
          { label: "Cost calculator", href: "/rechner" },
          { label: "Roadmap & changelog", href: "/roadmap" },
          { label: "Documentation", href: "/docs" },
        ],
      },
      {
        heading: "Compare",
        links: [
          { label: "All comparisons", href: "/vergleich" },
          { label: "Contact Form 7 alternative", href: "/vergleich/contact-form-7-alternative" },
          { label: "WPForms alternative", href: "/vergleich/wpforms-alternative" },
          { label: "Gravity Forms alternative", href: "/vergleich/gravity-forms-alternative" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Knowledge base", href: "/wissen" },
          { label: "Facts about Flinkform", href: "/wissen/flinkform-fakten" },
          { label: "WordPress.org", href: WPORG_URL, external: true },
          { label: "GitHub", href: GITHUB_URL, external: true },
        ],
      },
      {
        heading: "About",
        links: [
          { label: "About Flinkform", href: "/ueber" },
          { label: "Press & media kit", href: "/presse" },
          { label: "RSS feed", href: "/feed.xml" },
          { label: "Imprint", href: "https://dbw-media.de/impressum/", external: true },
          {
            label: "Privacy policy",
            href: "https://dbw-media.de/datenschutzerklaerung/",
            external: true,
          },
        ],
      },
    ],
    privacyNote:
      "This site doesn't load anything from third-party servers. Just one purely functional cookie for your language choice, no tracking, no banner needed.",
    madeWith: "Made with ❤️ and a lot of ☕ by",
  },
} as const;
