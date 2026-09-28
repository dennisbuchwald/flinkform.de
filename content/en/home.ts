import type { HomeDict } from "@/content/de/home";
import { CF7_IMPORT_SINCE } from "@/lib/site";

export const home: HomeDict = {
  meta: {
    title: "Flinkform - Free Form Plugin for the WordPress Block Editor",
    description:
      "Multi-step forms, conditional logic, and a submissions dashboard, free and right inside the block editor. An easy switch from Contact Form 7, one plugin for every client site. Made in Germany.",
    ogTitle: "Flinkform - Five plugins. Or this one.",
    ogDescription:
      "Build the form, store submissions, split it into steps, show fields conditionally, keep spam out. Free, right inside the WordPress block editor.",
  },
  hero: {
    eyebrow: "WordPress Form Plugin · Free",
    titlePre: "Five plugins. Or ",
    titleHighlight: "this one",
    titlePost: ".",
    replaces: ["form plugin", "submissions plugin", "multi-step plugin", "logic plugin", "captcha plugin"],
    entity:
      "Build the form, store the submissions, split it into steps, show fields conditionally, keep the spam out. Elsewhere that takes five plugins or a paid plan. With Flinkform it's one plugin, free, right inside the WordPress block editor.",
    sub: "No reCAPTCHA, no third-party services, no IP logging. Everything stays on your server.",
    ctaPrimary: "Get it free on WordPress.org",
    ctaSecondary: "Switching from Contact Form 7? →",
    ctaSecondaryHref: "#umstieg",
    versionLine: "Version {version} · WordPress 6.5+ · PHP 8.1+ · GPLv2",
    demoCaption: "Multi-step, live calculations, no reCAPTCHA.",
    demoLink: "Click through everything on the live demo →",
  },
  pillars: {
    heading: "It's all in there. For free.",
    sub: "Multi-step forms, conditional logic, and a dashboard for your submissions. WPForms charges from $99 a year for that combination, and Gravity Forms has no free version at all.",
    items: [
      {
        title: "Multi-step and conditional logic",
        desc: "Split forms into steps, show or hide fields and entire steps based on answers. In the free plugin, no add-on required.",
      },
      {
        title: "Right in the block editor",
        desc: "Every field is a block. No second builder, no shortcode. You build a form the way you write a post.",
      },
      {
        title: "Submissions in your dashboard",
        desc: "Everything lands in WordPress: search, filters, read and unread. If an email gets lost, the inquiry is still there.",
      },
      {
        title: "Privacy by default",
        desc: "Spam protection on your own server and no IP logging, without switching anything on. A consent field and automatic retention periods are built in.",
      },
      {
        title: "Fast and cacheable",
        desc: "Under 15 KB of JavaScript, no jQuery, loaded only on pages with a form. And your page cache stays on, contact page included.",
      },
      {
        title: "Built to be accessible",
        desc: "Keyboard, screen readers, focus management across every step. The form markup passes axe-core checks against WCAG 2.1 AA.",
      },
    ],
  },
  cf7: {
    heading: CF7_IMPORT_SINCE ? "Coming from Contact Form 7? Bring it all." : "Coming from Contact Form 7?",
    intro: [
      "Contact Form 7 runs on more than 10 million sites and has done good work for many years. According to its developer, there won't be any new features after version 6.2, only security updates. So your existing forms keep working.",
      CF7_IMPORT_SINCE
        ? "And you don't retype a thing. Flinkform brings your forms over with an import, emails included, and switches your pages while it's at it."
        : "The real question is whether you start your next project with it again.",
    ],
    importShowcase: {
      title: "Form in. Blocks out.",
      sub: "The importer reads your Contact Form 7 form, turns it into Flinkform blocks and swaps the shortcode on your pages. A traffic light shows what works before you start, and every import can be undone. It never touches Contact Form 7 itself.",
      fromLabel: "Contact Form 7",
      toLabel: "Flinkform",
      rows: [
        ["[text* your-name]", "Text field, required"],
        ["[email* your-email]", "Email field, required"],
        ['[select topic "Quote" "Question"]', "Dropdown with 2 options"],
        ["[textarea your-message]", "Textarea field"],
        ["[acceptance privacy]", "Consent"],
        ["Mail: [your-name]", "Mail: {field:your-name}"],
      ],
      cta: "Install free and switch",
      note: "In wp-admin under Flinkform → Import from CF7, from version {version}.",
    },
    gainsHeading: "What you gain by switching",
    gains: [
      "Submissions stored in WordPress, no Flamingo needed",
      "Multi-step forms and conditional logic, no add-on plugins",
      "Spam protection out of the box, no Turnstile or reCAPTCHA",
      "Your theme's design, no custom CSS",
    ],
    stepsHeading: "How the switch works",
    steps: CF7_IMPORT_SINCE
      ? [
          "Install Flinkform. Contact Form 7 stays active, both run side by side.",
          "Open Flinkform → Import from CF7, check the preview and import. Fields, labels, emails and the success message come along, and your pages are switched automatically.",
          "Test every page once. If everything works, Contact Form 7 can go. If something's off, undo the import per form.",
        ]
      : [
          "Install Flinkform. Contact Form 7 stays active, both run side by side.",
          "Rebuild the form in the block editor. A contact form takes a few minutes, multi-step forms with logic take longer.",
          "On the page, replace the Contact Form 7 shortcode with the Flinkform block, test it, done. Page by page, at your own pace.",
        ],
    honest: CF7_IMPORT_SINCE
      ? "The import doesn't carry over logic from CF7 add-ons like Conditional Fields, you set that up again in the editor. Forms inside page builders or widgets it doesn't switch itself, but it shows you where they are. And file uploads, which CF7 has for free, are a Pro feature with us. That's the whole catch."
      : "There's no automatic import yet, so you rebuild your forms. And file uploads, which CF7 has for free, are a Pro feature with us. That's the whole catch.",
    cta: "See how Flinkform compares →",
    ctaHref: "/vergleich",
  },
  agency: {
    eyebrow: "For agencies",
    heading: "One plugin for every client site.",
    sub: "If you look after 25 client sites, you don't want to set up, style, and explain a form plugin in the privacy policy 25 times over.",
    items: [
      {
        title: "Learn it once, use it everywhere.",
        desc: "The same workflow on every site, right in the block editor. Your clients already know it, so there's nothing new to explain.",
      },
      {
        title: "No styling per client.",
        desc: "Flinkform picks up colors, fonts, and spacing from theme.json. The form looks like the site it sits on.",
      },
      {
        title: "No third party in the privacy policy.",
        desc: "The free plugin doesn't load any external service. So there's none you have to explain on every client site.",
      },
      {
        title: "Pages stay cacheable.",
        desc: "Plenty of form plugins pull form pages out of the cache. Flinkform doesn't. No exclusion rules, no slow contact page.",
      },
    ],
    price:
      "Flinkform Pro for agencies: €149 a year for up to 25 sites. Under €6 per client site, with every Pro feature.",
    cta: "See the Agency license →",
    ctaHref: "/pro#agency",
  },
  privacyBlock: {
    kicker: "Privacy",
    title: "reCAPTCHA means extra work. Flinkform doesn't.",
    paragraphs: [
      "Since April 2026, Google acts as a data processor for reCAPTCHA. That made using it easier, and it's only fair to say so.",
      "It still isn't effortless: a data processing agreement, an entry in your privacy policy, possibly a consent prompt, and data sent to the US. On every single site.",
    ],
    highlight:
      "Flinkform doesn't need any of that. Honeypot, signed time check, and proof-of-work run on your own server out of the box.",
    linkText: "What changed with reCAPTCHA (German)",
    linkHref: "/blog/recaptcha-dsgvo-rechtsrisiko",
    stats: [
      {
        value: "Apr 2, 2026",
        label: "Since then, Google has been a data processor for reCAPTCHA. The agreement is yours to sign.",
      },
      {
        value: "3 layers",
        label: "Spam protection out of the box: honeypot, signed time check, proof-of-work",
      },
      {
        value: "0",
        label: "external requests made by Flinkform's spam protection",
      },
    ],
  },
  proof: {
    heading: "Don't take our word for it.",
    sub: "Reviews from WordPress.org, quoted as written.",
    rating: "{average} out of 5 stars from {count} reviews on WordPress.org",
    allReviews: "All reviews on WordPress.org →",
    source: "Review on WordPress.org",
    clientSites: "Running on {count} client sites built by dbw media.",
    notice:
      "Anyone with a WordPress.org account can leave a review there. WordPress.org doesn't verify whether someone actually uses the plugin, and neither do we.",
  },
  proTeaser: {
    eyebrow: "Flinkform Pro",
    title: "The form that makes money.",
    desc: "Three forms that bring in revenue with Flinkform Pro. You can try all three on the demo, with Stripe test payments.",
    cases: [
      {
        title: "Live price quotes",
        desc: "Pick a package, drag the scope, tick the extras: the total updates as the visitor types. On submit, the server recalculates every formula.",
        demoText: "Try the quote calculator →",
        demoPath: "/angebotsrechner/",
      },
      {
        title: "Deposits at booking",
        desc: "The deposit is its own calculation field, say 30 percent of the total. That exact amount goes to Stripe, by card, SEPA direct debit, or Apple Pay.",
        demoText: "See the deposit in the calculator →",
        demoPath: "/angebotsrechner/",
      },
      {
        title: "Course and event sign-ups",
        desc: "Pick a ticket, pay, you're in. The server checks that the amount paid matches the ticket chosen. Changing the price in the browser won't get past it.",
        demoText: "Try the workshop sign-up →",
        demoPath: "/workshop/",
      },
    ],
    itemsHeading: "Also in Pro",
    items: [
      "Stripe: card, SEPA direct debit, Apple Pay, Google Pay",
      "File uploads with up to 10 files per field",
      "Webhooks into your CRM, SMTP delivery with a send log",
      "Newsletter: Brevo, Mailchimp, CleverReach",
      "CSV export and custom CSS per form",
    ],
    cta: "Discover Flinkform Pro · from €59/year",
  },
  features: {
    heading: "What's inside.",
    sub: "The complete list. All of it in the free plugin.",
    items: [
      "14 field types: text, email, textarea, number, date, URL, phone, dropdown, radio, checkbox, toggle, hidden, consent, address",
      "Multi-step forms with a progress indicator (bar, dots, or numbers) and per-step validation",
      "Import from Contact Form 7: bring forms over with their emails, pages are switched automatically, with preview and undo",
      "Five starter templates: contact, callback, three-step project inquiry, appointment request and newsletter, each with a consent field",
      "Submissions with a trash, an unread count in the menu and a mail status per submission. Site Health warns when notifications do not go out",
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
    heading: "Compared, honestly.",
    sub: "SureForms is block-based too, and it's well made. The difference: with Flinkform, multi-step forms and conditional logic are free. With every other plugin here, they aren't.",
    caption: "Feature comparison: Flinkform, Contact Form 7, WPForms, Gravity Forms, and SureForms",
    columns: ["Flinkform", "Contact Form 7", "WPForms", "Gravity Forms", "SureForms"],
    rows: [
      {
        feature: "Built-in spam protection, no external service",
        cells: [
          "Honeypot, time check, proof of work",
          "no, the author recommends Turnstile or reCAPTCHA",
          "anti-spam token",
          "honeypot, enable per form",
          "honeypot, needs enabling",
        ],
      },
      {
        feature: "No IP logging by default",
        cells: [true, "stores no submissions", "Pro stores IPs, can be disabled", "stores IPs, can be disabled", true],
      },
      { feature: "Forms built in the block editor", cells: [true, false, "own builder", "own builder", true] },
      { feature: "Multi-step forms, free", cells: [true, "add-on plugin", false, "no free version", false] },
      { feature: "Conditional logic, free", cells: [true, "add-on plugin", false, "no free version", false] },
      {
        feature: "Submissions dashboard, free",
        cells: [true, "add-on plugin (Flamingo)", "paid plans only", "no free version", true],
      },
      {
        feature: "New features",
        cells: [true, "maintenance only after 6.2 (announced)", true, true, true],
      },
      {
        feature: "Pro version price (1 site)",
        cells: ["€59/yr", "no Pro tier", "$99/yr", "$59/yr", "no single-site plan, $149 for 5"],
      },
    ],
    note: "As of September 28, 2026. Regular list prices and each vendor's own documentation. According to its author, Contact Form 7 doesn't store submissions and has no multi-step forms or conditional logic, each of which needs a separate add-on.",
    linkAll: "See every comparison in detail",
    linkCalc: "Cost calculator: what are you paying right now?",
  },
  faq: {
    items: [
      {
        q: "Is Flinkform really completely free?",
        a: "Yes. Multi-step forms, conditional logic, submissions dashboard, spam protection: all included in the free plugin on WordPress.org. No artificial limits, no crippled trial mode. Flinkform Pro is an optional add-on for payments, webhooks, file uploads, and more.",
      },
      {
        q: "Why not just use Contact Form 7?",
        a: "After version 6.2, Contact Form 7 gets no new features, only maintenance. It doesn't store submissions on its own, and multi-step forms or conditional logic each need an add-on plugin. Flinkform has all of that built in.",
      },
      {
        q: "Can I migrate my Contact Form 7 forms?",
        a: CF7_IMPORT_SINCE
          ? `Yes. Since version ${CF7_IMPORT_SINCE}, Flinkform includes an importer for Contact Form 7 forms: fields, labels, the notification and confirmation emails and the success message carry over, and pages using the CF7 shortcode are switched automatically. A preview shows what works first, every import can be undone per form, and Contact Form 7 itself stays unchanged. Logic from add-ons like Conditional Fields you set up again in the editor.`
          : "There's no automatic import yet. You rebuild your forms in the block editor: a simple contact form takes under 5 minutes, multi-step forms with logic take longer. Contact Form 7 can stay active while you switch over page by page.",
      },
      {
        q: "What sets Flinkform apart from WPForms or Gravity Forms?",
        a: "WPForms and Gravity Forms use their own, separate form builder. Flinkform lives directly inside the WordPress block editor. On top of that, WPForms requires at least its Basic plan, regularly $99 per year, for conditional logic and multi-page forms. With Flinkform, both are free.",
      },
      {
        q: "Is Flinkform a good fit for agencies?",
        a: "That's what the Agency license is for: €149 a year for up to 25 sites, under €6 per client site. The free plugin loads no external service, picks up the design from theme.json, and keeps pages cacheable. No per-client styling and no third-party section in each privacy policy.",
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
        q: "Does Flinkform work with my caching plugin?",
        a: "Yes, and the page stays cached. Many form plugins exclude every page with a form from the page cache, because the markup holds values that are only valid for a single request. Since version 1.14.0, Flinkform loads those values only once a visitor actually touches the form. The page that gets served is plain, cacheable HTML, and someone who only scrolls past never triggers a request. Spam protection is unchanged. Under Tools and Site Health, a check tells you whether your form pages are really being cached.",
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
      text: "After version 6.2, Contact Form 7 only gets maintenance. Flinkform brings multi-step forms, conditional logic, a submissions dashboard, and spam protection without a third-party service in one free plugin.",
      href: "/vergleich/contact-form-7-alternative",
    },
    {
      title: "WPForms Alternative",
      text: "WPForms requires at least its Basic plan, regularly $99 per year, for conditional logic and multi-page forms, and the Lite version doesn't show submissions in the dashboard. Flinkform does both for free.",
      href: "/vergleich/wpforms-alternative",
    },
    {
      title: "Gravity Forms Alternative",
      text: "Gravity Forms has no free tier; getting started costs $59 per year. Flinkform covers the standard feature set for free, right inside the block editor.",
      href: "/vergleich/gravity-forms-alternative",
    },
    {
      title: "WordPress Form Without reCAPTCHA",
      text: "For anything beyond a honeypot, most form plugins rely on reCAPTCHA or another external service. Flinkform protects your form with three layers out of the box, entirely on your own server.",
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
