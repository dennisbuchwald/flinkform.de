import type { Metadata } from "next";
import VergleichContent from "@/components/pages/VergleichContent";
import { SITE_URL } from "@/lib/site";
import { vergleich } from "@/content/de/vergleich";

export const metadata: Metadata = {
  title: vergleich.meta.title,
  description: vergleich.meta.description,
  alternates: {
    canonical: `${SITE_URL}/vergleich`,
    languages: {
      de: `${SITE_URL}/vergleich`,
      en: `${SITE_URL}/en/vergleich`,
      "x-default": `${SITE_URL}/vergleich`,
    },
  },
};

export default function VergleichPage() {
  return <VergleichContent locale="de" t={vergleich} />;
}
