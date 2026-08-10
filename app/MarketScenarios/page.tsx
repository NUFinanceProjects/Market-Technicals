import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Market Scenario Interview Practice | Market Technicals",
  description:
    "Practice market scenario interview prompts that connect current events, companies, valuation, deals, and capital markets reasoning.",
  alternates: {
    canonical: "/MarketScenarios",
  },
  openGraph: {
    title: "Market Scenario Interview Practice | Market Technicals",
    description:
      "Practice market scenario interview prompts that connect current events, companies, valuation, deals, and capital markets reasoning.",
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
