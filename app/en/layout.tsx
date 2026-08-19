import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { common } from "@/content/en/common";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Flinkform - The Privacy-First Form Plugin for WordPress",
    template: "%s | Flinkform",
  },
  description:
    "Flinkform is a block-native form plugin for the WordPress block editor. Multi-step forms, conditional logic and spam protection without third-party services, free. Privacy by design, made in Germany.",
  openGraph: {
    siteName: "Flinkform",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "dbw media",
  url: "https://dbw-media.de",
  founder: { "@id": `${SITE_URL}/#dennis` },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Heilbronn",
    addressCountry: "DE",
  },
  sameAs: ["https://www.dennisbuchwald.de", "https://github.com/dbwmedia"],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#dennis`,
  name: "Dennis Buchwald",
  url: `${SITE_URL}/ueber`,
  jobTitle: "WordPress developer and founder of dbw media",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  sameAs: [
    "https://www.dennisbuchwald.de",
    "https://github.com/dennisbuchwald",
    "https://wordpress.org/plugins/flinkform/",
    "https://profiles.wordpress.org/dbwmediadennis/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Flinkform",
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationSchema, personSchema, websiteSchema]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {common.skipLink}
        </a>
        <Header locale="en" />
        <main id="main" className="grow">
          {children}
        </main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
