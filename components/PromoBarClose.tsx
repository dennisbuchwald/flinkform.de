"use client";

import { PROMO } from "@/lib/promo";

/** Schließt die Aktionsleiste und merkt sich das für diese Aktion. */
export default function PromoBarClose({ label }: { label: string }) {
  function close() {
    document.documentElement.setAttribute("data-promo-bar", "closed");
    try {
      localStorage.setItem("ff_promo_bar", PROMO.coupon);
    } catch {
      // Ohne Speicher bleibt sie eben bis zum nächsten Laden zu.
    }
  }
  return (
    <button
      type="button"
      onClick={close}
      aria-label={label}
      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path d="M2 2l10 10M12 2 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </button>
  );
}
