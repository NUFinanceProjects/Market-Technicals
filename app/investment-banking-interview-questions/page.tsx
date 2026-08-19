import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "../BreadcrumbJsonLd";

const siteUrl = "https://www.market-technicals.com";
const pageUrl = `${siteUrl}/investment-banking-interview-questions`;
const pageTitle =
  "Investment Banking Interview Questions Guide | Market Technicals";
const pageDescription =
  "Learn how to prepare for investment banking interview questions across accounting, financial statements, valuation, DCFs, M&A, LBOs, market scenarios, and behavioral answers.";

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
    title: "Start with Accounting and Financial Statement Fluency",
    body: [
      "A large part of investment banking interview preparation comes back to accounting. Roughly 60% of the technical foundation is being able to understand how the statements connect, read financial statements, and explain what the numbers mean in plain English.",
      "The income statement, balance sheet, and cash flow statement are not isolated documents. Revenue growth affects margins, margins affect cash flow, working capital affects liquidity, and debt, depreciation, amortization, stock-based compensation, and capex all flow through different parts of the model.",
      "Strong candidates also know where to find the numbers. Annual reports, 10-Ks, 10-Qs, earnings releases, investor presentations, and proxy statements each answer different questions. Proxies are especially useful for compensation, ownership, voting matters, transaction background, fairness opinions, and board process when a company is involved in a deal.",
    ],
    href: "/TechnicalQuestions",
    linkText: "Practice accounting and technical questions",
  },
  {
    title: "Modeling Courses Help, but Interviews Test Explanation",
    body: [
      "Courses from Wall Street Prep, Breaking Into Wall Street, and similar providers are popular because they teach useful modeling mechanics. They can help you build DCFs, merger models, LBOs, operating models, and transaction analyses.",
      "The interview skill is different. Bankers are rarely watching you build a full model live. They are usually testing whether you can explain what is happening, why it matters, and how one assumption affects the rest of the analysis.",
      "Knowing exactly how to calculate something is important, but being able to explain it bottom up is often more important. For valuation, that means explaining multiples, discount rates, terminal value, enterprise value, equity value, and why two companies might trade differently. For M&A and LBOs, it means explaining accretion/dilution, purchase price, leverage, returns, debt paydown, and exit multiples without sounding memorized.",
    ],
    href: "/MI400",
    linkText: "Use the M&I 400 bank for explanation reps",
  },
  {
    title: "Market Understanding Comes from News and Structure",
    body: [
      "Market understanding is built by reading news and understanding how finance is structured. Headlines matter, but the real interview skill is connecting rates, credit spreads, equity markets, IPO activity, M&A, earnings, investor sentiment, and sponsor behavior.",
      "If rates rise, what happens to valuation? If credit spreads widen, what happens to LBO financing? If IPO activity slows, what does that imply about risk appetite and public market comparables? Those connections are what turn market news into interview answers.",
      "This also matters for networking. The more you understand the market, the better your questions become. You can ask bankers about their groups, deal activity, client concerns, and market conditions in a way that sounds curious rather than scripted.",
    ],
    href: "/MarketScenarios",
    linkText: "Practice market scenario questions",
  },
  {
    title: "Behavioral Prep Should Be Built Around 4-6 Stories",
    body: [
      "Behavioral interviews are easier when you have 4-6 strong stories ready instead of trying to invent a new answer for every prompt. The same core story can usually be adapted depending on the skill or direction the interviewer is asking about.",
      "Your story bank should cover leadership, teamwork, conflict, failure, pressure, initiative, analytical work, and why you are interested in investment banking or a specific firm. The goal is not to sound robotic. The goal is to know your examples well enough to adjust them naturally.",
      "Good behavioral answers are specific and concise. They set up the situation quickly, explain what you did, show judgment, and make the result or lesson clear. Follow-up questions usually test whether the story is real and whether you understand your own decisions.",
    ],
    href: "/BehavioralPractice",
    linkText: "Practice behavioral answers",
  },
  {
    title: "Practice Is Layered Every Day",
    body: [
      "Interview prep works best as a daily layered process: reps, news, explanation, follow-up questions, and a constant understanding of where you are. A single long cram session is usually weaker than repeated practice that builds fluency.",
      "The order matters. Start with the right fundamental questions, explain each concept from the bottom up, then answer follow-ups that force you to connect details. That is how technical knowledge turns into interview readiness.",
      "A useful daily rhythm is to review one core concept, answer several questions out loud, read market news, and explain why that news matters for companies, valuation, deals, or capital markets. Tracking completed questions, scores, and session averages helps you see what is actually improving.",
    ],
    href: "/MixedPractice",
    linkText: "Run mixed practice",
  },
  {
    title: "Use Each Resource for the Right Job",
    body: [
      "No single resource does everything. Textbooks and courses help with foundations and modeling. Question banks show how interview questions are phrased. Market news builds judgment and context. Spoken practice makes the knowledge usable when someone is actually listening.",
      "Market Technicals is built around that last mile: turning what you know into clear answers, then using scores, follow-up questions, saved progress, and behavioral story notes to understand what to practice next.",
    ],
    href: "/Prep",
    linkText: "See prep resources",
  },
];

const practiceLayers = [
  {
    title: "Reps",
    body: "Answer technical, market, and behavioral prompts often enough that the structure becomes natural.",
  },
  {
    title: "News",
    body: "Read market news consistently and connect it back to valuation, financing, deals, and investor behavior.",
  },
  {
    title: "Explanation",
    body: "Practice explaining concepts from first principles instead of repeating memorized interview lines.",
  },
  {
    title: "Follow-Ups",
    body: "Use follow-up questions to test whether you really understand the concept beneath the answer.",
  },
  {
    title: "Tracking",
    body: "Keep track of completed questions, scores, and weak spots so each session has a purpose.",
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
            Investment banking interviews combine accounting, financial statement
            fluency, valuation, market judgment, and behavioral storytelling. The
            best preparation is not just knowing the formulas. It is knowing how
            to explain the logic clearly when the interviewer starts asking
            follow-ups.
          </p>
        </header>

        <section className="grid gap-5">
          <h2 className="text-3xl font-black text-black">
            What Investment Banking Interviews Usually Test
          </h2>
          <p className="max-w-4xl text-base leading-7 text-steel">
            Most interviews test whether you can connect details into a full
            picture. You need accounting and valuation mechanics, but you also
            need to understand where numbers come from, how companies are
            financed, what markets are doing, and how to communicate your own
            experience.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Accounting and filings",
              "Valuation and transaction logic",
              "Markets, behaviorals, and spoken judgment",
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
              <div className="mt-3 grid gap-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-steel">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                href={section.href}
                className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-black hover:underline"
              >
                {section.linkText}
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </section>

        <section className="border-t border-line pt-6">
          <h2 className="text-3xl font-black text-black">
            A Practical Daily Prep Loop
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-steel">
            The strongest preparation combines repeated questions with market
            reading and bottom-up explanation. Each layer supports the others:
            reps expose gaps, news gives context, follow-ups reveal whether you
            understand the answer, and tracking keeps you honest about progress.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {practiceLayers.map((layer) => (
              <div key={layer.title} className="border border-line bg-white p-4">
                <h3 className="font-black text-black">{layer.title}</h3>
                <p className="mt-2 text-sm leading-6 text-steel">{layer.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
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
