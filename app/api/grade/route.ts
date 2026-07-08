import { NextResponse } from "next/server";
import { gradeSchema } from "@/lib/evaluation-schema";
import { fallbackGrade } from "@/lib/fallback-grading";
import { questions } from "@/lib/questions";
import type { InterviewQuestion } from "@/lib/types";

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

function findQuestion(question: InterviewQuestion) {
  return questions.find((candidate) => candidate.id === question.id) ?? question;
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

async function gradeWithGemini(question: InterviewQuestion, answer: string) {
  const model = process.env.GEMINI_MODEL ?? "gemini-2.5-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [
          {
            text: "You are a fair Investment Banking and Private Equity technical interviewer. Grade spoken-style answers for conceptual understanding. Give credit for informal but correct reasoning. Do not require exact wording. Identify material finance errors clearly. Keep feedback concise and practical.",
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
                  "Return only the requested JSON object. The improved answer should sound like a strong spoken interview response, not a textbook chapter.",
                question: question.question,
                category: question.category,
                difficulty: question.difficulty,
                practiceMode: question.mode,
                marketScenario: question.marketScenario ?? null,
                expectedConcepts: question.expectedConcepts,
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
        question?: InterviewQuestion;
        answer?: string;
      }
    | undefined;

  try {
    body = (await request.json()) as {
      question?: InterviewQuestion;
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

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        fallbackGrade(question, answer, "GEMINI_API_KEY is not configured"),
      );
    }

    const parsed = await gradeWithGemini(question, answer);
    return NextResponse.json({ ...parsed, gradingMode: "ai" });
  } catch (error) {
    if (body?.question && body.answer && error instanceof Error) {
      return NextResponse.json(
        fallbackGrade(findQuestion(body.question), body.answer, error.message),
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
