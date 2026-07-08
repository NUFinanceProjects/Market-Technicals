import type { InterviewQuestion } from "@/lib/types";

export type FinancialNewsEvent = {
  title: string;
  sourceUrl: string;
  publishedAt: string;
  summary: string;
  relevantFacts: string[];
};

export type NewsQuestionDraft = InterviewQuestion & {
  sourceEvent: FinancialNewsEvent;
};

export async function createQuestionsFromNewsEvent(): Promise<NewsQuestionDraft[]> {
  throw new Error(
    "News-generated questions are intentionally not implemented in V1. This adapter is reserved for future article summarization, concept mapping, and question generation.",
  );
}
