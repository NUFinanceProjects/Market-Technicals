export const categories = [
  "Accounting",
  "Enterprise Value and Equity Value",
  "Valuation",
  "DCF",
  "M&A",
  "LBO / Private Equity",
  "Capital Markets",
  "Market Knowledge",
  "General Finance",
] as const;

export const difficulties = ["Beginner", "Intermediate", "Advanced"] as const;

export const practiceModes = [
  "Technical Questions",
  "Market Scenarios",
  "Mixed Practice",
] as const;

export type Category = (typeof categories)[number];
export type Difficulty = (typeof difficulties)[number];
export type PracticeMode = (typeof practiceModes)[number];

export type QuestionKind = Exclude<PracticeMode, "Mixed Practice">;

export type InterviewQuestion = {
  id: string;
  question: string;
  category: Category;
  difficulty: Difficulty;
  mode: QuestionKind;
  expectedConcepts: string[];
  referenceAnswer: string;
  followUpConcept?: string;
  marketScenario?: string;
  sourceType: "local" | "future-news" | "generated";
};

export type GradeResponse = {
  score: number;
  correctPoints: string[];
  missingPoints: string[];
  incorrectStatements: string[];
  improvedAnswer: string;
  followUpQuestion: string;
  overallFeedback: string;
  gradingMode: "ai" | "fallback";
};

export type SessionAnswer = {
  question: InterviewQuestion;
  answer: string;
  grade: GradeResponse;
};
