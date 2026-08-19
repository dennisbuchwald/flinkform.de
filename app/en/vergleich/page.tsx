import type { Metadata } from "next";
import VergleichContent from "@/components/pages/VergleichContent";
import { SITE_URL } from "@/lib/site";
import { vergleich } from "@/content/en/vergleich";

export const metadata: Metadata = {
  title: vergleich.meta.title,
  description: vergleich.meta.description,
  alternates: {
    canonical: `${SITE_URL}/en/vergleich`,
    languages: {
      de: `${SITE_URL}/vergleich`,
      en: `${SITE_URL}/en/vergleich`,
      "x-default": `${SITE_URL}/vergleich`,
    },
  },
};

export default function EnglishVergleichPage() {
  return <VergleichContent locale="en" t={vergleich} />;
}
