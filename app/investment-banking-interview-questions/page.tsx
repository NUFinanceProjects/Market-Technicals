import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "../BreadcrumbJsonLd";

const siteUrl = "https://www.market-technicals.com";
const pageUrl = `${siteUrl}/investment-banking-interview-questions`;
const pageTitle =
  "Investment Banking Interview Questions Guide | Market Technicals";
const pageDescription =
  "Learn how to prepare for investment banking interview questions across accounting, valuation, DCFs, M&A, LBOs, market scenarios, and behavioral answers.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Investment Banking Interview Questions Guide",
  description: pageDescription,
  url: pageUrl,
  author: {
    "@type": "Organization",
    name: "Market Technicals",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Market Technicals",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon-192.png`,
    },
  },
  mainEntityOfPage: pageUrl,
  inLanguage: "en-US",
};

const sections = [
  {
    title: "Technical Questions",
    body: "Technical interviews test whether you understand the finance and accounting mechanics behind valuation and deal work. Common areas include the three financial statements, enterprise value, equity value, valuation multiples, DCF analysis, M&A math, and LBO returns.",
    href: "/TechnicalQuestions",
    linkText: "Practice technical questions",
  },
  {
    title: "Accounting Questions",
    body: "Accounting questions usually focus on how line items move across the income statement, balance sheet, and cash flow statement. Strong answers are precise, but still spoken naturally enough for an interview.",
    href: "/TechnicalQuestions",
    linkText: "Review accounting prompts",
  },
  {
    title: "Valuation, DCF, M&A, and LBO Questions",
    body: "Valuation questions ask how businesses are priced, while DCF, merger model, and LBO questions test how assumptions flow through a model. The best preparation is repeated practice explaining the logic out loud.",
    href: "/MI400",
    linkText: "Open the M&I 400 bank",
  },
  {
    title: "Market Scenario Questions",
    body: "Market scenario questions ask you to reason through current events, rates, credit spreads, public companies, IPOs, M&A activity, and investor behavior. Interviewers want clear thinking more than memorized headlines.",
    href: "/MarketScenarios",
    linkText: "Practice market scenarios",
  },
  {
    title: "Behavioral Questions",
    body: "Behavioral interviews cover your story, why investment banking, why this firm, strengths, weaknesses, leadership, conflict, failure, and deal or internship experience. Good answers are structured, specific, and concise.",
    href: "/BehavioralPractice",
    linkText: "Practice behavioral answers",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/investment-banking-interview-questions",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/investment-banking-interview-questions",
  },
};

export default function InvestmentBankingInterviewQuestionsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-ink">
      <BreadcrumbJsonLd
        name="Investment Banking Interview Questions Guide"
        path="/investment-banking-interview-questions"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="border-b border-line pb-8">
          <Link
            href="/"
            className="font-['Times_New_Roman',Georgia,serif] text-2xl font-black leading-[0.82] text-black hover:underline"
          >
            Market
            <br />
            Technicals
          </Link>
          <h1 className="mt-10 max-w-4xl font-['Times_New_Roman',Georgia,serif] text-5xl font-normal leading-[0.96] tracking-normal text-black sm:text-6xl lg:text-7xl">
            Investment Banking Interview Questions Guide
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-steel">
            Investment banking interviews usually combine technical finance
            questions, market awareness, and behavioral answers. This guide
            breaks down what to expect and links into focused practice for each
            part of the process.
          </p>
        </header>

        <section className="grid gap-5">
          <h2 className="text-3xl font-black text-black">
            What Investment Banking Interviews Usually Test
          </h2>
          <p className="max-w-4xl text-base leading-7 text-steel">
            Most interviews are testing two things at once: whether you know the
            finance concepts, and whether you can explain them clearly under
            pressure. A strong answer is structured, direct, and grounded in the
            business logic behind the question.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Accounting and financial statements",
              "Valuation and transaction analysis",
              "Market awareness and spoken judgment",
            ].map((item) => (
              <div
                key={item}
                className="border-l-2 border-mint bg-transparent py-1 pl-3 text-sm font-semibold leading-6 text-steel"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5">
          {sections.map((section) => (
            <article key={section.title} className="border border-line bg-panel p-5">
              <h2 className="text-2xl font-black text-black">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-steel">{section.body}</p>
              <Link
                href={section.href}
                className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-black text-black hover:underline"
              >
                {section.linkText}
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </section>

        <section className="border-t border-line pt-6">
          <h2 className="text-3xl font-black text-black">
            How to Practice Efficiently
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-steel">
            Start with targeted technical reps, then mix in market scenarios and
            behavioral prompts once the core concepts feel familiar. For signed-in
            users, Market Technicals tracks completed M&I and behavioral
            questions, saves recent session averages, and keeps reference stories
            ready for fit interviews.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/MixedPractice"
              className="inline-flex h-11 items-center justify-center gap-2 bg-mint px-4 font-sans text-sm font-black text-black transition hover:bg-[#89a9cf]"
            >
              Start mixed practice
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center border border-line bg-white px-4 font-sans text-sm font-black text-black transition hover:border-mint"
            >
              Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
