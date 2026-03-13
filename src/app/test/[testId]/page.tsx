'use client';

import { useEffect, useCallback, useState, useRef } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useTestSession } from '@/hooks/useTestSession';
import { fetchTestWithQuestions } from '@/lib/data/api';
import { OptionLabel, TestMode, TestData } from '@/lib/types';
import ProgressBar from '@/components/test/ProgressBar';
import StructureQuestion from '@/components/test/StructureQuestion';
import WrittenExpressionQuestion from '@/components/test/WrittenExpressionQuestion';
import FeedbackPanel from '@/components/test/FeedbackPanel';
import TestControls from '@/components/test/TestControls';

const EXAM_DURATION = 25 * 60; // 25 minutes in seconds

export default function TestPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const testId = Number(params.testId);
  const mode = (searchParams.get('mode') ?? 'practice') as TestMode;

  const [test, setTest] = useState<TestData | null>(null);
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const {
    testId: activeTestId,
    currentIndex,
    currentQuestion,
    currentAnswer,
    answers,
    feedbackShown,
    isComplete,
    questions,
    unansweredCount,
    startTest,
    answerQuestion,
    nextQuestion,
    prevQuestion,
    submitExam,
  } = useTestSession();

  useEffect(() => {
    fetchTestWithQuestions(testId)
      .then((t) => {
        setTest(t);
        startTest(testId, mode, t.questions);
      })
      .catch(() => router.replace('/'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testId, mode]);

  useEffect(() => {
    if (isComplete && activeTestId) {
      sessionStorage.setItem(`toefl_answers_${testId}`, JSON.stringify(answers));
      sessionStorage.setItem(`toefl_mode_${testId}`, mode);
      router.push(`/review/${testId}`);
    }
  }, [isComplete, activeTestId, testId, answers, mode, router]);

  // Start countdown when test is ready; auto-submit when time runs out
  useEffect(() => {
    if (!activeTestId || activeTestId !== testId || isComplete) return;
    setTimeLeft(EXAM_DURATION);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTestId, testId]);

  useEffect(() => {
    if (timeLeft === 0 && !isComplete) {
      submitExam();
    }
  }, [timeLeft, isComplete, submitExam]);

  const handleNext = useCallback(() => {
    if (mode === 'practice' && currentIndex === questions.length - 1) {
      submitExam();
    } else {
      nextQuestion();
    }
  }, [mode, currentIndex, questions.length, nextQuestion, submitExam]);

  if (!currentQuestion || activeTestId !== testId || !test) {
    return (
      <div className="flex items-center justify-center min-h-40">
        <div className="text-gray-400 text-sm">Loading...</div>
      </div>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <button
            onClick={() => router.push('/')}
            className="text-gray-400 hover:text-[#1a3a5c] text-sm font-medium transition-colors cursor-pointer"
          >
            ← Home
          </button>
          <h2 className="text-[#1a3a5c] font-bold text-lg mt-0.5">{test.title}</h2>
        </div>
        <div className="flex items-center gap-4">
          {/* Countdown timer */}
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono font-bold text-sm ${
            timeLeft <= 120
              ? 'bg-red-50 text-red-600 border border-red-200'
              : timeLeft <= 300
              ? 'bg-orange-50 text-orange-500 border border-orange-200'
              : 'bg-gray-50 text-gray-600 border border-gray-200'
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="6" x2="12" y2="12" /><line x1="12" y1="12" x2="16" y2="14" />
            </svg>
            {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:{String(timeLeft % 60).padStart(2, '0')}
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide capitalize">{mode}</span>
            <p className="text-gray-600 font-bold text-sm">
              {currentIndex + 1} / {questions.length}
            </p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <ProgressBar answered={answeredCount} total={questions.length} />

      {/* Question card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <p className="text-xs font-semibold text-gray-400 mb-4">
          Question {currentIndex + 1}
        </p>

        {currentQuestion.type === 'structure' ? (
          <StructureQuestion
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            feedbackShown={feedbackShown}
            mode={mode}
            onAnswer={(label: OptionLabel) => answerQuestion(currentQuestion.id, label)}
          />
        ) : (
          <WrittenExpressionQuestion
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            feedbackShown={feedbackShown}
            mode={mode}
            onAnswer={(label: OptionLabel) => answerQuestion(currentQuestion.id, label)}
          />
        )}

        {mode === 'practice' && (
          <FeedbackPanel
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            shown={feedbackShown}
          />
        )}
      </div>

      {/* Navigation */}
      <TestControls
        mode={mode}
        feedbackShown={feedbackShown}
        hasAnswer={!!currentAnswer}
        isFirst={isFirst}
        isLast={isLast}
        unansweredCount={unansweredCount}
        onNext={handleNext}
        onPrev={prevQuestion}
        onSubmit={submitExam}
      />
    </div>
  );
}
