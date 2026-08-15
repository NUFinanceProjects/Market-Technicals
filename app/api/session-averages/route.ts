import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ensureAccountTables, sql } from "@/lib/db";

const sessionAverageModes = [
  "Technical Questions",
  "Market Scenarios",
  "Mixed Practice",
] as const;

type SessionAverageInput = {
  id: string;
  mode: string;
  averageScore: number;
  questionCount: number;
  completedAt: string;
};

function isSessionAverageInput(value: unknown): value is SessionAverageInput {
  if (!value || typeof value !== "object") return false;

  const session = value as Record<string, unknown>;
  return (
    typeof session.id === "string" &&
    typeof session.mode === "string" &&
    sessionAverageModes.includes(session.mode as (typeof sessionAverageModes)[number]) &&
    typeof session.averageScore === "number" &&
    Number.isFinite(session.averageScore) &&
    typeof session.questionCount === "number" &&
    Number.isInteger(session.questionCount) &&
    session.questionCount > 0 &&
    typeof session.completedAt === "string"
  );
}

export async function POST(request: Request) {
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated || !userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { sessionAverage?: unknown };

  if (!isSessionAverageInput(body.sessionAverage)) {
    return NextResponse.json({ error: "Invalid session average." }, { status: 400 });
  }

  const sessionAverage = body.sessionAverage;
  const completedAt = new Date(sessionAverage.completedAt);

  if (Number.isNaN(completedAt.getTime())) {
    return NextResponse.json({ error: "Invalid completion timestamp." }, { status: 400 });
  }

  await ensureAccountTables();

  await sql`
    INSERT INTO session_averages (
      id,
      user_id,
      mode,
      average_score,
      question_count,
      completed_at
    )
    VALUES (
      ${sessionAverage.id},
      ${userId},
      ${sessionAverage.mode},
      ${Math.round(sessionAverage.averageScore)},
      ${sessionAverage.questionCount},
      ${completedAt.toISOString()}
    )
    ON CONFLICT (id) DO NOTHING
  `;

  await sql`
    DELETE FROM session_averages
    WHERE user_id = ${userId}
      AND mode = ${sessionAverage.mode}
      AND id NOT IN (
        SELECT id
        FROM session_averages
        WHERE user_id = ${userId}
          AND mode = ${sessionAverage.mode}
        ORDER BY completed_at DESC
        LIMIT 10
      )
  `;

  return NextResponse.json({ ok: true });
}
