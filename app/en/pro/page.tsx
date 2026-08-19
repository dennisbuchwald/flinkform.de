import type { Metadata } from "next";
import ProContent from "@/components/pages/ProContent";
import { SITE_URL } from "@/lib/site";
import { pro } from "@/content/en/pro";

export const metadata: Metadata = {
  title: pro.meta.title,
  description: pro.meta.description,
  alternates: {
    canonical: `${SITE_URL}/en/pro`,
    languages: { de: `${SITE_URL}/pro`, en: `${SITE_URL}/en/pro`, "x-default": `${SITE_URL}/pro` },
  },
  openGraph: {
    title: pro.meta.ogTitle,
    description: pro.meta.ogDescription,
    url: `${SITE_URL}/en/pro`,
  },
};

export default function EnglishProPage() {
  return <ProContent locale="en" t={pro} />;
}
