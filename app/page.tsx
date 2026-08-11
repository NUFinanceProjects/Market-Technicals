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
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { behavioralQuestions } from "@/lib/behavioral-questions";
import { mi400Questions, type MIQuestion } from "@/lib/mi-400-questions";
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
type Screen =
  | "home"
  | "setup"
  | "quiz"
  | "results"
  | "mi"
  | "miQuiz"
  | "behavioral"
  | "behavioralQuiz"
  | "prep";
type SessionConfig = {
  category: CategoryChoice;
  difficulty: Difficulty;
  practiceMode: PracticeMode;
  questionCount: number;
};
type HomeProps = {
  initialScreen?: Screen;
  initialPracticeMode?: PracticeMode;
};
type StoredPracticeSession = {
  config: SessionConfig;
  questions: InterviewQuestion[];
  currentIndex: number;
  answers: SessionAnswer[];
};
type FollowUpMessage = {
  role: "user" | "assistant";
  content: string;
};

const defaultConfig: SessionConfig = {
  category: "All Categories",
  difficulty: "Intermediate",
  practiceMode: "Mixed Practice",
  questionCount: 5,
};
const practiceSessionStorageKey = "market-technicals:practice-session";

const screenRoutes: Record<Screen, string> = {
  home: "/",
  setup: "/MixedPractice",
  quiz: "/MixedPractice/session",
  results: "/MixedPractice/results",
  mi: "/MI400",
  miQuiz: "/MI400/practice",
  behavioral: "/BehavioralPractice",
  behavioralQuiz: "/BehavioralPractice/practice",
  prep: "/Prep",
};

const modeRoutes: Record<PracticeMode, string> = {
  "Technical Questions": "/TechnicalQuestions",
  "Market Scenarios": "/MarketScenarios",
  "Mixed Practice": "/MixedPractice",
};

