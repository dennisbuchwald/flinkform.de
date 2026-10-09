import type { Metadata } from "next";
import VorlagenContent from "@/components/pages/VorlagenContent";
import { SITE_URL } from "@/lib/site";
import { vorlagenUi } from "@/content/de/vorlagen";

export const metadata: Metadata = {
  title: vorlagenUi.meta.title,
  description: vorlagenUi.meta.description,
  alternates: {
    canonical: `${SITE_URL}/vorlagen`,
    languages: {
      de: `${SITE_URL}/vorlagen`,
      en: `${SITE_URL}/en/templates`,
      "x-default": `${SITE_URL}/vorlagen`,
    },
  },
};

export default function VorlagenPage() {
  return <VorlagenContent locale="de" t={vorlagenUi} />;
}
