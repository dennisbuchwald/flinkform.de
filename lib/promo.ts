/**
 * Black Week 2026: Flinkform Pro 50 % auf das erste Jahr (alle Jahrespläne).
 * Die EINE Stelle für Zeitraum, Code und Rabatt.
 *
 * Freemius-Gutschein BLACKWEEK (ID 115469): 50 %, nur Plan 69582, nur
 * Jahresabrechnung, nur erste Zahlung, 1x pro Kunde, Ende 2026-11-30
 * 22:59:59 UTC = 23:59:59 in Berlin. Lifetime ist ausgenommen.
 *
 * Die Seite ist statisch gebaut. Deshalb steht jede Aktions-Stelle zweimal
 * im HTML (mit und ohne Aktion), und ein Inline-Skript ganz oben im <body>
 * setzt <html data-promo="on|off"> nach der Uhr des Besuchers. CSS blendet
 * die jeweils andere Fassung aus (globals.css). So verschwindet alles nach
 * dem 30.11. auch ohne neuen Deploy, ohne Aufblitzen.
 */
export const PROMO = {
  name: "Black Week",
  coupon: "BLACKWEEK",
  /** Anteil, den der Kunde im ersten Jahr zahlt. */
  factor: 0.5,
  start: "2026-11-13T00:00:00+01:00",
  end: "2026-11-30T23:59:59+01:00",
} as const;

const START_MS = Date.parse(PROMO.start);
const END_MS = Date.parse(PROMO.end);

export function isPromoActive(now: number = Date.now()): boolean {
  return now >= START_MS && now <= END_MS;
}

/** Aktionspreis, z. B. 59 → 29.5 */
export function promoPrice(price: number): number {
  return Math.round(price * PROMO.factor * 100) / 100;
}

/**
 * Füllt "{promo}" und "{price}" mit dem günstigsten Jahresplan, z. B.
 * "Ab {promo} € … statt {price} €" → "Ab 29,50 € … statt 59 €".
 */
export function fillPromoPrice(template: string, price: number, locale: "de" | "en"): string {
  return template
    .replace("{promo}", formatPrice(promoPrice(price), locale))
    .replace("{price}", formatPrice(price, locale))
    .replace(/ €/g, "\u00a0€");
}

/** Preis im Format der Seite: DE 29,50 / EN 29.50, ganze Zahlen ohne Nachkommastellen. */
export function formatPrice(value: number, locale: "de" | "en"): string {
  const digits = Number.isInteger(value) ? 0 : 2;
  return value.toLocaleString(locale === "de" ? "de-DE" : "en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

/**
 * Läuft vor dem ersten Zeichnen: Aktion an/aus nach Besucher-Uhr, Leiste
 * ausblenden, wenn sie weggeklickt wurde. Bewusst ohne Abhängigkeiten.
 */
export const PROMO_BOOT_SCRIPT = `(function(){try{var d=document.documentElement,n=Date.now(),on=n>=${START_MS}&&n<=${END_MS};d.setAttribute("data-promo",on?"on":"off");if(on&&localStorage.getItem("ff_promo_bar")==="${PROMO.coupon}")d.setAttribute("data-promo-bar","closed")}catch(e){}})();`;
