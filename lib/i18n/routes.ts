export const LOCALES = ["de", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "de";

/**
 * Deutsche Pfade, die auch unter /en existieren (P1). Slugs sind bewusst
 * identisch (kein Slug-Mapping) - der Umschalter muss nur /en togglen.
 * Seiten außerhalb dieser Liste bleiben rein deutsch, ohne EN-Gegenstück.
 */
export const TRANSLATED_PATHS = ["/", "/pro", "/roadmap", "/rechner", "/vergleich"] as const;

export function enPathFor(dePath: string): string {
  return dePath === "/" ? "/en" : `/en${dePath}`;
}

export function dePathFor(enPath: string): string {
  if (enPath === "/en") return "/";
  return enPath.startsWith("/en/") ? enPath.slice(3) : enPath;
}

export function localeOfPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

/** Ziel-URL in der jeweils anderen Sprache, oder null wenn keine Übersetzung existiert. */
export function otherLocaleHref(pathname: string): string | null {
  if (localeOfPath(pathname) === "en") {
    return dePathFor(pathname);
  }
  return (TRANSLATED_PATHS as readonly string[]).includes(pathname)
    ? enPathFor(pathname)
    : null;
}

/**
 * Content-Dictionaries verwenden überall kanonische (deutsche) Pfade als
 * hrefs, z. B. "/pro#preise". Diese Funktion hängt für locale="en" das
 * /en-Präfix an, aber nur wenn die Zielseite tatsächlich übersetzt ist -
 * Links auf noch-deutsche Seiten (z. B. Vergleichs-Unterseiten) bleiben
 * unverändert, auch wenn sie von einer englischen Seite aus verlinkt werden.
 */
export function localizedHref(locale: Locale, href: string): string {
  if (locale === "de" || !href.startsWith("/")) return href;
  const [base, hash] = href.split("#");
  const isTranslated = (TRANSLATED_PATHS as readonly string[]).includes(base);
  return isTranslated ? enPathFor(base) + (hash ? `#${hash}` : "") : href;
}
