import type { Metadata } from "next";
import RoadmapContent from "@/components/pages/RoadmapContent";
import { SITE_URL } from "@/lib/site";
import { roadmap } from "@/content/en/roadmap";

export const metadata: Metadata = {
  title: roadmap.meta.title,
  description: roadmap.meta.description,
  alternates: {
    canonical: `${SITE_URL}/en/roadmap`,
    languages: { de: `${SITE_URL}/roadmap`, en: `${SITE_URL}/en/roadmap`, "x-default": `${SITE_URL}/roadmap` },
  },
};

export default function EnglishRoadmapPage() {
  return <RoadmapContent locale="en" t={roadmap} />;
}
