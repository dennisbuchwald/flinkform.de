import Link from "next/link";
import PromoBarClose from "@/components/PromoBarClose";
import PromoCountdown from "@/components/PromoCountdown";
import { localizedHref, type Locale } from "@/lib/i18n/routes";

const TEXT = {
  de: {
    lead: "Black Week:",
    body: "Flinkform Pro zum halben Preis, bis 30.11.",
    link: "Gutschein ansehen",
    close: "Hinweis schließen",
  },
  en: {
    lead: "Black Week:",
    body: "Flinkform Pro at half price, until Nov 30.",
    link: "View coupon",
    close: "Close notice",
  },
} as const;

/** Sitewide Aktionsleiste. Sichtbar nur bei data-promo="on" und nicht weggeklickt. */
export default function PromoBar({ locale }: { locale: Locale }) {
  const t = TEXT[locale];
  return (
    <div className="promo-on promo-bar relative bg-gradient-pro-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-12 py-2.5 text-center text-[0.85rem] sm:px-8">
        <p>
          <strong className="font-bold">{t.lead}</strong> {t.body}
        </p>
        <PromoCountdown locale={locale} className="hidden text-white/90 sm:inline" />
        <Link
          href={localizedHref(locale, "/pro#preise")}
          className="font-semibold underline decoration-white/50 underline-offset-2 hover:decoration-white"
        >
          {t.link} →
        </Link>
      </div>
      <PromoBarClose label={t.close} />
    </div>
  );
}
