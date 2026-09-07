import { buildLlmsTxt } from "@/lib/llms";

/** Kompakte Marken- und Seitenübersicht für KI-Systeme (llmstxt.org). */
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
