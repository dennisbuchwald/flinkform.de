/**
 * Letzte inhaltliche Änderung der Seiten, die nicht in posts.ts, wissen.ts
 * oder vergleiche.ts stehen. Speist die Sitemap (lastmod).
 *
 * Warum von Hand und nicht aus Git: Vercel klont beim Build nur flach
 * (depth 10). `git log -1 -- <datei>` liefert dort für ältere Dateien den
 * Rand-Commit, also ein falsches, zu neues Datum. Deshalb gilt:
 * Inhalt ändern = Datum hier (bzw. `updated` im jeweiligen Eintrag) mitziehen.
 * `npm run check:dates` vergleicht lokal gegen Git und meldet Vergessenes.
 *
 * Die Datei hat bewusst keine Imports, damit das Prüfskript sie lesen kann.
 */
export const PAGE_UPDATED = {
  "/": { date: "2026-09-29", sources: ["content/de/home.ts", "content/en/home.ts", "components/pages/HomeContent.tsx"] },
  "/pro": { date: "2026-09-30", sources: ["content/de/pro.ts", "content/en/pro.ts", "components/pages/ProContent.tsx"] },
  "/roadmap": { date: "2026-10-07", sources: ["content/de/roadmap.ts", "content/en/roadmap.ts"] },
  "/rechner": { date: "2026-09-29", sources: ["content/de/rechner.ts", "content/en/rechner.ts"] },
  "/vergleich": { date: "2026-09-28", sources: ["content/de/vergleich.ts", "content/en/vergleich.ts"] },
  "/docs": { date: "2026-09-07", sources: ["app/(de)/docs"] },
  "/ueber": { date: "2026-09-28", sources: ["app/(de)/ueber"] },
  "/presse": { date: "2026-09-07", sources: ["app/(de)/presse"] },
  "/impressum": { date: "2026-09-30", sources: ["app/(de)/impressum"] },
  "/datenschutz": { date: "2026-09-30", sources: ["app/(de)/datenschutz"] },
} as const;

export type UpdatedPath = keyof typeof PAGE_UPDATED;

export function pageUpdated(path: UpdatedPath): Date {
  return new Date(PAGE_UPDATED[path].date);
}

/** Jüngstes Datum einer Liste (für Übersichtsseiten wie /blog). */
export function latest(dates: string[]): Date {
  return new Date(dates.reduce((a, b) => (a > b ? a : b)));
}
