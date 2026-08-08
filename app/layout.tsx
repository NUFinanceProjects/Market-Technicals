import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Market Technicals",
  description: "Finance technical interview practice with market-based reasoning.",
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
