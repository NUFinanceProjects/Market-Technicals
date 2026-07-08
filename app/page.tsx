"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleAlert,
  Clock3,
  LineChart,
  Loader2,
  RefreshCcw,
  Target,
  TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";
import { questions } from "@/lib/questions";
import {
  categories,
  difficulties,
  practiceModes,
  type Category,
  type Difficulty,
  type GradeResponse,
  type InterviewQuestion,
  type PracticeMode,
  type SessionAnswer,
} from "@/lib/types";

type CategoryChoice = Category | "All Categories";
type SessionConfig = {
  category: CategoryChoice;
  difficulty: Difficulty;
  practiceMode: PracticeMode;
  questionCount: number;
};

const defaultConfig: SessionConfig = {
  category: "All Categories",
  difficulty: "Intermediate",
  practiceMode: "Mixed Practice",
  questionCount: 5,
};

const scoreColor = (score: number) => {
  if (score >= 85) return "text-mint";
  if (score >= 70) return "text-gold";
  return "text-rose-300";
};

const shuffle = <T,>(items: T[]) =>
  [...items]
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);

function buildSession(config: SessionConfig) {
  const filtered = questions.filter((question) => {
    const categoryMatch =
      config.category === "All Categories" || question.category === config.category;
    const difficultyMatch = question.difficulty === config.difficulty;
    const modeMatch =
      config.practiceMode === "Mixed Practice" || question.mode === config.practiceMode;

    return categoryMatch && difficultyMatch && modeMatch;
  });

  const fallback = questions.filter((question) => {
    const categoryMatch =
      config.category === "All Categories" || question.category === config.category;
    const modeMatch =
      config.practiceMode === "Mixed Practice" || question.mode === config.practiceMode;
    return categoryMatch && modeMatch;
  });

  const source = filtered.length >= config.questionCount ? filtered : fallback;
  return shuffle(source).slice(0, config.questionCount);
}

function bestAndWeakest(answers: SessionAnswer[]) {
  const byCategory = new Map<string, { total: number; count: number }>();

  answers.forEach(({ question, grade }) => {
    const current = byCategory.get(question.category) ?? { total: 0, count: 0 };
    byCategory.set(question.category, {
      total: current.total + grade.score,
      count: current.count + 1,
    });
  });

  const ranked = [...byCategory.entries()]
    .map(([category, value]) => ({
      category,
      average: Math.round(value.total / value.count),
    }))
    .sort((a, b) => b.average - a.average);

  return {
    strongest: ranked[0],
    weakest: ranked.length > 1 ? ranked[ranked.length - 1] : ranked[0],
  };
}

