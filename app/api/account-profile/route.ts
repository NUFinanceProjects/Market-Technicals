import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ensureAccountTables, sql } from "@/lib/db";

type ProfileInput = {
  email?: string | null;
  name?: string | null;
  imageUrl?: string | null;
};

const cleanText = (value: unknown) =>
  typeof value === "string" && value.trim() ? value.trim() : null;

export async function POST(request: Request) {
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated || !userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { profile?: ProfileInput };
  const profile = body.profile ?? {};
  const email = cleanText(profile.email);
  const name = cleanText(profile.name);
  const imageUrl = cleanText(profile.imageUrl);

  await ensureAccountTables();

  await sql`
    INSERT INTO account_profiles (
      user_id,
      email,
      name,
      image_url,
      last_seen_at,
      deleted_at
    )
    VALUES (
      ${userId},
      ${email},
      ${name},
      ${imageUrl},
      NOW(),
      NULL
    )
    ON CONFLICT (user_id)
    DO UPDATE SET
      email = COALESCE(EXCLUDED.email, account_profiles.email),
      name = COALESCE(EXCLUDED.name, account_profiles.name),
      image_url = COALESCE(EXCLUDED.image_url, account_profiles.image_url),
      last_seen_at = NOW(),
      deleted_at = NULL
  `;

  return NextResponse.json({ ok: true });
}
