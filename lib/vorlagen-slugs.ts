/**
 * Vorlagen haben eigene englische Slugs (/vorlagen/... ↔ /en/templates/...).
 * Bewusst eine eigene, kleine Datei: Der Sprachumschalter läuft im Browser
 * und soll nur die Slugs laden, nicht die kompletten Vorlagen-Texte.
 */
export const VORLAGEN_SLUGS = [
  { de: "kontaktformular", en: "contact-form" },
  { de: "rueckruf-formular", en: "callback-form" },
  { de: "projektanfrage-formular", en: "project-inquiry-form" },
  { de: "terminanfrage-formular", en: "appointment-request-form" },
  { de: "bewerbungsformular", en: "job-application-form" },
  { de: "angebotsrechner", en: "quote-calculator" },
  { de: "event-anmeldung-mit-zahlung", en: "event-registration-with-payment" },
  { de: "newsletter-anmeldung", en: "newsletter-signup-form" },
] as const;

export type VorlageSlug = (typeof VORLAGEN_SLUGS)[number]["de"];

/** Deutsche Pfade mit abweichendem englischen Pfad. */
export const MAPPED_PATHS: Record<string, string> = {
  "/vorlagen": "/en/templates",
  ...Object.fromEntries(
    VORLAGEN_SLUGS.map(({ de, en }) => [`/vorlagen/${de}`, `/en/templates/${en}`]),
  ),
};
