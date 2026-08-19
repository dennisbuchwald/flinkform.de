"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeOfPath, otherLocaleHref, type Locale } from "@/lib/i18n/routes";

function setLocaleCookie(locale: Locale) {
  document.cookie = `ff_locale=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageSwitcher({
  t,
  className = "",
}: {
  t: { de: string; en: string; label: string };
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const current = localeOfPath(pathname);
  const target = otherLocaleHref(pathname);

  function go(locale: Locale, href: string | null) {
    setLocaleCookie(locale);
    if (href) router.push(href);
  }

  return (
    <div
      role="group"
      aria-label={t.label}
      className={`inline-flex items-center rounded-full border border-line bg-white p-0.5 text-xs font-semibold ${className}`}
    >
      <button
        type="button"
        onClick={() => go("de", current === "de" ? null : (target ?? null))}
        aria-current={current === "de" ? "true" : undefined}
        disabled={current !== "de" && !target}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          current === "de"
            ? "bg-ink text-white"
            : target
              ? "text-ink-soft hover:bg-line/60 hover:text-ink"
              : "cursor-not-allowed text-ink-muted/50"
        }`}
      >
        {t.de}
      </button>
      <button
        type="button"
        onClick={() => go("en", current === "en" ? null : (target ?? null))}
        aria-current={current === "en" ? "true" : undefined}
        disabled={current !== "en" && !target}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          current === "en"
            ? "bg-ink text-white"
            : target
              ? "text-ink-soft hover:bg-line/60 hover:text-ink"
              : "cursor-not-allowed text-ink-muted/50"
        }`}
      >
        {t.en}
      </button>
    </div>
  );
}
