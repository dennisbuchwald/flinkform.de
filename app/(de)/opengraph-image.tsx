import { OG_SIZE, homeOgImage } from "@/lib/og";

export const alt = "Flinkform - Das privacy-first Formular-Plugin für WordPress";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return homeOgImage(
    "Das privacy-first Formular-Plugin für WordPress",
    "Multi-Step, bedingte Logik, Spam-Schutz ohne externe Dienste. Kostenlos.",
  );
}
