import type { RechnerDict } from "@/content/de/rechner";

export const rechner: RechnerDict = {
  meta: {
    title: "Form Plugin Cost Calculator: What Is Your Form Stack Really Costing You?",
    description:
      "Interactive calculator: compare the 3-year cost of WPForms, Gravity Forms, Fluent Forms, and Flinkform for your number of websites. Regular pricing, as of July 2026.",
  },
  breadcrumb: { home: "Flinkform", rechner: "Cost calculator" },
  hero: {
    eyebrow: "Interactive Calculator",
    title: "What is your form stack really costing you?",
    sub: "Form plugins are billed per year, per website, and the advertised prices are usually first-year discounts. This calculator compares the regular 3-year cost of WPForms, Gravity Forms, Fluent Forms, and Flinkform for your situation. Just set how many websites you run.",
  },
  calc: {
    sitesLabelPrefix: "Number of websites:",
    sitesMin: "1",
    sitesMax: "30",
    needsLabel: "What do your forms need?",
    standardOption: "Standard (contact, multi-step, logic)",
    proOption: "Plus payments, uploads, webhooks",
    costsOverYearsPrefix: "Cost over",
    yearsUnit: "years",
    notAvailable: "n/a",
    savingsPrePre: "Compared to",
    savingsVendorSuffix: ",",
    savingsPreMid: "Flinkform saves you over",
    savingsPrePost: "years",
    savingsNote: "An approximation without currency conversion; US prices in dollars, Flinkform in euros.",
    footnote:
      "Regular list (renewal) prices per each vendor's pricing page, as of July 2026, excluding first-year discounts. The cheapest plan that covers your site count and feature needs is selected. Details and sources in the",
    footnoteLinkText: "price comparison",
    vendors: {
      flinkform: {
        freeName: "Free (everything included)",
        note: "Multi-step forms, conditional logic, and spam protection are already in the free plugin.",
      },
      wpforms: {
        note: "Lite doesn't store submissions; a 3% Stripe surcharge applies below the Pro plan.",
      },
      gravityforms: {
        note: "No free tier - every website needs a license.",
      },
      fluentforms: {
        note: "The free version is solid; multi-step forms and payments live in Pro.",
      },
    },
  },
  demoLinkPre: "By the way: this live calculation is exactly what ",
  demoLinkText: "Flinkform Pro's calculation fields",
  demoLinkPost: " can do inside your own forms.",
  faq: {
    items: [
      {
        q: "Where do the prices in the calculator come from?",
        a: "From each vendor's official pricing page, as of July 2026. We use the regular renewal prices, not first-year discounts, since you pay full price from the second year on. Every source is listed in the full price comparison in the knowledge base.",
      },
      {
        q: "Why are dollars and euros mixed together?",
        a: "WPForms, Gravity Forms, and Fluent Forms bill in US dollars, Flinkform in euros. We deliberately don't convert, since exchange rates fluctuate and fees vary by payment method. The magnitudes stay clearly comparable either way.",
      },
      {
        q: "Is the comparison fair if Flinkform builds it?",
        a: "We lay out the logic openly: the cheapest plan from each vendor that covers your site count and feature needs is chosen. Wherever competitors have an advantage, it's noted. Feel free to check the math yourself - the pricing pages are linked.",
      },
      {
        q: "What about hidden costs?",
        a: "The calculator shows license costs. On top of that, you may run into: a 3% Stripe surcharge with WPForms below the Pro plan, individual add-on purchases with Ninja Forms, and SaaS upcharges for response limits (Typeform, Jotform). Details in the price comparison article.",
      },
    ],
  },
  finalCta: {
    title: "The cheapest row in the calculator is free.",
    desc: "Multi-step forms, conditional logic, spam protection without reCAPTCHA: all in the free plugin.",
    cta: "Get it free on WordPress.org",
  },
};
