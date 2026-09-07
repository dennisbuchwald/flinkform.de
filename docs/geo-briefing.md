# Umsetzungs-Briefing flinkform.de - Website & Code

**Auftraggeber:** Dennis Buchwald, dbw media (Heilbronn) - Entwickler und alleiniger Maintainer
**Stand der Analyse:** 07.09.2026, alle 50 Sitemap-URLs geprüft (Roh-HTML ohne JavaScript)
**Arbeitsweise:** Änderungen direkt auf `main` committen und pushen. Kleine Commits pro Aufgabe.

---

## Worum es geht

Flinkform ist ein kostenloses WordPress-Formular-Plugin (Free auf wordpress.org, Pro mit Lizenz-Key geplant).
Die Website flinkform.de läuft auf Next.js mit Server-Rendering. Ziel ist Sichtbarkeit in Suchmaschinen **und in
KI-Systemen** (ChatGPT, Perplexity, Claude, Gemini), damit das Plugin gefunden und installiert wird. Hauptmarkt DACH.

Ein technisches Audit hat ergeben: **Die Seite ist technisch gut, die Lücken sitzen in den strukturierten Daten und
in der Antwortstruktur der Inhalte.** Dieses Briefing enthält genau die Punkte, die im Code gelöst werden.
Alles andere (WordPress.org-Listing, Outreach, Verzeichnisse) macht Dennis selbst - nicht Teil dieses Auftrags.

### Was bereits gut ist - nicht anfassen

- `robots.txt`: erlaubt 14 KI-Crawler namentlich (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User,
  Claude-SearchBot, PerplexityBot, Perplexity-User, Google-Extended, CCBot, Amazonbot, Applebot-Extended,
  meta-externalagent). Vorbildlich.
- Server-Rendering: kompletter sichtbarer Text steht im rohen HTML. Muss so bleiben - kein Inhalt darf hinter
  clientseitiges Nachladen wandern, KI-Crawler rendern überwiegend kein JavaScript.
- Performance: TTFB 6 ms, DOMContentLoaded 92 ms, 13 Requests, 20 KB auf `/pro`. Keine externen Skripte.
- Titles (30-109 Zeichen) und Descriptions (134-224 Zeichen) sind durchgängig gesetzt und beantworten die Anfrage.
- Sitemap mit 50 URLs, saubere Struktur, alle URLs liefern 200, Canonicals selbstreferenzierend.

### Der Befund, der die Aufgaben begründet

| Beobachtung | Datei/Ort |
|---|---|
| `Organization` im JSON-LD beschreibt **dbw media**, nicht Flinkform. Die Marke hat keine eigene Entität mit `@id`. | global, alle Seiten |
| `SoftwareApplication` ohne `@id`, `featureList`, `softwareRequirements`, `publisher`; nur ein Free-Offer, obwohl 4 Pro-Preisstufen existieren | `/`, `/pro`, `/wissen/flinkform-fakten` |
| 16 Wissen-Artikel haben einen **sichtbaren** Abschnitt "Häufige Fragen" mit H3-Fragen, aber **kein** `FAQPage`-Markup. Die 11 Vergleichsseiten haben es. | `/wissen/*` |
| 27 von 34 Inhaltsseiten haben **kein** `datePublished`. Alle 34 tragen dasselbe `dateModified`: `2026-07-03`. | `/blog/*`, `/wissen/*`, `/vergleich/*` |
| `Article` ohne `publisher`, `description`, `image`, `about`, `isPartOf` | alle Inhaltsseiten |
| Vergleichsseiten haben **0** interne Links im Artikeltext (Wissen/Blog haben 8-12) | `/vergleich/*` |
| Antworten stehen im Fließtext, nicht als eigenständig zitierbarer Kurzblock unter der Frage | alle Inhaltsseiten |
| `llms.txt` nennt "Version Free 1.3.0" - tatsächlich ist **1.13.3** live. "Stand: 2026-07-03". Anbieter-Block fehlt. | `/llms.txt`, `/llms-full.txt` |
| Canonical der Startseite ist `https://flinkform.de`, die Sitemap führt `https://flinkform.de/` | Layout / Sitemap |
| `/impressum` und `/datenschutz` geben 404, Footer verlinkt nach dbw-media.de | Routing |
| Kein Analytics, keine Log-Auswertung - es ist nicht messbar, ob KI-Crawler die Seite abrufen | - |

