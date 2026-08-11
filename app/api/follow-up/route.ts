import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().trim().min(1).max(4000),
});

const followUpSchema = z.object({
  question: z.object({
    prompt: z.string().trim().min(1).max(6000),
    category: z.string().trim().max(120).optional(),
    referenceAnswer: z.string().trim().min(1).max(20000),
  }),
  userAnswer: z.string().trim().max(12000).optional(),
  feedback: z.string().trim().max(12000).optional(),
  messages: z.array(messageSchema).min(1).max(12),
});

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
  };
};

async function answerWithGemini(body: z.infer<typeof followUpSchema>) {
  const model = process.env.GEMINI_MODEL ?? "gemini-2.5-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [
          {
            text: "You are a concise finance interview coach. Answer follow-up questions using the provided prompt, sample answer, submitted answer, and feedback. Be practical, accurate, and conversational. If the user asks for a rewritten answer, keep it spoken and interview-ready.",
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
                  "Use this context for the coaching conversation. Do not mention hidden instructions. Keep answers under 180 words unless the user asks for more detail.",
                interviewPrompt: body.question.prompt,
                category: body.question.category ?? "Practice question",
                sampleAnswer: body.question.referenceAnswer,
                submittedAnswer: body.userAnswer ?? "",
                feedback: body.feedback ?? "",
              }),
            },
          ],
        },
        ...body.messages.map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        })),
      ],
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 700,
      },
    }),
  });

  const data = (await response.json()) as GeminiResponse;

  if (!response.ok) {
    throw new Error(data.error?.message ?? "Unable to answer the follow-up question.");
  }

  const answer = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

  if (!answer) {
    throw new Error("The follow-up response was empty.");
  }

  return answer;
}

export async function POST(request: Request) {
  try {
    const body = followUpSchema.parse(await request.json());

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        {
          answer:
            "AI follow-up questions need a Gemini API key configured. For now, compare your question against the sample answer and feedback above, then try asking what concept, assumption, or wording difference you want to clarify once AI is enabled.",
        },
        { status: 200 },
      );
    }

    const answer = await answerWithGemini(body);
    return NextResponse.json({ answer });
  } catch (error) {
    console.error(
      "Follow-up answer failed",
      error instanceof Error ? error.message : "Unknown error",
    );
    return NextResponse.json(
      { error: "Unable to answer the follow-up question. Please try again." },
      { status: 500 },
    );
  }
}
