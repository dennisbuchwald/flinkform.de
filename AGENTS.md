<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# flinkform.de - Projekt

Dies ist die Produktwebsite für das WordPress-Plugin Flinkform (Free) und
Flinkform Pro. Die vollständige Spezifikation (Design, Seitenstruktur, Copy-
Regeln, Pricing, DSGVO-Anforderungen, alle lokalen Quellen der Wahrheit) steht
in **WEBSITE_BRIEF.md** im Repo-Root. Lies sie zuerst, sie ist der Auftrag.

Harte Regeln aus dem Brief, die immer gelten:
- Website-Copy auf Deutsch (DE-Seiten) bzw. professionellem US-Englisch
  (EN-Seiten), Du-Form auf Deutsch. KEIN Em-Dash "—" / Halbgeviertstrich "–"
  als Gedankenstrich in deutschen Texten (KI-Marker), stattdessen
  umformulieren. Englische Texte dürfen normale Interpunktion nutzen.
- Null externe Requests: Fonts lokal, keine CDNs, kein Tracking. Eine
  Ausnahme: ein rein funktionaler Cookie (`ff_locale`) für die Sprachwahl,
  kein Tracking, keine Drittanbieter-Daten - siehe i18n-Abschnitt unten.
- Pricing-Quelle der Wahrheit: FLINKFORM_PRICING.md im Flinkform-Repo
  (59/99/149/299 EUR/Jahr + Lifetime 399 EUR). Keine Streichpreise erfinden.
- Marken-Gradient (5 Stops rot→blau) = Marke/Free; Blau-Violett-Gradient
  (#7e56ff→#00b2ff) = ausschließlich Pro.
- Commits englisch, nur unter Dennis' Namen, kein Co-Author-Zusatz.

## Zweisprachigkeit (DE/EN) - Workflow-Regel

Die Website ist seit August 2026 zweisprachig. Deutsch ist der Default und
unpräfigiert (`flinkform.de/...`), Englisch liegt gespiegelt unter `/en/...`
(`flinkform.de/en/...`), bisher nur für die Prio-1-Seiten (Start, Pro,
Roadmap, Rechner, Vergleichs-Übersicht). Alle anderen Seiten (Vergleichs-
Unterseiten, Blog, Wissen, Docs, Über, Presse) sind bewusst noch rein
deutsch - kein leerer `/en`-Stub, sie bleiben einfach nur unter ihrer
deutschen URL erreichbar.

**Ab jetzt gilt: jede inhaltliche Änderung an einer bereits übersetzten
Seite MUSS in beiden Sprachen gepflegt werden**, sonst laufen DE und EN
auseinander.

- **Wo die Texte liegen:** `content/de/<seite>.ts` und
  `content/en/<seite>.ts`, ein typisiertes Dictionary-Objekt pro Seite
  (z. B. `content/de/pro.ts` / `content/en/pro.ts`). Gemeinsame Header-/
  Footer-/Umschalter-Texte liegen in `content/{de,en}/common.ts`.
- **Wie die Typprüfung greift:** Jede DE-Datei exportiert ihren Dict-Typ
  über `Widen<typeof ...>` (`lib/i18n/widen.ts`) - das ersetzt die
  deutschen String-Literale durch `string`, behält aber jeden Schlüssel und
  jede Array-Form bei. Die EN-Datei importiert genau diesen Typ und
  deklariert ihre Konstante damit (`export const pro: ProDict = {...}`).
  Fehlt in der EN-Datei ein Schlüssel oder stimmt die Form nicht, meldet
  `npm run build` einen TypeScript-Fehler - das ist beabsichtigt.
- **Neuen String zu einer bestehenden P1-Seite hinzufügen:** Key in
  `content/de/<seite>.ts` ergänzen, danach in `content/en/<seite>.ts` mit
  der englischen Übersetzung nachziehen (TypeScript zeigt an, wenn der Key
  in der EN-Datei fehlt). Die JSX-Struktur liegt einmalig in
  `components/pages/<Seite>Content.tsx` und wird von beiden
  Locale-Wrappern (`app/(de)/<seite>/page.tsx` und
  `app/en/<seite>/page.tsx`) mit dem jeweiligen Dictionary aufgerufen -
  Struktur nur an einer Stelle ändern, Text an zwei.
- **Eine Seite neu zweisprachig machen (P2/P3 → übersetzt):** Dictionary +
  `Content`-Komponente nach demselben Muster anlegen, Route unter
  `app/en/<seite>/page.tsx` ergänzen, den Pfad in
  `lib/i18n/routes.ts` (`TRANSLATED_PATHS`) eintragen (das schaltet den
  Sprachumschalter für diese Seite frei) und den Eintrag in `app/sitemap.ts`
  in die `bilingualRoutes`-Logik aufnehmen.
- **Geo-Voreinstellung:** `proxy.ts` leitet einen Erstbesucher ohne
  Sprach-Cookie nur auf der neutralen Root-URL `/` weiter (DE/AT/CH →
  Deutsch bleibt, sonst → `/en`). Bekannte Suchmaschinen-/KI-Crawler werden
  nie umgeleitet. Nie auf einer sprachspezifischen URL umleiten, das würde
  die jeweils andere Sprachversion für Crawler unsichtbar machen.
