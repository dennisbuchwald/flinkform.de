import type { ReactNode } from "react";

export type CompareCell = boolean | string;
type Accent = "brand" | "pro";

function Cell({
  value,
  highlight,
  accent,
}: {
  value: CompareCell;
  highlight?: boolean;
  accent: Accent;
}) {
  if (value === true) {
    return (
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-white ${
          highlight
            ? accent === "pro"
              ? "bg-gradient-pro"
              : "bg-gradient-brand"
            : "bg-emerald-500"
        }`}
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2 6.5 4.8 9 10 3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="sr-only">Ja</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-line bg-paper text-ink-muted">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path
            d="m1.5 1.5 7 7m0-7-7 7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        <span className="sr-only">Nein</span>
      </span>
    );
  }
  return (
    <span
      className={`text-[0.8rem] leading-snug ${
        highlight ? "font-bold text-brand-violet" : "text-ink-soft"
      }`}
    >
      {value}
    </span>
  );
}

export default function CompareTable({
  caption,
  columns,
  rows,
  note,
  accent = "brand",
}: {
  caption: string;
  /** Erste Spalte ist immer Flinkform (hervorgehoben). */
  columns: readonly string[];
  rows: readonly { feature: string; cells: readonly CompareCell[] }[];
  note?: ReactNode;
  /** "pro" nur in Pro-Kontexten (Farbcodierung der Marke). */
  accent?: Accent;
}) {
  return (
    <div>
      <div className="card overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-center">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              <th scope="col" className="border-b border-line py-4 pl-6 text-left" />
              {columns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={`border-b border-line px-3 py-4 text-xs font-semibold uppercase tracking-wider ${
                    i === 0
                      ? `text-white ${accent === "pro" ? "bg-gradient-pro" : "bg-gradient-brand"}`
                      : "text-ink-muted"
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature} className="border-b border-line last:border-0">
                <th
                  scope="row"
                  className="py-3.5 pl-6 pr-3 text-left text-[0.9rem] font-medium text-ink"
                >
                  {row.feature}
                </th>
                {row.cells.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-3 py-3.5 ${i === 0 ? "bg-brand-violet/5" : ""}`}
                  >
                    <Cell value={cell} highlight={i === 0} accent={accent} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 text-[0.8rem] italic text-ink-muted">{note}</p>}
    </div>
  );
}
