import { OG_SIZE, sectionOgImage } from "@/lib/og";

export const alt = "WordPress form templates";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OgImage() {
  return sectionOgImage(
    "Templates",
    "WordPress form templates",
    "Contact, callback, project inquiry, job application and more. Copy, adjust, done.",
  );
}
