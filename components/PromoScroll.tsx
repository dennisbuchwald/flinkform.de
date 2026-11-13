"use client";

import { useEffect } from "react";

/**
 * Der Hinweis im Free-Plugin verlinkt /pro?utm_campaign=… ohne Anker.
 * Kommt jemand von dort, landet er direkt bei den Preisen.
 */
export default function PromoScroll({ campaign, target }: { campaign: string; target: string }) {
  useEffect(() => {
    if (window.location.hash) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("utm_campaign") !== campaign) return;
    document.getElementById(target)?.scrollIntoView({ block: "start" });
  }, [campaign, target]);
  return null;
}
