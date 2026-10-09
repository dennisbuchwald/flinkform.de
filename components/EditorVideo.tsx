"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Stummes Loop-Video aus dem Block-Editor. Lädt erst, wenn es in die Nähe
 * des Viewports kommt, damit es das LCP der Startseite nicht belastet.
 * Bei reduzierter Bewegung kein Autoplay, sondern Steuerelemente.
 */
export default function EditorVideo({
  base,
  label,
  width,
  height,
}: {
  /** Pfad ohne Endung, z. B. /video/editor-de */
  base: string;
  label: string;
  width: number;
  height: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!load || !el) return;
    el.load();
    // Reduzierte Bewegung: kein Autoplay, Steuerelemente statt Loop.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.controls = true;
    } else {
      el.play().catch(() => {});
    }
  }, [load]);

  return (
    <video
      ref={ref}
      className="block h-auto w-full"
      width={width}
      height={height}
      poster={`${base}-poster.webp`}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    >
      {/* Nur MP4 (H.264): spielt überall, und die VP9-Fassung war hier sogar größer. */}
      {load && <source src={`${base}.mp4`} type="video/mp4" />}
    </video>
  );
}
