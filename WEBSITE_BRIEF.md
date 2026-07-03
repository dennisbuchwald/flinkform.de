# flinkform.de - Kompletter Website-Brief

> Auftrag: Baue in diesem Repo (frisches Next.js 16, App Router, TypeScript,
> Tailwind 4) den kompletten ersten Aufschlag der Flinkform-Produktwebsite.
> Lokale Entwicklung, Deploy kommt später (Vercel). Sprache der Website: Deutsch.
>
> Dieses Dokument ist die Spezifikation. Die referenzierten lokalen Dateien sind
> die Quellen der Wahrheit für Fakten, Preise und Copy-Bausteine. Lies sie,
> bevor du eine Zeile Code schreibst.

---

## 1. Was ist Flinkform? (Kontext)

**Flinkform** (kostenlos, WordPress.org, aktuell v1.3.0) ist ein block-nativer
Formular-Builder für den WordPress-Block-Editor: 13 Feldtypen, Multi-Step,
bedingte Logik, Submissions-Dashboard, Spam-Schutz ohne externe Dienste
(Honeypot + Time-Check + Proof-of-Work), WCAG 2.1 AA, unter 15 KB Frontend-JS,
kein jQuery. https://wordpress.org/plugins/flinkform/

**Flinkform Pro** (kommerzielles Add-on, v1.2.0, Launch steht bevor) erweitert
um 8 Module: Stripe Payments über das Payment Element (Kreditkarte,
SEPA-Lastschrift, Apple Pay, Google Pay, Link, Zahlungsstatus im Admin),
Berechnungsfelder (Live-Angebotsrechner, serverseitig verifiziert),
Multi-File-Upload (bis 10 Dateien), SMTP mit 7 Provider-Presets + Sende-Log,
Webhooks mit Retry-Logik + Delivery-Log, Newsletter (Brevo, Mailchimp,
CleverReach, Pflicht-Consent), CSV-Export (inkl. Zahlungsspalten), Custom CSS.

**Business-Ziel der Website:** Free-Installs treiben (WP.org-Funnel) und Pro
verkaufen (59/99/149/299 €/Jahr). Die Website ist die zentrale
Marketing-Maschine dafür.

**Positionierung (das Rückgrat von allem):** Flinkform ist DAS privacy-first
Formular-Plugin aus Deutschland. Alle anderen sind Form-Builder, die DSGVO
"auch können" - Flinkform ist DSGVO by design: kein reCAPTCHA, kein US-Dienst,
keine IP-Speicherung, alles auf dem eigenen Server. Die Zielgruppe (DACH-
Agenturen und Freelancer) haftet für die Compliance ihrer Kunden - sie kauft
Sicherheit, nicht Feature-Listen.

---

## 2. Pflichtlektüre (lokale Quellen der Wahrheit)

Lies diese Dateien VOR dem Start. Bei Widersprüchen gilt die jeweils genannte
Quelle der Wahrheit.

