import type { HomeDict } from "@/content/de/home";

export const home: HomeDict = {
  meta: {
    title: "Flinkform - Free WordPress Form Plugin, Privacy by Design",
    description:
      "Flinkform is a block-native form plugin for WordPress: multi-step forms, conditional logic, spam protection without reCAPTCHA. Free, privacy-first, made in Germany.",
    ogTitle: "Flinkform - The Privacy-First Form Plugin for WordPress",
    ogDescription:
      "Multi-step forms, conditional logic, spam protection without third-party services. Free and privacy by design.",
  },
  hero: {
    eyebrow: "WordPress Form Plugin · Free",
    titlePre: "The last form plugin you'll ever ",
    titleHighlight: "install",
    titlePost: ".",
    entity:
      "Flinkform is a block-native form plugin for the WordPress block editor. It offers multi-step forms, conditional logic, and spam protection without third-party services, for free. Unlike WPForms or Gravity Forms, it doesn't use a separate builder - it lives inside the WordPress editor itself.",
    sub: "Privacy by design: no reCAPTCHA, no US-based service, no IP logging. Everything stays on your own server.",
    ctaPrimary: "Get it free on WordPress.org",
    ctaSecondary: "Try the demo →",
    versionLine: "Version 1.3.0 · WordPress 6.5+ · PHP 8.1+ · GPLv2",
    demoCaption:
      "Multi-step, live calculations, no reCAPTCHA. It all runs as a real WordPress install on demo.flinkform.de, ready to click through and submit.",
  },
  pillars: {
    heading: "What makes Flinkform different",
    sub: "No bolted-on builder, no stack of plugins, no data leaking to third parties. Flinkform is the form plugin WordPress should have shipped with.",
    items: [
      {
        title: "One plugin instead of six",
        desc: "Multi-step forms, conditional logic, spam protection, a submissions dashboard, email notifications: all built in. No add-ons, no compatibility headaches.",
      },
      {
        title: "Native to the block editor",
        desc: "Every field is a Gutenberg block. No separate form builder, no shortcodes. You build forms the same way you write a normal WordPress post.",
      },
      {
        title: "Privacy without compromise",
        desc: "Spam protection runs entirely on your own server. No reCAPTCHA, no Akismet, no IP logging. A consent field, automatic data retention, and the WordPress privacy tools are built in.",
      },
      {
        title: "Under 15 KB, no jQuery",
        desc: "The entire frontend JavaScript bundle stays under 15 KB gzipped, and it only loads on pages that actually contain a form. Server-side rendering shows forms instantly.",
      },
      {
        title: "Submissions dashboard",
        desc: "Every submission lives right inside WordPress: search, filters, sorting, bulk actions, read/unread. No separate plugin, no Flamingo.",
      },
      {
        title: "Accessible (WCAG 2.1 AA)",
        desc: "Full keyboard navigation, screen reader support, focus management across multi-step forms. Respects prefers-reduced-motion.",
      },
    ],
  },
  privacyBlock: {
    kicker: "The uncomfortable truth",
    title: "Your contact form is sending visitor data to the US right now. Without you knowing it.",
    paragraphs: [
      "Almost every major form plugin solves its spam problem with Google reCAPTCHA. Convenient for the plugin. Less convenient for you: Google collects data on your visitors, and your name is the one on the imprint answering for it.",
      "This isn't a gut feeling, it's documented legal reality: a court ruling in Austria, fines in France, pointed words from German data protection authorities. The short version is in the cards below, the details are in the blog.",
    ],
    highlight:
      "Flinkform doesn't need any of that: spam protection runs entirely on your own server. No Google, no consent banner, no cookie notice. Your form stays yours.",
    linkText: "Background reading: the BVwG ruling and CNIL fines in detail",
    linkHref: "/blog/recaptcha-dsgvo-rechtsrisiko",
    stats: [
      {
        value: "Sep 13, 2024",
        label: "Austrian federal court (BVwG, W298 2274626-1): reCAPTCHA without consent violates GDPR",
      },
      {
        value: "€125,000",
        label: "CNIL fine against Cityscoot, in part for using reCAPTCHA without consent",
      },
      {
        value: "0",
        label: "external requests made by Flinkform's spam protection. Everything stays on your server",
      },
    ],
  },
  features: {
    heading: "Everything included. Everything free.",
    sub: "Multi-step forms and conditional logic normally cost extra: $99/year with WPForms, $59 with Gravity Forms. With Flinkform: nothing.",
    items: [
      "14 field types: text, email, textarea, number, date, URL, phone, dropdown, radio, checkbox, toggle, hidden, consent, address",
      "Multi-step forms with a progress indicator (bar, dots, or numbers) and per-step validation",
      "Conditional logic: show/hide fields and steps, skip steps, lock the submit button. Includes date comparisons (before/after a given date)",
      "Single-choice fields as a classic list or as clickable buttons in your brand color",
      "Spam protection without third-party services: honeypot, signed time check, proof-of-work with a math fallback that works without JavaScript",
      "Admin and confirmation emails with merge tags",
      "Automatic theme.json integration: colors, typography, spacing, corner radius",
      "Style panel: 4 field styles, 4 label positions (floating labels adapt automatically to the background), 3 button styles, colors for labels, help text, and headings right in the editor",
      "Redirect to a thank-you page with conversion tracking parameters (GA4, Meta Pixel, Plausible)",
      "Popup-ready: inside modals and popups, forms submit without a page reload, success and error messages appear right in the popup",
      "Accessibility built in: real label associations, screen-reader error announcements, focus management across every step, spam protection without a CAPTCHA. Form markup passes axe-core (WCAG 2.1 A/AA) with zero violations",
      "Automatic data deletion after a configurable retention period",
      "Data export and erasure through the WordPress privacy tools",
      "Two-column layout with a full-width option per field",
      "Built with the WordPress Interactivity API, block.json v3",
    ],
  },
  compare: {
    heading: "Flinkform compared",
    sub: "An honest comparison: SureForms is also block-native and solid. Flinkform's edge is the privacy-first default, automatic theme.json support, and a lighter frontend.",
    caption: "Feature comparison: Flinkform, Contact Form 7, WPForms, Gravity Forms, and SureForms",
    columns: ["Flinkform", "Contact Form 7", "WPForms", "Gravity Forms", "SureForms"],
    rows: [
      {
        feature: "Spam protection without a US service",
        cells: [true, "reCAPTCHA / Akismet required", "reCAPTCHA / Turnstile", "reCAPTCHA / Turnstile", "reCAPTCHA / hCaptcha"],
      },
      {
        feature: "No IP logging by default",
        cells: [true, "Akismet sends data", false, false, "partially"],
      },
      { feature: "Native to the block editor", cells: [true, false, false, false, true] },
      { feature: "Multi-step forms, free", cells: [true, false, false, false, true] },
      { feature: "Conditional logic, free", cells: [true, false, false, false, true] },
      {
        feature: "Submissions dashboard, free",
        cells: [true, "Extra plugin (Flamingo)", false, false, true],
      },
      {
        feature: "Inherits theme design (theme.json)",
        cells: [true, false, "own styles", "own styles", "own styles"],
      },
      {
        feature: "Frontend JS under 15 KB, loaded only when needed",
        cells: [true, "loads on every page", "heavier", "heavier", "React-based"],
      },
      {
        feature: "Active development",
        cells: [true, "Feature freeze since 2026", true, true, true],
      },
      {
        feature: "Pro version price (1 site)",
        cells: ["€59/yr", "no Pro tier", "$99/yr", "$59/yr", "$59/yr"],
      },
    ],
    note: "As of July 2026, regular list prices from each vendor. Contact Form 7 is free, but needs 3 to 4 extra plugins for multi-step forms, stored submissions, and conditional logic.",
    linkAll: "See every comparison in detail",
    linkCalc: "Cost calculator: what are you paying right now?",
  },
  proTeaser: {
    eyebrow: "Flinkform Pro",
    title: "The form that makes money.",
    desc: "Visitors pay by SEPA, Apple Pay, or card right inside the form. Prices calculate live as they type. Submissions flow straight into your CRM. One add-on instead of five plugins.",
    items: [
      "Stripe Payments: card, SEPA direct debit, Apple Pay, Google Pay",
      "Calculation fields for quote and price calculators",
      "Webhooks into your CRM, SMTP delivery with a send log",
      "File uploads with up to 10 files per field",
    ],
    cta: "Discover Flinkform Pro · from €59/year",
  },
  faq: {
    items: [
      {
        q: "Is Flinkform really completely free?",
        a: "Yes. Multi-step forms, conditional logic, submissions dashboard, spam protection: all included in the free plugin on WordPress.org. No artificial limits, no crippled trial mode. Flinkform Pro is an optional add-on for payments, webhooks, file uploads, and more.",
      },
      {
        q: "Why not just use Contact Form 7?",
        a: "Contact Form 7 has been in feature freeze since 2026: version 6.2 is the last one with new functionality. For multi-step forms, conditional logic, or a submissions dashboard, CF7 needs three or four additional plugins. Flinkform has all of that built in.",
      },
      {
        q: "What sets Flinkform apart from WPForms or Gravity Forms?",
        a: "WPForms and Gravity Forms use their own, separate form builder. Flinkform lives directly inside the WordPress block editor. On top of that, WPForms requires at least its Basic plan, regularly $99 per year, for conditional logic and multi-page forms. With Flinkform, both are free.",
      },
      {
        q: "Do I need reCAPTCHA for spam protection?",
        a: "No. Flinkform ships its own spam protection that runs entirely on your server: honeypot, a signed time check, and proof-of-work. No third-party service, no consent required, no data sent to the US.",
      },
      {
        q: "Is Flinkform GDPR-compliant?",
        a: "Flinkform is built for privacy: no IP logging, no user-agent logging, no third-party services, no tracking. A consent field, automatic per-form data retention, and the WordPress privacy tools (data export and erasure) are all built in.",
      },
      {
        q: "Is Flinkform accessible?",
        a: "Accessibility is built in, not bolted on: real label associations, fieldset/legend for choice groups, error messages are announced to screen readers and linked to their field, focus jumps to the first invalid field, step changes are announced via aria-live, focus rings stay visible, and spam protection needs no CAPTCHA. The form markup passes automated axe-core checks against WCAG 2.1 A/AA with zero violations, including in the error state. A formal audit with a screen-reader protocol is still outstanding. The color choices you make in the editor affect contrast and are your responsibility.",
      },
      {
        q: "Does Flinkform work with my theme?",
        a: "Yes. Flinkform reads your theme's design tokens from theme.json and picks up colors, typography, spacing, and corner radius automatically. Tested with GeneratePress, Twenty Twenty-Five, Astra, and Kadence. And where your theme doesn't quite fit, you can set colors for headings, labels, and help text directly in the editor, no CSS required.",
      },
      {
        q: "Does Flinkform work inside a popup or modal?",
        a: "Yes. If a Flinkform form sits inside a popup or modal (a container with role=\"dialog\" or a native dialog element), it submits without reloading the page: the success message and validation errors appear right inside the popup. Forms outside of popups keep using the classic flow. No configuration needed.",
      },
      {
        q: "Can I migrate my Contact Form 7 forms?",
        a: "There's no automatic importer at the moment. A simple contact form, though, you can rebuild in Flinkform in under 5 minutes, right in the block editor, just like writing a regular post.",
      },
      {
        q: "Is there a Pro version?",
        a: "Yes. Flinkform Pro extends the free plugin with Stripe Payments (credit card, SEPA direct debit, Apple Pay, Google Pay), calculation fields, multi-file upload, SMTP delivery, webhooks, newsletter integration, CSV export, and custom CSS. Starting at €59 per year.",
      },
    ],
  },
  requirements: {
    heading: "Requirements",
    items: [
      { label: "WordPress", value: "6.5+" },
      { label: "PHP", value: "8.1+" },
      { label: "Editor", value: "Gutenberg" },
      { label: "Price", value: "Free" },
    ],
  },
  keywordCards: [
    {
      title: "Contact Form 7 Alternative",
      text: "Contact Form 7 has been in feature freeze since 2026. Flinkform offers everything CF7 does, plus multi-step forms, conditional logic, and a submissions dashboard. One plugin instead of six.",
      href: "/vergleich/contact-form-7-alternative",
    },
    {
      title: "WPForms Alternative",
      text: "WPForms requires at least its Basic plan, regularly $99 per year, for conditional logic and multi-page forms - and the Lite version doesn't even store submissions. Flinkform does both for free.",
      href: "/vergleich/wpforms-alternative",
    },
    {
      title: "Gravity Forms Alternative",
      text: "Gravity Forms has no free tier; getting started costs $59 per year. Flinkform covers the standard feature set for free, privacy-first and block-native.",
      href: "/vergleich/gravity-forms-alternative",
    },
    {
      title: "WordPress Form Without reCAPTCHA",
      text: "Most form plugins rely on reCAPTCHA or Akismet. Both send visitor data to the US. Flinkform protects your form entirely on your own server.",
      href: "/wissen/wordpress-formular-ohne-recaptcha",
    },
  ],
  keywordReadMore: "Read more",
  finalCta: {
    title: "Your first form, live in 5 minutes.",
    desc: "Install it, add the form block, publish. No account, no credit card, no catch.",
    ctaPrimary: "Get it free on WordPress.org",
    ctaSecondary: "Read the getting-started guide",
  },
};
