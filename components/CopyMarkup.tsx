"use client";

import { useState } from "react";

/** Block-Markup mit Kopier-Button. Ohne JavaScript bleibt der Code markierbar. */
export default function CopyMarkup({
  markup,
  copyLabel,
  copiedLabel,
}: {
  markup: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(markup);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ohne Clipboard-Rechte bleibt der Code zum Markieren stehen.
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-ink bg-ink text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="font-mono text-xs text-white/50">HTML / Block-Markup</span>
        <button
          type="button"
          onClick={copy}
          className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-ink transition-all hover:-translate-y-0.5"
          aria-live="polite"
        >
          {copied ? `✓ ${copiedLabel}` : copyLabel}
        </button>
      </div>
      <pre className="max-h-80 overflow-auto p-4 text-[0.75rem] leading-relaxed text-white/80">
        <code>{markup}</code>
      </pre>
    </div>
  );
}
