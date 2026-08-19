import type { Widen } from "@/lib/i18n/widen";

export const home = {
  meta: {
    title: "Flinkform - Kostenloses WordPress Formular-Plugin, DSGVO by design",
    description:
      "Flinkform ist ein block-natives Formular-Plugin für WordPress: Multi-Step, bedingte Logik, Spam-Schutz ohne reCAPTCHA. Kostenlos, DSGVO-konform, aus Deutschland.",
    ogTitle: "Flinkform - Das privacy-first Formular-Plugin für WordPress",
    ogDescription:
      "Multi-Step, bedingte Logik, Spam-Schutz ohne externe Dienste. Kostenlos und DSGVO by design.",
  },
  hero: {
    eyebrow: "WordPress Formular-Plugin · Kostenlos",
    titlePre: "Das letzte Formular-Plugin, das du ",
    titleHighlight: "installieren",
    titlePost: " wirst.",
    entity:
      "Flinkform ist ein block-natives Formular-Plugin für den WordPress-Block-Editor. Es bietet Multi-Step-Formulare, bedingte Logik und Spam-Schutz ohne externe Dienste, kostenlos. Anders als WPForms oder Gravity Forms nutzt es keinen eigenen Builder, sondern den WordPress-Editor selbst.",
    sub: "DSGVO by design: kein reCAPTCHA, kein US-Dienst, keine IP-Speicherung. Alles bleibt auf deinem Server.",
    ctaPrimary: "Kostenlos auf WordPress.org",
    ctaSecondary: "Live ausprobieren ↓",
    versionLine: "Version 1.3.0 · WordPress 6.5+ · PHP 8.1+ · GPLv2",
    demoCaption:
      "So fühlt sich Flinkform an: Multi-Step, Live-Berechnung, ohne reCAPTCHA. Klick dich durch.",
  },
  pillars: {
    heading: "Was Flinkform anders macht",
    sub: "Kein aufgesetzter Builder, keine Plugin-Sammlung, keine Datenabflüsse. Flinkform ist das Formular-Plugin, das WordPress von Haus aus haben sollte.",
    items: [
      {
        title: "Ein Plugin statt sechs",
        desc: "Multi-Step, bedingte Logik, Spam-Schutz, Submissions-Dashboard, E-Mail-Benachrichtigungen: alles eingebaut. Keine Add-ons, keine Kompatibilitätsprobleme.",
      },
      {
        title: "Nativ im Block-Editor",
        desc: "Jedes Feld ist ein Gutenberg-Block. Kein separater Formular-Builder, kein Shortcode. Du baust Formulare wie einen normalen WordPress-Beitrag.",
      },
      {
        title: "DSGVO ohne Kompromisse",
        desc: "Spam-Schutz läuft komplett auf deinem Server. Kein reCAPTCHA, kein Akismet, keine IP-Speicherung. Consent-Feld, automatische Datenlöschung und WordPress-Privacy-Tools sind eingebaut.",
      },
      {
        title: "Unter 15 KB, ohne jQuery",
        desc: "Das gesamte Frontend-JavaScript bleibt unter 15 KB gzipped. Assets laden nur auf Seiten, die ein Formular enthalten. Server-Side Rendering zeigt Formulare sofort.",
      },
      {
        title: "Submissions-Dashboard",
        desc: "Alle Einsendungen direkt in WordPress: Suche, Filter, Sortierung, Bulk-Aktionen, gelesen/ungelesen. Kein separates Plugin, kein Flamingo.",
      },
      {
        title: "Barrierefrei (WCAG 2.1 AA)",
        desc: "Volle Tastaturnavigation, Screenreader-Support, Fokus-Management bei Multi-Step. Respektiert prefers-reduced-motion.",
      },
    ],
  },
  privacyBlock: {
    kicker: "Die unbequeme Wahrheit",
    title:
      "Dein Kontaktformular schickt gerade Besucherdaten in die USA. Ohne dass du es weißt.",
    paragraphs: [
      "Fast jedes große Formular-Plugin löst sein Spam-Problem mit Google reCAPTCHA. Praktisch für das Plugin. Weniger praktisch für dich: Google sammelt dabei Daten deiner Besucher, und du stehst mit deinem Namen im Impressum dafür gerade.",
      "Das ist kein Bauchgefühl, sondern dokumentierte Rechtslage: ein Gerichtsurteil in Österreich, Bußgelder in Frankreich, deutliche Worte der deutschen Aufsicht. Die Kurzfassung steht in den Karten, die Details im Blog.",
    ],
    highlight:
      "Flinkform braucht das alles nicht: Der Spam-Schutz läuft komplett auf deinem Server. Kein Google, keine Einwilligung, kein Cookie-Banner. Dein Formular gehört dir.",
    linkText: "Zum Hintergrund: BVwG-Urteil und CNIL-Bußgelder im Detail",
    linkHref: "/blog/recaptcha-dsgvo-rechtsrisiko",
    stats: [
      {
        value: "13.09.2024",
        label: "BVwG-Urteil (W298 2274626-1): reCAPTCHA ohne Einwilligung ist DSGVO-widrig",
      },
      {
        value: "125.000 €",
        label: "CNIL-Bußgeld gegen Cityscoot, u. a. wegen reCAPTCHA ohne Einwilligung",
      },
      {
        value: "0",
        label: "externe Requests durch den Flinkform-Spam-Schutz. Alles auf deinem Server",
      },
    ],
  },
  features: {
    heading: "Alles drin. Alles kostenlos.",
    sub: "Multi-Step und bedingte Logik kosten bei WPForms regulär ab 99 Dollar pro Jahr, bei Gravity Forms ab 59 Dollar. Bei Flinkform: nichts.",
    items: [
      "14 Feldtypen: Text, E-Mail, Textarea, Zahl, Datum, URL, Telefon, Dropdown, Radio, Checkbox, Toggle, Hidden, Consent, Adresse",
      "Multi-Step-Formulare mit Fortschrittsanzeige (Balken, Punkte oder Zahlen) und Schritt-Validierung",
      "Bedingte Logik: Felder und Schritte ein-/ausblenden, Schritte überspringen, Submit-Button sperren. Datumsvergleiche inklusive (vor/ab einem Stichtag)",
      "Einfachauswahl wahlweise als klassische Liste oder als anklickbare Buttons in deiner Markenfarbe",
      "Spam-Schutz ohne externe Dienste: Honeypot, signierter Zeit-Check, Proof-of-Work mit Mathe-Fallback ohne JavaScript",
      "Admin- und Bestätigungs-Mails mit Merge-Tags",
      "Automatische theme.json-Übernahme: Farben, Typografie, Abstände, Radius",
      "Style-Panel: 4 Feld-Stile, 4 Label-Positionen (Floating Labels passen sich automatisch an den Hintergrund an), 3 Button-Stile, Farben für Beschriftungen, Hinweistexte und Überschriften direkt im Editor",
      "Weiterleitung auf Danke-Seite mit Conversion-Tracking-Parametern (GA4, Meta Pixel, Plausible)",
      "Popup-tauglich: In Modals und Popups senden Formulare ohne Neuladen ab, Erfolgsmeldung und Fehler erscheinen direkt im Popup",
      "Barrierefreiheit eingebaut: echte Label-Verknüpfungen, Fehler-Ansagen für Screenreader, Fokus-Management über alle Schritte, Spam-Schutz ohne CAPTCHA. Formular-Markup besteht axe-core (WCAG 2.1 A/AA) ohne Verstöße",
      "Automatische Datenlöschung nach konfigurierbarer Aufbewahrungsfrist",
      "Datenexport und Löschung über die WordPress-Privacy-Tools",
      "Zwei-Spalten-Layout mit Volle-Breite-Option pro Feld",
      "Gebaut mit der WordPress Interactivity API, block.json v3",
    ],
  },
  compare: {
    heading: "Flinkform im Vergleich",
    sub: "Ehrlich verglichen: SureForms ist ebenfalls block-nativ und gut. Der Flinkform-Vorsprung ist der Privacy-Default, die theme.json-Übernahme und das schlanke Frontend.",
    caption: "Funktionsvergleich: Flinkform, Contact Form 7, WPForms, Gravity Forms und SureForms",
    columns: ["Flinkform", "Contact Form 7", "WPForms", "Gravity Forms", "SureForms"],
    rows: [
      {
        feature: "Spam-Schutz ohne US-Dienst",
        cells: [true, "reCAPTCHA / Akismet nötig", "reCAPTCHA / Turnstile", "reCAPTCHA / Turnstile", "reCAPTCHA / hCaptcha"],
      },
      {
        feature: "Keine IP-Speicherung ab Werk",
        cells: [true, "Akismet sendet Daten", false, false, "teils"],
      },
      { feature: "Block-Editor nativ", cells: [true, false, false, false, true] },
      { feature: "Multi-Step kostenlos", cells: [true, false, false, false, true] },
      { feature: "Bedingte Logik kostenlos", cells: [true, false, false, false, true] },
      {
        feature: "Submissions-Dashboard kostenlos",
        cells: [true, "Extra-Plugin (Flamingo)", false, false, true],
      },
      {
        feature: "Erbt Theme-Design (theme.json)",
        cells: [true, false, "eigene Styles", "eigene Styles", "eigene Styles"],
      },
      {
        feature: "Frontend-JS unter 15 KB, nur bei Bedarf geladen",
        cells: [true, "lädt auf jeder Seite", "schwerer", "schwerer", "React-basiert"],
      },
      {
        feature: "Aktive Weiterentwicklung",
        cells: [true, "Feature Freeze seit 2026", true, true, true],
      },
      {
        feature: "Preis Pro-Version (1 Website)",
        cells: ["59 €/Jahr", "kein Pro", "99 $/Jahr", "59 $/Jahr", "59 $/Jahr"],
      },
    ],
    note: "Stand Juli 2026, reguläre Listenpreise der Anbieter. Contact Form 7 ist kostenlos, braucht für Multi-Step, Einsendungen und bedingte Logik aber 3 bis 4 Zusatz-Plugins.",
    linkAll: "Alle Vergleiche im Detail",
    linkCalc: "Kostenrechner: Was zahlst du gerade?",
  },
  proTeaser: {
    eyebrow: "Flinkform Pro",
    title: "Das Formular, das Geld verdient.",
    desc: "Besucher zahlen per SEPA, Apple Pay oder Karte direkt im Formular. Preise berechnen sich live, während sie tippen. Einsendungen landen automatisch im CRM. Ein Add-on statt fünf Plugins.",
    items: [
      "Stripe Payments: Karte, SEPA-Lastschrift, Apple Pay, Google Pay",
      "Berechnungsfelder für Angebots- und Preisrechner",
      "Webhooks ins CRM, SMTP-Versand mit Sende-Log",
      "Datei-Upload mit bis zu 10 Dateien pro Feld",
    ],
    cta: "Flinkform Pro entdecken · ab 59 €/Jahr",
  },
  faq: {
    items: [
      {
        q: "Ist Flinkform wirklich komplett kostenlos?",
        a: "Ja. Multi-Step, bedingte Logik, Submissions-Dashboard, Spam-Schutz: alles im kostenlosen Plugin auf WordPress.org. Keine künstlichen Limits, kein beschnittener Testmodus. Flinkform Pro ist ein optionales Add-on für Zahlungen, Webhooks, Datei-Uploads und mehr.",
      },
      {
        q: "Warum nicht einfach Contact Form 7?",
        a: "Contact Form 7 ist seit 2026 im Feature Freeze: Version 6.2 ist die letzte mit neuen Funktionen. Für Multi-Step, bedingte Logik oder ein Submissions-Dashboard brauchst du bei CF7 drei bis vier zusätzliche Plugins. Flinkform hat das alles eingebaut.",
      },
      {
        q: "Was unterscheidet Flinkform von WPForms oder Gravity Forms?",
        a: "WPForms und Gravity Forms nutzen einen eigenen, separaten Formular-Builder. Flinkform lebt direkt im WordPress-Block-Editor. Außerdem brauchst du für bedingte Logik und mehrseitige Formulare bei WPForms mindestens den Basic-Plan, regulär 99 Dollar pro Jahr. Bei Flinkform ist beides kostenlos.",
      },
      {
        q: "Brauche ich reCAPTCHA für den Spam-Schutz?",
        a: "Nein. Flinkform bringt einen eigenen Spam-Schutz mit, der komplett auf deinem Server läuft: Honeypot, signierter Zeit-Check und Proof-of-Work. Kein externer Dienst, keine Einwilligung nötig, keine Datenweitergabe in die USA.",
      },
      {
        q: "Ist Flinkform DSGVO-konform?",
        a: "Flinkform ist auf Datenschutz gebaut: keine IP-Speicherung, kein User-Agent-Logging, keine externen Dienste, kein Tracking. Consent-Feld, automatische Datenlöschung pro Formular und die WordPress-Privacy-Tools (Datenexport und Löschung) sind eingebaut.",
      },
      {
        q: "Ist Flinkform barrierefrei?",
        a: "Barrierefreiheit ist eingebaut, nicht nachgerüstet: echte Label-Verknüpfungen, fieldset/legend für Auswahlgruppen, Fehlermeldungen werden Screenreadern angesagt und mit dem Feld verknüpft, der Fokus springt aufs erste fehlerhafte Feld, Schrittwechsel werden per aria-live angekündigt, Fokus-Ringe bleiben sichtbar und der Spam-Schutz kommt ohne CAPTCHA aus. Das Formular-Markup besteht automatisierte axe-core-Prüfungen gegen WCAG 2.1 A/AA ohne Verstöße, auch im Fehlerzustand. Ein formales Audit mit Screenreader-Protokoll steht noch aus. Deine Farbwahl im Editor beeinflusst den Kontrast und liegt in deiner Hand.",
      },
      {
        q: "Funktioniert Flinkform mit meinem Theme?",
        a: "Ja. Flinkform liest die Design-Tokens deines Themes aus theme.json und übernimmt Farben, Typografie, Abstände und Eckenradius automatisch. Getestet mit GeneratePress, Twenty Twenty-Five, Astra und Kadence. Und wo das Theme nicht passt, stellst du Farben für Überschriften, Beschriftungen und Hinweistexte direkt im Editor ein, ganz ohne CSS.",
      },
      {
        q: "Funktioniert Flinkform in einem Popup oder Modal?",
        a: "Ja. Liegt ein Flinkform-Formular in einem Popup oder Modal (einem Container mit role=\"dialog\" oder einem nativen dialog-Element), sendet es ohne Neuladen der Seite ab: Die Erfolgsmeldung und Validierungsfehler erscheinen direkt im Popup. Formulare außerhalb von Popups nutzen weiter den klassischen Ablauf. Es ist keine Konfiguration nötig.",
      },
      {
        q: "Kann ich meine Contact-Form-7-Formulare migrieren?",
        a: "Einen automatischen Importer gibt es aktuell nicht. Ein einfaches Kontaktformular baust du in Flinkform aber in unter 5 Minuten neu, direkt im Block-Editor, wie einen normalen Beitrag.",
      },
      {
        q: "Gibt es eine Pro-Version?",
        a: "Ja. Flinkform Pro erweitert das kostenlose Plugin um Stripe-Zahlungen (Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay), Berechnungsfelder, Multi-Datei-Upload, SMTP-Versand, Webhooks, Newsletter-Anbindung, CSV-Export und Custom CSS. Ab 59 € pro Jahr.",
      },
    ],
  },
  requirements: {
    heading: "Voraussetzungen",
    items: [
      { label: "WordPress", value: "6.5+" },
      { label: "PHP", value: "8.1+" },
      { label: "Editor", value: "Gutenberg" },
      { label: "Preis", value: "Kostenlos" },
    ],
  },
  keywordCards: [
    {
      title: "Contact Form 7 Alternative",
      text: "Contact Form 7 ist seit 2026 im Feature Freeze. Flinkform bietet alles, was CF7 kann, plus Multi-Step, bedingte Logik und Submissions-Dashboard. In einem Plugin statt sechs.",
      href: "/vergleich/contact-form-7-alternative",
    },
    {
      title: "WPForms Alternative",
      text: "WPForms verlangt für bedingte Logik und mehrseitige Formulare mindestens Basic, regulär 99 Dollar pro Jahr. Die Lite-Version speichert keine Einsendungen. Flinkform kann beides kostenlos.",
      href: "/vergleich/wpforms-alternative",
    },
    {
      title: "Gravity Forms Alternative",
      text: "Gravity Forms hat keine kostenlose Version, der Einstieg kostet 59 Dollar pro Jahr. Flinkform deckt die Standard-Features kostenlos ab, DSGVO-konform und block-nativ.",
      href: "/vergleich/gravity-forms-alternative",
    },
    {
      title: "WordPress-Formular ohne reCAPTCHA",
      text: "Die meisten Formular-Plugins setzen auf reCAPTCHA oder Akismet. Beides sendet Besucherdaten in die USA. Flinkform schützt komplett auf deinem Server.",
      href: "/wissen/wordpress-formular-ohne-recaptcha",
    },
  ],
  keywordReadMore: "Weiterlesen",
  finalCta: {
    title: "In 5 Minuten steht dein erstes Formular.",
    desc: "Installieren, Form-Block einfügen, veröffentlichen. Kein Account, keine Kreditkarte, kein Haken.",
    ctaPrimary: "Kostenlos auf WordPress.org",
    ctaSecondary: "Erste Schritte lesen",
  },
} as const;

export type HomeDict = Widen<typeof home>;
