import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingOrder from "@/components/FloatingOrder";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { businessJsonLd } from "@/lib/seo";

const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-500.woff2", weight: "500" },
    { path: "./fonts/cormorant-600.woff2", weight: "600" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});
const jost = localFont({
  src: [
    { path: "./fonts/jost-400.woff2", weight: "400" },
    { path: "./fonts/jost-500.woff2", weight: "500" },
  ],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Custom-made outfits in Lagos`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", url: site.url, siteName: site.name, locale: "en_NG", title: site.name, description: site.description },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#592929", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-cream">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingOrder />
        <JsonLd data={businessJsonLd()} />
      </body>
    </html>
  );
}