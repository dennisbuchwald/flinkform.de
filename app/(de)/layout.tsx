import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { siteGraph } from "@/lib/schema";
import { common } from "@/content/de/common";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Flinkform - Das privacy-first Formular-Plugin für WordPress",
    template: "%s | Flinkform",
  },
  description:
    "Flinkform ist ein block-natives Formular-Plugin für den WordPress-Block-Editor. Multi-Step, bedingte Logik und Spam-Schutz ohne externe Dienste, kostenlos. DSGVO by design, aus Deutschland.",
  openGraph: {
    siteName: "Flinkform",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={siteGraph("de")} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {common.skipLink}
        </a>
        <Header locale="de" />
        <main id="main" className="grow">
          {children}
        </main>
        <Footer locale="de" />
      </body>
    </html>
  );
}