---

## Vorgehen

1. Repo erkunden: Wo liegen Layout/Metadaten, wo die JSON-LD-Blöcke, wie sind die Inhalte gespeichert
   (MDX, Content-Collection, CMS, TypeScript-Objekte)? Danach entscheiden, ob Schema pro Seite oder zentral generiert wird.
2. **Bevorzugt zentral lösen:** eine Funktion, die aus den Content-Daten das passende JSON-LD baut, statt handgeschriebene
   Blöcke pro Seite. Bestehende, korrekte Blöcke ersetzen - nicht doppelt ausgeben.
3. Aufgaben in der Reihenfolge unten. Nach jeder Aufgabe: Build muss durchlaufen, dann Commit + Push auf `main`.
4. Am Ende: Prüfliste unten abarbeiten.

### Regeln

- **Keine Aussage erfinden.** Preise, Versionen, Feature-Listen und Datumsangaben nur aus den in diesem Briefing
  genannten Quellen oder aus dem, was auf der Seite bereits steht.
- **`text` im FAQ-Markup muss wörtlich dem entsprechen, was sichtbar auf der Seite steht.** Abweichender Text ist
  ein Richtlinienverstoß und der häufigste Grund, warum FAQ-Markup ignoriert wird.
- `dateModified` nur setzen, wenn der Text tatsächlich geändert wurde. Kein Pauschal-Update aller Daten auf heute.
- Design und Layout nicht umbauen. Neue Komponenten fügen sich in das bestehende System ein.
- robots.txt, Sitemap-Logik und Preise nicht ändern.

---

## Aufgabe 1 - Entitäts-Schema: Flinkform als eigene Entität

