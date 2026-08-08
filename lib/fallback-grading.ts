import type { GradeResponse, InterviewQuestion } from "@/lib/types";

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const conceptMatched = (answer: string, concept: string) => {
  const normalizedAnswer = normalize(answer);
  const importantTerms = normalize(concept)
    .split(" ")
    .filter((term) => term.length > 3);

  if (importantTerms.length === 0) {
    return false;
  }

  const matches = importantTerms.filter((term) => normalizedAnswer.includes(term));
  return matches.length >= Math.max(1, Math.ceil(importantTerms.length * 0.45));
};

const stopWords = new Set([
  "about",
  "above",
  "after",
  "also",
  "because",
  "before",
  "between",
  "could",
  "does",
  "from",
  "have",
  "into",
  "more",
  "most",
  "should",
  "that",
  "their",
  "there",
  "these",
  "they",
  "this",
  "through",
  "what",
  "when",
  "where",
  "which",
  "while",
  "with",
  "would",
  "your",
]);

const importantTerms = (value: string) =>
  normalize(value)
    .split(" ")
    .filter((term) => term.length > 3 && !stopWords.has(term));

const referenceSentences = (value: string) =>
  value
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => importantTerms(sentence).length >= 3)
    .slice(0, 8);

const referenceMatched = (answerTerms: Set<string>, reference: string) => {
  const terms = importantTerms(reference);

  if (terms.length === 0) {
    return false;
  }

  const matches = terms.filter((term) => answerTerms.has(term));
  return matches.length / terms.length >= 0.35;
};

function fallbackFromReference(question: InterviewQuestion, answer: string, reason: string) {
  const answerTerms = new Set(importantTerms(answer));
  const referenceTerms = [...new Set(importantTerms(question.referenceAnswer))];
  const matchedTerms = referenceTerms.filter((term) => answerTerms.has(term));
  const coverage =
    referenceTerms.length === 0 ? 0.5 : matchedTerms.length / referenceTerms.length;
  const shortAnswerPenalty = importantTerms(answer).length < 10 ? 15 : 0;
  const score = Math.max(10, Math.min(85, Math.round(coverage * 100) - shortAnswerPenalty));

  const sentences = referenceSentences(question.referenceAnswer);
  const correctPoints = sentences
    .filter((sentence) => referenceMatched(answerTerms, sentence))
    .slice(0, 4);
  const missingPoints = sentences
    .filter((sentence) => !referenceMatched(answerTerms, sentence))
    .slice(0, 5);

  return {
    score,
    correctPoints,
    missingPoints,
    incorrectStatements: [],
    improvedAnswer: question.referenceAnswer,
    followUpQuestion:
      question.followUpConcept ??
      "How would you make your answer more specific to your own background or the question prompt?",
    overallFeedback:
      `Fallback grading compared your answer with the sample answer because ${reason}. Treat this as directional, not as a full interviewer-style evaluation.`,
    gradingMode: "fallback" as const,
  };
}

export function fallbackGrade(
  question: InterviewQuestion,
  answer: string,
  reason = "GEMINI_API_KEY is not configured",
): GradeResponse {
  if (question.expectedConcepts.length === 0) {
    return fallbackFromReference(question, answer, reason);
  }

  const correctPoints = question.expectedConcepts.filter((concept) =>
    conceptMatched(answer, concept),
  );
  const missingPoints = question.expectedConcepts.filter(
    (concept) => !correctPoints.includes(concept),
  );
  const completionScore = Math.round(
    (correctPoints.length / question.expectedConcepts.length) * 100,
  );

  const shortAnswerPenalty = normalize(answer).split(" ").length < 18 ? 15 : 0;
  const score = Math.max(10, Math.min(85, completionScore - shortAnswerPenalty));

  return {
    score,
    correctPoints,
    missingPoints,
    incorrectStatements: [],
    improvedAnswer: question.referenceAnswer,
    followUpQuestion:
      question.followUpConcept ??
      "Which assumption would you pressure-test first if an interviewer pushed back?",
    overallFeedback:
      `Fallback grading is using simple concept matching because ${reason}. Treat this as directional, not as a full interviewer-style evaluation.`,
    gradingMode: "fallback",
  };
}
