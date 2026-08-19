import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../../BreadcrumbJsonLd";
import Home from "../../page";

export const metadata: Metadata = {
  title: "Behavioral Practice Session | Market Technicals",
  description:
    "Answer finance behavioral interview prompts in a focused practice session with M&I sample answers and spoken-answer feedback.",
  alternates: {
    canonical: "/BehavioralPractice/practice",
  },
};

export default function BehavioralPracticeSessionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        name="Behavioral Practice Session"
        path="/BehavioralPractice/practice"
      />
      <Home initialScreen="behavioralQuiz" />
    </>
  );
}