Der bestehende JSON-LD (Organization + Person + WebSite + SoftwareApplication) wird durch einen zusammenhängenden
`@graph` ersetzt. Die Daten stammen aus dem Impressum von dbw-media.de und der Preisseite `/pro`.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://flinkform.de/#organization",
      "name": "dbw media",
      "legalName": "dbw media – Dennis Buchwald",
      "url": "https://dbw-media.de",
      "vatID": "DE420957545",
      "telephone": "+49 7131 3859840",
      "email": "hallo@dbw-media.de",
      "founder": { "@id": "https://flinkform.de/#dennis" },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Oststraße 12",
        "postalCode": "74072",
        "addressLocality": "Heilbronn",
        "addressRegion": "Baden-Württemberg",
        "addressCountry": "DE"
      },
      "sameAs": [
        "https://www.dennisbuchwald.de",
        "https://github.com/dbwmedia"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://flinkform.de/#dennis",
      "name": "Dennis Buchwald",
      "url": "https://flinkform.de/ueber",
      "jobTitle": "WordPress-Entwickler und Gründer von dbw media",
      "knowsAbout": [
        "WordPress-Entwicklung",
        "Gutenberg Block-Editor",
        "WordPress Interactivity API",
        "DSGVO-konforme Formulare",
        "Barrierefreiheit WCAG 2.1"
      ],
      "worksFor": { "@id": "https://flinkform.de/#organization" },
      "sameAs": [
        "https://www.dennisbuchwald.de",
        "https://github.com/dennisbuchwald",
        "https://profiles.wordpress.org/dbwmediadennis/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://flinkform.de/#website",
      "url": "https://flinkform.de",
      "name": "Flinkform",
      "inLanguage": "de",
      "publisher": { "@id": "https://flinkform.de/#organization" },
      "about": { "@id": "https://flinkform.de/#flinkform" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://flinkform.de/#flinkform",
      "name": "Flinkform",
      "alternateName": "Flinkform – Forms for the Block Editor",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "WordPress-Plugin",
      "operatingSystem": "WordPress 6.5+, PHP 8.1+",
      "softwareVersion": "1.13.3",
      "softwareRequirements": "WordPress 6.5 oder neuer, PHP 8.1 oder neuer, Block-Editor",
      "url": "https://flinkform.de",
      "downloadUrl": "https://wordpress.org/plugins/flinkform/",
      "installUrl": "https://wordpress.org/plugins/flinkform/",
      "license": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
      "inLanguage": "de",
      "description": "Block-natives Formular-Plugin für den WordPress-Block-Editor mit Multi-Step-Formularen, bedingter Logik und Spam-Schutz ohne externe Dienste.",
      "featureList": [
        "Multi-Step-Formulare mit Fortschrittsanzeige und Schritt-Validierung",
        "Bedingte Logik für Felder, Schritte und Submit",
        "13 Feldtypen inklusive Consent-Feld",
        "Spam-Schutz per Honeypot, signiertem Zeit-Check und Proof-of-Work",
        "Kein reCAPTCHA, kein hCaptcha, kein Turnstile",
        "Submissions-Dashboard in WordPress mit Suche und Filter",
        "Automatische theme.json-Übernahme",
        "Frontend-JavaScript unter 15 KB gzipped, kein jQuery",
        "WCAG 2.1 AA"
      ],
      "author": { "@id": "https://flinkform.de/#dennis" },
      "publisher": { "@id": "https://flinkform.de/#organization" },
      "offers": [
        {
          "@type": "Offer",
          "name": "Flinkform (Free)",
          "price": "0",
          "priceCurrency": "EUR",
          "url": "https://wordpress.org/plugins/flinkform/",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "AggregateOffer",
          "name": "Flinkform Pro",
          "url": "https://flinkform.de/pro",
          "priceCurrency": "EUR",
          "lowPrice": "59",
          "highPrice": "299",
          "offerCount": "4"
        }
      ]
    }
  ]
}
```

**Wichtig:** `softwareVersion` nicht hart kodieren. Eine einzige Konstante im Repo (z. B. `PLUGIN_VERSION`), die
gleichzeitig JSON-LD, `llms.txt` und alle sichtbaren Versionsangaben speist. Aktuell ist **1.13.3** live -
die Website nannte bisher an einer Stelle 1.13.3 und in der llms.txt 1.3.0.

Auf allen Unterseiten wird nicht der ganze Graph wiederholt: dort reichen Referenzen per `@id`
(`"author": { "@id": "https://flinkform.de/#dennis" }`) plus der seitenspezifische Knoten.

---

## Aufgabe 2 - FAQPage auf die 16 Wissen-Artikel

Die Wissen-Artikel haben einen sichtbaren Abschnitt "Häufige Fragen" mit H3-Fragen und Antwortabsätzen, aber nur
`Article` + `BreadcrumbList` im Markup. Beispiel `/wissen/multi-step-formular-wordpress` mit fünf Fragen, darunter
"Brauche ich für ein Multi-Step-Formular einen Page Builder?" und "Gehen Eingaben verloren, wenn ein Besucher
zurückblättert?".

**Aus der Datenquelle generieren, nicht abtippen.** Wenn die FAQs strukturiert im Content liegen, aus derselben
Struktur sowohl das sichtbare Markup als auch das JSON-LD erzeugen - dann können die beiden nie auseinanderlaufen.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://flinkform.de/wissen/multi-step-formular-wordpress#faq",
  "isPartOf": { "@id": "https://flinkform.de/wissen/multi-step-formular-wordpress#article" },
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Brauche ich für ein Multi-Step-Formular einen Page Builder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[wörtlich der sichtbare Antworttext von der Seite]"
      }
    }
  ]
}
```

Gilt für alle Seiten mit sichtbarem FAQ-Block, die noch keines haben. Die 11 Vergleichsseiten haben FAQPage bereits -
dort nur prüfen, ob `@id` und `isPartOf` gesetzt sind.

---

## Aufgabe 3 - Article-Schema vervollständigen

