import type { CSSProperties } from "react";

/**
 * Dekorative Zeile über einer H1: Die Wörter werden nacheinander getippt und
 * durchgestrichen. Reines CSS (globals.css, .plugin-strike). aria-hidden,
 * damit die H1 für Suchmaschinen und Screenreader fester Text bleibt.
 *
 * variant "pro" streicht im Pro-Verlauf (violett → blau) statt im Markenverlauf.
 */
export default function PluginStrike({
  words,
  variant = "brand",
  className = "",
}: {
  words: readonly string[];
  variant?: "brand" | "pro";
  className?: string;
}) {
  return (
    <p
      aria-hidden="true"
      className={`plugin-strike ${variant === "pro" ? "plugin-strike--pro" : ""} font-mono text-sm text-ink-muted ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={word}
          className="plugin-strike__word"
          style={{ "--i": i, "--len": word.length } as CSSProperties}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
