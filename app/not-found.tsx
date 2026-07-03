import Link from "next/link";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="font-(family-name:--font-display) text-7xl font-extrabold text-gradient-brand">
        404
      </p>
      <h1 className="mt-4 font-(family-name:--font-display) text-3xl font-bold tracking-tight">
        Dieses Feld ist leer. Und zwar wirklich.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
        Die Seite gibt es nicht (mehr). Immerhin: Kein einziges Byte wurde
        dabei an Drittserver gesendet.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-soft"
        >
          Zur Startseite
        </Link>
        <Link
          href="/wissen"
          className="rounded-full border border-line bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-muted/40"
        >
          Zum Wissens-Hub
        </Link>
      </div>
    </Section>
  );
}