```json
{
  "@type": "Article",
  "@id": "https://flinkform.de/wissen/multi-step-formular-wordpress#article",
  "headline": "Multi-Step-Formular in WordPress erstellen: kostenlos und ohne Page Builder",
  "description": "[Meta-Description der Seite]",
  "inLanguage": "de",
  "datePublished": "2026-07-03",
  "dateModified": "2026-07-03",
  "author": { "@id": "https://flinkform.de/#dennis" },
  "publisher": { "@id": "https://flinkform.de/#organization" },
  "image": "https://flinkform.de/og/multi-step-formular-wordpress.png",
  "about": { "@id": "https://flinkform.de/#flinkform" },
  "isPartOf": { "@id": "https://flinkform.de/#website" },
  "mainEntityOfPage": "https://flinkform.de/wissen/multi-step-formular-wordpress"
}
```

Ergänzt gegenüber heute: `description`, `datePublished`, `publisher`, `image`, `about`, `isPartOf`, `@id`.

**Datumsfelder:** `datePublished` und `dateModified` gehören ins Content-Frontmatter jedes Artikels, nicht in den
Seiten-Code. Für den Bestand: `datePublished: 2026-07-03` setzen (das ist das tatsächliche Veröffentlichungsdatum
des Content-Schubs), `dateModified` gleich lassen, bis der Text wirklich geändert wird. Danach pflegt Dennis das
pro Artikel mit.

**OG-Bilder:** Wenn noch keine pro Artikel existieren, eine dynamische OG-Image-Route bauen (Next.js `ImageResponse`),
die aus Titel und Marke ein Bild rendert. Sonst zeigt `image` ins Leere - dann das Feld lieber weglassen als falsch füllen.

---

## Aufgabe 4 - Zitierbare Kurzantwort unter jede Frage

