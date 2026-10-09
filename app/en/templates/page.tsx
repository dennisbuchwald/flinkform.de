import type { Metadata } from "next";
import VorlagenContent from "@/components/pages/VorlagenContent";
import { SITE_URL } from "@/lib/site";
import { vorlagenUi } from "@/content/en/vorlagen";

export const metadata: Metadata = {
  title: vorlagenUi.meta.title,
  description: vorlagenUi.meta.description,
  alternates: {
    canonical: `${SITE_URL}/en/templates`,
    languages: {
      de: `${SITE_URL}/vorlagen`,
      en: `${SITE_URL}/en/templates`,
      "x-default": `${SITE_URL}/vorlagen`,
    },
  },
};

export default function EnglishTemplatesPage() {
  return <VorlagenContent locale="en" t={vorlagenUi} />;
}
