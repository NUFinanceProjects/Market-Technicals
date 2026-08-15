import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured.");
}

export const sql = neon(databaseUrl);

export async function ensureAccountTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS question_attempts (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      mode TEXT NOT NULL,
      question_id TEXT NOT NULL,
      question TEXT NOT NULL,
      score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
      answered_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS question_attempts_user_answered_idx
    ON question_attempts (user_id, answered_at DESC)
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS behavioral_stories (
      user_id TEXT NOT NULL,
      story_id TEXT NOT NULL,
      title TEXT NOT NULL,
      situation TEXT NOT NULL DEFAULT '',
      action TEXT NOT NULL DEFAULT '',
      result TEXT NOT NULL DEFAULT '',
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (user_id, story_id)
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS session_averages (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      mode TEXT NOT NULL,
      average_score INTEGER NOT NULL CHECK (average_score >= 0 AND average_score <= 100),
      question_count INTEGER NOT NULL CHECK (question_count > 0),
      completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS session_averages_user_mode_completed_idx
    ON session_averages (user_id, mode, completed_at DESC)
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS account_profiles (
      user_id TEXT PRIMARY KEY,
      email TEXT,
      name TEXT,
      image_url TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      behavioral_stories_seeded BOOLEAN NOT NULL DEFAULT FALSE,
      deleted_at TIMESTAMPTZ
    )
  `;

  await sql`
    ALTER TABLE account_profiles
    ADD COLUMN IF NOT EXISTS behavioral_stories_seeded BOOLEAN NOT NULL DEFAULT FALSE
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS account_profiles_email_idx
    ON account_profiles (email)
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS deleted_clerk_users (
      user_id TEXT PRIMARY KEY,
      event_id TEXT,
      email TEXT,
      deleted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      payload JSONB NOT NULL DEFAULT '{}'::jsonb
    )
  `;

  await sql`
    CREATE UNIQUE INDEX IF NOT EXISTS deleted_clerk_users_event_idx
    ON deleted_clerk_users (event_id)
    WHERE event_id IS NOT NULL
  `;
}