Die Überschriften sind bereits als echte Suchanfragen formuliert ("Warum konvertieren mehrseitige Formulare oft
besser?", "Wann du NICHT wechseln solltest"). Was fehlt, ist der Antwortblock direkt darunter: 2-4 Sätze, die die
Frage allein beantworten, mit Zahl, Währung und Stand-Datum wo passend. Genau dieser Absatz wird zitiert.

Gebraucht wird eine **Komponente** dafür - semantisch, nicht nur fett:

```jsx
<AnswerBlock>
  WPForms Lite ist kostenlos, aber bedingte Logik kostet ab 199,50 $ pro Jahr (Pro-Lizenz),
  Zahlungen ab 399,50 $ (Elite). Bei Flinkform sind bedingte Logik und Multi-Step im
  kostenlosen Core enthalten; Stripe-Zahlungen kosten 59 € pro Jahr für eine Website.
  Stand: September 2026.
</AnswerBlock>
```

Sie rendert als erster Absatz nach der Überschrift, visuell leicht abgesetzt (kein Kasten-Overkill), und ist als
`<p>` im HTML lesbar. Sinnvoll: ein Feld im Content-Modell (`answer`), das gleichzeitig die Komponente füllt und
in das FAQ-Markup aus Aufgabe 2 fließt - einmal schreiben, zweimal verwenden.

**Aufgabe für Claude Code:** Komponente und Content-Feld bauen, auf zwei bis drei Seiten exemplarisch mit Text
befüllen, der **aus dem bereits vorhandenen Fließtext derselben Seite** zusammengezogen wird. Keine neuen Zahlen
erfinden. Die restlichen Seiten füllt Dennis nach.

---

## Aufgabe 5 - Interne Verlinkung der Vergleichsseiten

Die 11 Seiten unter `/vergleich/*` haben null interne Links im Artikeltext. Jede soll auf 2-3 thematisch passende
Wissen-Artikel verweisen, im Fließtext oder als Abschnitt "Passend dazu" vor der FAQ.

Sinnvolle Zuordnung ergibt sich aus dem Thema, z. B.:

- `wpforms-alternative`, `gravity-forms-alternative` → `was-kostet-wordpress-formular-plugin`, `multi-step-formular-wordpress`
- `contact-form-7-alternative` → `wordpress-formular-ohne-recaptcha`, `wordpress-formular-mails-kommen-nicht-an`
- `typeform-alternative`, `jotform-alternative` → `dsgvo-konformes-formular-plugin`, `wordpress-formular-daten-usa`

Umgekehrt prüfen, ob die Wissen-Artikel auf die passende Vergleichsseite verlinken (dort ist die Verlinkung bereits gut).

---

## Aufgabe 6 - llms.txt korrigieren und erweitern

`/llms.txt` (8.028 Bytes) und `/llms-full.txt` (21.253 Bytes) werden korrekt mit Status 200 und `text/plain`
ausgeliefert und sind gut aufgebaut. Zwei Probleme: die Angaben sind veraltet, und zwei Abschnitte fehlen.

**Falsch:** "Aktuelle Version Free: 1.3.0" → korrekt ist **1.13.3**. "Stand: 2026-07-03" → auf Build-Datum umstellen.

**Am besten: die Datei generieren statt pflegen.** Eine Route, die Version, Preise und Seitenliste aus denselben
Datenquellen zieht wie die Website. Dann kann sie nicht mehr auseinanderlaufen.

Diese Blöcke einfügen - "Anbieter" und "Verantwortliche Person" direkt nach dem Blockquote,
"Typische Anlässe" vor der Seitenliste, "Hinweise zur Nutzung" ganz ans Ende:

```
Stand: [Build-Datum]. Hersteller: Dennis Buchwald, dbw media, Heilbronn
(Deutschland). Sprache der Website: Deutsch, Teilübersetzung Englisch unter /en.

## Anbieter

- Firmierung: dbw media (Einzelunternehmen), Inhaber Dennis Buchwald
- Anschrift: Oststraße 12, 74072 Heilbronn, Deutschland
- Verantwortlich für den Inhalt: Dennis Buchwald
- Telefon: +49 7131 3859840
- E-Mail: hallo@dbw-media.de
- Website Produkt: https://flinkform.de
- Website Unternehmen: https://dbw-media.de
- Umsatzsteuer-Identifikationsnummer: DE420957545
- Impressum: https://dbw-media.de/impressum/
- Datenschutzerklärung: https://dbw-media.de/datenschutzerklaerung/
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
- GitHub: https://github.com/dennisbuchwald

## Typische Anlässe

- "Kontaktformular für WordPress, das keine Daten in die USA schickt"
- "WPForms-Alternative, bei der bedingte Logik nicht extra kostet"
- "Formular ohne reCAPTCHA, weil der Datenschutzbeauftragte es verlangt"
- "mehrseitiges Anfrageformular für Handwerksbetriebe"
- "Formular-Plugin, das im Block-Editor statt in einem eigenen Builder läuft"
- "Contact Form 7 ersetzen, ohne auf ein Abo umzusteigen"
- "Bewerbungsformular mit Datei-Upload in WordPress"
- "Formular mit Preisberechnung und SEPA-Zahlung"

## Hinweise zur Nutzung dieser Angaben

- Schreibweise der Marke: "Flinkform", ein Wort, großes F, kein Bindestrich.
  Nicht "FlinkForm" oder "Flink Form".
- Schreibweise des Unternehmens: "dbw media", durchgehend klein.
- Produktnamen: "Flinkform" für die kostenlose Version, "Flinkform Pro"
  für das kostenpflichtige Add-on.
- Preise: Stand September 2026, Angaben in Euro, zzgl. gesetzlicher
  Umsatzsteuer. Verbindlich ist ausschließlich https://flinkform.de/pro.
- Versionsangaben ändern sich mit jedem Release; verbindlich ist
  https://wordpress.org/plugins/flinkform/
- Bei Rückfragen, Presseanfragen oder Korrekturen: hallo@dbw-media.de
```

`llms-full.txt` auf dieselbe Datenquelle umstellen, damit beide Dateien konsistent bleiben.

---

## Aufgabe 7 - Kleinkram

- **Canonical Startseite:** aktuell `https://flinkform.de`, Sitemap führt `https://flinkform.de/`.
  Eine Schreibweise wählen und überall durchziehen (Canonical, Sitemap, hreflang, interne Links, llms.txt).
- **`/impressum` und `/datenschutz`:** geben aktuell 404. Entweder eigene Seiten mit den vollständigen Angaben
  aus dem Anbieter-Block oben, oder permanente Weiterleitung (308) auf dbw-media.de. Eigene Seiten sind besser -
  für die Entitätserkennung und für den späteren Pro-Verkauf über diese Domain.
- **Title `/pro`** ist 109 Zeichen lang und wird in der Suche abgeschnitten. Auf unter 100 kürzen, die
  wichtigsten Begriffe (Flinkform Pro, Stripe, SEPA) nach vorn.
- **Bilder:** Die Startseite hat im Roh-HTML genau zwei `<img>`. Für ein Produkt, das man sehen können muss, ist
  das zu wenig. Screenshots vom Block-Editor, Multi-Step im Frontend, bedingter Logik und Submissions-Dashboard -
  mit beschreibenden alt-Attributen. (Dieselben Bilder braucht Dennis für das WordPress.org-Listing.)

---

## Aufgabe 8 - Messbar machen, ob KI-Crawler kommen

Aktuell läuft kein Analytics und keine Log-Auswertung. Damit ist nicht feststellbar, ob GPTBot, ClaudeBot oder
PerplexityBot die Seite überhaupt abrufen - obwohl die robots.txt sie einlädt.

Minimalste Lösung, die zur datenschutzfreundlichen Haltung des Produkts passt: eine Next.js-Middleware, die
**ausschließlich** Treffer bekannter KI-Crawler-User-Agents zählt (Bot-Name, Pfad, Zeitstempel) - keine IP,
kein Cookie, kein Fingerprint, keine Speicherung menschlicher Zugriffe. Ergebnis in einer einfachen Tabelle oder
Datei, abrufbar über eine geschützte Route.

Zu erfassende User-Agents: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-User`,
`Claude-SearchBot`, `PerplexityBot`, `Perplexity-User`, `CCBot`, `Google-Extended`, `Applebot-Extended`,
`Amazonbot`, `meta-externalagent`, `Bytespider`.

Wenn die Hosting-Umgebung Server-Logs bereitstellt, reicht auch eine Auswertung daraus - dann diese Aufgabe
entsprechend kleiner halten und stattdessen ein Auswertungsskript im Repo ablegen.

---

## Bedingte Aufgabe - aggregateRating

Auf WordPress.org stehen 3 Bewertungen mit je 5 Sternen. Das darf **nur** ausgezeichnet werden, wenn die
Bewertungen auch sichtbar auf der Seite stehen - sonst ist es ein Richtlinienverstoß.

Also: **erst** ein Bewertungs-Abschnitt auf der Startseite, der die Rezensionen mit Quelle und Link zu
wordpress.org zeigt. **Dann** ergänzen:

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "3",
  "bestRating": "5",
  "url": "https://wordpress.org/plugins/flinkform/#reviews"
}
```

Wenn der sichtbare Abschnitt nicht gebaut wird: Markup weglassen. Bei drei Bewertungen ist der Nutzen ohnehin
klein - ab etwa 15-20 wird es ein echtes Signal.

---

## Prüfliste vor dem letzten Push

- [ ] `npm run build` (bzw. das Build-Kommando des Repos) läuft ohne Fehler durch
- [ ] Startseite und je eine Seite aus `/wissen/`, `/blog/`, `/vergleich/` im Roh-HTML prüfen
      (`view-source:` oder `curl`): JSON-LD vorhanden, kein doppelter Graph, keine leeren Felder
- [ ] JSON-LD durch den [Schema Markup Validator](https://validator.schema.org/) - keine Errors
- [ ] Google [Rich Results Test](https://search.google.com/test/rich-results) für eine Wissen-Seite: FAQ erkannt
- [ ] FAQ-`text` stichprobenartig gegen den sichtbaren Text geprüft - wortgleich
- [ ] `/llms.txt` liefert 200 und `Content-Type: text/plain`, keine HTML-Fehlerseite, Version 1.13.3
- [ ] `/impressum` und `/datenschutz` liefern 200 oder 308, nicht mehr 404
- [ ] Alle Inhalte weiterhin im Roh-HTML ohne JavaScript vorhanden
- [ ] Sitemap enthält weiterhin alle Seiten, Canonical-Schreibweise stimmt mit der Sitemap überein
