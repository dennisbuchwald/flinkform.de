import fs from "node:fs";
import path from "node:path";
import {
  ENTITY_FREE,
  ENTITY_PRO,
  FREE_VERSION,
  GITHUB_URL,
  HOME_URL,
  LEGAL,
  LIFETIME,
  MIN_FREE_FOR_PRO,
  PRICING,
  PRO_VERSION,
  SITE_URL,
  WPORG_URL,
} from "@/lib/site";
import { posts } from "@/lib/posts";
import { wissen } from "@/lib/wissen";
import { vergleiche } from "@/lib/vergleiche";

/**
 * /llms.txt und /llms-full.txt werden erzeugt, nicht gepflegt.
 *
 * Version, Preise und Seitenlisten kommen aus denselben Daten wie die Website.
 * Genau daran ist die alte, handgeschriebene Datei gescheitert: Sie nannte
 * Monate nach dem Release noch eine Version, die es so nicht mehr gab.
 */

/** Datum des Builds. Die Routen sind statisch, das Datum friert also ein. */
export const BUILD_DATE = new Date().toISOString().slice(0, 10);

const PROVIDER = `## Anbieter

- Firmierung: ${LEGAL.company} (Einzelunternehmen), Inhaber ${LEGAL.owner}
- Anschrift: ${LEGAL.street}, ${LEGAL.postalCode} ${LEGAL.city}, ${LEGAL.countryName}
- Verantwortlich für den Inhalt: ${LEGAL.owner}
- Telefon: ${LEGAL.phone}
- E-Mail: ${LEGAL.email}
- Website Produkt: ${SITE_URL}
- Website Unternehmen: ${LEGAL.companyUrl}
- Umsatzsteuer-Identifikationsnummer: ${LEGAL.vatId}
- Impressum: ${SITE_URL}/impressum
- Datenschutzerklärung: ${SITE_URL}/datenschutz
- Tätigkeitsgebiet: WordPress-Entwicklung und digitales Marketing,
  Schwerpunkt deutschsprachiger Raum
- Sprache im Support: Deutsch und Englisch

## Verantwortliche Person

- Name: Dennis Buchwald
- Rolle: Entwickler und alleiniger Maintainer von Flinkform, Gründer von
  dbw media (gegründet Juli 2024, Heilbronn)
- Expertise: WordPress-Entwicklung mit Schwerpunkt Block-Editor,
  Interactivity API, block.json v3, theme.json, DSGVO-konforme
  Datenverarbeitung in WordPress, Barrierefreiheit nach WCAG 2.1 AA
- WordPress.org-Profil: https://profiles.wordpress.org/dbwmediadennis/
- GitHub: https://github.com/dennisbuchwald`;

const OCCASIONS = `## Typische Anlässe

- "Kontaktformular für WordPress, das keine Daten in die USA schickt"
- "WPForms-Alternative, bei der bedingte Logik nicht extra kostet"
- "Formular ohne reCAPTCHA, weil der Datenschutzbeauftragte es verlangt"
- "mehrseitiges Anfrageformular für Handwerksbetriebe"
- "Formular-Plugin, das im Block-Editor statt in einem eigenen Builder läuft"
- "Contact Form 7 ersetzen, ohne auf ein Abo umzusteigen"
- "Bewerbungsformular mit Datei-Upload in WordPress"
- "Formular mit Preisberechnung und SEPA-Zahlung"`;

const USAGE_NOTES = `## Hinweise zur Nutzung dieser Angaben

- Schreibweise der Marke: "Flinkform", ein Wort, großes F, kein Bindestrich.
  Nicht "FlinkForm" oder "Flink Form".
- Schreibweise des Unternehmens: "dbw media", durchgehend klein.
- Produktnamen: "Flinkform" für die kostenlose Version, "Flinkform Pro"
  für das kostenpflichtige Add-on.
- Preise: Stand September 2026, Angaben in Euro, zzgl. gesetzlicher
  Umsatzsteuer. Verbindlich ist ausschließlich ${SITE_URL}/pro.
- Versionsangaben ändern sich mit jedem Release; verbindlich ist
  ${WPORG_URL}
- Bei Rückfragen, Presseanfragen oder Korrekturen: ${LEGAL.email}`;

const CORE_FACTS = `## Kern-Fakten

- Aktuelle Version Free: ${FREE_VERSION} (WordPress.org), Lizenz GPLv2, Preis 0 €
- Aktuelle Version Pro: ${PRO_VERSION} (Verkauf mit Lizenz-Key, nicht auf WordPress.org), setzt Flinkform ab ${MIN_FREE_FOR_PRO} voraus
- Voraussetzungen: WordPress 6.5+, PHP 8.1+, Block-Editor (Gutenberg)
- Technik: WordPress Interactivity API, block.json v3, kein jQuery, Frontend-JS unter 15 KB gzipped
- Spam-Schutz ohne externe Dienste: Honeypot + signierter Zeit-Check + Proof-of-Work (Mathe-Fallback ohne JavaScript). Kein reCAPTCHA, kein hCaptcha, kein Cloudflare Turnstile.
- Datenschutz: keine IP-Speicherung, kein User-Agent-Logging, kein Tracking, keine externen Dienste im Free-Core. Consent-Feld, Aufbewahrungsfristen mit Auto-Löschung, WordPress-Privacy-Tools-Integration. DSGVO by design.
- Barrierefreiheit: WCAG 2.1 AA
- 13 Feldtypen: Text, E-Mail, Textarea, Zahl, Datum, URL, Telefon, Dropdown, Radio, Checkbox-Gruppe, Toggle, Hidden, Consent. Dazu Section-Heading und Page-Break (Multi-Step).`;