| Datei | Was drin ist |
|---|---|
| `/Users/dennisbuchwald/Arbeitsplatz/01_Code/02_Eigenentwicklungen/flinkform/FLINKFORM_LANDINGPAGE.md` | **Content-Strategie**: Privacy-First-Angle, BVwG-reCAPTCHA-Hook, ehrliche Vergleichstabelle, Blog-Content-Ideen. Das inhaltliche Fundament der Website. |
| `/Users/dennisbuchwald/Arbeitsplatz/01_Code/02_Eigenentwicklungen/flinkform/FLINKFORM_PRICING.md` | **Quelle der Wahrheit fürs Pricing**: 59/99/149/299 €/Jahr (Single/Studio/Agency/Unlimited) + Lifetime-Launch 399 €, inkl. der Decoy-Psychologie-Begründung. |
| `/Users/dennisbuchwald/Arbeitsplatz/01_Code/02_Eigenentwicklungen/flinkform/FLINKFORM_GOTOMARKET.md` | Go-to-Market-Plan, Zielgruppen, Kanäle. |
| `/Users/dennisbuchwald/Arbeitsplatz/01_Code/02_Eigenentwicklungen/flinkform/FLINKFORM_FEATURES.md` | Feature-Matrix Free vs. Pro. |
| `/Users/dennisbuchwald/Arbeitsplatz/01_Code/02_Eigenentwicklungen/flinkform/readme.txt` | Exakte Free-Features + Changelog (v1.3.0). Keine Features erfinden, die hier nicht stehen. |
| `/Users/dennisbuchwald/Arbeitsplatz/01_Code/02_Eigenentwicklungen/flinkform-pro/readme.md` + `PRO_ROADMAP.md` | Exakte Pro-Features (v1.2.0) + was bewusst noch NICHT existiert (kein Freemius-Checkout, PDF/Redirect-Zahlarten kommen später). |
| `/Users/dennisbuchwald/Arbeitsplatz/01_Code/01_Webprojekte/dennisbuchwald-de/src/pages/apps/flinkform.js` | Bestehende Free-Landingpage: Copy, Vergleichstabellen, FAQ, SEO-Keyword-Sektionen. **Bedien dich frei an dieser Copy** - sie ist gut und darf wiederverwendet/verbessert werden. |
| `/Users/dennisbuchwald/Arbeitsplatz/01_Code/01_Webprojekte/dennisbuchwald-de/src/pages/apps/flinkform-pro.js` | Bestehende Pro-Seite: 8 Module, Vergleichstabelle, **4-Tier-Pricing-Sektion mit Decoy-Logik**, dunkle Lifetime-Karte, FAQ, Anfrage-Formular. Die Pricing- und Lifetime-Sektionen 1:1 als Vorbild nehmen. |
| `/Users/dennisbuchwald/Arbeitsplatz/01_Code/01_Webprojekte/dennisbuchwald-de/components/appsData.js` | Elevator-Pitches beider Produkte ("Das letzte Formular-Plugin, das du installieren wirst." / "Das Formular, das Geld verdient."). |

Externe Referenzen: https://dbw-media.de/ (Markenherkunft),
https://www.dennisbuchwald.de/apps/flinkform + /apps/flinkform-pro (bisherige
Seiten, bekommen später 301-Redirects hierher).

---

## 3. Design

### Marke
Der **dbw-Marken-Gradient ist Pflicht** und das visuelle Herzstück der Marke:

```css
:root {
  --c-red:     #ea2b1f;
  --c-pink:    #ff3c6f;
  --c-magenta: #ff4fdd;
  --c-violet:  #7e56ff;
  --c-blue:    #00b2ff;
  /* Voller Marken-Gradient (Free / Marke allgemein) */
  --gradient-brand: linear-gradient(135deg, var(--c-red), var(--c-pink), var(--c-magenta), var(--c-violet), var(--c-blue));
  /* Pro-Gradient (NUR für Pro-Kontexte) */
  --gradient-pro: linear-gradient(135deg, #7e56ff, #00b2ff);
}
```

