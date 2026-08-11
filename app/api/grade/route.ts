import { NextResponse } from "next/server";
import { gradeSchema } from "@/lib/evaluation-schema";
import { fallbackGrade } from "@/lib/fallback-grading";
import { questions } from "@/lib/questions";
import type { GradeResponse, InterviewQuestion } from "@/lib/types";

export const runtime = "nodejs";

const geminiSchema = {
  type: "OBJECT",
  properties: {
    score: {
      type: "NUMBER",
      minimum: 0,
      maximum: 100,
      description: "Fair interview answer score from 0 to 100.",
    },
    correctPoints: {
      type: "ARRAY",
      items: { type: "STRING" },
      description: "Concepts the user correctly explained.",
    },
    missingPoints: {
      type: "ARRAY",
      items: { type: "STRING" },
      description: "Important expected concepts the user missed or underdeveloped.",
    },
    incorrectStatements: {
      type: "ARRAY",
      items: { type: "STRING" },
      description: "Materially incorrect finance statements. Empty if none.",
    },
    improvedAnswer: {
      type: "STRING",
      description: "Concise, strong spoken interview answer.",
    },
    followUpQuestion: {
      type: "STRING",
      description: "One realistic interviewer-style follow-up question.",
    },
    overallFeedback: {
      type: "STRING",
      description: "Concise feedback on answer quality.",
    },
  },
  required: [
    "score",
    "correctPoints",
    "missingPoints",
    "incorrectStatements",
    "improvedAnswer",
    "followUpQuestion",
    "overallFeedback",
  ],
};

type GradeQuestion = InterviewQuestion | {
  id: string;
  question: string;
  category?: string;
  difficulty?: string;
  mode?: string;
  expectedConcepts?: string[];
  referenceAnswer: string;
  followUpConcept?: string;
  marketScenario?: string | null;
};

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "for",
  "from",
  "i",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "so",
  "that",
  "the",
  "this",
  "to",
  "with",
  "would",
]);

const normalizeAnswer = (answer: string) =>
  answer
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const answerTerms = (answer: string) =>
  normalizeAnswer(answer)
    .split(" ")
    .filter((term) => term.length > 2 && !stopWords.has(term));

const referenceMissingPoints = (referenceAnswer: string) =>
  referenceAnswer
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => answerTerms(sentence).length >= 3)
    .slice(0, 5);

function nonAnswerGrade(question: GradeQuestion): GradeResponse {
  const missingPoints =
    question.expectedConcepts && question.expectedConcepts.length > 0
      ? question.expectedConcepts.slice(0, 5)
      : referenceMissingPoints(question.referenceAnswer);

  return {
    score: 5,
    correctPoints: [],
    missingPoints,
    incorrectStatements: ["The submitted answer is too short to evaluate."],
    improvedAnswer: question.referenceAnswer,
    followUpQuestion:
      question.followUpConcept ??
      "Can you try again with the main steps and one sentence explaining why each step matters?",
    overallFeedback:
      "This looks like a non-answer rather than an interview response. Give at least a few concrete points before comparing against the sample answer.",
    gradingMode: "fallback" as const,
  };
}

function scoreCapForAnswer(answer: string) {
  const normalized = normalizeAnswer(answer);
  const terms = answerTerms(answer);
  const uniqueTerms = new Set(terms);

  if (normalized.length < 8 || terms.length < 2 || uniqueTerms.size < 2) {
    return 5;
  }

  if (normalized.length < 35 || terms.length < 5) {
    return 25;
  }

  if (normalized.length < 90 || terms.length < 10) {
    return 55;
  }

  return 100;
}

function applyAnswerQualityCap(
  grade: GradeResponse,
  question: GradeQuestion,
  answer: string,
): GradeResponse {
  const cap = scoreCapForAnswer(answer);

  if (cap === 100 || grade.score <= cap) {
    return grade;
  }

  if (cap === 5) {
    return nonAnswerGrade(question);
  }

  return {
    ...grade,
    score: cap,
    incorrectStatements:
      grade.incorrectStatements.length > 0
        ? grade.incorrectStatements
        : ["The submitted answer is too short or underdeveloped for a higher score."],
    overallFeedback:
      `${grade.overallFeedback} Score capped because the submitted answer is too short or underdeveloped to demonstrate full understanding.`,
  };
}

