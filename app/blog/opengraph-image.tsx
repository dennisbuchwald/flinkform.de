import { OG_SIZE, sectionOgImage } from "@/lib/og";

export const alt = "Flinkform Blog: WordPress-Formulare, DSGVO und Payments";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return sectionOgImage(
    "Blog",
    "Formulare, DSGVO und WordPress",
    "Fundierte Artikel mit Quellen statt Marketing-Geschwurbel.",
  );
}
