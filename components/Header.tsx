import Link from "next/link";
import Image from "next/image";
import { WPORG_URL } from "@/lib/site";

const nav = [
  { label: "Pro", href: "/pro" },
  { label: "Vergleich", href: "/vergleich" },
  { label: "Blog", href: "/blog" },
  { label: "Wissen", href: "/wissen" },
  { label: "Docs", href: "/docs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-(family-name:--font-display) text-lg font-bold tracking-tight"
        >
          <Image
            src="/icons/flinkform-app.svg"
            alt=""
            width={32}
            height={32}
            priority
          />
          Flinkform
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-line/60 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WPORG_URL}
            className="hidden rounded-full bg-ink px-4.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink-soft sm:inline-block"
          >
            Kostenlos laden
          </a>

          {/* Mobile: Disclosure ohne JS */}
          <details className="group relative md:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line bg-card [&::-webkit-details-marker]:hidden"
              aria-label="Menü öffnen"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                className="text-ink"
              >
                <path
                  className="group-open:hidden"
                  d="M2 4.5h14M2 9h14M2 13.5h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  className="hidden group-open:block"
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <nav
              aria-label="Mobile Navigation"
              className="absolute right-0 top-12 w-52 rounded-2xl border border-line bg-card p-2 shadow-xl"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-soft hover:bg-paper hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={WPORG_URL}
                className="mt-1 block rounded-xl bg-ink px-3.5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Kostenlos laden
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
