/**
 * Die KI-Crawler, die uns interessieren. Dieselbe Liste, die app/robots.ts
 * ausdrücklich einlädt, plus Bytespider - wer eingeladen wird, soll auch
 * gezählt werden.
 */
export const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "Bytespider",
] as const;

export type AiCrawler = (typeof AI_CRAWLERS)[number];

/**
 * Längste Namen zuerst, sonst schluckt "ClaudeBot" den Treffer, den
 * "Claude-SearchBot" verdient hätte.
 */
const PATTERN = new RegExp(
  `(${[...AI_CRAWLERS]
    .sort((a, b) => b.length - a.length)
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "i",
);

/** Der erkannte Crawler in seiner offiziellen Schreibweise, sonst null. */
export function detectAiCrawler(userAgent: string): AiCrawler | null {
  const match = PATTERN.exec(userAgent);
  if (!match) return null;
  const hit = match[1].toLowerCase();
  return (
    AI_CRAWLERS.find((name) => name.toLowerCase() === hit) ?? null
  );
}

/** Kennzeichnung, an der die Log-Auswertung unsere Zeilen erkennt. */
export const AI_CRAWLER_LOG_TAG = "ai-crawler";
