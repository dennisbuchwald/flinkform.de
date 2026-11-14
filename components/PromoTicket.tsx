import Link from "next/link";
import PromoCode from "@/components/PromoCode";
import PromoCountdown from "@/components/PromoCountdown";
import { PROMO } from "@/lib/promo";
import type { Locale } from "@/lib/i18n/routes";

export type PromoTicketText = {
  label: string;
  title: string;
  price: string;
  desc: string;
  note?: string;
  couponLabel: string;
  applied: string;
  guarantee: string;
};

/**
 * Black Week als Gutschein zum Mitnehmen: heller Grund, Pro-Verlauf als Kante,
 * rechts ein Abriss wie bei einem echten Ticket. Nur sichtbar bei data-promo="on".
 */
export default function PromoTicket({
  locale,
  t,
  cta,
  headingLevel = "p",
  className = "",
}: {
  locale: Locale;
  t: PromoTicketText;
  cta?: { href: string; label: string };
  headingLevel?: "p" | "h3";
  className?: string;
}) {
  const Heading = headingLevel;
  return (
    <div className={`promo-on promo-ticket ${className}`}>
      <div className="promo-ticket__inner grid md:grid-cols-[1fr_auto]">
        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold text-brand-violet">{t.label}</p>
          <Heading className="mt-2 font-(family-name:--font-display) text-[1.7rem] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            {t.title}
          </Heading>
          <p className="mt-2 text-lg font-semibold text-ink-soft">{t.price}</p>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">{t.desc}</p>
          {t.note && <p className="mt-2 text-xs text-ink-muted">{t.note}</p>}
          <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
            <PromoCountdown locale={locale} className="inline-flex items-center gap-1.5 before:size-1.5 before:rounded-full before:bg-brand-violet/60 before:content-['']" />
            <span className="inline-flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-brand-violet" aria-hidden="true">
                <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z" />
                <path d="m8.75 12 2.25 2.25 4.25-4.5" />
              </svg>
              {t.guarantee}
            </span>
          </p>
        </div>

        <div className="promo-ticket__stub flex flex-col justify-center p-6 sm:p-8 md:w-[340px]">
          <span aria-hidden="true" className="promo-ticket__notch promo-ticket__notch--a" />
          <span aria-hidden="true" className="promo-ticket__notch promo-ticket__notch--b" />
          <p className="text-xs font-semibold text-ink-muted">{t.couponLabel}</p>
          <p className="mt-2">
            <PromoCode code={PROMO.coupon} />
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-ink-soft">
            <span className="flex size-4.5 items-center justify-center rounded-full bg-gradient-pro text-white" aria-hidden="true">
              <svg viewBox="0 0 12 12" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m2.5 6.25 2.25 2.25 4.75-5" />
              </svg>
            </span>
            {t.applied}
          </p>
          {cta && (
            <Link
              href={cta.href}
              className="mt-5 rounded-full bg-gradient-pro px-5 py-3 text-center text-[0.95rem] font-semibold text-white transition-[color,background-color,border-color,opacity] hover:opacity-95"
            >
              {cta.label} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
