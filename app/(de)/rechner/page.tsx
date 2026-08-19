import type { Metadata } from "next";
import RechnerContent from "@/components/pages/RechnerContent";
import { SITE_URL } from "@/lib/site";
import { rechner } from "@/content/de/rechner";

export const metadata: Metadata = {
  title: rechner.meta.title,
  description: rechner.meta.description,
  alternates: {
    canonical: `${SITE_URL}/rechner`,
    languages: { de: `${SITE_URL}/rechner`, en: `${SITE_URL}/en/rechner`, "x-default": `${SITE_URL}/rechner` },
  },
};

export default function RechnerPage() {
  return <RechnerContent locale="de" t={rechner} />;
}
