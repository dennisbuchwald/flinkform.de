import fs from "node:fs";
import path from "node:path";
import type { FaqItem } from "@/lib/site";

/**
 * Liest den sichtbaren FAQ-Abschnitt eines MDX-Artikels aus der Quelldatei.
 *
 * Warum aus der Datei und nicht aus einer zweiten Liste: Google verlangt, dass
 * der `text` im FAQPage-Markup wörtlich dem entspricht, was auf der Seite
 * steht. Solange beides aus derselben Quelle kommt, kann es nicht
 * auseinanderlaufen - auch dann nicht, wenn jemand nur die Prosa bearbeitet.
 *
 * Gelesen wird zur Build-Zeit: alle Artikel sind statisch vorgerendert.
 */

/** Überschriften, unter denen ein FAQ-Block stehen kann. */
const FAQ_HEADING = /^##\s+(häufige fragen|faq)\s*$/i;

type Section = "wissen" | "blog";

const cache = new Map<string, FaqItem[]>();

export function faqFromMdx(section: Section, slug: string): FaqItem[] {
  const key = `${section}/${slug}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const file = path.join(
    process.cwd(),
    "app",
    "(de)",
    section,
    slug,
    "page.mdx",
  );

  let source: string;
  try {
    source = fs.readFileSync(file, "utf8");
  } catch {
    // Kein MDX-Artikel (oder Laufzeit ohne Quelldateien): lieber kein Markup
    // als falsches Markup.
    return [];
  }

  const items = dedupe([
    ...parseAnswerBlocks(source),
    ...parseFaqSection(source),
  ]);
  cache.set(key, items);
  return items;
}

/** Erste Nennung gewinnt, damit dieselbe Frage nie doppelt im Markup steht. */
function dedupe(items: readonly FaqItem[]): FaqItem[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = item.q.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Eine Frage-Überschrift mit direkt folgendem <AnswerBlock> ist eine echte
 * Frage-Antwort-Einheit auf der Seite und wandert deshalb mit ins FAQ-Markup.
 * Überschriften ohne Fragezeichen bleiben außen vor.
 */
export function parseAnswerBlocks(source: string): FaqItem[] {
  const pattern =
    /^##\s+(.+\?)[ \t]*\r?\n\s*<AnswerBlock>([\s\S]*?)<\/AnswerBlock>/gm;
  const items: FaqItem[] = [];
  for (const match of source.matchAll(pattern)) {
    const q = stripMarkdown(match[1].trim());
    const a = stripMarkdown(match[2].trim());
    if (q && a) items.push({ q, a });
  }
  return items;
}

/** Extrahiert Frage/Antwort-Paare aus dem FAQ-Abschnitt eines MDX-Dokuments. */
export function parseFaqSection(source: string): FaqItem[] {
  const lines = source.split("\n");
  const start = lines.findIndex((line) => FAQ_HEADING.test(line.trim()));
  if (start === -1) return [];

  const block: string[] = [];
  for (const line of lines.slice(start + 1)) {
    if (/^##\s/.test(line) && !/^###/.test(line)) break;
    block.push(line);
  }

  const paragraphs = toParagraphs(block);
  const fromHeadings = parseHeadingStyle(paragraphs);
  return fromHeadings.length > 0 ? fromHeadings : parseBoldStyle(paragraphs);
}

/** Leerzeilen trennen Absätze; Zeilenumbrüche innerhalb eines Absatzes nicht. */
function toParagraphs(lines: readonly string[]): string[] {
  const paragraphs: string[] = [];
  let current: string[] = [];

  const flush = () => {
    if (current.length > 0) {
      paragraphs.push(current.join(" ").trim());
      current = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "") {
      flush();
      continue;
    }
    if (trimmed.startsWith("### ")) {
      flush();
      paragraphs.push(trimmed);
      continue;
    }
    current.push(trimmed);
  }
  flush();
  return paragraphs;
}

/** Übliche Form: "### Frage" gefolgt von einem oder mehreren Antwortabsätzen. */
function parseHeadingStyle(paragraphs: readonly string[]): FaqItem[] {
  const items: FaqItem[] = [];
  let question: string | null = null;
  let answer: string[] = [];

  const flush = () => {
    if (question && answer.length > 0) {
      items.push({ q: question, a: stripMarkdown(answer.join(" ")) });
    }
    question = null;
    answer = [];
  };

  for (const paragraph of paragraphs) {
    if (paragraph.startsWith("### ")) {
      flush();
      question = stripMarkdown(paragraph.slice(4).trim());
      continue;
    }
    if (question) answer.push(paragraph);
  }
  flush();
  return items;
}

/** Variante: "**Frage?** Antwort" als ein Absatz, ohne eigene Überschrift. */
function parseBoldStyle(paragraphs: readonly string[]): FaqItem[] {
  const items: FaqItem[] = [];
  for (const paragraph of paragraphs) {
    const match = /^\*\*(.+?)\*\*\s*(.+)$/.exec(paragraph);
    if (!match) continue;
    items.push({
      q: stripMarkdown(match[1].trim()),
      a: stripMarkdown(match[2].trim()),
    });
  }
  return items;
}

/**
 * Markdown-Auszeichnung entfernen, damit der Schema-Text exakt dem entspricht,
 * was der Besucher liest (Linktext bleibt, die URL fällt weg).
 */
function stripMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/(^|\s)\*([^*]+)\*(?=\s|$|[.,;:!?)])/g, "$1$2")
    .replace(/\\([*_[\]])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}
