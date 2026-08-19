import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Market Scenario Interview Questions | Market Technicals",
  description:
    "Practice finance market scenario interview questions for current events, companies, rates, credit, IPOs, M&A, valuation, and capital markets reasoning.",
  alternates: {
    canonical: "/MarketScenarios",
  },
  openGraph: {
    title: "Market Scenario Interview Questions | Market Technicals",
    description:
      "Practice finance market scenario interview questions for current events, companies, rates, credit, IPOs, M&A, valuation, and capital markets reasoning.",
    url: "/MarketScenarios",
  },
};

export default function MarketScenariosPage() {
  return (
    <Home
      initialScreen="setup"
      initialPracticeMode="Market Scenarios"
    />
  );
}
