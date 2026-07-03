import Link from "next/link";
import { WPORG_URL, GITHUB_URL } from "@/lib/site";

const columns = [
  {
    heading: "Produkt",
    links: [
      { label: "Flinkform (kostenlos)", href: "/" },
      { label: "Flinkform Pro", href: "/pro" },
      { label: "Preise", href: "/pro#preise" },
      { label: "Kostenrechner", href: "/rechner" },
      { label: "Roadmap & Changelog", href: "/roadmap" },
      { label: "Dokumentation", href: "/docs" },
    ],
  },
  {
    heading: "Vergleich",
    links: [
      { label: "Alle Vergleiche", href: "/vergleich" },
      { label: "Contact Form 7 Alternative", href: "/vergleich/contact-form-7-alternative" },
      { label: "WPForms Alternative", href: "/vergleich/wpforms-alternative" },
      { label: "Gravity Forms Alternative", href: "/vergleich/gravity-forms-alternative" },
    ],
  },
  {
    heading: "Ressourcen",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Wissen", href: "/wissen" },
      { label: "Fakten zu Flinkform", href: "/wissen/flinkform-fakten" },
      { label: "WordPress.org", href: WPORG_URL, external: true },
      { label: "GitHub", href: GITHUB_URL, external: true },
    ],
  },
  {
    heading: "Über",
    links: [
      { label: "Über Flinkform", href: "/ueber" },
      { label: "Presse & Media-Kit", href: "/presse" },
      { label: "RSS-Feed", href: "/feed.xml" },
      { label: "Impressum", href: "https://dbw-media.de/impressum/", external: true },
      {
        label: "Datenschutz",
        href: "https://dbw-media.de/datenschutzerklaerung/",
        external: true,
      },
    ],
  },
] as const;

export default function Footer() {
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
              Das privacy-first Formular-Plugin für den
              WordPress-Block-Editor. Entwickelt von{" "}
              <Link
                href="/ueber"
                className="font-medium text-ink-soft underline decoration-line underline-offset-2 hover:text-ink"
              >
                Dennis Buchwald
              </Link>{" "}
              in Heilbronn.
            </p>
          </div>
          {columns.map((col) => (
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
                        href={link.href}
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
          <p className="text-sm font-medium text-ink-soft">
            Diese Website lädt nichts von Drittservern. Keine Cookies, kein
            Tracking, kein Banner nötig.
          </p>
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Flinkform · Gemacht mit ❤️ und viel
            ☕ von{" "}
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
