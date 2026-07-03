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
        className="font-(family-name:--font-display) text-3xl font-bold tracking-tight sm:text-4xl"
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
}: {
  children: ReactNode;
  variant?: "brand" | "pro" | "scarcity";
}) {
  const bg =
    variant === "pro"
      ? "bg-gradient-pro"
      : variant === "scarcity"
        ? "bg-gradient-scarcity"
        : "bg-gradient-brand";
  return (
    <span
      className={`inline-block rounded-full px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white ${bg}`}
    >
      {children}
    </span>
  );
}
