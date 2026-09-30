import { OG_SIZE, proOgImage } from "@/lib/og";

export const alt = "Flinkform Pro - The form that makes money.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return proOgImage(
    "The form that makes money.",
    "Stripe payments with SEPA and wallets, calculation fields, webhooks. From €59/year.",
  );
}
