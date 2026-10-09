import type { Metadata } from "next";
import VorlageContent from "@/components/pages/VorlageContent";
import { SITE_URL } from "@/lib/site";
import { getVorlage, vorlagen } from "@/lib/vorlagen";
import { vorlagenUi } from "@/content/de/vorlagen";

export const dynamicParams = false;

export function generateStaticParams() {
  return vorlagen.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const v = getVorlage((await params).slug);
  return {
    title: v.de.metaTitle,
    description: v.de.description,
    alternates: {
      canonical: `${SITE_URL}/vorlagen/${v.slug}`,
      languages: {
        de: `${SITE_URL}/vorlagen/${v.slug}`,
        en: `${SITE_URL}/en/templates/${v.enSlug}`,
        "x-default": `${SITE_URL}/vorlagen/${v.slug}`,
      },
    },
    openGraph: { type: "article", title: v.de.metaTitle, description: v.de.description },
  };
}

export default async function VorlagePage({ params }: { params: Promise<{ slug: string }> }) {
  const v = getVorlage((await params).slug);
  return <VorlageContent locale="de" t={vorlagenUi} vorlage={v} />;
}
