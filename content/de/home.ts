import type { Widen } from "@/lib/i18n/widen";

export const home = {
  meta: {
    title: "Flinkform - Kostenloses Formular-Plugin für den WordPress-Block-Editor",
    description:
      "Multi-Step, bedingte Logik und Einsendungen im Dashboard, kostenlos und direkt im Block-Editor. Der einfache Umstieg von Contact Form 7, ein Plugin für alle Kundenseiten. Aus Deutschland.",
    ogTitle: "Flinkform - Fünf Plugins. Oder dieses eine.",
    ogDescription:
      "Formular bauen, Einsendungen speichern, mehrseitig machen, bedingt ausblenden, Spam abwehren. Kostenlos, direkt im WordPress-Block-Editor.",
  },
  hero: {
    eyebrow: "WordPress-Formular-Plugin · Kostenlos",
    titlePre: "Fünf Plugins. Oder ",
    titleHighlight: "dieses eine",
    titlePost: ".",
    // Dekorative Zeile über der H1, wird getippt und durchgestrichen.
    // Funktionen statt Produktnamen: fremde Marken durchzustreichen wäre
    // vergleichende Werbung mit Herabsetzungs-Risiko (§ 6 UWG).
    replaces: ["Formular-Plugin", "Einsendungs-Plugin", "Multi-Step-Plugin", "Logik-Plugin", "Captcha-Plugin"],
    entity:
      "Formular bauen, Einsendungen speichern, mehrseitig machen, Felder bedingt ausblenden, Spam abwehren. Anderswo sind das fünf Plugins oder ein Bezahl-Tarif. Bei Flinkform ist es eins, kostenlos, direkt im WordPress-Block-Editor.",
    sub: "Ohne reCAPTCHA, ohne Drittanbieter, ohne IP-Speicherung. Alles bleibt auf deinem Server.",
    ctaPrimary: "Kostenlos auf WordPress.org",
    ctaSecondary: "Von Contact Form 7 umsteigen →",
    ctaSecondaryHref: "/vergleich/contact-form-7-alternative",
    versionLine: "Version {version} · WordPress 6.5+ · PHP 8.1+ · GPLv2",
    demoCaption: "Multi-Step, Live-Berechnung, ohne reCAPTCHA.",
    demoLink: "Alles auf der Live-Demo durchklicken →",
  },
  pillars: {
    heading: "Alles drin. Und zwar kostenlos.",
    sub: "Multi-Step, bedingte Logik und ein Dashboard für die Einsendungen. Bei WPForms kostet dieselbe Kombination regulär ab 99 Dollar im Jahr, bei Gravity Forms gibt es sie gar nicht gratis.",
    items: [
      {
        title: "Multi-Step und bedingte Logik",
        desc: "Formulare in Schritte teilen, Felder und ganze Schritte je nach Antwort ein- oder ausblenden. Im kostenlosen Plugin, ohne Add-on.",
      },
      {
        title: "Direkt im Block-Editor",
        desc: "Jedes Feld ist ein Block. Kein zweiter Builder, kein Shortcode. Du baust ein Formular wie einen normalen Beitrag.",
      },
      {
        title: "Einsendungen im Dashboard",
        desc: "Alles landet in WordPress: Suche, Filter, gelesen und ungelesen. Geht eine Mail verloren, ist die Anfrage trotzdem da.",
      },
      {
        title: "Datenschutz ab Werk",
        desc: "Spam-Schutz auf deinem Server und keine IP-Speicherung, ohne dass du etwas einschaltest. Consent-Feld und automatische Löschfristen sind eingebaut.",
      },
      {
        title: "Schnell und cachebar",
        desc: "Unter 15 KB JavaScript, ohne jQuery, geladen nur auf Seiten mit Formular. Und dein Seiten-Cache bleibt an, auch auf der Kontaktseite.",
      },
      {
        title: "Barrierefrei gebaut",
        desc: "Tastatur, Screenreader, Fokus-Management über alle Schritte. Das Formular-Markup besteht axe-core-Prüfungen gegen WCAG 2.1 AA.",
      },
    ],
  },
  cf7: {
    heading: "Kommst du von Contact Form 7?",
    intro: [
      "Contact Form 7 läuft auf über 10 Millionen Websites und hat viele Jahre gute Arbeit gemacht. Laut Ankündigung des Entwicklers kommen nach Version 6.2 keine neuen Funktionen mehr, nur noch Sicherheits-Updates. Deine Formulare laufen also weiter.",
      "Die Frage ist nur, ob du beim nächsten Projekt wieder damit anfängst.",
    ],
    gainsHeading: "Was du beim Umstieg dazubekommst",
    gains: [
      "Einsendungen in WordPress, ohne Flamingo",
      "Multi-Step und bedingte Logik, ohne Zusatz-Plugin",
      "Spam-Schutz ab Werk, ohne Turnstile oder reCAPTCHA",
      "Das Design deines Themes, ohne eigenes CSS",
    ],
    stepsHeading: "So läuft der Umstieg",
    steps: [
      "Flinkform installieren. Contact Form 7 bleibt aktiv, beide laufen parallel.",
      "Formular im Block-Editor nachbauen. Ein Kontaktformular dauert ein paar Minuten, mehrstufige Formulare mit Logik entsprechend länger.",
      "Auf der Seite den Contact-Form-7-Shortcode durch den Flinkform-Block ersetzen, testen, fertig. Seite für Seite, in deinem Tempo.",
    ],
    honest:
      "Einen automatischen Import gibt es noch nicht, du baust die Formulare neu. Und Datei-Uploads, die CF7 kostenlos kann, gibt es bei uns nur in Pro. Das war's an Haken.",
    cta: "Der ganze Vergleich mit Contact Form 7 →",
    ctaHref: "/vergleich/contact-form-7-alternative",
  },
  agency: {
    eyebrow: "Für Agenturen",
    heading: "Ein Plugin für alle Kundenseiten.",
    sub: "Wer 25 Kundenseiten betreut, will nicht 25 Mal ein Formular-Plugin einrichten, stylen und in der Datenschutzerklärung erklären.",
    items: [
      {
        title: "Einmal lernen, überall einsetzen.",
        desc: "Gleiche Bedienung auf jeder Seite, direkt im Block-Editor. Den kennen deine Kunden schon, da gibt es nichts neu zu erklären.",
      },
      {
        title: "Kein Styling pro Kunde.",
        desc: "Flinkform übernimmt Farben, Schriften und Abstände aus der theme.json. Das Formular sieht aus wie die Seite, auf der es steht.",
      },
      {
        title: "Kein Drittanbieter in der Datenschutzerklärung.",
        desc: "Das kostenlose Plugin bindet keinen externen Dienst ein. Also gibt es auch keinen, den du bei jedem Kunden erklären musst.",
      },
      {
        title: "Seiten bleiben cachebar.",
        desc: "Viele Formular-Plugins nehmen Formularseiten aus dem Cache. Flinkform nicht. Keine Ausnahmeregeln, keine langsame Kontaktseite.",
      },
    ],
    price:
      "Flinkform Pro für Agenturen: 149 € im Jahr für bis zu 25 Websites. Unter 6 € pro Kundenseite, mit allen Pro-Funktionen.",
    cta: "Zur Agency-Lizenz →",
    ctaHref: "/pro#agency",
  },
  privacyBlock: {
    kicker: "Datenschutz",
    title: "Mit reCAPTCHA hast du Aufwand. Mit Flinkform nicht.",
    paragraphs: [
      "Seit April 2026 arbeitet Google bei reCAPTCHA als Auftragsverarbeiter. Das hat den Einsatz einfacher gemacht, und das gehört ehrlich gesagt.",
      "Aufwandsfrei ist reCAPTCHA trotzdem nicht: AV-Vertrag, Eintrag in der Datenschutzerklärung, im Zweifel eine Einwilligung, Übermittlung in die USA. Auf jeder Website neu.",
    ],
    highlight:
      "Flinkform braucht das nicht. Honeypot, signierter Zeit-Check und Proof-of-Work laufen ab Werk auf deinem Server.",
    linkText: "Was sich bei reCAPTCHA geändert hat",
    linkHref: "/blog/recaptcha-dsgvo-rechtsrisiko",
    stats: [
      {
        value: "02.04.2026",
        label: "Seitdem ist Google bei reCAPTCHA Auftragsverarbeiter. Den AV-Vertrag schließt du.",
      },
      {
        value: "3 Stufen",
        label: "Spam-Schutz ab Werk: Honeypot, signierter Zeit-Check, Proof-of-Work",
      },
      {
        value: "0",
        label: "externe Requests durch den Flinkform-Spam-Schutz",
      },
    ],
  },
  proof: {
    heading: "Glaub uns nicht. Frag die hier.",
    sub: "Die Bewertungen von WordPress.org, unverändert übernommen.",
    rating: "{average} von 5 Sternen aus {count} Bewertungen auf WordPress.org",
    allReviews: "Alle Bewertungen auf WordPress.org →",
    source: "Bewertung auf WordPress.org",
    clientSites: "Im Einsatz auf {count} Kundenseiten von dbw media.",
    notice:
      "Bewerten kann auf WordPress.org jeder mit einem WordPress.org-Konto. Ob jemand das Plugin tatsächlich nutzt, prüft WordPress.org nicht, und wir auch nicht.",
  },
  proTeaser: {
    eyebrow: "Flinkform Pro",
    title: "Das Formular, das Geld verdient.",
    desc: "Drei Formulare, die mit Flinkform Pro direkt Umsatz machen. Alle drei kannst du auf der Demo ausprobieren, mit Stripe-Testzahlungen.",
    cases: [
      {
        title: "Angebot live berechnen",
        desc: "Paket wählen, Umfang schieben, Extras anhaken: Die Summe rechnet mit, während der Besucher tippt. Beim Absenden rechnet der Server jede Formel nach.",
        demoText: "Angebotsrechner ausprobieren →",
        demoPath: "/angebotsrechner/",
      },
      {
        title: "Anzahlung bei Buchung",
        desc: "Die Anzahlung ist ein eigenes Berechnungsfeld, zum Beispiel 30 Prozent der Summe. Genau dieser Betrag geht an Stripe, per Karte, SEPA-Lastschrift oder Apple Pay.",
        demoText: "Anzahlung im Rechner ansehen →",
        demoPath: "/angebotsrechner/",
      },
      {
        title: "Kurs- oder Eventanmeldung",
        desc: "Ticket wählen, bezahlen, angemeldet. Der Server prüft, ob der bezahlte Betrag zum gewählten Ticket passt. Wer den Preis im Browser verändert, kommt nicht durch.",
        demoText: "Workshop-Anmeldung ausprobieren →",
        demoPath: "/workshop/",
      },
    ],
    itemsHeading: "Außerdem in Pro",
    items: [
      "Stripe: Karte, SEPA-Lastschrift, Apple Pay, Google Pay",
      "Datei-Upload mit bis zu 10 Dateien pro Feld",
      "Webhooks ins CRM, SMTP-Versand mit Sende-Log",
      "Newsletter: Brevo, Mailchimp, CleverReach",
      "CSV-Export und Custom CSS pro Formular",
    ],
    cta: "Flinkform Pro entdecken · ab 59 €/Jahr",
  },
  features: {
    heading: "Was drinsteckt.",
    sub: "Die vollständige Liste. Alles im kostenlosen Plugin.",
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
    heading: "Ehrlich verglichen.",
    sub: "SureForms ist ebenfalls block-basiert und gut gemacht. Der Unterschied: Bei Flinkform sind Multi-Step und bedingte Logik kostenlos, bei allen anderen hier nicht.",
    caption: "Funktionsvergleich: Flinkform, Contact Form 7, WPForms, Gravity Forms und SureForms",
    columns: ["Flinkform", "Contact Form 7", "WPForms", "Gravity Forms", "SureForms"],
    // Jede Zelle ist belegt in docs/vergleich-quellen.md. Neue Zeilen nur mit Quelle.
    rows: [
      {
        feature: "Spam-Schutz ab Werk, ohne externen Dienst",
        cells: [
          "Honeypot, Zeit-Check, Proof-of-Work",
          "nein, Hersteller rät zu Turnstile oder reCAPTCHA",
          "Anti-Spam-Token",
          "Honeypot, pro Formular einschalten",
          "Honeypot, einschalten",
        ],
      },
      {
        feature: "Keine IP-Speicherung ab Werk",
        cells: [true, "speichert keine Einsendungen", "Pro speichert IP, abschaltbar", "speichert IP, abschaltbar", true],
      },
      { feature: "Formular entsteht im Block-Editor", cells: [true, false, "eigener Builder", "eigener Builder", true] },
      { feature: "Multi-Step kostenlos", cells: [true, "Zusatz-Plugin", false, "keine Gratis-Version", false] },
      { feature: "Bedingte Logik kostenlos", cells: [true, "Zusatz-Plugin", false, "keine Gratis-Version", false] },
      {
        feature: "Einsendungen im Dashboard kostenlos",
        cells: [true, "Zusatz-Plugin (Flamingo)", "erst ab Basic", "keine Gratis-Version", true],
      },
      {
        feature: "Neue Funktionen",
        cells: [true, "nach 6.2 nur noch Wartung (angekündigt)", true, true, true],
      },
      {
        feature: "Preis Pro-Version (1 Website)",
        cells: ["59 €/Jahr", "kein Pro", "99 $/Jahr", "59 $/Jahr", "kein Einzelplan, 149 $ für 5"],
      },
    ],
    note: "Stand: 28. September 2026. Reguläre Listenpreise und Herstellerdokumentation der jeweiligen Anbieter. Contact Form 7 speichert laut Hersteller keine Einsendungen und kennt weder Multi-Step noch bedingte Logik, dafür braucht es je ein Zusatz-Plugin.",
    linkAll: "Alle Vergleiche im Detail",
    linkCalc: "Kostenrechner: Was zahlst du gerade?",
  },
  faq: {
    items: [
      {
        q: "Ist Flinkform wirklich komplett kostenlos?",
        a: "Ja. Multi-Step, bedingte Logik, Submissions-Dashboard, Spam-Schutz: alles im kostenlosen Plugin auf WordPress.org. Keine künstlichen Limits, kein beschnittener Testmodus. Flinkform Pro ist ein optionales Add-on für Zahlungen, Webhooks, Datei-Uploads und mehr.",
      },
      {
        q: "Warum nicht einfach Contact Form 7?",
        a: "Contact Form 7 bekommt nach Version 6.2 keine neuen Funktionen mehr, nur noch Wartung. Es speichert von sich aus keine Einsendungen, und für Multi-Step oder bedingte Logik brauchst du je ein Zusatz-Plugin. Flinkform hat das alles eingebaut.",
      },
      {
        q: "Kann ich meine Contact-Form-7-Formulare migrieren?",
        a: "Einen automatischen Import gibt es noch nicht. Du baust die Formulare im Block-Editor neu: Ein einfaches Kontaktformular dauert unter 5 Minuten, mehrstufige Formulare mit Logik entsprechend länger. Contact Form 7 kann währenddessen aktiv bleiben, du stellst Seite für Seite um.",
      },
      {
        q: "Was unterscheidet Flinkform von WPForms oder Gravity Forms?",
        a: "WPForms und Gravity Forms nutzen einen eigenen, separaten Formular-Builder. Flinkform lebt direkt im WordPress-Block-Editor. Außerdem brauchst du für bedingte Logik und mehrseitige Formulare bei WPForms mindestens den Basic-Plan, regulär 99 Dollar pro Jahr. Bei Flinkform ist beides kostenlos.",
      },
      {
        q: "Lohnt sich Flinkform für Agenturen?",
        a: "Dafür ist die Agency-Lizenz gemacht: 149 € im Jahr für bis zu 25 Websites, unter 6 € pro Kundenseite. Das kostenlose Plugin bindet keinen externen Dienst ein, übernimmt das Design aus der theme.json und hält die Seiten cachebar. Kein Styling und kein Drittanbieter-Absatz in der Datenschutzerklärung pro Kunde.",
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
        q: "Funktioniert Flinkform mit meinem Caching-Plugin?",
        a: "Ja, und die Seite bleibt gecacht. Viele Formular-Plugins schließen jede Seite mit Formular vom Seiten-Cache aus, weil im HTML Werte stehen, die nur für einen einzigen Aufruf gelten. Flinkform lädt diese Werte seit Version 1.14.0 erst dann nach, wenn ein Besucher das Formular tatsächlich berührt. Die ausgelieferte Seite ist damit ganz normales, cachebares HTML, und wer nur vorbeiscrollt, löst keine Anfrage an den Server aus. Der Spam-Schutz bleibt unverändert. Unter Werkzeuge und Website-Zustand zeigt dir eine Prüfung, ob deine Formularseiten wirklich gecacht werden.",
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
      text: "Contact Form 7 bekommt nach Version 6.2 nur noch Wartung. Flinkform bringt Multi-Step, bedingte Logik, Einsendungen im Dashboard und Spam-Schutz ohne externen Dienst in einem Plugin mit, kostenlos.",
      href: "/vergleich/contact-form-7-alternative",
    },
    {
      title: "WPForms Alternative",
      text: "WPForms verlangt für bedingte Logik und mehrseitige Formulare mindestens Basic, regulär 99 Dollar pro Jahr. Die Lite-Version zeigt keine Einsendungen im Dashboard. Flinkform kann beides kostenlos.",
      href: "/vergleich/wpforms-alternative",
    },
    {
      title: "Gravity Forms Alternative",
      text: "Gravity Forms hat keine kostenlose Version, der Einstieg kostet 59 Dollar pro Jahr. Flinkform deckt die Standard-Features kostenlos ab, direkt im Block-Editor.",
      href: "/vergleich/gravity-forms-alternative",
    },
    {
      title: "WordPress-Formular ohne reCAPTCHA",
      text: "Für mehr als einen Honeypot setzen die meisten Formular-Plugins auf reCAPTCHA oder einen anderen externen Dienst. Flinkform schützt ab Werk dreistufig, komplett auf deinem Server.",
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
