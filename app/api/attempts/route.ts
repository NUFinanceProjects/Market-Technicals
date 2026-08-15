import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ensureAccountTables, sql } from "@/lib/db";

type AttemptInput = {
  id: string;
  mode: string;
  questionId: string;
  question: string;
  score: number;
  answeredAt: string;
};

function isAttemptInput(value: unknown): value is AttemptInput {
  if (!value || typeof value !== "object") return false;

  const attempt = value as Record<string, unknown>;
  return (
    typeof attempt.id === "string" &&
    typeof attempt.mode === "string" &&
    typeof attempt.questionId === "string" &&
    typeof attempt.question === "string" &&
    typeof attempt.score === "number" &&
    Number.isFinite(attempt.score) &&
    typeof attempt.answeredAt === "string"
  );
}

export async function POST(request: Request) {
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated || !userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { attempt?: unknown };

  if (!isAttemptInput(body.attempt)) {
    return NextResponse.json({ error: "Invalid attempt." }, { status: 400 });
  }

  const attempt = body.attempt;
  const answeredAt = new Date(attempt.answeredAt);

  if (Number.isNaN(answeredAt.getTime())) {
    return NextResponse.json({ error: "Invalid attempt timestamp." }, { status: 400 });
  }

  await ensureAccountTables();

  const roundedScore = Math.round(attempt.score);
  const existingAttempts = await sql`
    SELECT id, score
    FROM question_attempts
    WHERE user_id = ${userId}
      AND mode = ${attempt.mode}
      AND question_id = ${attempt.questionId}
    ORDER BY score DESC, answered_at DESC
  `;

  const bestExistingAttempt = existingAttempts[0] as
    | { id: string; score: number }
    | undefined;

  if (bestExistingAttempt && roundedScore <= Number(bestExistingAttempt.score)) {
    await sql`
      DELETE FROM question_attempts
      WHERE user_id = ${userId}
        AND mode = ${attempt.mode}
        AND question_id = ${attempt.questionId}
        AND id <> ${bestExistingAttempt.id}
    `;

    return NextResponse.json({ ok: true, replaced: false });
  }

  await sql`
    DELETE FROM question_attempts
    WHERE user_id = ${userId}
      AND mode = ${attempt.mode}
      AND question_id = ${attempt.questionId}
  `;

  await sql`
    INSERT INTO question_attempts (
      id,
      user_id,
      mode,
      question_id,
      question,
      score,
      answered_at
    )
    VALUES (
      ${attempt.id},
      ${userId},
      ${attempt.mode},
      ${attempt.questionId},
      ${attempt.question},
      ${roundedScore},
      ${answeredAt.toISOString()}
    )
  `;

  return NextResponse.json({ ok: true, replaced: Boolean(bestExistingAttempt) });
}
