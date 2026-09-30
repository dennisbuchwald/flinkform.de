import { OG_SIZE, sectionOgImage } from "@/lib/og";

export const alt = "Flinkform compared with other form plugins";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return sectionOgImage(
    "Comparison",
    "Honest plugin comparisons",
    "With regular prices, sources, and a note on when you shouldn't switch.",
  );
}
