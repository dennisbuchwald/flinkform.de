import { MAIL_CHECK } from "@/lib/site";

/**
 * Hinweis auf e-mail-check.de in den Mail-Ratgebern. Ein normaler Link, kein
 * Iframe: Die Website lädt nichts von fremden Servern.
 */
export default function MailCheckBox() {
  return (
    <aside className="not-prose my-10 overflow-hidden rounded-2xl border border-line bg-white">
      <div aria-hidden="true" className="h-1.5 bg-gradient-brand-h" />
      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <p className="!m-0 text-xs font-bold uppercase tracking-widest text-ink-muted">Kostenloses Tool</p>
          <p className="!mt-2 !mb-0 font-(family-name:--font-display) text-xl font-bold leading-snug text-ink">
            Kommen deine Formular-Mails an? Teste es in 30 Sekunden.
          </p>
          <p className="!mt-2 !mb-0 text-[0.95rem] leading-relaxed text-ink-soft">
            Schick eine normale Mail an die Testadresse auf{" "}
            <a href={MAIL_CHECK.url} className="whitespace-nowrap !font-semibold !text-ink">
              e-mail-check.de
            </a>{" "}
            und du bekommst einen Score von 0 bis 10, mit Klartext-Anleitung für deinen Anbieter. Kostenlos, ohne Konto,
            Server in Deutschland.
          </p>
          <p className="!mt-3 !mb-0 text-sm text-ink-muted">
            Ohne Testmail:{" "}
            <a href={MAIL_CHECK.spf} className="!font-normal !text-ink-muted hover:!text-ink">SPF-Check</a> ·{" "}
            <a href={MAIL_CHECK.dkim} className="!font-normal !text-ink-muted hover:!text-ink">DKIM-Check</a> ·{" "}
            <a href={MAIL_CHECK.dmarc} className="!font-normal !text-ink-muted hover:!text-ink">DMARC-Check</a>
          </p>
          <p className="!mt-2 !mb-0 text-xs text-ink-muted">Ein weiteres Projekt von Dennis Buchwald, Open Source.</p>
        </div>
        <a
          href={MAIL_CHECK.url}
          className="shrink-0 self-start rounded-full bg-ink px-6 py-3 text-[0.9rem] !font-semibold !text-white !no-underline transition-all hover:-translate-y-0.5 sm:self-center"
        >
          Mail jetzt testen
        </a>
      </div>
    </aside>
  );
}
