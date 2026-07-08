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

export function fallbackGrade(
  question: InterviewQuestion,
  answer: string,
  reason = "OPENAI_API_KEY is not configured",
): GradeResponse {
  const correctPoints = question.expectedConcepts.filter((concept) =>
    conceptMatched(answer, concept),
  );
  const missingPoints = question.expectedConcepts.filter(
    (concept) => !correctPoints.includes(concept),
  );
  const completionScore =
    question.expectedConcepts.length === 0
      ? 50
      : Math.round((correctPoints.length / question.expectedConcepts.length) * 100);

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
