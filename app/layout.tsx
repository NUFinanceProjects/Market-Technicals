import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://www.market-technicals.com";
const siteDescription =
  "Investment banking and finance interview practice for technical questions, market scenarios, M&I 400 questions, valuation, M&A, LBOs, accounting, and spoken-answer prep.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Market Technicals",
      url: siteUrl,
      logo: `${siteUrl}/icon-192.png`,
      sameAs: [siteUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Market Technicals",
      url: siteUrl,
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#webapp`,
      name: "Market Technicals",
      url: siteUrl,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "M&I 400 finance interview question practice",
        "Technical interview question practice",
        "Market scenario interview practice",
        "Behavioral interview practice",
        "Progress tracking for signed-in users",
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#practice-sections`,
      name: "Market Technicals Practice Sections",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "M&I 400 Questions",
          url: `${siteUrl}/MI400`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Technical Questions",
          url: `${siteUrl}/TechnicalQuestions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Market Scenarios",
          url: `${siteUrl}/MarketScenarios`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Mixed Practice",
          url: `${siteUrl}/MixedPractice`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Behavioral Practice",
          url: `${siteUrl}/BehavioralPractice`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Prep",
          url: `${siteUrl}/Prep`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Market Technicals",
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Market Technicals",
    description: siteDescription,
    url: siteUrl,
    siteName: "Market Technicals",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Market Technicals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Technicals",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/apple-icon.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png", sizes: "128x128", type: "image/png" },
      { url: "/apple-touch-icon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      {
        url: "/apple-touch-icon-precomposed.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <ClerkProvider>
          {children}
          <Analytics />
        </ClerkProvider>
      </body>
    </html>
  );
}
