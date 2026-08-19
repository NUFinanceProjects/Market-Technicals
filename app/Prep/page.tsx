import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../BreadcrumbJsonLd";
import Home from "../page";

export const metadata: Metadata = {
  title: "Finance Interview Prep Resources | Market Technicals",
  description:
    "Use curated finance interview prep resources for M&I 400 questions, Wall Street Prep, market reading, and technical interview preparation.",
  alternates: {
    canonical: "/Prep",
  },
  openGraph: {
    title: "Finance Interview Prep Resources | Market Technicals",
    description:
      "Use curated finance interview prep resources for M&I 400 questions, Wall Street Prep, market reading, and technical interview preparation.",
    url: "/Prep",
  },
};

export default function PrepPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Prep" path="/Prep" />
      <Home initialScreen="prep" />
    </>
  );
}
