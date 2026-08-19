"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { localeHrefs, localeOfPath, type Locale } from "@/lib/i18n/routes";

type SwitcherLabels = { de: string; en: string; label: string };

function setLocaleCookie(locale: Locale) {
  document.cookie = `ff_locale=${locale}; path=/; max-age=31536000; samesite=lax`;
}

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 1.75c-2.1 2.3-2.1 10.2 0 12.5M8 1.75c2.1 2.3 2.1 10.2 0 12.5M1.9 5.5h12.2M1.9 10.5h12.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2 6.5 4.8 9 10 3.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Option({
  label,
  active,
  disabled,
  onClick,
}: {
  label: string;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
        active
          ? "bg-brand-violet/8 font-semibold text-brand-violet"
          : disabled
            ? "cursor-not-allowed text-ink-muted/40"
            : "text-ink-soft hover:bg-paper hover:text-ink"
      }`}
    >
      {label}
      {active && (
        <span aria-hidden="true" className="text-brand-violet">
          <CheckIcon />
        </span>
      )}
    </button>
  );
}

export default function LanguageSwitcher({ t }: { t: SwitcherLabels }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = localeOfPath(pathname);
  const { de, en } = localeHrefs(pathname);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function select(locale: Locale, href: string | null) {
    if (!href) return;
    setLocaleCookie(locale);
    setOpen(false);
    router.push(href);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.label}
        className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-ink-muted/40 hover:text-ink"
      >
        <GlobeIcon />
        {current === "de" ? "DE" : "EN"}
        <svg
          width="9"
          height="9"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.label}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-44 rounded-2xl border border-line bg-card p-1.5 shadow-xl"
        >
          <Option label={t.de} active={current === "de"} onClick={() => select("de", de)} />
          <Option label={t.en} active={current === "en"} disabled={!en} onClick={() => select("en", en)} />
        </div>
      )}
    </div>
  );
}

/** Kompakte Zwei-Wege-Variante ohne Popover, fürs Mobile-Menü. */
export function LanguageSwitcherInline({ t }: { t: SwitcherLabels }) {
  const pathname = usePathname();
  const router = useRouter();
  const current = localeOfPath(pathname);
  const { de, en } = localeHrefs(pathname);

  function select(locale: Locale, href: string | null) {
    if (!href) return;
    setLocaleCookie(locale);
    router.push(href);
  }

  return (
    <div className="flex items-center gap-2" role="listbox" aria-label={t.label}>
      {(
        [
          { locale: "de" as const, label: t.de, href: de },
          { locale: "en" as const, label: t.en, href: en },
        ]
      ).map((opt) => {
        const active = current === opt.locale;
        const disabled = !opt.href;
        return (
          <button
            key={opt.locale}
            type="button"
            role="option"
            aria-selected={active}
            disabled={disabled}
            onClick={() => select(opt.locale, opt.href)}
            className={`flex-1 rounded-full border px-3 py-2 text-sm font-semibold transition-colors ${
              active
                ? "border-brand-violet bg-brand-violet text-white"
                : disabled
                  ? "cursor-not-allowed border-line text-ink-muted/40"
                  : "border-line text-ink-soft hover:border-ink-muted/40 hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
