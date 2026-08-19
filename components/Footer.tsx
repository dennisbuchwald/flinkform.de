import Link from "next/link";
import { localizedHref, type Locale } from "@/lib/i18n/routes";
import { common as commonDe } from "@/content/de/common";
import { common as commonEn } from "@/content/en/common";

const dictionaries = { de: commonDe, en: commonEn };

export default function Footer({ locale = "de" }: { locale?: Locale }) {
  const t = dictionaries[locale].footer;
  const aboutHref = localizedHref(locale, "/ueber");

  return (
    <footer className="mt-24 border-t border-line bg-white">
      <div aria-hidden="true" className="h-1 bg-gradient-brand-h" />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="font-(family-name:--font-display) text-lg font-bold">
              Flinkform
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              {t.tagline} {t.madeBy}{" "}
              <Link
                href={aboutHref}
                className="font-medium text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
              >
                Dennis Buchwald
              </Link>{" "}
              {t.inCity}
            </p>
          </div>
          {t.columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={localizedHref(locale, link.href)}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-ink-soft">{t.privacyNote}</p>
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Flinkform · {t.madeWith}{" "}
            <a
              href="https://dbw-media.de"
              className="font-medium text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
            >
              dbw media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