export default function Home() {
  const [config, setConfig] = useState<SessionConfig>(defaultConfig);
  const [sessionQuestions, setSessionQuestions] = useState<InterviewQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [currentGrade, setCurrentGrade] = useState<GradeResponse | null>(null);
  const [answers, setAnswers] = useState<SessionAnswer[]>([]);
  const [isGrading, setIsGrading] = useState(false);
  const [error, setError] = useState("");
  const [screen, setScreen] = useState<"setup" | "quiz" | "results">("setup");

  const currentQuestion = sessionQuestions[currentIndex];
  const progress =
    sessionQuestions.length > 0
      ? Math.round(((currentIndex + (currentGrade ? 1 : 0)) / sessionQuestions.length) * 100)
      : 0;

  const averageScore = useMemo(() => {
    if (answers.length === 0) return 0;
    return Math.round(
      answers.reduce((total, item) => total + item.grade.score, 0) / answers.length,
    );
  }, [answers]);

  const startSession = () => {
    const nextQuestions = buildSession(config);
    setSessionQuestions(nextQuestions);
    setCurrentIndex(0);
    setAnswer("");
    setCurrentGrade(null);
    setAnswers([]);
    setError("");
    setScreen("quiz");
  };

  const submitAnswer = async () => {
    if (!currentQuestion || !answer.trim()) {
      setError("Write an answer first, even if it is rough.");
      return;
    }

    setIsGrading(true);
    setError("");

    try {
      const response = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: currentQuestion, answer }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to grade the answer.");
      }

      setCurrentGrade(data);
      setAnswers((previous) => [
        ...previous,
        { question: currentQuestion, answer, grade: data },
      ]);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to grade the answer.",
      );
    } finally {
      setIsGrading(false);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 >= sessionQuestions.length) {
      setScreen("results");
      return;
    }

    setCurrentIndex((index) => index + 1);
    setAnswer("");
    setCurrentGrade(null);
    setError("");
  };

  const reset = () => {
    setScreen("setup");
    setAnswer("");
    setCurrentGrade(null);
    setError("");
  };

  const categoryStats = bestAndWeakest(answers);
  const missingConcepts = answers
    .flatMap((item) => item.grade.missingPoints)
    .reduce<Record<string, number>>((accumulator, concept) => {
      accumulator[concept] = (accumulator[concept] ?? 0) + 1;
      return accumulator;
    }, {});
  const recurringMisses = Object.entries(missingConcepts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([concept]) => concept);

  return (
    <main className="min-h-screen px-4 py-5 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
        <header className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-mint">
              <LineChart size={14} />
              Interview intelligence
            </div>
            <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              Market Technicals
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-steel">
              Finance technical interview preparation that connects accounting,
              valuation, M&A, LBOs, capital markets, and market events into realistic
              spoken-answer practice.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <Metric icon={<Target size={18} />} label="Categories" value="9" />
            <Metric icon={<BarChart3 size={18} />} label="Questions" value={questions.length.toString()} />
            <Metric icon={<Clock3 size={18} />} label="Modes" value="3" />
          </div>
        </header>

        {screen === "setup" && (
          <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-lg border border-line bg-panel/90 p-5 shadow-terminal">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-mint/30 bg-mint/10 text-mint">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Start practice</h2>
                  <p className="text-sm text-steel">
                    Choose a focused drill or mix market scenarios with classic technicals.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Category">
                  <select
                    value={config.category}
                    onChange={(event) =>
                      setConfig({ ...config, category: event.target.value as CategoryChoice })
                    }
                    className="h-11 w-full rounded border border-line bg-ink px-3 text-sm text-white outline-none focus:border-mint"
                  >
                    <option>All Categories</option>
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Difficulty">
                  <div className="grid grid-cols-3 gap-2">
                    {difficulties.map((difficulty) => (
                      <button
                        key={difficulty}
                        onClick={() => setConfig({ ...config, difficulty })}
                        className={`h-11 rounded border px-2 text-sm transition ${
                          config.difficulty === difficulty
                            ? "border-mint bg-mint/15 text-mint"
                            : "border-line bg-ink text-steel hover:border-steel"
                        }`}
                      >
                        {difficulty}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Practice mode">
                  <div className="grid gap-2">
                    {practiceModes.map((practiceMode) => (
                      <button
                        key={practiceMode}
                        onClick={() => setConfig({ ...config, practiceMode })}
                        className={`flex h-11 items-center justify-between rounded border px-3 text-sm transition ${
                          config.practiceMode === practiceMode
                            ? "border-mint bg-mint/15 text-mint"
                            : "border-line bg-ink text-steel hover:border-steel"
                        }`}
                      >
                        {practiceMode}
                        {config.practiceMode === practiceMode && <CheckCircle2 size={16} />}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Session length">
                  <div className="grid grid-cols-3 gap-2">
                    {[5, 10, 15].map((questionCount) => (
                      <button
                        key={questionCount}
                        onClick={() => setConfig({ ...config, questionCount })}
                        className={`h-11 rounded border px-3 text-sm transition ${
                          config.questionCount === questionCount
                            ? "border-gold bg-gold/15 text-gold"
                            : "border-line bg-ink text-steel hover:border-steel"
                        }`}
                      >
                        {questionCount}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <button
                onClick={startSession}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded bg-mint px-5 font-semibold text-ink transition hover:bg-[#74f0ba] md:w-auto"
              >
                Start Practice
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="rounded-lg border border-line bg-ink/80 p-5">
              <h2 className="text-lg font-semibold text-white">V1 coverage</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="rounded border border-line bg-panel px-3 py-3 text-sm text-steel"
                  >
                    {category}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded border border-gold/30 bg-gold/10 p-4 text-sm leading-6 text-slate-200">
                Market scenario mode uses manually written events for V1. Live news
                ingestion is reserved behind a compatible future-news interface.
              </div>
            </div>
          </section>
        )}

        {screen === "quiz" && currentQuestion && (
          <section className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr]">
            <div className="rounded-lg border border-line bg-panel/95 p-5 shadow-terminal">
              <div className="mb-5">
                <div className="mb-3 h-2 rounded bg-ink">
                  <div
                    className="h-2 rounded bg-mint transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-steel">
                  <span>
                    Question {currentIndex + 1} / {sessionQuestions.length}
                  </span>
                  <span className="rounded border border-line px-2 py-1">
                    {currentQuestion.category}
                  </span>
                  <span className="rounded border border-line px-2 py-1">
                    {currentQuestion.difficulty}
                  </span>
                  <span className="rounded border border-line px-2 py-1">
                    {currentQuestion.mode}
                  </span>
                </div>
              </div>

              {currentQuestion.marketScenario && (
                <div className="mb-4 rounded border border-gold/30 bg-gold/10 p-4 text-sm leading-6 text-slate-200">
                  {currentQuestion.marketScenario}
                </div>
              )}

              <h2 className="text-2xl font-semibold leading-9 text-white">
                {currentQuestion.question}
              </h2>

              <textarea
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                disabled={Boolean(currentGrade) || isGrading}
                placeholder="Answer like you would in an interview. A clear, structured spoken response is enough."
                className="mt-5 min-h-52 w-full resize-y rounded border border-line bg-ink p-4 leading-7 text-slate-100 outline-none placeholder:text-slate-500 focus:border-mint disabled:opacity-70"
              />

              {error && (
                <div className="mt-3 flex items-center gap-2 rounded border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-200">
                  <CircleAlert size={16} />
                  {error}
                </div>
              )}

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {!currentGrade ? (
                  <button
                    onClick={submitAnswer}
                    disabled={isGrading}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded bg-mint px-5 font-semibold text-ink transition hover:bg-[#74f0ba] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isGrading ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Grading
                      </>
                    ) : (
                      <>
                        Submit Answer
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded bg-mint px-5 font-semibold text-ink transition hover:bg-[#74f0ba]"
                  >
                    {currentIndex + 1 >= sessionQuestions.length
                      ? "View Results"
                      : "Next Question"}
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>

              {currentGrade && <Feedback grade={currentGrade} />}
            </div>

            <aside className="rounded-lg border border-line bg-ink/90 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">
                Session tape
              </h3>
              <div className="mt-4 text-5xl font-semibold text-white">
                {averageScore || "--"}
                <span className="text-lg text-steel"> avg</span>
              </div>
              <div className="mt-5 grid gap-3">
                {answers.map((item, index) => (
                  <div
                    key={item.question.id}
                    className="flex items-center justify-between rounded border border-line bg-panel px-3 py-3 text-sm"
                  >
                    <span className="text-steel">Q{index + 1}</span>
                    <span className={scoreColor(item.grade.score)}>
                      {item.grade.score}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </section>
        )}

        {screen === "results" && (
          <section className="rounded-lg border border-line bg-panel/95 p-5 shadow-terminal">
            <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">Session results</h2>
                <p className="mt-2 text-steel">
                  {answers.length} questions answered across{" "}
                  {new Set(answers.map((item) => item.question.category)).size} categories.
                </p>
              </div>
              <div className={`text-6xl font-semibold ${scoreColor(averageScore)}`}>
                {averageScore}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <ResultBlock label="Overall score" value={`${averageScore}/100`} />
              <ResultBlock
                label="Strongest category"
                value={
                  categoryStats.strongest
                    ? `${categoryStats.strongest.category} (${categoryStats.strongest.average})`
                    : "Not enough data"
                }
              />
              <ResultBlock
                label="Weakest category"
                value={
                  categoryStats.weakest
                    ? `${categoryStats.weakest.category} (${categoryStats.weakest.average})`
                    : "Not enough data"
                }
              />
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div className="rounded border border-line bg-ink p-4">
                <h3 className="font-semibold text-white">Recurring missing concepts</h3>
                <List
                  empty="No recurring misses surfaced."
                  items={recurringMisses.length > 0 ? recurringMisses : []}
                />
              </div>
              <div className="rounded border border-line bg-ink p-4">
                <h3 className="font-semibold text-white">Question review</h3>
                <div className="mt-3 grid gap-3">
                  {answers.map((item, index) => (
                    <div key={item.question.id} className="rounded border border-line p-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-steel">
                          Q{index + 1} · {item.question.category}
                        </span>
                        <span className={scoreColor(item.grade.score)}>
                          {item.grade.score}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-200">
                        {item.grade.overallFeedback}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={reset}
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded bg-mint px-5 font-semibold text-ink transition hover:bg-[#74f0ba]"
            >
              <RefreshCcw size={18} />
              Start Another Session
            </button>
          </section>
        )}
      </div>
    </main>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded border border-line bg-panel px-3 py-2">
      <div className="text-mint">{icon}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
      <div className="text-xs text-steel">{label}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-steel">{label}</span>
      {children}
    </label>
  );
}

function Feedback({ grade }: { grade: GradeResponse }) {
  return (
    <div className="mt-6 rounded border border-line bg-ink p-4">
      <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Structured feedback</h3>
          <p className="text-sm text-steel">
            {grade.gradingMode === "ai"
              ? "Graded with OpenAI."
              : "Fallback concept matching is active."}
          </p>
        </div>
        <div className={`text-5xl font-semibold ${scoreColor(grade.score)}`}>
          {grade.score}
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <FeedbackBlock title="Correct concepts" items={grade.correctPoints} empty="No clear matches yet." />
        <FeedbackBlock title="Missing concepts" items={grade.missingPoints} empty="No major gaps found." />
        <FeedbackBlock title="Incorrect statements" items={grade.incorrectStatements} empty="No material errors flagged." />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded border border-line bg-panel p-4">
          <h4 className="font-semibold text-white">Improved answer</h4>
          <p className="mt-2 text-sm leading-6 text-slate-200">{grade.improvedAnswer}</p>
        </div>
        <div className="rounded border border-gold/30 bg-gold/10 p-4">
          <h4 className="font-semibold text-white">Interviewer follow-up</h4>
          <p className="mt-2 text-sm leading-6 text-slate-200">{grade.followUpQuestion}</p>
        </div>
      </div>

      <p className="mt-4 rounded border border-line bg-panel p-4 text-sm leading-6 text-slate-200">
        {grade.overallFeedback}
      </p>
    </div>
  );
}

function FeedbackBlock({
  title,
  items,
  empty,
}: {
  title: string;
  items: string[];
  empty: string;
}) {
  return (
    <div className="rounded border border-line bg-panel p-4">
      <h4 className="font-semibold text-white">{title}</h4>
      <List items={items} empty={empty} />
    </div>
  );
}

function List({ items, empty }: { items: string[]; empty: string }) {
  if (items.length === 0) {
    return <p className="mt-2 text-sm text-steel">{empty}</p>;
  }

  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-6 text-slate-200">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ResultBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-line bg-ink p-4">
      <div className="text-sm text-steel">{label}</div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}
