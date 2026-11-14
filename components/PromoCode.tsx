"use client";

import { useEffect, useRef } from "react";

/**
 * Gutschein-Code im Ticket. Ein einziger, leiser Glanz-Sweep, sobald der
 * Code ins Bild kommt. Bei prefers-reduced-motion gar keiner (globals.css).
 */
export default function PromoCode({ code }: { code: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.setAttribute("data-shine", "");
          io.disconnect();
        }
      },
      { threshold: 0.8 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className="promo-code">
      {code}
    </span>
  );
}
