import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Finance Technical Questions | Market Technicals",
  description:
    "Practice finance technical interview questions across accounting, valuation, DCF, M&A, LBOs, enterprise value, and capital markets.",
  alternates: {
    canonical: "/TechnicalQuestions",
  },
  openGraph: {
    title: "Finance Technical Questions | Market Technicals",
    description:
      "Practice finance technical interview questions across accounting, valuation, DCF, M&A, LBOs, enterprise value, and capital markets.",
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
