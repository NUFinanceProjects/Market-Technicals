import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Market Technicals",
  description:
    "Finance technical interview preparation that connects accounting, valuation, M&A, LBOs, capital markets, and market events into realistic spoken-answer practice.",
  openGraph: {
    title: "Market Technicals",
    description:
      "Finance technical interview preparation that connects accounting, valuation, M&A, LBOs, capital markets, and market events into realistic spoken-answer practice.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Market Technicals",
    description:
      "Finance technical interview preparation that connects accounting, valuation, M&A, LBOs, capital markets, and market events into realistic spoken-answer practice.",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
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
      <body>{children}</body>
    </html>
  );
}
