import { verifyWebhook } from "@clerk/nextjs/webhooks";
import type { NextRequest } from "next/server";
import { ensureAccountTables, sql } from "@/lib/db";

export async function POST(request: NextRequest) {
  let event;

  try {
    event = await verifyWebhook(request);
  } catch {
    return new Response("Verification failed", { status: 400 });
  }

  if (event.type !== "user.deleted") {
    return new Response("OK", { status: 200 });
  }

  const userId = event.data.id;

  if (!userId) {
    return new Response("Missing user id", { status: 400 });
  }

  const eventId = request.headers.get("svix-id");
  const eventData = event.data as {
    id: string;
    email_addresses?: Array<{ email_address?: string }>;
  };
  const email = eventData.email_addresses?.[0]?.email_address ?? null;

  await ensureAccountTables();

  await sql`
    INSERT INTO deleted_clerk_users (
      user_id,
      event_id,
      email,
      deleted_at,
      payload
    )
    VALUES (
      ${userId},
      ${eventId},
      ${email ?? null},
      NOW(),
      ${JSON.stringify(event.data)}::jsonb
    )
    ON CONFLICT (user_id)
    DO UPDATE SET
      event_id = COALESCE(EXCLUDED.event_id, deleted_clerk_users.event_id),
      email = COALESCE(EXCLUDED.email, deleted_clerk_users.email),
      deleted_at = NOW(),
      payload = EXCLUDED.payload
  `;

  await sql`
    INSERT INTO account_profiles (
      user_id,
      email,
      last_seen_at,
      deleted_at
    )
    VALUES (
      ${userId},
      ${email ?? null},
      NOW(),
      NOW()
    )
    ON CONFLICT (user_id)
    DO UPDATE SET
      email = COALESCE(EXCLUDED.email, account_profiles.email),
      deleted_at = NOW()
  `;

  return new Response("OK", { status: 200 });
}
