import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../BreadcrumbJsonLd";
import Home from "../page";

export const metadata: Metadata = {
  title: "M&I 400 Questions | Market Technicals",
  description:
    "Practice the M&I 400 finance technical interview question bank with sample answers, page references, accounting, valuation, M&A, and LBO prep.",
  alternates: {
    canonical: "/MI400",
  },
  openGraph: {
    title: "M&I 400 Questions | Market Technicals",
    description:
      "Practice the M&I 400 finance technical interview question bank with sample answers, page references, accounting, valuation, M&A, and LBO prep.",
    url: "/MI400",
  },
};

export default function MI400Page() {
  return (
    <>
      <BreadcrumbJsonLd name="M&I 400 Questions" path="/MI400" />
      <Home initialScreen="mi" />
    </>
  );
}
