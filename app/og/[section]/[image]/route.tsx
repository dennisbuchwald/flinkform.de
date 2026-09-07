import { sectionOgImage } from "@/lib/og";
import { articleOgImage, OG_SECTIONS, type OgSection } from "@/lib/og-articles";

/**
 * Vorschaubild pro Artikel: /og/<bereich>/<slug>.png
 *
 * Wird zur Build-Zeit erzeugt (generateStaticParams), damit das `image` im
 * Article-Schema auf ein echtes, sofort ausgelieferbares Bild zeigt. Titel und
 * Bereich kommen aus denselben Content-Listen wie die Seiten selbst - es gibt
 * nichts, was auseinanderlaufen könnte.
 */
export const dynamic = "force-static";

export function generateStaticParams() {
  return OG_SECTIONS.flatMap((section) =>
    articleOgImage.slugs(section).map((slug) => ({
      section,
      image: `${slug}.png`,
    })),
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ section: string; image: string }> },
) {
  const { section, image } = await params;
  const slug = image.replace(/\.png$/, "");
  const entry = articleOgImage.find(section as OgSection, slug);

  if (!entry) {
    return new Response("Not found", { status: 404 });
  }

  return sectionOgImage(entry.kicker, entry.title, entry.subtitle);
}
