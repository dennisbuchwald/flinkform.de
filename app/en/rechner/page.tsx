import type { Metadata } from "next";
import RechnerContent from "@/components/pages/RechnerContent";
import { SITE_URL } from "@/lib/site";
import { rechner } from "@/content/en/rechner";

export const metadata: Metadata = {
  title: rechner.meta.title,
  description: rechner.meta.description,
  alternates: {
    canonical: `${SITE_URL}/en/rechner`,
    languages: { de: `${SITE_URL}/rechner`, en: `${SITE_URL}/en/rechner`, "x-default": `${SITE_URL}/rechner` },
  },
};

export default function EnglishRechnerPage() {
  return <RechnerContent locale="en" t={rechner} />;
}
