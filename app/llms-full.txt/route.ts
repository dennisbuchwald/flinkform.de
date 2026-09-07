import { buildLlmsFullTxt } from "@/lib/llms";

/** Volltexte der Kernseiten für KI-Systeme (llmstxt.org). */
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
