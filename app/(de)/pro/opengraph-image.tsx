import { OG_SIZE, proOgImage } from "@/lib/og";

export const alt = "Flinkform Pro - Das Formular, das Geld verdient.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return proOgImage(
    "Das Formular, das Geld verdient.",
    "Stripe-Zahlungen mit SEPA und Wallets, Berechnungsfelder, Webhooks. Ab 59 €/Jahr.",
  );
}
