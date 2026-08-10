import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Behavioral Interview Practice | Market Technicals",
  description:
    "Prepare finance behavioral interview answers for fit, leadership, weakness, deal experience, story questions, and spoken-answer practice.",
  alternates: {
    canonical: "/BehavioralPractice",
  },
  openGraph: {
    title: "Behavioral Interview Practice | Market Technicals",
    description:
      "Prepare finance behavioral interview answers for fit, leadership, weakness, deal experience, story questions, and spoken-answer practice.",
    url: "/BehavioralPractice",
  },
};

export default function BehavioralPracticePage() {
  return <Home initialScreen="behavioral" />;
}
