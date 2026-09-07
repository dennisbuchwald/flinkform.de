#!/usr/bin/env node
/**
 * Wertet aus, welche KI-Crawler flinkform.de tatsächlich abrufen.
 *
 * Datenquelle sind die Server-Logs des Hosters. Die Proxy-Funktion schreibt
 * pro Crawler-Abruf eine Zeile mit Bot-Name, Pfad und Zeitstempel - mehr
 * nicht, keine IP und kein Cookie. Dieses Skript sammelt diese Zeilen ein
 * und zählt sie aus.
 *
 * So kommst du an die Logs:
 *   1. Vercel-Dashboard → Projekt → Logs → Zeitraum wählen → Download (JSON)
 *   2. node scripts/ai-crawler-report.mjs ~/Downloads/logs.json
 *   Oder direkt aus der CLI:
 *   vercel logs flinkform.de --json | node scripts/ai-crawler-report.mjs
 *
 * Das Format ist egal: Das Skript sucht in jeder Zeile nach unseren
 * Log-Objekten, gleich ob sie roh oder in einem Log-Wrapper stecken.
 */

import fs from "node:fs";

const TAG = "ai-crawler";

function readInput() {
  const file = process.argv[2];
  if (file) return fs.readFileSync(file, "utf8");
  if (process.stdin.isTTY) {
    console.error(
      "Nutzung: node scripts/ai-crawler-report.mjs <logdatei>\n" +
        "     oder: vercel logs flinkform.de --json | node scripts/ai-crawler-report.mjs",
    );
    process.exit(1);
  }
  return fs.readFileSync(0, "utf8");
}

/**
 * Findet unsere Log-Objekte, egal wie tief sie eingebettet sind.
 *
 * Vercel verpackt die Ausgabe in ein "message"-Feld und escapt dabei die
 * Anführungszeichen. Einmal entpacken fängt beide Formen ab: rohe Zeilen
 * bleiben unverändert, weil in ihnen kein \\" vorkommt.
 */
function extractEntries(raw) {
  const unescaped = raw.replace(/\\"/g, '"');
  const entries = [];
  const pattern = /\{[^{}]*"tag"\s*:\s*"ai-crawler"[^{}]*\}/g;
  for (const match of unescaped.matchAll(pattern)) {
    try {
      const entry = JSON.parse(match[0]);
      if (entry.tag === TAG && entry.bot) entries.push(entry);
    } catch {
      // Abgeschnittene Zeile: überspringen.
    }
  }
  return entries;
}

function report(entries) {
  if (entries.length === 0) {
    console.log(
      "Keine KI-Crawler-Abrufe im Log gefunden.\n" +
        "Das heißt entweder: der Zeitraum ist zu kurz, oder es kam wirklich keiner.",
    );
    return;
  }

  const byBot = new Map();
  for (const entry of entries) {
    const stats = byBot.get(entry.bot) ?? {
      hits: 0,
      paths: new Map(),
      first: entry.at,
      last: entry.at,
    };
    stats.hits += 1;
    stats.paths.set(entry.path, (stats.paths.get(entry.path) ?? 0) + 1);
    if (entry.at < stats.first) stats.first = entry.at;
    if (entry.at > stats.last) stats.last = entry.at;
    byBot.set(entry.bot, stats);
  }

  const sorted = [...byBot.entries()].sort((a, b) => b[1].hits - a[1].hits);
  const nameWidth = Math.max(...sorted.map(([bot]) => bot.length), 8);

  console.log(`KI-Crawler-Abrufe gesamt: ${entries.length}\n`);
  console.log(
    `${"Bot".padEnd(nameWidth)}  ${"Abrufe".padStart(6)}  ${"Seiten".padStart(6)}  Zuletzt`,
  );
  console.log("-".repeat(nameWidth + 34));
  for (const [bot, stats] of sorted) {
    console.log(
      `${bot.padEnd(nameWidth)}  ${String(stats.hits).padStart(6)}  ` +
        `${String(stats.paths.size).padStart(6)}  ${stats.last.slice(0, 16).replace("T", " ")}`,
    );
  }

  console.log("\nMeistgeholte Seiten je Bot:");
  for (const [bot, stats] of sorted) {
    const top = [...stats.paths.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([path, count]) => `${path} (${count})`)
      .join(", ");
    console.log(`  ${bot}: ${top}`);
  }
}

report(extractEntries(readInput()));
