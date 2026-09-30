import { OG_SIZE, homeOgImage } from "@/lib/og";

export const alt = "Flinkform - The privacy-first form plugin for WordPress";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return homeOgImage(
    "The privacy-first form plugin for WordPress",
    "Multi-step, conditional logic, spam protection without external services. Free.",
  );
}
