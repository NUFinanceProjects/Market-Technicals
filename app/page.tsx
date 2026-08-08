"use client";

import {
  ArrowRight,
  BookOpen,
  CircleAlert,
  FileQuestion,
  LineChart,
  Loader2,
  MessageSquareText,
  RefreshCcw,
  Shuffle,
  Newspaper,
} from "lucide-react";
import { useMemo, useState } from "react";
import { behavioralQuestions } from "@/lib/behavioral-questions";
import { mi400Questions } from "@/lib/mi-400-questions";
import { questions } from "@/lib/questions";
import {
  categories,
  difficulties,
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

const modeDetails: Record<
  PracticeMode,
  { description: string; icon: React.ReactNode }
> = {
  "Technical Questions": {
    description:
      "Classic finance interview questions across accounting, valuation, DCF, M&A, LBOs, and enterprise value.",
    icon: <FileQuestion size={20} />,
  },
  "Market Scenarios": {
    description:
      "Market-event prompts that ask you to reason through companies, valuation, deals, and capital markets.",
    icon: <LineChart size={20} />,
  },
  "Mixed Practice": {
    description:
      "A realistic blend of technical questions and market scenarios for full interview-style practice.",
    icon: <RefreshCcw size={20} />,
  },
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
  const [miIndex, setMiIndex] = useState(0);
  const [miAnswer, setMiAnswer] = useState("");
  const [showMiSample, setShowMiSample] = useState(false);
  const [miGrade, setMiGrade] = useState<GradeResponse | null>(null);
  const [isMiGrading, setIsMiGrading] = useState(false);
  const [miShuffle, setMiShuffle] = useState(false);
  const [miSkipped, setMiSkipped] = useState(0);
  const [behavioralIndex, setBehavioralIndex] = useState(0);
  const [behavioralAnswer, setBehavioralAnswer] = useState("");
  const [showBehavioralSample, setShowBehavioralSample] = useState(false);
  const [behavioralGrade, setBehavioralGrade] = useState<GradeResponse | null>(null);
  const [isBehavioralGrading, setIsBehavioralGrading] = useState(false);
  const [behavioralShuffle, setBehavioralShuffle] = useState(false);
  const [behavioralSkipped, setBehavioralSkipped] = useState(0);
  const [isGrading, setIsGrading] = useState(false);
  const [error, setError] = useState("");
  const [screen, setScreen] = useState<
    | "home"
    | "setup"
    | "quiz"
    | "results"
    | "mi"
    | "miQuiz"
    | "behavioral"
    | "behavioralQuiz"
    | "prep"
  >("home");

  const currentQuestion = sessionQuestions[currentIndex];
  const currentMiQuestion = mi400Questions[miIndex];
  const currentBehavioralQuestion = behavioralQuestions[behavioralIndex];
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
    setScreen("home");
    setAnswer("");
    setCurrentGrade(null);
    setError("");
  };

  const openMiQuestion = (index: number) => {
    setMiIndex(index);
    setMiAnswer("");
    setShowMiSample(false);
    setMiGrade(null);
    setError("");
    setScreen("miQuiz");
  };

  const nextMiQuestion = () => {
    const nextIndex = miShuffle
      ? Math.floor(Math.random() * mi400Questions.length)
      : miIndex + 1 >= mi400Questions.length
        ? 0
        : miIndex + 1;
    openMiQuestion(nextIndex);
  };

  const skipMiQuestion = () => {
    setMiSkipped((count) => count + 1);
    nextMiQuestion();
  };

  const submitMiAnswer = async () => {
    if (!currentMiQuestion || !miAnswer.trim()) {
      setError("Write an answer first, even if it is rough.");
      return;
    }

    setIsMiGrading(true);
    setError("");

    try {
      const response = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: {
            id: currentMiQuestion.id,
            question: currentMiQuestion.question,
            category: "M&I 400 Questions",
            difficulty: "Intermediate",
            mode: "M&I 400 Questions",
            referenceAnswer: currentMiQuestion.sampleAnswer,
            expectedConcepts: [],
          },
          answer: miAnswer,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to grade the answer.");
      }

      setMiGrade(data);
      setShowMiSample(true);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to grade the answer.",
      );
    } finally {
      setIsMiGrading(false);
    }
  };

  const openBehavioralQuestion = (index: number) => {
    setBehavioralIndex(index);
    setBehavioralAnswer("");
    setShowBehavioralSample(false);
    setBehavioralGrade(null);
    setError("");
    setScreen("behavioralQuiz");
  };

  const nextBehavioralQuestion = () => {
    const nextIndex =
      behavioralShuffle
        ? Math.floor(Math.random() * behavioralQuestions.length)
        : behavioralIndex + 1 >= behavioralQuestions.length
          ? 0
          : behavioralIndex + 1;
    openBehavioralQuestion(nextIndex);
  };

  const submitBehavioralAnswer = async () => {
    if (!currentBehavioralQuestion || !behavioralAnswer.trim()) {
      setError("Write an answer first, even if it is rough.");
      return;
    }

    setIsBehavioralGrading(true);
    setError("");

    try {
      const response = await fetch("/api/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: {
            id: currentBehavioralQuestion.id,
            question: currentBehavioralQuestion.question,
            category: "Behavioral Practice",
            difficulty: "Intermediate",
            mode: "Behavioral Practice",
            referenceAnswer: currentBehavioralQuestion.sampleAnswer,
            expectedConcepts: [],
          },
          answer: behavioralAnswer,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to grade the answer.");
      }

      setBehavioralGrade(data);
      setShowBehavioralSample(true);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to grade the answer.",
      );
    } finally {
      setIsBehavioralGrading(false);
    }
  };

  const skipBehavioralQuestion = () => {
    setBehavioralSkipped((count) => count + 1);
    nextBehavioralQuestion();
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
  const selectedMode = modeDetails[config.practiceMode];
  const isPracticeScreen =
    screen === "setup" || screen === "quiz" || screen === "results";

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-ink">
      <header className="border-b border-[#6288b4] bg-mint text-ink">
        <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <button
            onClick={reset}
            className="flex h-14 w-32 items-center text-left text-[1.45rem] font-black leading-[0.82] tracking-normal text-black"
            aria-label="Market Technicals home"
          >
            Market
            <br />
            Technicals
          </button>
          <nav className="flex flex-1 items-center justify-end gap-5 overflow-x-auto font-sans text-[1.02rem] font-medium lg:justify-center lg:gap-8">
            <button
              onClick={() => setScreen("mi")}
              className={screen === "mi" || screen === "miQuiz" ? "underline decoration-2 underline-offset-4" : "hover:underline"}
            >
              M&I 400 Questions
            </button>
            <button
              onClick={() => {
                setConfig({ ...config, practiceMode: "Technical Questions" });
                setScreen("setup");
              }}
              className={
                isPracticeScreen && config.practiceMode === "Technical Questions"
                  ? "underline decoration-2 underline-offset-4"
                  : "hover:underline"
              }
            >
              Technical Questions
            </button>
            <button
              onClick={() => {
                setConfig({ ...config, practiceMode: "Market Scenarios" });
                setScreen("setup");
              }}
              className={
                isPracticeScreen && config.practiceMode === "Market Scenarios"
                  ? "underline decoration-2 underline-offset-4"
                  : "hover:underline"
              }
            >
              Market Scenarios
            </button>
            <button
              onClick={() => {
                setConfig({ ...config, practiceMode: "Mixed Practice" });
                setScreen("setup");
              }}
              className={
                isPracticeScreen && config.practiceMode === "Mixed Practice"
                  ? "underline decoration-2 underline-offset-4"
                  : "hover:underline"
              }
            >
              Mixed Practice
            </button>
            <button
              onClick={() => setScreen("behavioral")}
              className={
                screen === "behavioral" || screen === "behavioralQuiz"
                  ? "underline decoration-2 underline-offset-4"
                  : "hover:underline"
              }
            >
              Behavioral Practice
            </button>
            <button
              onClick={() => setScreen("prep")}
              className={
                screen === "prep"
                  ? "underline decoration-2 underline-offset-4"
                  : "hover:underline"
              }
            >
              Prep
            </button>
          </nav>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:px-8">
        <header className="border-b border-line pb-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 border border-mint bg-mint/15 px-3 py-1 text-xs font-black uppercase text-ink">
              <LineChart size={14} />
              Interview intelligence
            </div>
            <h1 className="max-w-5xl font-['Times_New_Roman',Georgia,serif] text-5xl font-normal leading-[0.94] tracking-normal text-black sm:text-7xl lg:text-8xl">
              Market Technicals Practice
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
              Finance technical interview preparation that connects accounting,
              valuation, M&A, LBOs, capital markets, and market events into realistic
              spoken-answer practice.
            </p>
          </div>
        </header>

        {screen === "home" && (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <HomeOption
              icon={<BookOpen size={22} />}
              title="M&I 400 Questions"
              description="Work through the technical interview guide question bank with exact sample answers and page references."
              onClick={() => setScreen("mi")}
            />
            <HomeOption
              icon={<FileQuestion size={22} />}
              title="Technical Questions"
              description="Classic accounting, valuation, DCF, M&A, LBO, and capital markets technical practice."
              onClick={() => {
                setConfig({ ...config, practiceMode: "Technical Questions" });
                setScreen("setup");
              }}
            />
            <HomeOption
              icon={<LineChart size={22} />}
              title="Market Scenarios"
              description="Practice connecting market events to companies, valuation, deals, and capital markets."
              onClick={() => {
                setConfig({ ...config, practiceMode: "Market Scenarios" });
                setScreen("setup");
              }}
            />
            <HomeOption
              icon={<RefreshCcw size={22} />}
              title="Mixed Practice"
              description="Blend technical questions and market-scenario prompts for a more realistic interview flow."
              onClick={() => {
                setConfig({ ...config, practiceMode: "Mixed Practice" });
                setScreen("setup");
              }}
            />
            <HomeOption
              icon={<MessageSquareText size={22} />}
              title="Behavioral Practice"
              description="Prepare fit, story, leadership, weakness, and deal-experience answers from the M&I behavioral set."
              onClick={() => setScreen("behavioral")}
            />
            <HomeOption
              icon={<Newspaper size={22} />}
              title="Prep Resources"
              description="Open the curated resources list for question banks, course prep, and market reading."
              onClick={() => setScreen("prep")}
            />
          </section>
        )}

        {screen === "mi" && (
          <section className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="border border-line bg-panel p-5 shadow-terminal">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-mint bg-mint/10 text-mint">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-black">M&I 400 Questions</h2>
                  <p className="text-sm text-steel">
                    Technical interview questions with exact sample answers and page references.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-steel">
                Pick any question below, start from the beginning, or turn on shuffle for a
                random prompt. Submitted answers are graded with Gemini AI before you review
                the M&I sample.
              </p>
              <button
                onClick={() =>
                  openMiQuestion(
                    miShuffle ? Math.floor(Math.random() * mi400Questions.length) : 0,
                  )
                }
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf]"
              >
                Start M&I Practice
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="max-h-[34rem] overflow-y-auto border border-line bg-white p-4">
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-line pb-3">
                <div>
                  <h3 className="font-black text-black">Question bank</h3>
                  <span className="text-sm text-steel">
                    {mi400Questions.length} questions
                  </span>
                </div>
                <ShuffleToggle active={miShuffle} onClick={() => setMiShuffle(!miShuffle)} />
              </div>
              <div className="grid gap-2">
                {mi400Questions.map((question, index) => (
                  <button
                    key={question.id}
                    onClick={() => openMiQuestion(index)}
                    className="border border-line bg-panel p-3 text-left transition hover:border-mint"
                  >
                    <div className="text-xs font-bold uppercase text-steel">
                      Question {index + 1} · p. {question.page}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-ink">{question.question}</div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {screen === "miQuiz" && currentMiQuestion && (
          <section className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr]">
            <div className="border border-line bg-panel p-5 shadow-terminal">
              <div className="mb-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-steel">
                <span>
                  M&I Question {miIndex + 1} / {mi400Questions.length}
                </span>
                <span className="border border-line px-2 py-1">p. {currentMiQuestion.page}</span>
              </div>

              <h2 className="text-2xl font-black leading-9 text-black">
                {currentMiQuestion.question}
              </h2>

              <textarea
                value={miAnswer}
                onChange={(event) => setMiAnswer(event.target.value)}
                disabled={showMiSample || isMiGrading}
                placeholder="Answer this like you would in an interview, then compare against the M&I sample answer."
                className="mt-5 min-h-52 w-full resize-y border border-line bg-white p-4 leading-7 text-ink outline-none placeholder:text-slate-500 focus:border-mint disabled:opacity-70"
              />

              {error && (
                <div className="mt-3 flex items-center gap-2 border border-rose-400/40 bg-rose-400/10 p-3 text-sm text-rose-800">
                  <CircleAlert size={16} />
                  {error}
                </div>
              )}

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {!showMiSample ? (
                  <>
                    <button
                      onClick={submitMiAnswer}
                      disabled={isMiGrading}
                      className="inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf]"
                    >
                      {isMiGrading ? (
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
                    <button
                      onClick={skipMiQuestion}
                      disabled={isMiGrading}
                      className="inline-flex h-12 items-center justify-center border border-line bg-white px-5 font-black text-ink transition hover:border-mint disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Not Applicable
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={nextMiQuestion}
                      className="inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf]"
                    >
                      Next M&I Question
                      <ArrowRight size={18} />
                    </button>
                    <button
                      onClick={() => setScreen("mi")}
                      className="inline-flex h-12 items-center justify-center border border-line bg-white px-5 font-black text-ink transition hover:border-mint"
                    >
                      Back to M&I Bank
                    </button>
                  </>
                )}
              </div>

              {showMiSample && (
                <>
                  {miGrade && <BankFeedback grade={miGrade} />}
                  <div className="mt-6 border border-line bg-white p-4">
                    <h3 className="text-lg font-black text-black">
                      Sample answer (M&I 400, p. {currentMiQuestion.page})
                    </h3>
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-ink">
                      {currentMiQuestion.sampleAnswer}
                    </p>
                  </div>
                </>
              )}
            </div>

            <aside className="border border-line bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">
                M&I source
              </h3>
              <div className="mt-4 text-5xl font-black text-black">
                {miIndex + 1}
                <span className="text-lg text-steel"> / {mi400Questions.length}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-steel">
                The displayed sample answer is taken directly from the attached M&I text, with
                only extraction footers removed.
              </p>
              <p className="mt-3 text-sm leading-6 text-steel">
                Skipped as not applicable: {miSkipped}.
              </p>
            </aside>
          </section>
        )}

        {screen === "behavioral" && (
          <section className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="border border-line bg-panel p-5 shadow-terminal">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-mint bg-mint/10 text-mint">
                  <MessageSquareText size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-black text-black">Behavioral Practice</h2>
                  <p className="text-sm text-steel">
                    Behavioral questions from the M&I guide, with exact sample answers.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-steel">
                These prompts cover story, fit, leadership, weaknesses, deal discussion, and
                other behavioral interview topics. Use `Not applicable` for questions that do
                not fit your background so they are skipped rather than treated like missed
                practice.
              </p>
              <button
                onClick={() =>
                  openBehavioralQuestion(
                    behavioralShuffle
                      ? Math.floor(Math.random() * behavioralQuestions.length)
                      : 0,
                  )
                }
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf]"
              >
                Start Behavioral Practice
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="max-h-[34rem] overflow-y-auto border border-line bg-white p-4">
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-line pb-3">
                <div>
                  <h3 className="font-black text-black">Behavioral bank</h3>
                  <span className="text-sm text-steel">
                    {behavioralQuestions.length} questions
                  </span>
                </div>
                <ShuffleToggle
                  active={behavioralShuffle}
                  onClick={() => setBehavioralShuffle(!behavioralShuffle)}
                />
              </div>
              <div className="grid gap-2">
                {behavioralQuestions.map((question, index) => (
                  <button
                    key={question.id}
                    onClick={() => openBehavioralQuestion(index)}
                    className="border border-line bg-panel p-3 text-left transition hover:border-mint"
                  >
                    <div className="text-xs font-bold uppercase text-steel">
                      Question {index + 1} · p. {question.page}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-ink">{question.question}</div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {screen === "behavioralQuiz" && currentBehavioralQuestion && (
          <section className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr]">
            <div className="border border-line bg-panel p-5 shadow-terminal">
              <div className="mb-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-steel">
                <span>
                  Behavioral Question {behavioralIndex + 1} / {behavioralQuestions.length}
                </span>
                <span className="border border-line px-2 py-1">
                  p. {currentBehavioralQuestion.page}
                </span>
              </div>

              <h2 className="text-2xl font-black leading-9 text-black">
                {currentBehavioralQuestion.question}
              </h2>

              <textarea
                value={behavioralAnswer}
                onChange={(event) => setBehavioralAnswer(event.target.value)}
                disabled={showBehavioralSample || isBehavioralGrading}
                placeholder="Draft your own behavioral answer, then compare it with the M&I sample."
                className="mt-5 min-h-52 w-full resize-y border border-line bg-white p-4 leading-7 text-ink outline-none placeholder:text-slate-500 focus:border-mint disabled:opacity-70"
              />

              {error && (
                <div className="mt-3 flex items-center gap-2 border border-rose-400/40 bg-rose-400/10 p-3 text-sm text-rose-800">
                  <CircleAlert size={16} />
                  {error}
                </div>
              )}

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {!showBehavioralSample ? (
                  <>
                    <button
                      onClick={submitBehavioralAnswer}
                      disabled={isBehavioralGrading}
                      className="inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf]"
                    >
                      {isBehavioralGrading ? (
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
                    <button
                      onClick={skipBehavioralQuestion}
                      disabled={isBehavioralGrading}
                      className="inline-flex h-12 items-center justify-center border border-line bg-white px-5 font-black text-ink transition hover:border-mint disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Not Applicable
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={nextBehavioralQuestion}
                      className="inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf]"
                    >
                      Next Behavioral Question
                      <ArrowRight size={18} />
                    </button>
                    <button
                      onClick={() => setScreen("behavioral")}
                      className="inline-flex h-12 items-center justify-center border border-line bg-white px-5 font-black text-ink transition hover:border-mint"
                    >
                      Back to Behavioral Bank
                    </button>
                  </>
                )}
              </div>

              {showBehavioralSample && (
                <>
                  {behavioralGrade && <BankFeedback grade={behavioralGrade} />}
                  <div className="mt-6 border border-line bg-white p-4">
                    <h3 className="text-lg font-black text-black">
                      Sample answer (M&I Behavioral, p. {currentBehavioralQuestion.page})
                    </h3>
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-ink">
                      {currentBehavioralQuestion.sampleAnswer}
                    </p>
                  </div>
                </>
              )}
            </div>

            <aside className="border border-line bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">
                Behavioral source
              </h3>
              <div className="mt-4 text-5xl font-black text-black">
                {behavioralIndex + 1}
                <span className="text-lg text-steel">
                  {" "}
                  / {behavioralQuestions.length}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-steel">
                Skipped as not applicable: {behavioralSkipped}. Skipped questions are simply
                moved past, not marked as missed.
              </p>
            </aside>
          </section>
        )}

        {screen === "prep" && (
          <section className="grid gap-6">
            <div className="border-b border-line pb-5">
              <h2 className="font-['Times_New_Roman',Georgia,serif] text-5xl font-normal leading-none text-black sm:text-6xl">
                Prep Resources
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-steel">
                A focused resource stack for interview prep: one question bank, two structured
                course platforms, and three daily market-reading sources.
              </p>
            </div>

            <div className="grid gap-5">
              <ResourceGroup
                title="Question Bank"
                description="Use this when you want direct interview questions and model answers."
              >
                <ResourceLink
                  href="https://biws-support.s3.us-east-1.amazonaws.com/400-Questions/400-Questions-IB-Interview-Guide-2025.pdf"
                  label="M&I 400 Questions"
                  description="The M&I 400 interview guide PDF used for the imported question bank."
                />
              </ResourceGroup>

              <ResourceGroup
                title="Industry Standard Course Preparation"
                description="Use these when you want structured technical training and modeling reps."
              >
                <ResourceLink
                  href="https://www.wallstreetprep.com/"
                  label="Wall Street Prep"
                  description="Structured finance, modeling, and investment banking course preparation."
                />
                <ResourceLink
                  href="https://breakingintowallstreet.com"
                  label="Breaking Into Wall Street"
                  description="Technical interview prep, modeling courses, and investment banking resources."
                />
              </ResourceGroup>

              <ResourceGroup
                title="Premier Market News Sources"
                description="Use these to build market awareness, deal context, and daily fluency."
              >
                <ResourceLink
                  href="https://www.wsj.com"
                  label="The Wall Street Journal"
                  description="Business, markets, deals, and macro news for daily market familiarity."
                />
                <ResourceLink
                  href="https://www.nytimes.com/"
                  label="The New York Times"
                  description="Broad business, policy, economy, and global context."
                />
                <ResourceLink
                  href="https://www.brewmarkets.com/"
                  label="Morning Brew Markets"
                  description="Accessible daily market updates and finance news summaries."
                />
              </ResourceGroup>
            </div>
          </section>
        )}

        {screen === "setup" && (
          <section className="max-w-4xl">
            <div className="border border-line bg-panel p-5 shadow-terminal">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-mint bg-mint/10 text-mint">
                  {selectedMode.icon}
                </div>
                <div>
                  <h2 className="text-xl font-black text-black">Start practice</h2>
                  <p className="text-sm text-steel">
                    Current mode: {config.practiceMode}.
                  </p>
                  <p className="mt-1 max-w-2xl text-sm leading-6 text-steel">
                    {selectedMode.description}
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
                    className="h-11 w-full border border-line bg-white px-3 text-sm text-black outline-none focus:border-mint"
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
                      className={`h-11 border px-2 text-sm font-bold transition ${
                          config.difficulty === difficulty
                            ? "border-mint bg-mint/15 text-mint"
                            : "border-line bg-white text-steel hover:border-mint"
                        }`}
                      >
                        {difficulty}
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
                      className={`h-11 border px-3 text-sm font-bold transition ${
                          config.questionCount === questionCount
                            ? "border-gold bg-gold/15 text-gold"
                            : "border-line bg-white text-steel hover:border-mint"
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
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf] md:w-auto"
              >
                Start Practice
                <ArrowRight size={18} />
              </button>
            </div>
          </section>
        )}

        {screen === "quiz" && currentQuestion && (
          <section className="grid gap-5 lg:grid-cols-[0.72fr_0.28fr]">
            <div className="border border-line bg-panel p-5 shadow-terminal">
              <div className="mb-5">
                <div className="mb-3 h-2 bg-[#e5e8eb]">
                  <div
                    className="h-2 bg-mint transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-steel">
                  <span>
                    Question {currentIndex + 1} / {sessionQuestions.length}
                  </span>
                  <span className="border border-line px-2 py-1">
                    {currentQuestion.category}
                  </span>
                  <span className="border border-line px-2 py-1">
                    {currentQuestion.difficulty}
                  </span>
                  <span className="border border-line px-2 py-1">
                    {currentQuestion.mode}
                  </span>
                </div>
              </div>

              {currentQuestion.marketScenario && (
                <div className="mb-4 border border-gold/40 bg-gold/10 p-4 text-sm leading-6 text-ink">
                  {currentQuestion.marketScenario}
                </div>
              )}

              <h2 className="text-2xl font-black leading-9 text-black">
                {currentQuestion.question}
              </h2>

              <textarea
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                disabled={Boolean(currentGrade) || isGrading}
                placeholder="Answer like you would in an interview. A clear, structured spoken response is enough."
                className="mt-5 min-h-52 w-full resize-y border border-line bg-white p-4 leading-7 text-ink outline-none placeholder:text-slate-500 focus:border-mint disabled:opacity-70"
              />

              {error && (
                <div className="mt-3 flex items-center gap-2 border border-rose-400/40 bg-rose-400/10 p-3 text-sm text-rose-800">
                  <CircleAlert size={16} />
                  {error}
                </div>
              )}

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {!currentGrade ? (
                  <button
                    onClick={submitAnswer}
                    disabled={isGrading}
                    className="inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf] disabled:cursor-not-allowed disabled:opacity-60"
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
                    className="inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf]"
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

            <aside className="border border-line bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">
                Session tape
              </h3>
              <div className="mt-4 text-5xl font-black text-black">
                {averageScore || "--"}
                <span className="text-lg text-steel"> avg</span>
              </div>
              <div className="mt-5 grid gap-3">
                {answers.map((item, index) => (
                  <div
                    key={item.question.id}
                    className="flex items-center justify-between border border-line bg-panel px-3 py-3 text-sm"
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
          <section className="border border-line bg-panel p-5 shadow-terminal">
            <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-black text-black">Session results</h2>
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
              <div className="border border-line bg-white p-4">
                <h3 className="font-black text-black">Recurring missing concepts</h3>
                <List
                  empty="No recurring misses surfaced."
                  items={recurringMisses.length > 0 ? recurringMisses : []}
                />
              </div>
              <div className="border border-line bg-white p-4">
                <h3 className="font-black text-black">Question review</h3>
                <div className="mt-3 grid gap-3">
                  {answers.map((item, index) => (
                    <div key={item.question.id} className="border border-line p-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-steel">
                          Q{index + 1} · {item.question.category}
                        </span>
                        <span className={scoreColor(item.grade.score)}>
                          {item.grade.score}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-ink">
                        {item.grade.overallFeedback}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={reset}
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf]"
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-steel">{label}</span>
      {children}
    </label>
  );
}

function HomeOption({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="min-h-48 border border-line bg-white p-5 text-left transition hover:border-mint"
    >
      <div className="flex h-11 w-11 items-center justify-center border border-mint bg-mint/10 text-mint">
        {icon}
      </div>
      <h2 className="mt-5 text-2xl font-black text-black">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-steel">{description}</p>
    </button>
  );
}

function ShuffleToggle({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex h-10 w-10 items-center justify-center border transition ${
        active
          ? "border-mint bg-mint text-ink"
          : "border-line bg-white text-steel hover:border-mint"
      }`}
      title={active ? "Shuffle on" : "Shuffle off"}
      aria-label={active ? "Turn shuffle off" : "Turn shuffle on"}
    >
      <Shuffle size={18} />
    </button>
  );
}

function BankFeedback({ grade }: { grade: GradeResponse }) {
  return (
    <div className="mt-6 border border-line bg-white p-4">
      <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-black text-black">AI feedback</h3>
          <p className="text-sm text-steel">
            {grade.gradingMode === "ai"
              ? "Graded against the M&I sample answer."
              : "Fallback concept matching is active."}
          </p>
        </div>
        <div className={`text-5xl font-semibold ${scoreColor(grade.score)}`}>
          {grade.score}
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <FeedbackBlock title="Correct points" items={grade.correctPoints} empty="No clear matches yet." />
        <FeedbackBlock title="Missing points" items={grade.missingPoints} empty="No major gaps found." />
        <FeedbackBlock title="Incorrect statements" items={grade.incorrectStatements} empty="No material errors flagged." />
      </div>

      <p className="mt-4 border border-line bg-panel p-4 text-sm leading-6 text-ink">
        {grade.overallFeedback}
      </p>
    </div>
  );
}

function Feedback({ grade }: { grade: GradeResponse }) {
  return (
    <div className="mt-6 border border-line bg-white p-4">
      <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-black text-black">Structured feedback</h3>
          <p className="text-sm text-steel">
            {grade.gradingMode === "ai"
              ? "Graded with Gemini AI."
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
        <div className="border border-line bg-panel p-4">
          <h4 className="font-black text-black">Improved answer</h4>
          <p className="mt-2 text-sm leading-6 text-ink">{grade.improvedAnswer}</p>
        </div>
        <div className="border border-gold/40 bg-gold/10 p-4">
          <h4 className="font-black text-black">Interviewer follow-up</h4>
          <p className="mt-2 text-sm leading-6 text-ink">{grade.followUpQuestion}</p>
        </div>
      </div>

      <p className="mt-4 border border-line bg-panel p-4 text-sm leading-6 text-ink">
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
    <div className="border border-line bg-panel p-4">
      <h4 className="font-black text-black">{title}</h4>
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
        <li key={item} className="flex gap-2 text-sm leading-6 text-ink">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-mint" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ResultBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-line bg-white p-4">
      <div className="text-sm text-steel">{label}</div>
      <div className="mt-2 text-xl font-black text-black">{value}</div>
    </div>
  );
}

function ResourceGroup({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-line bg-white p-5">
      <div className="grid gap-4 lg:grid-cols-[0.28fr_0.72fr]">
        <div>
          <h3 className="text-xl font-black text-black">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-steel">{description}</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">{children}</div>
      </div>
    </div>
  );
}

function ResourceLink({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block min-h-36 border border-line bg-panel p-4 transition hover:border-mint"
    >
      <div className="text-lg font-black text-black">{label}</div>
      <p className="mt-1 text-sm leading-6 text-steel">{description}</p>
      <div className="mt-2 break-all font-sans text-xs text-steel">{href}</div>
    </a>
  );
}
