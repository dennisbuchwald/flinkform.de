import JsonLd from "@/components/JsonLd";
import { faqNode, graph } from "@/lib/schema";
import { type FaqItem } from "@/lib/site";

/**
 * FAQ-Accordion auf <details>/<summary>-Basis: funktioniert ohne JavaScript,
 * ist tastaturbedienbar und liefert das FAQPage-Schema gleich mit. Sichtbarer
 * Text und Schema stammen aus derselben Liste, sie können nicht auseinanderlaufen.
 */
export default function Faq({
  items,
  heading = "Häufige Fragen",
  withSchema = true,
  pageUrl,
  articleId,
}: {
  items: readonly FaqItem[];
  heading?: string;
  withSchema?: boolean;
  /** Absolute URL der Seite, erzeugt die @id des FAQPage-Knotens. */
  pageUrl?: string;
  /** @id des Article-Knotens derselben Seite, für isPartOf. */
  articleId?: string;
}) {
  return (
    <section aria-labelledby="faq-heading">
      {withSchema && (
        <JsonLd
          data={graph([faqNode(items, { url: pageUrl, isPartOf: articleId })])}
        />
      )}
      <h2
        id="faq-heading"
        className="font-(family-name:--font-display) text-3xl font-bold tracking-tight"
      >
        {heading}
      </h2>
      <div className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.q} className="faq-item group py-1">
            <summary className="flex items-center justify-between gap-4 py-4 text-left text-[1.05rem] font-semibold text-ink transition-colors hover:text-brand-violet">
              {item.q}
              <span
                aria-hidden="true"
                className="faq-icon shrink-0 text-2xl font-light text-ink-muted"
              >
                +
              </span>
            </summary>
            <p className="pb-5 text-[0.95rem] leading-relaxed text-ink-soft">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
