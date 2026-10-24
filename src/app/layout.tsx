import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import "./redesign.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Acenara — Software Development & Digital Technology Studio",
    template: "%s — Acenara",
  },
  description:
    "Thoughtful design and purposeful engineering. Acenara builds websites, applications, AI workflows, and digital platforms from Lahore, Pakistan.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/brand/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Acenara",
    description: "Software Development & Digital Technology Studio",
    ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/brand/icon.svg` } : {}),
    email: "zakhter843@gmail.com",
    telephone: "+923211514226",
    founder: { "@type": "Person", name: "Zohaib Akhtar" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Broadway Commercial, Park View City, Multan Road",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  };
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
