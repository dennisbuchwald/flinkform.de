import type { VergleichDict } from "@/content/de/vergleich";

export const vergleich: VergleichDict = {
  meta: {
    title: "Flinkform Compared: Contact Form 7, WPForms, Gravity Forms & More",
    description:
      "Honest comparisons: Flinkform against Contact Form 7, WPForms, Gravity Forms, Fluent Forms, SureForms, Typeform, and more. Features, pricing, and privacy in detail.",
  },
  breadcrumb: { home: "Flinkform", vergleich: "Compare" },
  hero: {
    eyebrow: "Comparison Hub",
    title: "Flinkform vs. everyone else: honest comparisons",
    sub: "Flinkform is a block-native, free form plugin with spam protection that needs no third-party services. Here we compare it openly with Contact Form 7, WPForms, Gravity Forms, and SureForms - including the points where the competition is better. Every claim is backed up, every price is the vendor's regular list price.",
  },
  cardLinkText: "See the comparison",
  cards: [
    {
      slug: "contact-form-7-alternative",
      title: "Contact Form 7 Alternative",
      badge: "Feature Freeze",
      desc: "CF7 has been in feature freeze since 2026: version 6.2 is the last one with new functionality. Why now is the right time to switch, and how the migration works.",
    },
    {
      slug: "wpforms-alternative",
      title: "WPForms Alternative",
      badge: "Paywall Check",
      desc: "Multi-step forms and conditional logic cost at least $199/year with WPForms, and the Lite version doesn't store submissions at all. The honest price and feature comparison.",
    },
    {
      slug: "gravity-forms-alternative",
      title: "Gravity Forms Alternative",
      badge: "Privacy Focus",
      desc: "Gravity Forms has no free version and logs IP addresses by default. When Flinkform is the better choice, and when Gravity still earns its price.",
    },
    {
      slug: "sureforms-alternative",
      title: "SureForms Alternative",
      badge: "Block vs. Block",
      desc: "Both are block-native, making this the most even matchup in the series. Flinkform's edge: spam protection without reCAPTCHA, theme.json inheritance, and under 15 KB of frontend JS.",
    },
    {
      slug: "fluent-forms-alternative",
      title: "Fluent Forms Alternative",
      badge: "Price Check",
      desc: "Fluent Forms offers a lot for the money, but locks multi-step forms behind Pro and relies on US-based spam services. Flinkform does both for free, without third-party services.",
    },
    {
      slug: "ninja-forms-alternative",
      title: "Ninja Forms Alternative",
      badge: "Add-on Costs",
      desc: "With Ninja Forms, conditional logic, multi-step forms, and uploads each cost a separate add-on - the full bundle regularly runs $499/year. Flinkform has the essentials built in.",
    },
    {
      slug: "forminator-alternative",
      title: "Forminator Alternative",
      badge: "Lightweight Check",
      desc: "Forminator has a generous free version, but logs IP addresses by default and loads heavy assets. Flinkform stays under 15 KB and never logs IPs.",
    },
    {
      slug: "formidable-forms-alternative",
      title: "Formidable Forms Alternative",
      badge: "Calculator Check",
      desc: "Formidable is a strong power-user tool, but calculations only arrive at a regular $399/year. Flinkform Pro delivers calculation fields starting at €59/year.",
    },
    {
      slug: "elementor-forms-alternative",
      title: "Elementor Forms Alternative",
      badge: "No Page Builder Required",
      desc: "Elementor Forms only comes with Elementor Pro, locking you into the builder. Flinkform works for free in any theme and inside the native WordPress editor.",
    },
    {
      slug: "typeform-alternative",
      title: "Typeform Alternative",
      badge: "SaaS vs. WordPress",
      desc: "Typeform costs $39 to $169 per month, and your data lives with the vendor. Flinkform brings that one-question-per-step feel to your own server, for free.",
    },
    {
      slug: "jotform-alternative",
      title: "Jotform Alternative",
      badge: "Cloud Limits",
      desc: "Jotform caps its free plan at 100 submissions per month, with all data stored in the vendor's cloud. Flinkform stores unlimited submissions on your own server.",
    },
  ],
  overview: {
    heading: "The big picture",
    sub: "The short version across every candidate. Details, pricing, and sources live on each individual comparison page.",
    caption: "Overview comparison: Flinkform, Contact Form 7, WPForms, Gravity Forms, SureForms",
    columns: ["Flinkform", "Contact Form 7", "WPForms", "Gravity Forms", "SureForms"],
    rows: [
      {
        feature: "Free version with multi-step + logic",
        cells: [true, "extra plugins required", false, false, true],
      },
      { feature: "Spam protection without a US service", cells: [true, false, false, false, false] },
      {
        feature: "No IP logging by default",
        cells: [true, "not with Akismet", false, false, "partially"],
      },
      { feature: "Native to the block editor", cells: [true, false, false, false, true] },
      { feature: "Active development", cells: [true, "Feature freeze", true, true, true] },
      { feature: "Pro price (1 site/year)", cells: ["€59", "no Pro tier", "$99", "$59", "$59"] },
    ],
    note: "As of July 2026. SureForms, like Flinkform, is block-native and worth an honest look; Flinkform's edge is the privacy-first default (no reCAPTCHA/hCaptcha needed), automatic theme.json inheritance, and a frontend under 15 KB.",
  },
};
