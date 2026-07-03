import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

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
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "dbw media",
  url: "https://dbw-media.de",
  founder: { "@type": "Person", name: "Dennis Buchwald" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Heilbronn",
    addressCountry: "DE",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Flinkform",
  inLanguage: "de",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main" className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