function findQuestion(question: GradeQuestion) {
  return questions.find((candidate) => candidate.id === question.id) ?? question;
}

function toFallbackQuestion(question: GradeQuestion): InterviewQuestion {
  return {
    id: question.id,
    question: question.question,
    category: (question.category ?? "General Finance") as InterviewQuestion["category"],
    difficulty: (question.difficulty ?? "Intermediate") as InterviewQuestion["difficulty"],
    mode:
      question.mode === "Market Scenarios"
        ? "Market Scenarios"
        : "Technical Questions",
    expectedConcepts: question.expectedConcepts ?? [],
    referenceAnswer: question.referenceAnswer,
    followUpConcept: question.followUpConcept,
    marketScenario: question.marketScenario ?? undefined,
    sourceType: "local",
  };
}

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
};

function geminiFallbackReason(status: number, errorStatus?: string) {
  if (status === 400 || status === 401 || status === 403) {
    return "the Gemini API key was rejected";
  }

  if (status === 429 || errorStatus === "RESOURCE_EXHAUSTED") {
    return "the Gemini project has no available quota or is being rate limited";
  }

  return "Gemini grading is temporarily unavailable";
}

async function gradeWithGemini(question: GradeQuestion, answer: string) {
  const model = process.env.GEMINI_MODEL ?? "gemini-2.5-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [
          {
            text: "You are a fair but strict Investment Banking and Private Equity technical interviewer. Grade spoken-style answers for conceptual understanding. Give credit for informal but correct reasoning, but do not infer knowledge from vague, one-word, filler, or placeholder responses. Non-answers should receive 0-10. Very short answers with only one partial idea should usually receive 10-35. Identify material finance errors clearly. Keep feedback concise and practical.",
          },
        ],
      },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: JSON.stringify({
                instruction:
                  "Return only the requested JSON object. Grade only what the user actually wrote. The improved answer should sound like a strong spoken interview response, not a textbook chapter.",
                question: question.question,
                category: question.category ?? "M&I Question Bank",
                difficulty: question.difficulty ?? "Not specified",
                practiceMode: question.mode ?? "Question Bank Practice",
                marketScenario: question.marketScenario ?? null,
                expectedConcepts: question.expectedConcepts ?? [],
                referenceAnswer: question.referenceAnswer,
                userAnswer: answer,
              }),
            },
          ],
        },
      ],
      generationConfig: {
        response_mime_type: "application/json",
        response_schema: geminiSchema,
        temperature: 0.25,
      },
    }),
  });

  const data = (await response.json()) as GeminiResponse;

  if (!response.ok) {
    throw new Error(geminiFallbackReason(response.status, data.error?.status));
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("Gemini returned an empty grading response");
  }

  return gradeSchema.parse(JSON.parse(text));
}

export async function POST(request: Request) {
  let body:
    | {
        question?: GradeQuestion;
        answer?: string;
      }
    | undefined;

  try {
    body = (await request.json()) as {
      question?: GradeQuestion;
      answer?: string;
    };

    if (!body.question || typeof body.answer !== "string") {
      return NextResponse.json(
        { error: "A question and answer are required." },
        { status: 400 },
      );
    }

    const question = findQuestion(body.question);
    const answer = body.answer.trim();

    if (!answer) {
      return NextResponse.json(
        { error: "Please enter an answer before submitting." },
        { status: 400 },
      );
    }

    if (scoreCapForAnswer(answer) === 5) {
      return NextResponse.json(nonAnswerGrade(question));
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        applyAnswerQualityCap(
          fallbackGrade(toFallbackQuestion(question), answer, "GEMINI_API_KEY is not configured"),
          question,
          answer,
        ),
      );
    }

    const parsed = await gradeWithGemini(question, answer);
    return NextResponse.json(
      applyAnswerQualityCap({ ...parsed, gradingMode: "ai" }, question, answer),
    );
  } catch (error) {
    if (body?.question && body.answer && error instanceof Error) {
      const question = findQuestion(body.question);
      const answer = body.answer;

      return NextResponse.json(
        applyAnswerQualityCap(
          fallbackGrade(toFallbackQuestion(question), answer, error.message),
          question,
          answer,
        ),
      );
    }

    console.error(
      "Answer grading failed",
      error instanceof Error ? error.message : "Unknown error",
    );
    return NextResponse.json(
      { error: "Answer grading failed. Please try again." },
      { status: 500 },
    );
  }
}
