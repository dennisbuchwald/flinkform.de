"use client";

import { useSyncExternalStore } from "react";
import { PROMO } from "@/lib/promo";

const END_MS = Date.parse(PROMO.end);

// Minutengenau reicht: Die Anzeige zeigt Tage und Stunden, kein Sekunden-Ticker.
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null;

/** Ehrlicher Countdown bis Aktionsende (Berlin), ohne Zurücksetzen. */
export default function PromoCountdown({ locale, className }: { locale: "de" | "en"; className?: string }) {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);
  if (minute === null) return null;

  const left = Math.max(0, END_MS - minute * 60_000);
  const days = Math.floor(left / 86_400_000);
  const hours = Math.floor((left % 86_400_000) / 3_600_000);
  const minutes = Math.floor((left % 3_600_000) / 60_000);
  if (left === 0) return null;

  const text =
    locale === "de"
      ? days > 0
        ? `Noch ${days} ${days === 1 ? "Tag" : "Tage"}, ${hours} Std.`
        : `Noch ${hours} Std., ${minutes} Min.`
      : days > 0
        ? `${days} ${days === 1 ? "day" : "days"}, ${hours} h left`
        : `${hours} h, ${minutes} min left`;

  return (
    <span className={className} aria-live="off">
      {text}
    </span>
  );
}
