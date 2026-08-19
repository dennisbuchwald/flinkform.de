import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import { SITE_URL } from "@/lib/site";
import { home } from "@/content/en/home";

export const metadata: Metadata = {
  title: { absolute: home.meta.title },
  description: home.meta.description,
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: { de: SITE_URL, en: `${SITE_URL}/en`, "x-default": SITE_URL },
  },
  openGraph: {
    title: home.meta.ogTitle,
    description: home.meta.ogDescription,
    url: `${SITE_URL}/en`,
  },
};

export default function EnglishHome() {
  return <HomeContent locale="en" t={home} />;
}
