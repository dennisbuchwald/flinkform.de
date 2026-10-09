import type { ProDict } from "@/content/de/pro";
import { CONTACT_MAIL, DEMO_URL, MIN_FREE_FOR_PRO, PRO_VERSION } from "@/lib/site";
import { LIFETIME_UNTIL } from "@/lib/pro-checkout";

/** 2026-12-31 → December 31, 2026 */
const lifetimeUntil = new Date(`${LIFETIME_UNTIL}T12:00:00Z`).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export const pro: ProDict = {
  meta: {
    title: "Flinkform Pro: Stripe, SEPA and Calculation Fields for WordPress Forms",
    description:
      "Flinkform Pro: Stripe Payments with credit card, SEPA, Apple Pay, and Google Pay right inside your form. Calculation fields, webhooks, multi-upload, SMTP, newsletter. From €59/year.",
    ogTitle: "Flinkform Pro - The Form That Makes Money.",
    ogDescription:
      "Stripe payments with SEPA and wallets, calculation fields, webhooks, SMTP, multi-upload, and newsletter integration: one add-on instead of five plugins. From €59/year.",
  },
  breadcrumb: { home: "Flinkform", pro: "Flinkform Pro" },
  hero: {
    eyebrowPrefix: "Premium Add-on · ",
    eyebrow: "Available now",
    titlePre: "The form that ",
    titleHighlight: "makes money",
    titlePost: ".",
    replaces: ["payment plugin", "calculator plugin", "upload plugin", "SMTP plugin", "webhook plugin"],
    entity:
      "Flinkform Pro is the commercial add-on for the free WordPress form plugin Flinkform. It adds Stripe Payments (credit card, SEPA direct debit, Apple Pay, Google Pay), calculation fields, multi-file upload, SMTP delivery, webhooks, newsletter integration, CSV export, and custom CSS.",
    sub: "Payment in the form, not a shop system. Live prices, not follow-up emails. CRM entries, not copy-paste. One add-on instead of five plugins.",
    ctaPrimary: "Reserve your spot",
    ctaBuy: "Buy Pro now",
    ctaSecondary: "See pricing",
    ctaDemo: "Try the live demo",
    demoUrl: `${DEMO_URL}/angebotsrechner/`,
    versionLine: `Version ${PRO_VERSION} · requires Flinkform (free) ${MIN_FREE_FOR_PRO}+ · 14-day money-back guarantee`,
  },
  needs: {
    heading: "A contact form is enough? Not for long.",
    sub: "Flinkform solves the form problem. Then the real requirements show up:",
    items: [
      "A booking form with a deposit: the client wants to pay right in the form, ideally by SEPA or Apple Pay.",
      "A quote calculator: the price needs to calculate live from quantity and options.",
      "Submissions need to flow automatically into a CRM or project management tool.",
      "Your host swallows emails. You need reliable SMTP delivery.",
      "An application form: resume, cover letter, and references as uploads.",
      "Newsletter signup right in the contact form, no Zapier detour.",
    ],
    outroPre:
      "Normally that means installing five more plugins. Five configurations, five update cycles, five potential conflicts. With WPForms, this bundle requires the Pro plan, regularly $399 per year. ",
    outroStrong: "Flinkform Pro packs it all into one add-on.",
    outroPost: " Seamlessly integrated, privacy-first, from a single source.",
  },
  modules: {
    heading: "Eight modules. One add-on.",
    items: [
      {
        title: "Stripe Payments",
        desc: "Payments right inside the form: credit card, SEPA direct debit, Apple Pay, Google Pay, and Link via the Stripe Payment Element. Fixed amount or product selection, server-side verification, payment status visible on the submission. Card data never touches your server.",
      },
      {
        title: "Calculation fields",
        desc: "Quote calculators and configurators right in the form: formulas like (quantity × 49.90) + setup fee calculate live as the visitor types. Add fields via dropdown, safely recalculated server-side, no eval.",
      },
      {
        title: "Multi-file upload",
        desc: "Visitors can attach up to 10 files per field, ideal for job applications. Configurable file types and max size, size check before submission. Files are not publicly accessible, a self-test checks that, and they are deleted with the submission or after an optional retention period.",
      },
      {
        title: "SMTP delivery",
        desc: "Every form email actually arrives. 7 provider presets (Gmail, Outlook, SendGrid, Mailgun, Brevo, Postmark, Amazon SES), AES-256-encrypted credentials, send log with error diagnostics.",
      },
      {
        title: "Webhooks",
        desc: "Send submissions automatically to your CRM, project management tool, or any endpoint. JSON or form-encoded, custom headers, field mapping, conditions, retry logic, and a complete delivery log. Only to https addresses, and custom headers are stored encrypted.",
      },
      {
        title: "Newsletter integration",
        desc: "Brevo, Mailchimp, and CleverReach integrated directly. Double opt-in is on by default for new connections, only real consent fields count as consent, and sending runs asynchronously. No extra plugin, no detours.",
      },
      {
        title: "CSV export",
        desc: "Export filtered submissions as CSV, including date range and payment columns (status, amount, currency). Excel-compatible, right from the WordPress admin.",
      },
      {
        title: "Custom CSS",
        desc: "Write CSS per form right in the editor, for customizations that go beyond theme settings. Hardened against XSS.",
      },
    ],
  },
  highlights: {
    heading: "In detail",
    sub: "All on top of the 14 field types, multi-step forms, conditional logic, and spam protection in the free plugin.",
    items: [
      "Stripe Payments: credit card, SEPA direct debit, Apple Pay, Google Pay, Link",
      "Fixed amount or product selection with individual prices",
      "Payment status, amount, and payment method visible right on the submission",
      "Automatic Stripe receipt emailed to the payer",
      "SEPA payments are auto-confirmed via Stripe webhook",
      "Calculation fields with a live preview, verified server-side",
      "Multi-upload: up to 10 files per field, size check before submission",
      "Files attached as real email attachments on the admin notification",
      "SMTP with 7 provider presets and encrypted credentials",
      "Webhooks only to https, with retry logic and a complete delivery log",
      "Newsletter integration: Brevo, Mailchimp, CleverReach, double opt-in by default",
      "CSV export with date range and payment columns",
      "Custom CSS per form in the editor",
      "Double-submit protection: no duplicate submissions, emails, or payments",
      "AES-256 encryption for credentials and custom webhook headers",
      "Privacy section: webhook log retention, file link lifetime, retention period for uploads",
      "Self-test that checks whether the upload folder is protected from outside access, with a rule for nginx servers",
      "Clean bridge architecture: Pro never modifies core files",
    ],
  },
  compare: {
    heading: "Flinkform Pro vs. WPForms, Gravity Forms, and WooCommerce",
    caption: "Feature comparison: Flinkform Pro, WPForms, Gravity Forms, and WooCommerce",
    columns: ["Flinkform Pro", "WPForms", "Gravity Forms", "WooCommerce"],
    rows: [
      {
        feature: "Stripe Payments in the form",
        cells: [true, "+3% fee below Pro ($399)", "Add-on required", true],
      },
      { feature: "SEPA, Apple Pay & Google Pay", cells: [true, "partial", "Add-on", "Plugin required"] },
      { feature: "No shop/checkout needed", cells: [true, true, true, false] },
      { feature: "Calculation fields", cells: [true, "paid plans only", true, false] },
      { feature: "Multi-file upload", cells: [true, "from $99/yr", true, false] },
      { feature: "Native to the block editor", cells: [true, false, false, false] },
      {
        feature: "Webhooks with retry logic",
        cells: [true, "Add-on on higher plans", "Add-on", false],
      },
      { feature: "SMTP + send log", cells: [true, false, false, false] },
      {
        feature: "Newsletter integration",
        cells: [true, "from Plus ($199/yr)", "Add-on", "Plugin required"],
      },
      { feature: "Spam protection without a US service", cells: [true, false, false, false] },
      { feature: "Price (1 site)", cells: ["€59/yr", "from $99/yr", "from $59/yr", "free*"] },
    ],
    note: "* WooCommerce is free, but it's a full shop system. For a single payment form you'd still need a gateway plugin and checkout configuration. Prices as of July 2026, regular list prices.",
  },
  steps: {
    heading: "How it works",
    items: [
      {
        title: "Install Flinkform",
        desc: "The free plugin from the WordPress.org directory. 14 field types, multi-step forms, conditional logic, spam protection.",
      },
      {
        title: "Activate Pro",
        desc: "Install and activate Flinkform Pro as a second plugin. Pro automatically docks onto the free core.",
      },
      {
        title: "Configure modules",
        desc: "Stripe, SMTP, webhooks, newsletter: all right in the WordPress admin. Pro panels appear automatically in the block editor.",
      },
    ],
  },
  pricing: {
    heading: "Every feature. In every plan.",
    sub: "You pay by number of websites, not by features. Annual billing, updates, and support included. You get the download and your license key right after purchase.",
    plans: [
      { sites: "1 website", perSite: "€59 per website", desc: "For your own website." },
      { sites: "3 websites", perSite: "€33 per website", desc: "For freelancers with their first client projects." },
      {
        sites: "Up to 25 websites",
        perSite: "Under €6 per website",
        desc: "Just €50 more than Studio for 22 extra websites. One license for all your client projects.",
      },
      { sites: "Unlimited websites", perSite: "No limits", desc: "For large agencies and power users." },
    ],
    perYear: "/year",
    bestseller: "Recommended",
    includedModules: "✓ All 8 Pro modules",
    includedSupport: "✓ Updates & support",
    ctaBuy: "Buy now",
    ctaSoon: "Coming soon",
    guarantee: {
      title: "14-day money back. No questions asked.",
      desc: "If Flinkform Pro isn't right for your project, send a short email and you get the full amount back. Even after you've downloaded it.",
      note: "A voluntary guarantee from us, on top of your statutory rights.",
    },
    footNotes: [
      "✓ Ready to use right after purchase",
      "✓ Cancel any year",
    ],
    vatNote:
      "All prices exclude VAT. Purchases are handled by Freemius: Freemius is the seller (Merchant of Record) and calculates VAT at checkout based on your country. With a valid EU VAT ID, reverse charge applies and no VAT is added.",
    termsPre: "The ",
    termsLink: "Freemius terms",
    termsUrl: "https://freemius.com/terms/",
    termsPost: " apply to your purchase.",
    lifetime: {
      badge: `Launch offer · until ${lifetimeUntil}`,
      title: "Pay once. Use forever.",
      desc: `Until ${lifetimeUntil}, Flinkform Pro is also available as a lifetime license: every Pro feature on up to 25 websites, no annual renewal, updates included. After that, the offer goes away permanently and Flinkform Pro is subscription-only.`,
      sites: "Up to 25 websites",
      once: "one-time",
      ctaBuy: "Get lifetime access",
      ctaSoon: "Reserve your spot",
      noteBuy: "One payment, no renewal. 14-day money back.",
      noteSoon: "Sales start soon. People on the list hear first.",
    },
  },
  inquiry: {
    title: "Interested in Flinkform Pro?",
    desc: "Tell us briefly what you'd use Pro for. You'll get a personal reply from Dennis.",
    salesTitle: "Questions before you buy? Email me.",
    salesDesc: "Tell me what you want to use Pro for, and I'll tell you honestly whether it's a fit. The reply comes from me personally, not a ticket system.",
    salesCta: "Email Dennis",
    salesMail: CONTACT_MAIL,
    salesSubject: "Question about Flinkform Pro",
  },
  faq: {
    items: [
      {
        q: "What does Flinkform Pro cost?",
        a: "Flinkform Pro costs €59 per year for 1 site, €99 for 3 sites (Studio), €149 for up to 25 sites (Agency), and €299 with no site limit (Unlimited). Every plan includes all Pro features - tiers are based only on your number of websites. There's also a 14-day money-back guarantee.",
      },
      {
        q: "How many websites does my license cover?",
        a: "That's the only difference between the plans: Single covers 1 website, Studio 3, Agency up to 25, and Unlimited has no limit. The feature set is identical across all of them. You can move up to a larger tier later without buying again.",
      },
      {
        q: "Do I get an invoice, and how does VAT work?",
        a: "Yes. Freemius handles the sale as Merchant of Record and sends you the invoice directly. Listed prices exclude VAT, which is added at checkout based on your country. Enter a valid EU VAT ID and reverse charge applies, so no VAT is added.",
      },
      {
        q: "Can I get a refund?",
        a: "Yes, within 14 days, no questions asked. If Flinkform Pro doesn't do what you need, send an email and you get the full amount back. No justification required.",
      },
      {
        q: "Which payment methods does the payment field support?",
        a: "Credit card, SEPA direct debit, Apple Pay, Google Pay, and Stripe Link via the Stripe Payment Element. Which methods your visitors see is controlled from your Stripe Dashboard. SEPA payments are accepted as 'processing' and auto-confirmed once Stripe reports the debit.",
      },
      {
        q: "Do I need a Stripe account?",
        a: "Yes, but it's free and takes two minutes to set up. You get test keys right away to try it out. In live mode, payments go directly to your Stripe account - Flinkform Pro is never in between.",
      },
      {
        q: "Are the payments PCI-compliant?",
        a: "Yes. Payment data is processed exclusively by Stripe (Payment Element) and never touches your server. Your server only checks whether the payment was confirmed and whether the amount and currency match the form before saving the submission.",
      },
      {
        q: "What happens if a payment fails?",
        a: "The form isn't submitted. The visitor sees an error message right at the payment field and can try again. No submission without a confirmed payment.",
      },
      {
        q: "Do I need the free Flinkform plugin to use Pro?",
        a: `Yes. Flinkform Pro is an add-on that builds on the free Flinkform plugin (${MIN_FREE_FOR_PRO} or later). You install the free plugin first, then activate Pro as an extension. All free features remain.`,
      },
      {
        q: "How privacy-friendly is Flinkform Pro?",
        a: "Privacy by default. Card data only ever passes through Stripe, never your server. Every Pro module is connected to the WordPress privacy tools: data export and erasure, and uploads are deleted with their submission. Under Flinkform → Pro → Privacy you set how long the webhook log is kept, how long file links stay valid and whether uploads are deleted after a set period. A self-test checks whether uploaded files can be reached from outside and shows the matching rule for nginx servers. Credentials and custom webhook headers are stored AES-256-encrypted, and the mail log stores no message content. The privacy policy text blocks also cover Stripe.js and Freemius.",
      },
      {
        q: "Can webhooks go to http addresses?",
        a: "New webhooks need an https address so submissions are transferred encrypted. Existing http webhooks keep working and show a warning, so nothing breaks silently. Custom headers, such as an API token, are stored encrypted.",
      },
      {
        q: "How does newsletter consent work?",
        a: "Only fields the visitor actively ticks count as consent: consent, toggle or checkbox. Double opt-in is on by default for new newsletter connections, and your provider sends the confirmation email. The editor warns when double opt-in is off or when consent is made a required field of the form.",
      },
      {
        q: "What happens to my data when the license expires?",
        a: "Nothing. Your webhooks, SMTP settings, Stripe keys, and uploaded files stay in place. Pro database tables are only removed on a complete uninstall, never on deactivation or license expiry.",
      },
    ],
    soon: {
      q: "When can I buy it?",
      a: "Sales open soon through a checkout with a license key and automatic updates. Sign up via the inquiry form to hear first and secure access to the limited lifetime license at launch.",
    },
    expiry: {
      q: "What happens when my license expires?",
      a: "All Pro features keep working, including your payment forms. Only updates and support stop. Renew and you get both back. Settings, uploads, and keys stay untouched.",
    },
  },
  requirements: {
    heading: "Requirements",
    items: [
      { label: "WordPress", value: "6.5+" },
      { label: "PHP", value: "8.1+" },
      { label: "Flinkform", value: `${MIN_FREE_FOR_PRO}+` },
      { label: "Price", value: "From €59/yr" },
    ],
    noFlinkformPre: "Don't have Flinkform yet? ",
    noFlinkformLink: "Get the free plugin here.",
  },
};
