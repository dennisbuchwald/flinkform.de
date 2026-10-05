#!/usr/bin/env node
/**
 * Meldet Seiten, deren Quelldateien in Git neuer sind als ihr gepflegtes
 * Änderungsdatum (posts.ts, wissen.ts, vergleiche.ts, updated.ts, FACTS_UPDATED).
 *
 * Läuft nur lokal mit voller Git-Historie, nicht im Vercel-Build (flacher Klon).
 * Nicht jede Meldung heißt "Datum ziehen": Eine rein technische Änderung
 * (Refactoring, Styling) ist keine inhaltliche. Dann ignorieren.
 *
 *   npm run check:dates
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const git = (...args) => execFileSync("git", args, { encoding: "utf8" }).trim();

if (git("rev-parse", "--is-shallow-repository") === "true") {
  console.log("Flacher Git-Klon, Prüfung übersprungen.");
  process.exit(0);
}

/** Technische Commits, die kein Änderungsdatum auslösen (.dates-ignore-revs). */
const ignored = new Set(
  existsSync(".dates-ignore-revs")
    ? readFileSync(".dates-ignore-revs", "utf8")
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#"))
    : [],
);

/** Letzter inhaltlicher Commit-Tag (YYYY-MM-DD) über alle Quellen. */
function lastCommit(sources) {
  const dates = sources
    .filter((s) => existsSync(s))
    .map((s) =>
      git("log", "--format=%H %cs", "--", s)
        .split("\n")
        .map((line) => line.split(" "))
        .find(([hash]) => hash && !ignored.has(hash))?.[1],
    )
    .filter(Boolean);
  return dates.sort().at(-1) ?? null;
}

/** slug + updated (bzw. date) aus einer Daten-Datei lesen. */
function entries(file, field) {
  const src = readFileSync(file, "utf8");
  return [...src.matchAll(/slug: "([^"]+)"([\s\S]*?)\n  \}/g)].map(([, slug, body]) => {
    const date =
      body.match(new RegExp(`${field}: "([^"]+)"`))?.[1] ?? body.match(/date: "([^"]+)"/)?.[1];
    return { slug, date };
  });
}

const checks = [
  ...entries("lib/posts.ts", "updated").map(({ slug, date }) => ({
    page: `/blog/${slug}`,
    date,
    sources: [`app/(de)/blog/${slug}`],
  })),
  ...entries("lib/wissen.ts", "updated").map(({ slug, date }) => ({
    page: `/wissen/${slug}`,
    date,
    sources: [`app/(de)/wissen/${slug}`],
  })),
  ...entries("lib/vergleiche.ts", "updated").map(({ slug, date }) => ({
    page: `/vergleich/${slug}`,
    date,
    sources: [`app/(de)/vergleich/${slug}`],
  })),
  {
    page: "/wissen/flinkform-fakten (FACTS_UPDATED)",
    date: readFileSync("lib/site.ts", "utf8").match(/FACTS_UPDATED = "([^"]+)"/)[1],
    sources: ["app/(de)/wissen/flinkform-fakten"],
  },
  ...[
    ...readFileSync("lib/updated.ts", "utf8").matchAll(
      /"(\/[^"]*)": \{ date: "([^"]+)", sources: \[([^\]]*)\]/g,
    ),
  ].map(([, page, date, list]) => ({
    page,
    date,
    sources: [...list.matchAll(/"([^"]+)"/g)].map((m) => m[1]),
  })),
];

const stale = checks
  .map((c) => ({ ...c, commit: lastCommit(c.sources) }))
  .filter((c) => c.commit && c.commit > c.date);

if (stale.length === 0) {
  console.log(`Alle ${checks.length} Änderungsdaten passen zu Git.`);
} else {
  console.log("Quelle in Git neuer als das gepflegte Datum (bei inhaltlicher Änderung Datum ziehen):");
  for (const s of stale) console.log(`  ${s.page}: gepflegt ${s.date}, Git ${s.commit}`);
  process.exitCode = 1;
}
