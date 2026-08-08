# Market Technicals

Market Technicals is a Next.js practice app for finance technical interviews. V1 combines a local question bank, market-scenario prompts, session scoring, and server-side Gemini answer grading.

## Run locally

```bash
pnpm install
pnpm dev
```

If the local file watcher hits operating-system limits, use the production flow:

```bash
pnpm build
pnpm start
```

Open `http://127.0.0.1:3000`.

## Gemini key

Create a local `.env.local` file in this project root:

```bash
GEMINI_API_KEY=your_api_key_here
```

Do not use `NEXT_PUBLIC_GEMINI_API_KEY`. The grading route reads `GEMINI_API_KEY` only on the server.

The default grading model is `gemini-2.5-flash-lite`. You can override it with `GEMINI_MODEL` in `.env.local`.

## Architecture

- `app/page.tsx`: the setup screen, quiz flow, feedback display, and results screen.
- `app/api/grade/route.ts`: secure server-side grading endpoint using the Gemini API.
- `lib/questions.ts`: local V1 question bank with metadata, expected concepts, and reference answers.
- `lib/types.ts`: shared TypeScript types for questions, sessions, modes, and grades.
- `lib/evaluation-schema.ts`: structured grading response validation.
- `lib/fallback-grading.ts`: visible concept-matching fallback when no API key is configured.
- `lib/future-news.ts`: placeholder interface for future news-event question generation.
