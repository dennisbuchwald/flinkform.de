import { NextResponse, type NextRequest } from "next/server";

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

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
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

export const config = {
  matcher: "/",
};
