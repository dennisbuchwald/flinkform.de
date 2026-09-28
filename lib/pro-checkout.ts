import { LIFETIME, PRICING } from "@/lib/site";

/**
 * Alles, was den Pro-Verkauf steuert, an einer Stelle: Freigabe, Checkout-Links
 * und das Ablaufdatum der Launch-Aktion. Nichts davon darf verstreut im JSX
 * stehen, sonst findet beim Launch niemand alle Schalter wieder.
 */

/**
 * Schaltet die Kauf-Buttons scharf.
 *
 * Steht bewusst auf false. Im Freemius-Dashboard ist "Release plans to users"
 * noch aus, vor allem aber hat Flinkform Pro noch keine Lizenz- und
 * Update-Strecke (kein Freemius-SDK im Plugin). Jemand könnte heute zwar
 * bezahlen, bekäme aber weder Lizenzprüfung noch automatische Updates.
 *
 * Erst umlegen, wenn beides steht: SDK im Pro-Plugin UND Pläne in Freemius
 * freigegeben.
 */
export const PRO_SALES_ENABLED = false;

/**
 * Letzter Tag der Launch-Lifetime-Aktion (einschließlich).
 *
 * ACHTUNG, zwei Systeme: Diese Konstante blendet den Block nur auf der Website
 * aus. Der Lifetime-Preis in Freemius läuft NICHT automatisch ab, den muss
 * Dennis im Dashboard separat abschalten.
 *
 * Zweiter Fallstrick: Die Seite wird statisch gebaut. Das Datum wird also beim
 * Build ausgewertet, nicht beim Seitenaufruf. Ohne neuen Build nach dem Stichtag
 * bleibt der Block stehen.
 */
export const LIFETIME_UNTIL = "2026-12-31";

/** Läuft die Lifetime-Aktion zum Build-Zeitpunkt noch? */
export function isLifetimeOffered(now: Date = new Date()): boolean {
  return now.toISOString().slice(0, 10) <= LIFETIME_UNTIL;
}

/** Freemius-Produkt 33387, Plan 69582 (ein Plan, Staffelung über licenses). */
const CHECKOUT_BASE = "https://checkout.freemius.com/plugin/33387/plan/69582/";

type BillingCycle = "annual" | "lifetime";

/**
 * Checkout-URL für eine Site-Staffel. Am 28.09.2026 wurden alle fünf Varianten
 * im Browser gegengeprüft: Staffel, Abrechnungszyklus und Nettopreis stimmen.
 */
export function checkoutUrl(
  licenses: string,
  billingCycle: BillingCycle = "annual",
): string {
  const params = new URLSearchParams({
    licenses,
    billing_cycle: billingCycle,
    currency: "eur",
  });
  return `${CHECKOUT_BASE}?${params.toString()}`;
}

/** Checkout-URL eines Plans aus der Preistabelle. */
export function planCheckoutUrl(plan: (typeof PRICING)[number]): string {
  return checkoutUrl(plan.licenses);
}

/** Die Lifetime-Lizenz läuft über dieselbe 25-Site-Staffel, nur einmalig. */
export const LIFETIME_CHECKOUT_URL = checkoutUrl(LIFETIME.licenses, "lifetime");