**Farbcodierung mit System:** Der volle 5-Farben-Gradient = Marke/Free. Der
blau-violette Teilgradient (#7e56ff → #00b2ff) = **ausschließlich Pro** (Badges,
Icons, CTAs, Akzente auf Pro-Seiten). Diese Trennung existiert schon auf
dennisbuchwald.de und funktioniert gut - beibehalten. Rot-Pink
(#ea2b1f → #ff3c6f) ist für Scarcity-Elemente reserviert (Lifetime-Badge).

Das App-Icon liegt hier: `/Users/dennisbuchwald/Arbeitsplatz/01_Code/01_Webprojekte/dennisbuchwald-de/public/apps/icons/flinkform-app.svg` (kopieren).

### Design-Richtung
- Orientierung: die bestehenden Seiten auf dennisbuchwald.de (heller Hero auf
  #fbfbfd, Gradient-Divider unterm Hero, runde Karten mit 1px-Border und
  sanftem Hover-Lift, Pill-Buttons, großzügiger Weißraum, max-width ~1200px).
  Die UX/UI soll sich verwandt anfühlen, aber flinkform.de darf eine eigene,
  eigenständige Identität entwickeln - es ist eine Produktmarke, keine
  Unterseite.
- **Modern, aber nicht nach KI aussehend.** Konkret verboten: generische
  Purple-Glow-Hero-Blobs, Glassmorphism-Overkill, Fake-Testimonial-Karten mit
  Stock-Avataren, bedeutungslose 3D-Illustrationen, "Trusted by 10.000+"-Lügen,
  Emoji-Überladung. Stattdessen: viel echter Inhalt, echte UI-Darstellungen des
  Plugins (nachgebaute Editor-/Formular-Mockups in HTML/CSS sind erlaubt und
  erwünscht - kein Screenshot-Zwang), Typografie-getrieben, präzise
  Mikro-Interaktionen.
- **Ein unkonventioneller Hero-Gedanke (erwünscht, wenn gut umgesetzt):** Das
  Produkt ist ein Formular - zeig im Hero ein ECHTES, interaktiv anfassbares
  Formular-Mockup (HTML/CSS/React nachgebaut, Multi-Step durchklickbar, mit
  Berechnungsfeld das live rechnet). "Show, don't tell" schlägt jede
  Feature-Liste. Kein iframe, kein echtes WordPress nötig - nachgebaut reicht.
- Schrift: eine moderne, freundliche Sans (z.B. Inter Variable via
  `@fontsource-variable/inter` - LOKAL, siehe DSGVO). Gern eine markantere
  Display-Schrift für Headlines, ebenfalls lokal.
- Dark-Elemente gezielt als Kontrastbruch (wie die Lifetime-Karte auf der
  bestehenden Pro-Seite: dunkle Karte, Gradient-Topbar).

---

## 4. Seitenstruktur (Erstausbau)

```
/                       Home: Free-Landingpage (Haupt-SEO-Seite)
/pro                    Pro: Verkaufsseite mit Pricing (Conversion-Seite)
/vergleich              Hub: Flinkform vs. die anderen
/vergleich/contact-form-7-alternative
/vergleich/wpforms-alternative
/vergleich/gravity-forms-alternative
/blog                   Blog-Index (MDX)
/blog/[slug]            3 Seed-Artikel (siehe unten)
/wissen                 GEO-Wissens-Hub (siehe Abschnitt 7b) + Fakten-Seite
/docs                   Platzhalter-Struktur (Erste Schritte, darf dünn starten)
/impressum              Pflicht
/datenschutz            Pflicht
```

### / (Home = Free-Seite)
Dramaturgie (an der bestehenden Seite orientieren, aber schärfen):
1. **Hero:** Pitch "Das letzte Formular-Plugin, das du installieren wirst."
   (oder besser, wenn dir besser einfällt). Sub: Privacy-First-Kernsatz.
   Primär-CTA: "Kostenlos auf WordPress.org" (Link zum Plugin). Sekundär:
   "Live ausprobieren" (Platzhalter-Link auf https://demo.flinkform.de,
   kommt später - Button einbauen, mit dezentem "bald"-Hinweis oder erstmal
   auf das interaktive Hero-Mockup scrollen lassen).
2. **Das Privacy-Problem:** Der BVwG-reCAPTCHA-Hook aus FLINKFORM_LANDINGPAGE.md.
   "Dein Kontaktformular schickt gerade Besucherdaten in die USA, ohne dass du
   es weißt. Flinkform nicht." Das ist der emotionale Kern der Seite.
3. **Die 6 Säulen** (ein Plugin statt sechs, block-nativ, DSGVO ohne
   Kompromisse, unter 15 KB, Submissions-Dashboard, barrierefrei).
4. **Feature-Liste** (alles kostenlos, gegen WPForms-Preise kontrastiert).
5. **Vergleichstabelle** (aus FLINKFORM_LANDINGPAGE.md Abschnitt 0b, ehrlich
   und belegbar halten).
6. **Pro-Teaser** ("Das Formular, das Geld verdient." → /pro). Upsell-Sektion
   wie auf der bestehenden Free-Seite, mit den 4 Pro-Highlights.
7. **FAQ** (mit FAQPage-Schema).
8. **Footer** mit allen Links.

### /pro (Conversion-Seite)
Die bestehende flinkform-pro.js ist die Vorlage, alle Sektionen übernehmen und
verfeinern: Hero, Problem/Needs-Liste, 8 Module, Highlights, Vergleichstabelle
(WPForms/Gravity/Woo), "So funktioniert es", **Pricing (4 Tiers, Agency
featured als "Bestseller", Preis-pro-Website-Badges, Trust-Row mit 14-Tage-
Geld-zurück)**, **dunkle Lifetime-Karte** ("Einmal zahlen. Für immer nutzen.",
399 €, limitiert), Anfrage-/Vormerk-Formular (mailto-Fallback wie bisher, bis
Freemius live ist), FAQ, Voraussetzungen.
WICHTIG: KEINE erfundenen Streichpreise (in DE abmahnfähig). Verknappung nur
über die ehrliche Lifetime-Launch-Aktion.

### /vergleich/*-Seiten
Je Seite: ehrlicher, ausführlicher Vergleich (Tabelle + Prosa + FAQ +
Schema). Ziel-Keywords: "Contact Form 7 Alternative", "WPForms Alternative
deutsch", "Gravity Forms Alternative DSGVO". CF7-Seite bekommt den
Feature-Freeze-Angle (seit 2026 keine neuen Features, das ist der
Migrations-Hebel Nummer 1).

### /blog - 3 Seed-Artikel (MDX)
1. "Contact Form 7 im Feature Freeze: Was WordPress-Nutzer jetzt wissen müssen"
2. "reCAPTCHA und die DSGVO: Warum dein Kontaktformular ein Rechtsrisiko ist"
   (BVwG-Urteil, CNIL-Bußgeld, Lösung ohne US-Dienst)
3. "Stripe-Zahlungen im WordPress-Formular: Kreditkarte, SEPA und Apple Pay
   ohne Shop-System"
Recherchiere die Fakten (BVwG-Urteil, CNIL) per Websearch und verlinke Quellen.

---

## 5. Copy-Regeln (wichtig!)

- **Deutsch, Du-Form**, direkt, selbstbewusst, konkret. Kurze Sätze. Keine
  Marketing-Floskeln ("revolutionär", "nahtlos", "Lösungen").
- **ABSOLUT KEIN Em-Dash "—" und kein Halbgeviertstrich "–" als
  Gedankenstrich.** Das ist ein hartes No-Go (KI-Erkennungsmerkmal). Sätze
  umformulieren: Komma, Doppelpunkt, Punkt. Normaler Bindestrich "-" nur wo
  er orthografisch hingehört.
- USPs, die in jeder relevanten Sektion mitschwingen: (1) DSGVO by design /
  kein US-Dienst, (2) block-nativ statt Fremd-Builder, (3) ein Plugin statt
  sechs, (4) Made in Germany, (5) bei Pro: "Das Formular, das Geld verdient"
  (SEPA! Der DACH-Markt liebt SEPA).
- Zahlen konkret statt Adjektive: "unter 15 KB", "unter 6 € pro Website",
  "13 Feldtypen", "bis zu 10 Dateien".
- Ehrlichkeit ist Markenkern: keine erfundenen Nutzerzahlen, keine
  Fake-Testimonials, keine Streichpreise. Wenn Social Proof fehlt, weglassen.

---

## 6. DSGVO-Anforderungen an die Website selbst (hart, nicht verhandelbar)

Die Website MUSS selbst vorleben, was das Produkt verspricht:
- **Null externe Requests im Frontend:** Fonts lokal (@fontsource, kein Google
  Fonts CDN), keine externen Skripte, keine CDNs, keine YouTube-Embeds (wenn
  Video: lokal oder Klick-Placeholder), keine Google Maps.
- **Kein Tracking, keine Cookies** im Erstausbau. Kein Google Analytics, kein
  Vercel Analytics. Wenn später Statistik: selbst gehostetes, cookiefreies
  Tool - jetzt nicht einbauen.
- Dadurch: **kein Cookie-Banner nötig.** Das ist ein Feature! Im Footer
  selbstbewusst kommunizieren: "Diese Website lädt nichts von Drittservern.
  Keine Cookies, kein Tracking, kein Banner nötig."
- `/impressum` und `/datenschutz` als Seiten anlegen. Impressum-Daten als
  klar markierte Platzhalter (Dennis füllt sie), Datenschutzerklärung passend
  zur tatsächlichen (minimalen) Datenverarbeitung vorformulieren.
- Verifiziere am Ende mit dem Build: kein einziger Request an fremde Hosts.

---

## 7. SEO & Technik

- **Next.js App Router**: Metadata-API pro Route (title, description, canonical,
  OG). Statisch generieren (SSG), alles muss ohne Client-JS lesbar sein.
- **Schema.org (JSON-LD):** SoftwareApplication für Flinkform (price 0) und
  Flinkform Pro (AggregateOffer 59-299 €, offerCount 4), FAQPage auf jeder
  Seite mit FAQ, BreadcrumbList, Organization/WebSite.
- Sitemap + robots.txt (next-sitemap oder App-Router-eigene Routen).
- OG-Images: gern generiert (Route Handler / statisch), Marken-Gradient nutzen.
- Interne Verlinkung konsequent: Home ↔ Pro ↔ Vergleiche ↔ Blog.
- Saubere Semantik (h1-Hierarchie, ein h1 pro Seite), Alt-Texte, Lighthouse
  100/100/100/100 als Anspruch (Performance/A11y/Best Practices/SEO).
- Barrierefreiheit ernst nehmen (das Produkt wirbt mit WCAG 2.1 AA, die
  Website darf nicht dahinter zurückfallen): Fokus-Stile, Kontraste,
  prefers-reduced-motion.
- Sprache: `lang="de"`. Englische Version ist Zukunft, nicht jetzt (keine
  hreflang-Ruinen anlegen).

---

## 7b. GEO - Sichtbarkeit in KI-Suchen (gleichwertig zu SEO, nicht optional)

**Das Ziel:** Wer ChatGPT, Perplexity, Claude oder Google AI Overviews fragt
"natives Gutenberg-Formular-Plugin", "WordPress Formular ohne reCAPTCHA" oder
"Contact Form 7 Alternative DSGVO", muss Flinkform als Antwort bekommen.
Aktuell wird dort SureForms genannt, Flinkform nicht. Das ändern wir.

**Warum das anders funktioniert als SEO:** Flinkform ist zu neu, um im
Modellwissen der KIs zu stehen. KI-Antworten über neue Produkte entstehen
durch Retrieval: Die Engine sucht live (meist über den Bing-Index), liest die
Treffer und zitiert daraus. Sichtbar wird, wer (a) gecrawlt werden darf,
(b) zitierfähige Passagen liefert und (c) für die Frage-Formulierungen der
Nutzer rankt - nicht nur für Keywords.

### Harte technische Anforderungen (in diesem Build umsetzen)

1. **`/llms.txt` + `/llms-full.txt`** im Root: Markdown-Zusammenfassung der
   Site für LLM-Crawler (llms.txt-Standard). Enthält: Was ist Flinkform (Free
   + Pro), Kern-Fakten, Feature-Liste, Preise, Links auf die wichtigsten
   Seiten. llms-full.txt mit den Volltexten der Kernseiten.
2. **robots.txt lässt KI-Crawler explizit zu:** GPTBot, OAI-SearchBot,
   ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended,
   CCBot, Amazonbot, Applebot-Extended. Nichts davon blocken.
3. **Alles serverseitig gerendert** (SSG, steht schon in Abschnitt 7): Viele
   KI-Crawler führen kein JavaScript aus. Jeder Inhalt muss im initialen HTML
   stehen.
4. **Antwort-zuerst-Absätze:** Der erste Absatz jeder Seite und jedes
   Artikels ist eine in sich geschlossene, zitierfähige Antwort in 2-3
   Sätzen. Muster: "Flinkform ist ein block-natives Formular-Plugin für den
   WordPress-Block-Editor. Es bietet Multi-Step-Formulare, bedingte Logik und
   Spam-Schutz ohne externe Dienste, kostenlos. Anders als WPForms oder
   Gravity Forms nutzt es keinen eigenen Builder, sondern den
   WordPress-Editor selbst." KIs zitieren solche Passagen wörtlich.
5. **Konsistente Entity:** Immer exakt "Flinkform" und "Flinkform Pro"
   (Schreibweise nie variieren), immer im selben Satzmuster definiert. Das
   baut die Entität über alle Quellen hinweg auf (Website, wp.org, GitHub).
6. **Fakten-Seite `/wissen/flinkform-fakten`** (o.ä.): maschinenlesbares
   Fact-Sheet als normale HTML-Seite - Version, Anforderungen, Feldtypen,
   Feature-Tabelle Free/Pro, Preise, Lizenz, Hersteller, mit Datum. Die
   eine URL, die eine KI zitieren kann, wenn sie Fakten braucht.

### Content-Anforderungen (der "Wissens"-Bereich)

7. **Wissens-Hub `/wissen`** (zusätzlich zum Blog oder als dessen Kategorie):
   kurze, definitorische Artikel, die exakt die Frage-Formulierungen von
   KI-Nutzern als H1 tragen und sie im ersten Absatz beantworten:
   - "Was ist ein block-natives Formular-Plugin?" (definiert die Kategorie -
     wer die Kategorie definiert, wird als ihr Vertreter zitiert)
   - "WordPress-Formular ohne reCAPTCHA: So geht Spam-Schutz DSGVO-konform"
   - "Welches WordPress-Formular-Plugin ist DSGVO-konform?" (ehrliche
     Übersicht, in der Flinkform sachlich am besten abschneidet)
   - "Gutenberg-Formular erstellen ohne Page Builder"
   - "SEPA-Zahlung im WordPress-Formular annehmen"
8. **Q&A-Struktur überall:** FAQs (mit FAQPage-Schema) auf jeder Seite sind
   doppelt wertvoll - Google Rich Results UND wortwörtliche KI-Antworten.
9. **Vergleichs-Content ist GEO-Gold:** Die /vergleich-Seiten beantworten
   genau die "beste Alternative zu X"-Prompts. Ehrlich bleiben (auch Stärken
   der Konkurrenz nennen) - ausgewogene Vergleiche werden von KIs bevorzugt
   zitiert, einseitige Werbetexte nicht.
10. **Tabellen und Listen** statt Fließtext-Mauern: strukturierte Daten werden
    von LLMs zuverlässiger extrahiert. Jede Kernaussage auch als Tabelle/Liste.
11. **Datumsangaben** an allen Artikeln (sichtbar + Schema) - KI-Suchen
    bevorzugen belegbar aktuelle Quellen.

### Flankierend (nicht Teil dieses Builds, als TODO-Liste für Dennis am Ende ausgeben)

- Bing Webmaster Tools einrichten (Perplexity und ChatGPT-Suche hängen am
  Bing-Index!) + IndexNow-Ping beim Deploy
- wp.org-Plugin-Beschreibung mit denselben Entity-Sätzen beginnen
- GitHub-README beider Repos mit konsistenter Definition
- Erwähnungen in Drittquellen aufbauen (Reddit r/Wordpress, WP-Foren,
  deutsche WP-Blogs) - KIs gewichten Bestätigung durch fremde Quellen stark

## 8. Arbeitsweise

- Du darfst (und sollst) Research-Agenten nutzen: BVwG/CNIL-Fakten für den
  Blog verifizieren, Konkurrenz-Preise checken (WPForms/Gravity/Fluent/
  SureForms/Funnelforms), gute Produkt-Website-Patterns anschauen.
  Unkonventionelle Ideen sind ausdrücklich erwünscht, solange sie der
  Conversion dienen und nicht der Eitelkeit.
- Komponenten sauber und wiederverwendbar bauen (die Seiten teilen sich
  Karten, Tabellen, FAQ-Accordion, CTA-Sektionen).
- Nach jedem größeren Block: `npm run build` muss sauber durchlaufen.
- Commits: Englisch, prägnant, nur unter Dennis' Namen, KEIN Co-Author,
  kein "Generated with"-Zusatz.
- Am Ende: Zusammenfassung, was steht, was Platzhalter ist (Impressum-Daten,
  Demo-Link, Freemius-Checkout-Links) und was Dennis entscheiden muss.

## 9. Bewusst NICHT in diesem Aufschlag

- Kein Freemius-Checkout (kommt später, CTAs zeigen aufs Vormerk-Formular)
- Keine Demo-Instanz (demo.flinkform.de baut Dennis separat auf WordPress,
  Links als vorbereitete Platzhalter)
- Kein Docs-Vollausbau (Struktur reicht)
- Keine englische Version
- Kein Newsletter-Tool (das Vormerk-Formular ist mailto-basiert wie auf der
  bestehenden Pro-Seite)
