import type { Metadata } from "next";
import VorlageContent from "@/components/pages/VorlageContent";
import { SITE_URL } from "@/lib/site";
import { getVorlageByEnSlug, vorlagen } from "@/lib/vorlagen";
import { vorlagenUi } from "@/content/en/vorlagen";

export const dynamicParams = false;

export function generateStaticParams() {
  return vorlagen.map((v) => ({ slug: v.enSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const v = getVorlageByEnSlug((await params).slug);
  return {
    title: v.en.metaTitle,
    description: v.en.description,
    alternates: {
      canonical: `${SITE_URL}/en/templates/${v.enSlug}`,
      languages: {
        de: `${SITE_URL}/vorlagen/${v.slug}`,
        en: `${SITE_URL}/en/templates/${v.enSlug}`,
        "x-default": `${SITE_URL}/vorlagen/${v.slug}`,
      },
    },
    openGraph: { type: "article", title: v.en.metaTitle, description: v.en.description },
  };
}

export default async function EnglishTemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const v = getVorlageByEnSlug((await params).slug);
  return <VorlageContent locale="en" t={vorlagenUi} vorlage={v} />;
}
