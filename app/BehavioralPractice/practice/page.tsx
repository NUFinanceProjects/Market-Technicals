import type { Metadata } from "next";
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
  return <Home initialScreen="behavioralQuiz" />;
}
