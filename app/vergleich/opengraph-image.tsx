import { OG_SIZE, sectionOgImage } from "@/lib/og";

export const alt = "Flinkform im Vergleich mit anderen Formular-Plugins";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return sectionOgImage(
    "Vergleich",
    "Ehrliche Plugin-Vergleiche",
    "Mit regulären Preisen, Quellen und dem Hinweis, wann du nicht wechseln solltest.",
  );
}
