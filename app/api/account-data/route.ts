import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ensureAccountTables, sql } from "@/lib/db";

type StoryInput = {
  id: string;
  title: string;
  situation: string;
  action: string;
  result: string;
};

function isStoryInput(value: unknown): value is StoryInput {
  if (!value || typeof value !== "object") return false;

  const story = value as Record<string, unknown>;
  return (
    typeof story.id === "string" &&
    typeof story.title === "string" &&
    typeof story.situation === "string" &&
    typeof story.action === "string" &&
    typeof story.result === "string"
  );
}

export async function GET() {
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated || !userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await ensureAccountTables();

  const attempts = await sql`
    SELECT id, mode, question_id, question, score, answered_at
    FROM (
      SELECT DISTINCT ON (mode, question_id)
        id,
        mode,
        question_id,
        question,
        score,
        answered_at
      FROM question_attempts
      WHERE user_id = ${userId}
        AND mode IN ('M&I 400 Questions', 'Behavioral Practice')
      ORDER BY mode, question_id, score DESC, answered_at DESC
    ) best_attempts
    ORDER BY answered_at DESC
    LIMIT 250
  `;

  const sessionAverages = await sql`
    SELECT id, mode, average_score, question_count, completed_at
    FROM session_averages
    WHERE user_id = ${userId}
    ORDER BY completed_at DESC
    LIMIT 30
  `;

  const stories = await sql`
    SELECT story_id, title, situation, action, result
    FROM behavioral_stories
    WHERE user_id = ${userId}
    ORDER BY updated_at ASC
  `;

  return NextResponse.json({
    attempts: attempts.map((attempt) => ({
      id: String(attempt.id),
      mode: String(attempt.mode),
      questionId: String(attempt.question_id),
      question: String(attempt.question),
      score: Number(attempt.score),
      answeredAt: new Date(String(attempt.answered_at)).toISOString(),
    })),
    sessionAverages: sessionAverages.map((session) => ({
      id: String(session.id),
      mode: String(session.mode),
      averageScore: Number(session.average_score),
      questionCount: Number(session.question_count),
      completedAt: new Date(String(session.completed_at)).toISOString(),
    })),
    behavioralStories: stories.map((story) => ({
      id: String(story.story_id),
      title: String(story.title),
      situation: String(story.situation),
      action: String(story.action),
      result: String(story.result),
    })),
  });
}

export async function PATCH(request: Request) {
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated || !userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { behavioralStories?: unknown };
  const stories = Array.isArray(body.behavioralStories)
    ? body.behavioralStories.filter(isStoryInput).slice(0, 8)
    : [];

  await ensureAccountTables();

  if (stories.length === 0) {
    await sql`
      DELETE FROM behavioral_stories
      WHERE user_id = ${userId}
    `;

    return NextResponse.json({ ok: true });
  }

  await sql`
    DELETE FROM behavioral_stories
    WHERE user_id = ${userId}
      AND story_id <> ALL(${stories.map((story) => story.id)})
  `;

  for (const story of stories) {
    await sql`
      INSERT INTO behavioral_stories (
        user_id,
        story_id,
        title,
        situation,
        action,
        result,
        updated_at
      )
      VALUES (
        ${userId},
        ${story.id},
        ${story.title},
        ${story.situation},
        ${story.action},
        ${story.result},
        NOW()
      )
      ON CONFLICT (user_id, story_id)
      DO UPDATE SET
        title = EXCLUDED.title,
        situation = EXCLUDED.situation,
        action = EXCLUDED.action,
        result = EXCLUDED.result,
        updated_at = NOW()
    `;
  }

  return NextResponse.json({ ok: true });
}
