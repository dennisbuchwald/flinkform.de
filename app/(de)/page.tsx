import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";
import { HOME_URL, SITE_URL } from "@/lib/site";
import { home } from "@/content/de/home";

export const metadata: Metadata = {
  title: { absolute: home.meta.title },
  description: home.meta.description,
  alternates: {
    canonical: HOME_URL,
    languages: { de: HOME_URL, en: `${SITE_URL}/en`, "x-default": HOME_URL },
  },
  openGraph: {
    title: home.meta.ogTitle,
    description: home.meta.ogDescription,
    url: HOME_URL,
  },
};

export default function Home() {
  return <HomeContent locale="de" t={home} />;
}