const routeModes: Record<string, PracticeMode> = {
  "/technicalquestions": "Technical Questions",
  "/marketscenarios": "Market Scenarios",
  "/mixedpractice": "Mixed Practice",
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

const randomIndexExcept = (length: number, currentIndex: number) => {
  if (length <= 1) return 0;

  const nextIndex = Math.floor(Math.random() * (length - 1));
  return nextIndex >= currentIndex ? nextIndex + 1 : nextIndex;
};

function buildSession(config: SessionConfig) {
  const filtered = eligibleQuestions(config, true);
  const fallback = eligibleQuestions(config, false);
  const source = filtered.length >= config.questionCount ? filtered : fallback;
  return shuffle(source).slice(0, config.questionCount);
}

function eligibleQuestions(config: SessionConfig, matchDifficulty: boolean) {
  return questions.filter((question) => {
    const categoryMatch =
      config.category === "All Categories" || question.category === config.category;
    const difficultyMatch = !matchDifficulty || question.difficulty === config.difficulty;
    const modeMatch =
      config.practiceMode === "Mixed Practice" || question.mode === config.practiceMode;

    return categoryMatch && difficultyMatch && modeMatch;
  });
}

function randomEligibleQuestion(config: SessionConfig, excludeIds: string[]) {
  const strictMatches = eligibleQuestions(config, true).filter(
    (question) => !excludeIds.includes(question.id),
  );

  if (strictMatches.length > 0) {
    return shuffle(strictMatches)[0];
  }

  const relaxedMatches = eligibleQuestions(config, false).filter(
    (question) => !excludeIds.includes(question.id),
  );

  return shuffle(relaxedMatches)[0];
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

export default function Home({
  initialScreen = "home",
  initialPracticeMode = "Mixed Practice",
}: HomeProps = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [config, setConfig] = useState<SessionConfig>(() => ({
    ...defaultConfig,
    practiceMode: initialPracticeMode,
  }));
  const [sessionQuestions, setSessionQuestions] = useState<InterviewQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [currentGrade, setCurrentGrade] = useState<GradeResponse | null>(null);
  const [practiceFollowUps, setPracticeFollowUps] = useState<FollowUpMessage[]>([]);
  const [answers, setAnswers] = useState<SessionAnswer[]>([]);
  const [miIndex, setMiIndex] = useState(0);
  const [miAnswer, setMiAnswer] = useState("");
  const [showMiSample, setShowMiSample] = useState(false);
  const [miGrade, setMiGrade] = useState<GradeResponse | null>(null);
  const [miFollowUps, setMiFollowUps] = useState<FollowUpMessage[]>([]);
  const [miGeneratedQuestion, setMiGeneratedQuestion] = useState<MIQuestion | null>(null);
  const [isMiGrading, setIsMiGrading] = useState(false);
  const [miShuffle, setMiShuffle] = useState(false);
  const [miSkipped, setMiSkipped] = useState(0);
  const [behavioralIndex, setBehavioralIndex] = useState(0);
  const [behavioralAnswer, setBehavioralAnswer] = useState("");
  const [showBehavioralSample, setShowBehavioralSample] = useState(false);
  const [behavioralGrade, setBehavioralGrade] = useState<GradeResponse | null>(null);
  const [behavioralFollowUps, setBehavioralFollowUps] = useState<FollowUpMessage[]>([]);
  const [isBehavioralGrading, setIsBehavioralGrading] = useState(false);
  const [behavioralShuffle, setBehavioralShuffle] = useState(false);
  const [behavioralSkipped, setBehavioralSkipped] = useState(0);
  const [isGrading, setIsGrading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [screen, setScreen] = useState<Screen>(initialScreen);

  const goTo = (nextScreen: Screen, nextMode?: PracticeMode) => {
    const practiceRoute = modeRoutes[nextMode ?? config.practiceMode];
    const route =
      nextScreen === "setup"
        ? practiceRoute
        : nextScreen === "quiz"
          ? `${practiceRoute}/Session`
          : nextScreen === "results"
            ? `${practiceRoute}/Results`
            : screenRoutes[nextScreen];

    if (nextMode) {
      setConfig((current) => ({ ...current, practiceMode: nextMode }));
    }

    setScreen(nextScreen);
    router.push(route);
  };

  useEffect(() => {
    const normalizedPath = pathname.toLowerCase();
    const practiceBase = Object.keys(routeModes).find(
      (route) => normalizedPath === route || normalizedPath.startsWith(`${route}/`),
    );
    const routeMode = practiceBase ? routeModes[practiceBase] : undefined;
    let nextScreen: Screen | null = null;

    if (routeMode) {
      if (normalizedPath.endsWith("/session")) {
        nextScreen = "quiz";
      } else if (normalizedPath.endsWith("/results")) {
        nextScreen = "results";
      } else {
        nextScreen = "setup";
      }
    } else if (normalizedPath.startsWith("/mi400/practice")) {
      nextScreen = "miQuiz";
    } else if (normalizedPath === "/mi400") {
      nextScreen = "mi";
    } else if (normalizedPath.startsWith("/behavioralpractice/practice")) {
      nextScreen = "behavioralQuiz";
    } else if (normalizedPath === "/behavioralpractice") {
      nextScreen = "behavioral";
    } else if (normalizedPath === "/prep") {
      nextScreen = "prep";
    } else if (normalizedPath === "/") {
      nextScreen = "home";
    }

    const params = new URLSearchParams(window.location.search);
    const questionParam = Number(params.get("question"));
    const shuffleParam = params.get("shuffle") === "1";

    navRef.current?.scrollTo({ left: 0 });

    if (nextScreen || routeMode) {
      queueMicrotask(() => {
        if (routeMode) {
          setConfig((current) => ({ ...current, practiceMode: routeMode }));
        }
        if (nextScreen === "quiz" || nextScreen === "results") {
          const storedSession = sessionStorage.getItem(practiceSessionStorageKey);

          if (storedSession) {
            try {
              const parsedSession = JSON.parse(storedSession) as StoredPracticeSession;

              setConfig(parsedSession.config);
              setSessionQuestions(parsedSession.questions);
              setCurrentIndex(parsedSession.currentIndex);
              setAnswers(parsedSession.answers);
              setAnswer("");
              setCurrentGrade(null);
              setPracticeFollowUps([]);
            } catch {
              sessionStorage.removeItem(practiceSessionStorageKey);
            }
          }
        }
        if (
          nextScreen === "miQuiz" &&
          Number.isInteger(questionParam) &&
          questionParam >= 1 &&
          questionParam <= mi400Questions.length
        ) {
          setMiIndex(questionParam - 1);
          setMiShuffle(shuffleParam);
        }
        if (
          nextScreen === "behavioralQuiz" &&
          Number.isInteger(questionParam) &&
          questionParam >= 1 &&
          questionParam <= behavioralQuestions.length
        ) {
          setBehavioralIndex(questionParam - 1);
          setBehavioralShuffle(shuffleParam);
        }
        if (nextScreen) {
          setScreen(nextScreen);
        }
      });
    }
  }, [pathname]);

  const currentQuestion = sessionQuestions[currentIndex];
  const currentMiQuestion = miGeneratedQuestion ?? mi400Questions[miIndex];
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

  const savePracticeSession = (session: StoredPracticeSession) => {
    sessionStorage.setItem(practiceSessionStorageKey, JSON.stringify(session));
  };

  const startSession = () => {
    const nextQuestions = buildSession(config);
    savePracticeSession({
      config,
      questions: nextQuestions,
      currentIndex: 0,
      answers: [],
    });
    setSessionQuestions(nextQuestions);
    setCurrentIndex(0);
    setAnswer("");
    setCurrentGrade(null);
    setPracticeFollowUps([]);
    setAnswers([]);
    setError("");
    goTo("quiz");
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
      setPracticeFollowUps([]);
      setAnswers((previous) => {
        const nextAnswers = [
          ...previous,
          { question: currentQuestion, answer, grade: data },
        ];
        savePracticeSession({
          config,
          questions: sessionQuestions,
          currentIndex,
          answers: nextAnswers,
        });
        return nextAnswers;
      });
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
      savePracticeSession({
        config,
        questions: sessionQuestions,
        currentIndex,
        answers,
      });
      goTo("results");
      return;
    }

    const nextIndex = currentIndex + 1;
    savePracticeSession({
      config,
      questions: sessionQuestions,
      currentIndex: nextIndex,
      answers,
    });
    setCurrentIndex(nextIndex);
    setAnswer("");
    setCurrentGrade(null);
    setPracticeFollowUps([]);
    setError("");
  };

  const skipPracticeQuestion = () => {
    const excludedIds = sessionQuestions.map((question) => question.id);
    const replacement = randomEligibleQuestion(config, excludedIds);

    if (!replacement) {
      setError("No additional bank questions match the current filters yet.");
      return;
    }

    setSessionQuestions((previous) => {
      const nextQuestions = previous.map((question, index) =>
        index === currentIndex ? replacement : question,
      );
      savePracticeSession({
        config,
        questions: nextQuestions,
        currentIndex,
        answers,
      });
      return nextQuestions;
    });
    setAnswer("");
    setCurrentGrade(null);
    setPracticeFollowUps([]);
    setError("");
  };

  const generatePracticeQuestion = async () => {
    setIsGenerating(true);
    setError("");

    try {
      const response = await fetch("/api/generate-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to generate a question.");
      }

      const generatedQuestion = data.question as InterviewQuestion;

      setSessionQuestions((previous) => {
        const nextQuestions = previous.map((question, index) =>
          index === currentIndex ? generatedQuestion : question,
        );
        savePracticeSession({
          config,
          questions: nextQuestions,
          currentIndex,
          answers,
        });
        return nextQuestions;
      });
      setAnswer("");
      setCurrentGrade(null);
      setPracticeFollowUps([]);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to generate a question.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const generateSimilarPracticeQuestion = async () => {
    if (!currentQuestion) return;

    setIsGenerating(true);
    setError("");

    try {
      const response = await fetch("/api/generate-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...config,
          category: currentQuestion.category,
          practiceMode: currentQuestion.mode,
          sourceQuestion: currentQuestion.question,
          sourceAnswer: currentQuestion.referenceAnswer,
          reinforceConcept: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to generate a similar question.");
      }

      const generatedQuestion = data.question as InterviewQuestion;

      setSessionQuestions((previous) => {
        const nextQuestions = previous.map((question, index) =>
          index === currentIndex ? generatedQuestion : question,
        );
        savePracticeSession({
          config,
          questions: nextQuestions,
          currentIndex,
          answers,
        });
        return nextQuestions;
      });
      setAnswer("");
      setCurrentGrade(null);
      setPracticeFollowUps([]);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to generate a similar question.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const reset = () => {
    goTo("home");
    setAnswer("");
    setCurrentGrade(null);
    setPracticeFollowUps([]);
    setError("");
  };

  const openMiQuestion = (index: number) => {
    const questionNumber = index + 1;
    const shuffleQuery = miShuffle ? "&shuffle=1" : "";

    setMiIndex(index);
    setMiAnswer("");
    setShowMiSample(false);
    setMiGrade(null);
    setMiFollowUps([]);
    setMiGeneratedQuestion(null);
    setError("");
    setScreen("miQuiz");
    router.push(`/MI400/practice?question=${questionNumber}${shuffleQuery}`);
  };

  const nextMiQuestion = () => {
    const nextIndex = miShuffle
      ? randomIndexExcept(mi400Questions.length, miIndex)
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
      setMiFollowUps([]);
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

  const generateSimilarMiQuestion = async () => {
    if (!currentMiQuestion) return;

    setIsGenerating(true);
    setError("");

    try {
      const response = await fetch("/api/generate-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "M&A",
          difficulty: "Intermediate",
          practiceMode: "Technical Questions",
          sourceQuestion: currentMiQuestion.question,
          sourceAnswer: currentMiQuestion.sampleAnswer,
          reinforceConcept: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to generate a similar question.");
      }

      const generatedQuestion = data.question as InterviewQuestion;

      setMiGeneratedQuestion({
        id: `mi-generated-${Date.now()}`,
        sourceNumber: currentMiQuestion.sourceNumber,
        page: currentMiQuestion.page,
        question: generatedQuestion.question,
        sampleAnswer: generatedQuestion.referenceAnswer,
      });
      setMiAnswer("");
      setShowMiSample(false);
      setMiGrade(null);
      setMiFollowUps([]);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to generate a similar question.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const openBehavioralQuestion = (index: number) => {
    const questionNumber = index + 1;
    const shuffleQuery = behavioralShuffle ? "&shuffle=1" : "";

    setBehavioralIndex(index);
    setBehavioralAnswer("");
    setShowBehavioralSample(false);
    setBehavioralGrade(null);
    setBehavioralFollowUps([]);
    setError("");
    setScreen("behavioralQuiz");
    router.push(`/BehavioralPractice/practice?question=${questionNumber}${shuffleQuery}`);
  };

  const nextBehavioralQuestion = () => {
    const nextIndex =
      behavioralShuffle
        ? randomIndexExcept(behavioralQuestions.length, behavioralIndex)
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
      setBehavioralFollowUps([]);
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
          <nav
            ref={navRef}
            className="flex flex-1 items-center justify-start gap-5 overflow-x-auto font-sans text-[1.02rem] font-medium lg:justify-center lg:gap-8 [&_button]:shrink-0 [&_button]:whitespace-nowrap"
          >
            <button
              onClick={() => goTo("mi")}
              className={screen === "mi" || screen === "miQuiz" ? "underline decoration-2 underline-offset-4" : "hover:underline"}
            >
              M&I 400 Questions
            </button>
            <button
              onClick={() => goTo("setup", "Technical Questions")}
              className={
                isPracticeScreen && config.practiceMode === "Technical Questions"
                  ? "underline decoration-2 underline-offset-4"
                  : "hover:underline"
              }
            >
              Technical Questions
            </button>
            <button
              onClick={() => goTo("setup", "Market Scenarios")}
              className={
                isPracticeScreen && config.practiceMode === "Market Scenarios"
                  ? "underline decoration-2 underline-offset-4"
                  : "hover:underline"
              }
            >
              Market Scenarios
            </button>
            <button
              onClick={() => goTo("setup", "Mixed Practice")}
              className={
                isPracticeScreen && config.practiceMode === "Mixed Practice"
                  ? "underline decoration-2 underline-offset-4"
                  : "hover:underline"
              }
            >
              Mixed Practice
            </button>
            <button
              onClick={() => goTo("behavioral")}
              className={
                screen === "behavioral" || screen === "behavioralQuiz"
                  ? "underline decoration-2 underline-offset-4"
                  : "hover:underline"
              }
            >
              Behavioral Practice
            </button>
            <button
              onClick={() => goTo("prep")}
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
              onClick={() => goTo("mi")}
            />
            <HomeOption
              icon={<FileQuestion size={22} />}
              title="Technical Questions"
              description="Classic accounting, valuation, DCF, M&A, LBO, and capital markets technical practice."
              onClick={() => goTo("setup", "Technical Questions")}
            />
            <HomeOption
              icon={<LineChart size={22} />}
              title="Market Scenarios"
              description="Practice connecting market events to companies, valuation, deals, and capital markets."
              onClick={() => goTo("setup", "Market Scenarios")}
            />
            <HomeOption
              icon={<RefreshCcw size={22} />}
              title="Mixed Practice"
              description="Blend technical questions and market-scenario prompts for a more realistic interview flow."
              onClick={() => goTo("setup", "Mixed Practice")}
            />
            <HomeOption
              icon={<MessageSquareText size={22} />}
              title="Behavioral Practice"
              description="Prepare fit, story, leadership, weakness, and deal-experience answers from the M&I behavioral set."
              onClick={() => goTo("behavioral")}
            />
            <HomeOption
              icon={<Newspaper size={22} />}
              title="Prep Resources"
              description="Open the curated resources list for question banks, course prep, and market reading."
              onClick={() => goTo("prep")}
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
              <SourceCredit />
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
                      disabled={isMiGrading || isGenerating}
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
                      disabled={isMiGrading || isGenerating}
                      className="inline-flex h-12 items-center justify-center border border-line bg-white px-5 font-black text-ink transition hover:border-mint disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Not Applicable
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={nextMiQuestion}
                      disabled={isGenerating}
                      className="inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Next M&I Question
                      <ArrowRight size={18} />
                    </button>
                    <button
                      onClick={generateSimilarMiQuestion}
                      disabled={isGenerating}
                      className="inline-flex h-12 items-center justify-center gap-2 border border-line bg-white px-5 font-black text-ink transition hover:border-mint disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          Generating
                        </>
                      ) : (
                        <>
                          Another Like This
                          <RefreshCcw size={18} />
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => goTo("mi")}
                      disabled={isGenerating}
                      className="inline-flex h-12 items-center justify-center border border-line bg-white px-5 font-black text-ink transition hover:border-mint disabled:cursor-not-allowed disabled:opacity-60"
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
                      {miGeneratedQuestion
                        ? "Generated sample answer"
                        : `Sample answer (M&I 400, p. ${currentMiQuestion.page})`}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-steel">
                      {miGeneratedQuestion
                        ? "Generated by Market Technicals to reinforce the same concept with a fresh prompt. It is not from M&I or BIWS."
                        : "Source: Mergers & Inquisitions / Breaking Into Wall Street 400 Questions Investment Banking Interview Guide. Market Technicals is an independent study aid and is not affiliated with or endorsed by M&I or BIWS."}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-ink">
                      {currentMiQuestion.sampleAnswer}
                    </p>
                  </div>
                  {miGrade && (
                    <FollowUpCoach
                      question={{
                        prompt: currentMiQuestion.question,
                        category: "M&I 400 Questions",
                        referenceAnswer: currentMiQuestion.sampleAnswer,
                      }}
                      userAnswer={miAnswer}
                      grade={miGrade}
                      messages={miFollowUps}
                      onMessagesChange={setMiFollowUps}
                    />
                  )}
                </>
              )}
            </div>

            <aside className="border border-line bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">
                M&I source
              </h3>
              <div className="mt-4 text-5xl font-black text-black">
                {miGeneratedQuestion ? "AI" : miIndex + 1}
                {!miGeneratedQuestion && (
                  <span className="text-lg text-steel"> / {mi400Questions.length}</span>
                )}
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
              <SourceCredit />
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
                      onClick={() => goTo("behavioral")}
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
                    <p className="mt-2 text-xs leading-5 text-steel">
                      Source: Mergers & Inquisitions / Breaking Into Wall Street 400 Questions
                      Investment Banking Interview Guide. Market Technicals is an independent
                      study aid and is not affiliated with or endorsed by M&I or BIWS.
                    </p>
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-ink">
                      {currentBehavioralQuestion.sampleAnswer}
                    </p>
                  </div>
                  {behavioralGrade && (
                    <FollowUpCoach
                      question={{
                        prompt: currentBehavioralQuestion.question,
                        category: "Behavioral Practice",
                        referenceAnswer: currentBehavioralQuestion.sampleAnswer,
                      }}
                      userAnswer={behavioralAnswer}
                      grade={behavioralGrade}
                      messages={behavioralFollowUps}
                      onMessagesChange={setBehavioralFollowUps}
                    />
                  )}
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
                A focused resource stack for interview prep: question banks, core technical
                reading, structured course platforms, and daily market-reading sources.
              </p>
            </div>

            <div className="grid gap-5">
              <ResourceGroup
                title="Question Bank"
                description="Use this when you want direct interview questions and model answers."
              >
                <ResourceLink
                  href="https://biws-support.s3.us-east-1.amazonaws.com/400-Questions/400-Questions-IB-Interview-Guide-2025.pdf"
                  label="M&I 400"
                  description="Technical and behavioral question bank with sample answers."
                  displayUrl="M&I 400 PDF"
                />
              </ResourceGroup>

              <ResourceGroup
                title="Core Technical Textbook"
                description="Use this when you want a deeper foundation in valuation, LBOs, M&A, and IPO mechanics."
              >
                <ResourceLink
                  href="https://www.wiley.com/en-us/shop/general-finance-investments/investment-banking-valuation-lbos-m-a-and-ipos-3rd-edition-p-9781119706588"
                  label="Rosenbaum & Pearl"
                  description="Gold-standard IB prep textbook for valuation, LBOs, M&A, and IPOs."
                  displayUrl="wiley.com"
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
                    Type: {currentQuestion.category}
                  </span>
                  <span className="border border-line px-2 py-1">
                    Level: {currentQuestion.difficulty}
                  </span>
                  <span className="border border-line px-2 py-1">
                    Mode: {currentQuestion.mode}
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
                  <>
                    <button
                      onClick={submitAnswer}
                      disabled={isGrading || isGenerating}
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
                    <button
                      onClick={skipPracticeQuestion}
                      disabled={isGrading || isGenerating}
                      className="inline-flex h-12 items-center justify-center gap-2 border border-line bg-white px-5 font-black text-ink transition hover:border-mint disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Skip
                      <ArrowRight size={18} />
                    </button>
                    <button
                      onClick={generatePracticeQuestion}
                      disabled={isGrading || isGenerating}
                      className="inline-flex h-12 items-center justify-center gap-2 border border-line bg-white px-5 font-black text-ink transition hover:border-mint disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          Generating
                        </>
                      ) : (
                        <>
                          Generate
                          <RefreshCcw size={18} />
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={nextQuestion}
                      disabled={isGenerating}
                      className="inline-flex h-12 items-center justify-center gap-2 bg-mint px-5 font-black text-ink transition hover:bg-[#89a9cf] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {currentIndex + 1 >= sessionQuestions.length
                        ? "View Results"
                        : "Next Question"}
                      <ArrowRight size={18} />
                    </button>
                    <button
                      onClick={generateSimilarPracticeQuestion}
                      disabled={isGenerating}
                      className="inline-flex h-12 items-center justify-center gap-2 border border-line bg-white px-5 font-black text-ink transition hover:border-mint disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          Generating
                        </>
                      ) : (
                        <>
                          Another Like This
                          <RefreshCcw size={18} />
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>

              {currentGrade && (
                <>
                  <Feedback grade={currentGrade} />
                  <FollowUpCoach
                    question={{
                      prompt: currentQuestion.question,
                      category: currentQuestion.category,
                      referenceAnswer: currentQuestion.referenceAnswer,
                    }}
                    userAnswer={answer}
                    grade={currentGrade}
                    messages={practiceFollowUps}
                    onMessagesChange={setPracticeFollowUps}
                  />
                </>
              )}
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
      className={`inline-flex h-11 items-center justify-center gap-2 border-2 px-3 text-sm font-black transition ${
        active
          ? "border-black bg-mint text-black shadow-terminal"
          : "border-line bg-white text-steel hover:border-mint hover:text-ink"
      }`}
      title={active ? "Shuffle on" : "Shuffle off"}
      aria-label={active ? "Turn shuffle off" : "Turn shuffle on"}
    >
      <Shuffle size={18} />
      <span>{active ? "Shuffle On" : "Shuffle"}</span>
    </button>
  );
}

function SourceCredit() {
  return (
    <div className="mt-5 border border-line bg-white p-3 text-xs leading-5 text-steel">
      Source material credited to{" "}
      <a
        href="https://mergersandinquisitions.com/400-questions-investment-banking/"
        target="_blank"
        rel="noreferrer"
        className="font-bold text-ink underline underline-offset-2"
      >
        Mergers & Inquisitions / Breaking Into Wall Street
      </a>
      . Market Technicals is an independent study aid and is not affiliated with, sponsored by,
      or endorsed by M&I or BIWS. AI feedback is generated separately from your submitted answer.
    </div>
  );
}

function gradeContext(grade: GradeResponse) {
  return [
    `Score: ${grade.score}/100`,
    `Correct points: ${grade.correctPoints.join("; ") || "None listed"}`,
    `Missing points: ${grade.missingPoints.join("; ") || "None listed"}`,
    `Incorrect statements: ${grade.incorrectStatements.join("; ") || "None listed"}`,
    `Improved answer: ${grade.improvedAnswer}`,
    `Follow-up question: ${grade.followUpQuestion}`,
    `Overall feedback: ${grade.overallFeedback}`,
  ].join("\n");
}

function FollowUpCoach({
  question,
  userAnswer,
  grade,
  messages,
  onMessagesChange,
}: {
  question: {
    prompt: string;
    category?: string;
    referenceAnswer: string;
  };
  userAnswer: string;
  grade: GradeResponse;
  messages: FollowUpMessage[];
  onMessagesChange: (messages: FollowUpMessage[]) => void;
}) {
  const [draft, setDraft] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const [localError, setLocalError] = useState("");

  const askFollowUp = async () => {
    const content = draft.trim();

    if (!content) {
      setLocalError("Ask a follow-up question first.");
      return;
    }

    const nextMessages: FollowUpMessage[] = [...messages, { role: "user", content }];
    onMessagesChange(nextMessages);
    setDraft("");
    setIsAsking(true);
    setLocalError("");

    try {
      const response = await fetch("/api/follow-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          userAnswer,
          feedback: gradeContext(grade),
          messages: nextMessages,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to answer the follow-up question.");
      }

      onMessagesChange([
        ...nextMessages,
        { role: "assistant", content: data.answer as string },
      ]);
    } catch (caughtError) {
      onMessagesChange(messages);
      setLocalError(
        caughtError instanceof Error
          ? caughtError.message
          : "Unable to answer the follow-up question.",
      );
    } finally {
      setIsAsking(false);
    }
  };

  return (
    <div className="mt-6 border border-line bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-mint bg-mint/10 text-mint">
          <MessageSquareText size={18} />
        </div>
        <div>
          <h3 className="text-lg font-black text-black">Ask a follow-up</h3>
          <p className="text-sm text-steel">
            Use the box to clarify the sample answer, your feedback, or how to improve your wording.
          </p>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="mt-4 grid gap-3">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`border p-3 text-sm leading-6 ${
                message.role === "user"
                  ? "border-mint/50 bg-mint/10 text-ink"
                  : "border-line bg-panel text-ink"
              }`}
            >
              <div className="mb-1 text-xs font-black uppercase tracking-[0.12em] text-steel">
                {message.role === "user" ? "You" : "Coach"}
              </div>
              <p className="whitespace-pre-line">{message.content}</p>
            </div>
          ))}
        </div>
      )}

      <textarea
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        disabled={isAsking}
        placeholder="Ask why something was missing, request a shorter answer, or practice the interviewer follow-up."
        className="mt-4 min-h-28 w-full resize-y border border-line bg-panel p-3 leading-6 text-ink outline-none placeholder:text-slate-500 focus:border-mint disabled:opacity-70"
      />

      {localError && (
        <div className="mt-3 flex items-center gap-2 border border-rose-400/40 bg-rose-400/10 p-3 text-sm text-rose-800">
          <CircleAlert size={16} />
          {localError}
        </div>
      )}

      <button
        onClick={askFollowUp}
        disabled={isAsking}
        className="mt-3 inline-flex h-11 items-center justify-center gap-2 bg-mint px-4 font-black text-ink transition hover:bg-[#89a9cf] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isAsking ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Asking
          </>
        ) : (
          <>
            Ask Follow-up
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </div>
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
  displayUrl,
}: {
  href: string;
  label: string;
  description: string;
  displayUrl?: string;
}) {
  const urlLabel = displayUrl ?? href.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex min-h-36 flex-col justify-center border border-line bg-panel p-4 transition hover:border-mint"
    >
      <div className="text-lg font-black text-black">{label}</div>
      <p className="mt-1 text-sm leading-6 text-steel">{description}</p>
      <div className="mt-2 font-sans text-xs text-steel">
        {urlLabel}
      </div>
    </a>
  );
}
