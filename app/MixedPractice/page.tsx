import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Mixed Finance Interview Practice | Market Technicals",
  description:
    "Run realistic mixed finance interview practice with technical questions and market scenarios across accounting, valuation, M&A, LBOs, and capital markets.",
  alternates: {
    canonical: "/MixedPractice",
  },
  openGraph: {
    title: "Mixed Finance Interview Practice | Market Technicals",
    description:
      "Run realistic mixed finance interview practice with technical questions and market scenarios across accounting, valuation, M&A, LBOs, and capital markets.",
    url: "/MixedPractice",
  },
};

export default function MixedPracticePage() {
  return <Home initialScreen="setup" initialPracticeMode="Mixed Practice" />;
}
