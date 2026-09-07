import { NextResponse, type NextRequest } from "next/server";
import { AI_CRAWLER_LOG_TAG, detectAiCrawler } from "@/lib/ai-crawlers";

/**
 * Geo-Voreinstellung für Erstbesucher ohne Sprach-Cookie: nur der neutrale
 * Einstiegspunkt "/" ist betroffen (nie /en, /pro & Co.), damit beide
 * Sprachversionen von überall crawlbar bleiben. Bekannte Such-/KI-Crawler
 * werden immer ausgenommen (Sicherheitsnetz gegen das Google-crawlt-aus-
 * den-USA-Problem) - dieselbe Liste wie in app/robots.ts gepflegt.
 */
const CRAWLER_UA =
  /googlebot|bingbot|duckduckbot|baiduspider|yandex|slurp|gptbot|oai-searchbot|chatgpt-user|claudebot|claude-user|claude-searchbot|perplexitybot|google-extended|ccbot|amazonbot|applebot|meta-externalagent|facebookexternalhit|twitterbot|linkedinbot/i;

const DACH_COUNTRIES = new Set(["DE", "AT", "CH"]);

/**
 * Zählt Abrufe durch KI-Crawler, damit überhaupt messbar ist, ob die
 * Einladung in der robots.txt angenommen wird.
 *
 * Bewusst nur eine Zeile ins Server-Log, kein Speicher und kein Zähler:
 * Serverless-Instanzen sind kurzlebig, ein eigener Zähler würde je nach
 * Instanz andere Zahlen liefern. Erfasst werden ausschließlich Bot-Name,
 * Pfad und Zeitstempel - keine IP, kein Cookie, kein Fingerprint, und
 * menschliche Zugriffe gar nicht. Auswertung: scripts/ai-crawler-report.mjs
 */
function logAiCrawler(request: NextRequest, userAgent: string) {
  const bot = detectAiCrawler(userAgent);
  if (!bot) return;

  console.log(
    JSON.stringify({
      tag: AI_CRAWLER_LOG_TAG,
      bot,
      path: request.nextUrl.pathname,
      at: new Date().toISOString(),
    }),
  );
}

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
  logAiCrawler(request, userAgent);

  // Alles Weitere betrifft nur die Sprachweiche auf der neutralen Startseite.
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  if (CRAWLER_UA.test(userAgent)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get("ff_locale")?.value;
  if (cookieLocale === "en") {
    return redirectToEn(request);
  }
  if (cookieLocale === "de") {
    return NextResponse.next();
  }

  const country =
    process.env.NODE_ENV !== "production" && request.nextUrl.searchParams.has("debug_country")
      ? request.nextUrl.searchParams.get("debug_country")
      : request.headers.get("x-vercel-ip-country");

  if (country && !DACH_COUNTRIES.has(country)) {
    return redirectToEn(request);
  }

  return NextResponse.next();
}

function redirectToEn(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/en";
  const response = NextResponse.redirect(url, 302);
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}

/**
 * Läuft über alle Seiten- und Text-Routen (robots.txt, llms.txt und Sitemap
 * eingeschlossen - gerade die sind für KI-Crawler interessant), aber nicht
 * über Assets: die verzerren die Zählung nur und kosten Rechenzeit.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:png|jpe?g|gif|svg|webp|avif|ico|woff2?|css|js|map)$).*)",
  ],
};
