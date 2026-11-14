import type { ReactNode } from "react";

export function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  children,
  sub,
  id,
}: {
  children: ReactNode;
  sub?: ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2
        id={id}
        className="font-(family-name:--font-display) text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {children}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{sub}</p>}
    </div>
  );
}

export function Eyebrow({
  children,
  variant = "brand",
  bar = true,
}: {
  children: ReactNode;
  variant?: "brand" | "pro" | "scarcity";
  bar?: boolean;
}) {
  const bg =
    variant === "pro"
      ? "bg-gradient-pro"
      : variant === "scarcity"
        ? "bg-gradient-scarcity"
        : "bg-gradient-brand";
  return (
    <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
      {bar && <span aria-hidden="true" className={`h-1 w-5 rounded-full ${bg}`} />}
      {children}
    </span>
  );
}
