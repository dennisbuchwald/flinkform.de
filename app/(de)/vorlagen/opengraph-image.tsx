import { OG_SIZE, sectionOgImage } from "@/lib/og";

export const alt = "Formular-Vorlagen für WordPress";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return sectionOgImage(
    "Vorlagen",
    "Formular-Vorlagen für WordPress",
    "Kontakt, Rückruf, Projektanfrage, Bewerbung und mehr. Kopieren, anpassen, fertig.",
  );
}
