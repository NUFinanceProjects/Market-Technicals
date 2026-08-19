import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../../BreadcrumbJsonLd";
import Home from "../../page";

export const metadata: Metadata = {
  title: "M&I 400 Practice Session | Market Technicals",
  description:
    "Answer M&I 400 finance interview questions in a focused practice session with sample answers and spoken-answer feedback.",
  alternates: {
    canonical: "/MI400/practice",
  },
};

export default function MI400PracticePage() {
  return (
    <>
      <BreadcrumbJsonLd
        name="M&I 400 Practice Session"
        path="/MI400/practice"
      />
      <Home initialScreen="miQuiz" />
    </>
  );
}