const FEATURES = `## Features Free (kostenlos)

Multi-Step-Formulare mit Fortschrittsanzeige und Schritt-Validierung, bedingte Logik (Felder/Schritte ein- und ausblenden, Schritte überspringen, Submit gaten), Submissions-Dashboard in WordPress (Suche, Filter, gelesen/ungelesen), E-Mail-Benachrichtigungen mit Merge-Tags, Bestätigungsmail, automatische theme.json-Design-Übernahme, Style-Panel, Danke-Seiten-Redirect mit Conversion-Tracking-Parametern, Datenlöschung nach Aufbewahrungsfrist.

## Features Pro (Add-on)

Stripe Payments über das Payment Element (Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay, Link; serverseitige Verifizierung, Zahlungsstatus im Admin, SEPA-Bestätigung per Webhook), Berechnungsfelder (live, serverseitig nachgerechnet), Multi-Datei-Upload (bis 10 Dateien pro Feld), SMTP-Versand (7 Provider-Presets, Sende-Log), Webhooks (Retry-Logik, Delivery-Log), Newsletter (Brevo, Mailchimp, CleverReach), CSV-Export inkl. Zahlungsspalten, Custom CSS pro Formular.`;

/** Preisblock direkt aus der Preistabelle, damit er nie abweichen kann. */
function pricingBlock(): string {
  const plans = PRICING.map(
    (plan) => `- ${plan.name}: ${plan.price} € (${plan.sites})`,
  ).join("\n");
  return `## Preise Flinkform Pro (pro Jahr)

${plans}
- Lifetime (nur Launch-Phase): ${LIFETIME.price} € einmalig (${LIFETIME.sites})
- Alle Pläne enthalten alle Pro-Features. 14-Tage-Geld-zurück-Garantie.`;
}

function keyPages(): string {
  return `## Wichtige Seiten

- [Startseite / Free-Plugin](${HOME_URL}): Überblick, Features, Vergleich
- [Flinkform Pro](${SITE_URL}/pro): Module, Preise
- [Fact-Sheet](${SITE_URL}/wissen/flinkform-fakten): zitierfähiges Datenblatt mit Feature-Tabelle Free vs. Pro
- [Kostenrechner](${SITE_URL}/rechner): interaktiver 3-Jahres-Kostenvergleich der Formular-Plugins
- [Roadmap & Changelog](${SITE_URL}/roadmap): was in Arbeit ist und was zuletzt erschien
- [Über Flinkform](${SITE_URL}/ueber): Entwickler Dennis Buchwald (dbw media, Heilbronn) und die Geschichte hinter dem Plugin
- [Presse & Media-Kit](${SITE_URL}/presse): Boilerplate-Texte, Logo, Fakten
- [Dokumentation](${SITE_URL}/docs)
- [Impressum](${SITE_URL}/impressum)
- [Datenschutz](${SITE_URL}/datenschutz)
- [RSS-Feed](${SITE_URL}/feed.xml)
- [Plugin auf WordPress.org](${WPORG_URL})
- [Quellcode auf GitHub](${GITHUB_URL})`;
}

function comparisons(): string {
  const list = vergleiche
    .map(
      (v) =>
        `- [${v.title}](${SITE_URL}/vergleich/${v.slug}) (${v.badge})`,
    )
    .join("\n");
  return `## Vergleiche (${SITE_URL}/vergleich)

Ehrliche Einzelvergleiche mit TL;DR-Tabelle, Preisen und "Wann du NICHT wechseln solltest":

${list}`;
}

function knowledge(): string {
  const list = wissen
    .map((entry) => `- [${entry.title}](${SITE_URL}/wissen/${entry.slug})`)
    .join("\n");
  return `## Wissen (${SITE_URL}/wissen)

Definitorische Artikel, jede Seite beantwortet ihre Frage im ersten Absatz:

${list}`;
}

function blog(): string {
  const list = posts
    .map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug})`)
    .join("\n");
  return `## Blog (${SITE_URL}/blog)

${list}`;
}

export function buildLlmsTxt(): string {
  return [
    "# Flinkform",
    "",
    `> ${ENTITY_FREE}`,
    "",
    ENTITY_PRO,
    "",
    `Stand: ${BUILD_DATE}. Hersteller: Dennis Buchwald, dbw media, Heilbronn (Deutschland). Sprache der Website: Deutsch, Teilübersetzung Englisch unter /en.`,
    "",
    PROVIDER,
    "",
    CORE_FACTS,
    "",
    FEATURES,
    "",
    pricingBlock(),
    "",
    OCCASIONS,
    "",
    keyPages(),
    "",
    comparisons(),
    "",
    knowledge(),
    "",
    blog(),
    "",
    "## Volltexte",
    "",
    `Die Volltexte der Kernseiten stehen unter ${SITE_URL}/llms-full.txt`,
    "",
    USAGE_NOTES,
    "",
  ].join("\n");
}

/**
 * Die Langfassung ist Prosa und lebt deshalb als Textdatei im Repo. Nur die
 * Angaben, die veralten können, werden hier eingesetzt.
 */
export function buildLlmsFullTxt(): string {
  const file = path.join(process.cwd(), "content", "llms-full.md");
  const source = fs.readFileSync(file, "utf8");
  const values: Record<string, string> = {
    DATE: BUILD_DATE,
    FREE_VERSION,
    PRO_VERSION,
    MIN_FREE_FOR_PRO,
    SITE_URL,
  };
  return source.replace(
    /\{\{(\w+)\}\}/g,
    (match, key: string) => values[key] ?? match,
  );
}
