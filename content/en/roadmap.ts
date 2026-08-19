import type { RoadmapDict } from "@/content/de/roadmap";

export const roadmap: RoadmapDict = {
  meta: {
    title: "Roadmap & Changelog: What Flinkform Is Working On",
    description:
      "The public Flinkform roadmap: what shipped recently, what's in progress, and what's coming next. Building in public, no date promises.",
  },
  hero: {
    eyebrow: "Roadmap & Changelog",
    title: "What we're building right now",
    introPre:
      "Flinkform is developed in the open. Here's what shipped most recently and what's coming next. Honestly: no date promises, just real progress. Feature requests and bug reports belong on ",
    introLinkText: "GitHub",
    introPost: ".",
  },
  breadcrumb: { home: "Flinkform", roadmap: "Roadmap" },
  inProgress: {
    heading: "In Progress",
    items: [
      {
        title: "Payment amount from calculation fields",
        desc: "Use the calculated total from a quote calculator directly as the Stripe payment amount, derived server-side from the formula and tamper-proof.",
        area: "Pro",
      },
      {
        title: "More payment methods",
        desc: "Redirect-based payment methods via the Stripe Payment Element, so methods that involve a page hop work cleanly too.",
        area: "Pro",
      },
      {
        title: "PDF receipt on submission",
        desc: "Automatic PDF receipt attached to the confirmation email, for bookings and payments that require documentation.",
        area: "Pro",
      },
    ],
  },
  planned: {
    heading: "Planned",
    items: [
      {
        title: "Deeper entry management",
        desc: "Per-submission status (new, in progress, done), internal notes, and an unread badge in the admin menu.",
        area: "Pro",
      },
      {
        title: "Optional CAPTCHA integration",
        desc: "For site owners who want to add an external service on top. Server-side spam protection stays the default and still needs none.",
        area: "Pro",
      },
      {
        title: "SMTP OAuth2",
        desc: "Google Workspace and Microsoft 365 with modern authentication instead of app passwords.",
        area: "Pro",
      },
      {
        title: "More newsletter providers",
        desc: "MailerLite, plus deeper field mapping (custom fields, tags, groups) for existing integrations.",
        area: "Pro",
      },
    ],
  },
  radar: {
    heading: "On Our Radar",
    sub: "Bigger ideas we're not actively building yet, but that are on our list. No promises, no dates - just transparency about where things might head.",
    items: [
      {
        title: "Help text between label and field",
        desc: "An additional position for help text, right between the label and the input instead of only below it. A clear accessibility win.",
        area: "Free",
      },
      {
        title: "Limited HTML in help text",
        desc: "Links, emphasis, and short inline formatting in help text, properly sanitized and kept concise.",
        area: "Free",
      },
      {
        title: "Time and date-time fields",
        desc: "Two new field types for times and combined date-and-time values, for appointment and booking forms.",
        area: "Pro",
      },
      {
        title: "Repeatable field groups",
        desc: "Let visitors add a group of fields multiple times, for example for several attendees or line items in a form, with a screen-reader announcement whenever one is added or removed.",
        area: "Pro",
      },
      {
        title: "Accessible input masking",
        desc: "Input masks for phone numbers and postal codes that don't confuse screen readers with placeholder characters.",
        area: "Pro",
      },
      {
        title: "Pre-filled state and country selects",
        desc: "Ready-made, country-specific select fields for state/province and country, usable right inside the address field.",
        area: "Pro",
      },
      {
        title: "Integration with external apps",
        desc: "Send submissions straight into external tools like Google Sheets, with no extra step in between.",
        area: "Pro",
      },
      {
        title: "Form access by user role",
        desc: "Restrict who can submit or view a form to specific WordPress user roles or capabilities.",
        area: "Pro",
      },
    ],
  },
  changelogHeading: "Recently Shipped",
  changelog: [
    {
      area: "Pro",
      version: "1.2.2",
      date: "Aug 19, 2026",
      items: [
        "Stripe payments failed whenever the visitor was logged in to WordPress. It hit site owners testing their own page hardest: instead of the payment, \"Security check failed\" appeared. For logged-out visitors, the payment always worked",
      ],
    },
    {
      area: "Free",
      version: "1.13.3",
      date: "Aug 19, 2026",
      items: [
        "Style fix: with the \"Floating\" label position, the resting label sat at the bottom edge of the field instead of in the middle - visible wherever a field is taller than its input: with help text underneath, or in a two-column row stretched to match a taller neighbour",
        "The label is now anchored to the input itself, whatever else the field carries. The lifted state, the notch in the border, and textareas, selects and date fields are unchanged",
      ],
    },
    {
      area: "Free",
      version: "1.13.2",
      date: "Aug 19, 2026",
      items: [
        "Editor fix: in the style panel, the labels on the choice buttons were getting cut off - \"Bordered / Soft / Underlined / Minimal\" turned into \"Borde… / Under… / Minim…\", leaving you guessing at the setting. Options with more than two or three short choices are now select fields, fully readable in every language",
        "Nothing changes on the form itself: same values, same defaults, existing forms look exactly as before. Reported by Eric Saner - thank you!",
      ],
    },
    {
      area: "Free",
      version: "1.13.1",
      date: "Aug 18, 2026",
      items: [
        "A small follow-up to 1.13.0: for a split second right after the automatic token refresh, a form briefly had a fresh token but no matching solution yet - a submit inside that tiny window could still have been lost",
        "The new token is now solved first, then written together with its solution in one atomic step. The old, still-valid token remains submittable in the meantime. That window is gone - the \"no request gets lost\" promise now has no gaps",
      ],
    },
    {
      area: "Free",
      version: "1.13.0",
      date: "Aug 18, 2026",
      items: [
        "Important fix: a request could vanish without a trace. The anti-spam token is valid for 30 minutes. If a form stayed open longer (a long multi-step form, an open tab, a cache serving an older page), submitting it silently redirected to the homepage - no message, no email, the input gone",
        "A request from your own server is never a bot: an expired or already-used token no longer discards the request. The form reappears with every field still filled in and a notice that the session expired and to resend - the second attempt goes through. The no-JavaScript path is covered too",
        "New: the token now refreshes itself in the browser before it can expire, so the situation above mostly can't happen in the first place. Forms inside a popup automatically repair an expired token and resend once, with nothing to retype. The page can now be cached without breaking submissions",
        "Fix: double-clicking or resending via the back button no longer lands on the homepage - the first request is saved once, and a second attempt shows the success message",
      ],
    },
    {
      area: "Free",
      version: "1.12.2",
      date: "Aug 17, 2026",
      items: [
        "Important fix: a form could refuse to submit because of a required checkbox group that wasn't even visible. Typical case: an either/or form where different fields appear depending on a choice - the group in the branch not taken stayed hidden but still counted as unanswered",
        "Because the error message rendered inside the hidden area, it looked like the submit button simply did nothing",
        "Every other field type was never affected: hidden fields get disabled, and the browser automatically excludes a disabled field from validation. The group check is custom-built and hadn't applied that rule until now - it does now",
        "The server always accepted these submissions, so both sides are back in agreement. Tested with WordPress 7.0.3",
      ],
    },
    {
      area: "Free",
      version: "1.12.1",
      date: "Aug 12, 2026",
      items: [
        "An unexplained gap could appear above the submit button: once the browser solves the built-in spam-protection task, its container holds only invisible fields - but the empty container still took up a row in the form layout, spacing included",
        "Most visible on two-column forms with floating labels, where the row spacing is largest",
        "The container now disappears completely from the layout while the task is being solved, and returns together with the visible fallback question if the browser can't solve it. Spam protection itself is unchanged",
      ],
    },
    {
      area: "Free",
      version: "1.12.0",
      date: "Aug 7, 2026",
      items: [
        "Color without CSS: the section heading gets WordPress's native color option (block sidebar, theme palette included) - headings in your highlight color are two clicks away",
        "Two new color fields in the form's style panel: one for field labels and group headings, one for help text and the consent sentence - especially valuable on dark backgrounds",
        "Fixed along the way: themes often set heading colors as a direct rule, so the chosen block color never reached the title - titles and descriptions now pick up the color reliably",
        "Nothing set still means: everything inherits from the theme, existing forms don't change. Tested with WordPress 7.0.2",
      ],
    },
    {
      area: "Free",
      version: "1.11.1",
      date: "Aug 6, 2026",
      items: [
        "The consent checkbox (and every checkbox/radio box) could shrink to a tiny dot on mobile: long text on the same line squeezed the box. It now holds a fixed 20 pixels, never shrinks, aligns to the first line of text, and picks up the form's primary color when checked",
        "A select field's open dropdown list could be unreadable in Edge on Windows: the list renders light, but the text inherited the light color meant for dark sites - white on white. List entries now have fixed, readable colors; browsers with their own native list rendering simply ignore this",
      ],
    },
    {
      area: "Free",
      version: "1.11.0",
      date: "Aug 4, 2026",
      items: [
        "This release exists thanks to a wonderfully detailed user report - thank you, Daniel!",
        "Pressing Enter mid-form could permanently gray out every button: the loading state was triggered before the step lock aborted the submit - the page stayed put, the buttons stayed dead. The loading state now double-checks, and Enter on an intermediate step behaves like clicking Next, validation included",
        "The last step was never validated in the browser: every Next click validated its step, but Submit went to the server unchecked - a required consent field on the last step looked like it was being ignored. The last step (and every single-step form) now gets the same validation with the same field-level messages",
        "A select field without a placeholder silently pre-selected its first option - a required select could never actually be empty, and conditions fired without anyone touching the field. Every plain select field now leads with an empty \"please choose\" option",
        "Phone fields now reject letters right in the browser, and address subfields carry real autocomplete attributes (street, zip, city, country)",
        "Select, radio, and checkbox group can now be converted into one another via the block switcher - options, field name, and every condition are preserved",
        "Consent now reads \"Consent: Yes\" in the inbox and notification instead of an internal name and a bare 1; timestamps follow the site's date format and time zone",
      ],
    },
    {
      area: "Free",
      version: "1.10.0",
      date: "Jul 31, 2026",
      items: [
        "A hidden field no longer counts: its value kept being read when other conditions were evaluated. Switching a selection could therefore leave a message standing or lock the submit button behind an answer nobody could see or change anymore - while the server had already discarded that field. The browser and the server judged the same form differently",
        "Hidden now means empty on both sides. Visibility is resolved to a fixed point first, so a chain works too (hiding one field can make the next field's rule true) and a contradictory setup settles cleanly instead of looping",
        "The notification email to you is finally readable: real HTML with a plain-text fallback, field labels instead of internal names, breathing room between entries, dates as DD/MM/YYYY, preserved line breaks, email and phone as clickable links - and only the fields that were actually filled in",
        "Custom text is preserved word for word and just gets the same frame",
      ],
    },
    {
      area: "Free",
      version: "1.9.0",
      date: "Jul 27, 2026",
      items: [
        "Condition groups: a condition used to be a flat rule list with a single ALL/ANY operator, which meant \"(A or B or C) and D\" couldn't be expressed. You can now nest a group inside a condition with its own ALL/ANY operator, which counts as a single rule one level up",
        "The trigger: only allow submission if the calculated date is empty, before the holiday, or after it - while the postal code isn't excluded at the same time",
        "Existing conditions are untouched and need no changes",
      ],
    },
    {
      area: "Free",
      version: "1.8.4",
      date: "Jul 27, 2026",
      items: [
        "Style and script updates now actually reach the browser. Every file was served under the address \"?ver=0.1.0\", a value that never changed since the very first commit. Across more than thirty releases the URL stayed identical, so browsers, CDNs, and page caches kept the first version they ever loaded. A server-side fix could be correct and still be missing in the browser",
        "Asset URLs now carry the plugin version, so every future update busts the cache on its own. This one update still needs a hard reload, since the old URL is already cached",
      ],
    },
    {
      area: "Free",
      version: "1.8.3",
      date: "Jul 27, 2026",
      items: [
        "Select fields rendered incorrectly in Safari. WebKit ignores a dropdown's vertical padding and sizes it purely from the font, making the box smaller than its own text: Safari clipped the top of the selected option and the floating label sat on top of it. Flinkform now draws the field itself, so it's the same height in every browser",
        "A freshly inserted field now carries a label in the site's language. The defaults live in a JSON file that never went through translation, so a new date field read \"Date\" even on a German site. Labels you've set yourself are untouched",
      ],
    },
    {
      area: "Free",
      version: "1.8.2",
      date: "Jul 27, 2026",
      items: [
        "A submit button locked by a submit condition now actually looks locked. It was already disabled, but kept its color, hover state, and normal cursor, so only a gray hint below it gave it away. Now grayed out, desaturated, and shown with a locked cursor, across all three button styles",
        "The hint below now aligns to the button instead of centering across the full form width",
      ],
    },
    {
      area: "Free",
      version: "1.8.1",
      date: "Jul 27, 2026",
      items: [
        "The block editor is finally translated. German language files for the editor always shipped with the plugin, but WordPress never read them: by default it only looks in a folder that translate.wordpress.org populates. As a result, the entire form inspector stayed in English, even on sites whose frontend and admin were correctly localized",
      ],
    },
    {
      area: "Free",
      version: "1.8.0",
      date: "Jul 27, 2026",
      items: [
        "Per-form sender: name and email address are now configurable directly. Both emails then come from your own address instead of \"wordpress@your-domain\". No SMTP plugin needed, since the sender is a wp_mail setting that applies regardless of how your site delivers mail",
        "Reply-to for the confirmation email sent to the submitter. Previously only the admin notification had one. This lets the form send from the site's address while replies land wherever you actually read them",
        "The editor warns when the sender address is on a different domain than the site. Your own server can't send for foreign domains - such emails fail SPF and land in spam",
      ],
    },
    {
      area: "Free",
      version: "1.7.2",
      date: "Jul 27, 2026",
      items: [
        "The spam question (\"What is 2 + 2?\") no longer flashes on a hard reload. It's the fallback for visitors without JavaScript and used to stay on screen until the background calculation finished solving it. It's now hidden from the start wherever JavaScript runs, and only comes back if the solver fails or a slow device takes too long",
        "Even spacing for floating labels. The space reserved for the raised label used to depend on the individual text field, so rows ended up unevenly spaced depending on the neighboring block. It's now tied to the form's row spacing and applies evenly to every row",
        "No more layout jump on load: this space no longer changes size once the label-notch color detection kicks in",
      ],
    },
    {
      area: "Free",
      version: "1.7.1",
      date: "Jul 27, 2026",
      items: [
        "Conditional fields and notices no longer flash briefly on load. Everything used to be delivered visible first and only hidden once JavaScript ran. The server now determines the initial state itself and delivers hidden blocks already hidden",
      ],
    },
    {
      area: "Free",
      version: "1.7.0",
      date: "Jul 27, 2026",
      items: [
        "New block: Notice. A highlighted box between fields, in four types (info, success, warning, important) with a matching icon. It submits nothing, so it never shows up in submissions or the CSV export",
        "Its real strength is conditional logic: the notice only appears when it applies - a travel surcharge that kicks in past a certain distance, say, or an explanation tied to exactly one answer",
        "Text supports bold, italic, and links. Colors follow the theme wherever it defines any",
      ],
    },
    {
      area: "Free",
      version: "1.6.4",
      date: "Jul 27, 2026",
      items: [
        "Floating labels: a white box appeared behind the raised label on any page whose background wasn't pure white. The notch is now only drawn once the surrounding color is reliably detected; otherwise the label simply sits above the border line",
        "Color detection now handles semi-transparent surfaces too, blends them with what's behind, and re-runs on window resize and dark-mode switches. For gradients and background images, it deliberately skips the notch instead of guessing a color that isn't really there",
        "The editor uses the same detection as the frontend, so preview and published page can no longer drift apart",
      ],
    },
    {
      area: "Free",
      version: "1.6.3",
      date: "Jul 27, 2026",
      items: [
        "German translation restored: version 1.6.1 had regenerated the language files from an incomplete template, losing 243 already-translated strings. German installs saw large parts of the interface fall back to English. 387 of 392 strings are now translated (the rest are URLs)",
        "Address field: with the \"floating\" label position, the label and placeholder overlapped. Subfields now follow the form's label setting, just like every other text field",
        "The red border on invalid fields is back. A CSS selector missed its target, making the error highlight on the input invisible (the error message below it was always there)",
        "Conditional logic can now reference address fields. The rule picker now offers the individual subfields (street, zip, city) instead of the combined field a rule could never actually match against",
      ],
    },
    {
      area: "Free",
      version: "1.6.0 - 1.6.2",
      date: "Jul 24, 2026",
      items: [
        "New field type: address field with street, zip, and city in a compact grid layout. Optional address line 2 and country. Each subfield is stored separately, giving you clean CSV columns",
        "The address field's subfields inherit every form setting: field style, label position, spacing, and error states",
      ],
    },
    {
      area: "Free",
      version: "1.5.2 - 1.5.3",
      date: "Jul 24, 2026",
      items: [
        "Conditional logic: new date operators \"is before (date)\" and \"is on or after (date)\" for comparisons against a fixed date in YYYY-MM-DD format",
        "Floating labels: the label notch's background color is now detected automatically from the surrounding container, so it fits on any surface with no manual setting",
        "Bugfix: conditional logic now hides fields correctly (a CSS specificity issue)",
      ],
    },
    {
      area: "Free",
      version: "1.5.0 - 1.5.1",
      date: "Jul 17, 2026",
      items: [
        "The radio field can now display its options as clickable buttons instead of a list. The active option fills with the form's primary color. Technically they remain real radio inputs, so keyboard and screen reader behavior is unchanged",
        "Button shape is selectable: pill, rounded, or square",
      ],
    },
    {
      area: "Free",
      version: "1.4.0 - 1.4.4",
      date: "Jul 14, 2026",
      items: [
        "Forms inside popups and modals now submit without a page reload. The success message and validation errors appear right inside the popup, it stays open, and the visitor sees the result. Every server-side protection mechanism keeps running unchanged",
        "Important fix: forms living outside the page content - in a footer, a header template part, or a site-wide popup - were silently discarded on submit. They're now found and saved reliably",
        "The spam token is now valid for 30 minutes instead of 5. Anyone reading a long page or opening a popup later on is no longer rejected for no reason",
      ],
    },
    {
      area: "Free",
      version: "1.3.0 - 1.3.1",
      date: "Jul 3, 2026",
      items: [
        "Double-submit protection: double-clicking, the back button, or parallel requests no longer create duplicate submissions, emails, or payments",
        "New extension point for add-ons to render field values in the admin (Flinkform Pro uses it to show uploaded files as download links)",
      ],
    },
    {
      area: "Pro",
      version: "1.2.0 - 1.2.1",
      date: "Jul 5, 2026",
      items: [
        "Stripe Payment Element: Apple Pay, Google Pay, and Link in addition to credit card and SEPA direct debit",
        "SEPA direct debit with automatic confirmation via Stripe webhook",
        "Multi-file upload: up to 10 files per field with a size check before submission",
        "Calculation fields: live preview in the browser, safely recalculated server-side",
        "CSV export extended with payment columns (status, amount, currency)",
      ],
    },
    {
      area: "Free",
      version: "1.1.0 - 1.2.1",
      date: "Jun 30, 2026",
      items: [
        "The consent field is now reliably enforced as required server-side",
        "Privacy policy link as a placeholder right inside the consent text",
        "Redesigned error messages with inline icons and a gentle animation",
        "Pages with a form are excluded from full-page caching, which prevents expired spam tokens",
      ],
    },
  ],
  changelogFooterPre: "The complete changelog of every version lives on the ",
  changelogFooterLinkText: "WordPress.org directory",
  changelogFooterPost: ".",
};
