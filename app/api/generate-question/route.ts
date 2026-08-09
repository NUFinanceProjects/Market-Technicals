import { NextResponse } from "next/server";
import { z } from "zod";
import { categories, difficulties, practiceModes } from "@/lib/types";
import type { Category, Difficulty, InterviewQuestion, PracticeMode } from "@/lib/types";

export const runtime = "nodejs";

const requestSchema = z.object({
  category: z.union([z.enum(categories), z.literal("All Categories")]),
  difficulty: z.enum(difficulties),
  practiceMode: z.enum(practiceModes),
});

const generatedQuestionSchema = z.object({
  question: z.string().min(20),
  category: z.enum(categories),
  difficulty: z.enum(difficulties),
  mode: z.enum(["Technical Questions", "Market Scenarios"]),
  expectedConcepts: z.array(z.string().min(3)).min(4).max(7),
  referenceAnswer: z.string().min(80),
  followUpConcept: z.string().min(10),
  marketScenario: z.string().min(20).nullable(),
});

const geminiQuestionSchema = {
  type: "OBJECT",
  properties: {
    question: {
      type: "STRING",
      description: "One concise investment banking interview question.",
    },
    category: {
      type: "STRING",
      enum: [...categories],
    },
    difficulty: {
      type: "STRING",
      enum: [...difficulties],
    },
    mode: {
      type: "STRING",
      enum: ["Technical Questions", "Market Scenarios"],
    },
    expectedConcepts: {
      type: "ARRAY",
      items: { type: "STRING" },
      description: "Four to seven concepts a strong answer should cover.",
    },
    referenceAnswer: {
      type: "STRING",
      description: "A concise spoken-style model answer.",
    },
    followUpConcept: {
      type: "STRING",
      description: "One realistic interviewer follow-up question.",
    },
    marketScenario: {
      type: "STRING",
      nullable: true,
      description:
        "For Market Scenarios only, a short realistic business or market setup. Null for Technical Questions.",
    },
  },
  required: [
    "question",
    "category",
    "difficulty",
    "mode",
    "expectedConcepts",
    "referenceAnswer",
    "followUpConcept",
    "marketScenario",
  ],
};

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
  error?: {
    message?: string;
    status?: string;
  };
};

function generatedPrompt({
  category,
  difficulty,
  practiceMode,
}: {
  category: Category | "All Categories";
  difficulty: Difficulty;
  practiceMode: PracticeMode;
}) {
  const modeInstruction =
    practiceMode === "Mixed Practice"
      ? "Choose either Technical Questions or Market Scenarios, whichever creates the stronger interview prompt. If you choose Market Scenarios, it must be scenario-based, not a disguised standalone technical question."
      : practiceMode === "Market Scenarios"
        ? "The mode must be Market Scenarios. This must be a hypothetical current-market, capital markets, transaction, earnings, industry, credit, rates, IPO, M&A, or private equity scenario that asks the candidate to reason from the setup."
        : `The mode must be ${practiceMode}.`;
  const categoryInstruction =
    category === "All Categories"
      ? `Choose one category from: ${categories.join(", ")}.`
      : `The category must be ${category}.`;

  return {
    instruction:
      "Generate one original investment banking / private equity interview practice question. It should be realistic, useful for spoken interview practice, and not copied from any prep guide. Return only the requested JSON object.",
    categoryInstruction,
    difficultyInstruction: `The difficulty must be ${difficulty}.`,
    modeInstruction,
    qualityBar:
      "Make it specific enough to grade well. Avoid trivia, obscure edge cases, and treatments where market convention varies. Prefer standard interview concepts with broadly accepted answers across financial statements, valuation, DCF, M&A, LBO, capital markets, or market knowledge. Self-check that the reference answer is internally consistent and finance-accurate before returning it.",
    marketScenarioRule:
      "If mode is Market Scenarios, marketScenario must be a short realistic business or market setup, and the question must explicitly ask how to interpret, analyze, value, finance, diligence, or respond to that setup. If mode is Technical Questions, marketScenario must be null.",
  };
}

export async function POST(request: Request) {
  try {
    const config = requestSchema.parse(await request.json());

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini question generation is not configured yet." },
        { status: 503 },
      );
    }

    const model = process.env.GEMINI_MODEL ?? "gemini-2.5-flash-lite";
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: "You create original finance interview practice questions for investment banking and private equity candidates. You are precise, practical, and avoid copyrighted source imitation.",
              },
            ],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: JSON.stringify(generatedPrompt(config)) }],
            },
          ],
          generationConfig: {
            response_mime_type: "application/json",
            response_schema: geminiQuestionSchema,
            temperature: 0.65,
          },
        }),
      },
    );

    const data = (await response.json()) as GeminiResponse;

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data.error?.status === "RESOURCE_EXHAUSTED"
              ? "Gemini question generation is out of quota right now."
              : "Gemini could not generate a question right now.",
        },
        { status: response.status },
      );
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json(
        { error: "Gemini returned an empty question." },
        { status: 502 },
      );
    }

    const generated = generatedQuestionSchema.parse(JSON.parse(text));
    const question: InterviewQuestion = {
      id: `generated-${Date.now()}`,
      question: generated.question,
      category: generated.category,
      difficulty: generated.difficulty,
      mode: generated.mode,
      expectedConcepts: generated.expectedConcepts,
      referenceAnswer: generated.referenceAnswer,
      followUpConcept: generated.followUpConcept,
      marketScenario: generated.marketScenario ?? undefined,
      sourceType: "generated",
    };

    return NextResponse.json({ question });
  } catch (error) {
    console.error(
      "Question generation failed",
      error instanceof Error ? error.message : "Unknown error",
    );
    return NextResponse.json(
      { error: "Question generation failed. Please try again." },
      { status: 500 },
    );
  }
}
