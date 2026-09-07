import Link from "next/link";
import { resolveInternalLinks } from "@/lib/internal-links";

/**
 * "Passend dazu": interne Querverweise aus dem Content-Modell. Die Linktexte
 * sind die echten Seitentitel, es gibt also keine zweite Stelle, an der ein
 * Titel gepflegt werden müsste.
 */
export default function RelatedLinks({
  hrefs,
  heading = "Passend dazu",
  className,
}: {
  hrefs?: readonly string[];
  heading?: string;
  className?: string;
}) {
  const links = resolveInternalLinks(hrefs ?? []);
  if (links.length === 0) return null;

  return (
    <div className={className}>
      <div className="prose-flink">
        <h2 className="!mt-0">{heading}</h2>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
