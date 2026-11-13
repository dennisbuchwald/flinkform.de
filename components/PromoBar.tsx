import Link from "next/link";
import PromoBarClose from "@/components/PromoBarClose";
import PromoCountdown from "@/components/PromoCountdown";
import { localizedHref, type Locale } from "@/lib/i18n/routes";

const TEXT = {
  de: {
    lead: "Black Week:",
    body: "Flinkform Pro 50 % günstiger im ersten Jahr. Bis 30.11.",
    link: "Zu den Preisen",
    close: "Hinweis schließen",
  },
  en: {
    lead: "Black Week:",
    body: "Flinkform Pro 50% off your first year. Until Nov 30.",
    link: "See pricing",
    close: "Close notice",
  },
} as const;

/** Sitewide Aktionsleiste. Sichtbar nur bei data-promo="on" und nicht weggeklickt. */
export default function PromoBar({ locale }: { locale: Locale }) {
  const t = TEXT[locale];
  return (
    <div className="promo-on promo-bar relative bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-12 py-2.5 text-center text-[0.85rem] sm:px-8">
        <p>
          <strong className="font-bold">{t.lead}</strong> {t.body}
        </p>
        <PromoCountdown locale={locale} className="hidden text-white/60 sm:inline" />
        <Link
          href={localizedHref(locale, "/pro#preise")}
          className="font-semibold underline decoration-white/40 underline-offset-2 hover:decoration-white"
        >
          {t.link} →
        </Link>
      </div>
      <PromoBarClose label={t.close} />
    </div>
  );
}
