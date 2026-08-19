import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Finance Technical Interview Questions | Market Technicals",
  description:
    "Practice investment banking technical interview questions across accounting, valuation, DCF, M&A, LBOs, enterprise value, equity value, and capital markets.",
  alternates: {
    canonical: "/TechnicalQuestions",
  },
  openGraph: {
    title: "Finance Technical Interview Questions | Market Technicals",
    description:
      "Practice investment banking technical interview questions across accounting, valuation, DCF, M&A, LBOs, enterprise value, equity value, and capital markets.",
    url: "/TechnicalQuestions",
  },
};

export default function TechnicalQuestionsPage() {
  return (
    <Home
      initialScreen="setup"
      initialPracticeMode="Technical Questions"
    />
  );
}
