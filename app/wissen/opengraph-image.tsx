import { OG_SIZE, sectionOgImage } from "@/lib/og";

export const alt = "Flinkform Wissen: Antworten zu WordPress-Formularen";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return sectionOgImage(
    "Wissen",
    "Antworten statt Werbetexte",
    "Jede Seite beantwortet eine konkrete Frage im ersten Absatz.",
  );
}
