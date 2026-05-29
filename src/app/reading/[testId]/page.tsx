'use client';

import { useEffect, useCallback, useState, useRef } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useReadingSession } from '@/hooks/useReadingSession';
import { OptionLabel, TestMode, ReadingTestData, ReadingPassage } from '@/lib/types';
import ProgressBar from '@/components/test/ProgressBar';
import ReadingPassageView from '@/components/reading/ReadingPassageView';
import ReadingQuestionView from '@/components/reading/ReadingQuestionView';
import TestControls from '@/components/test/TestControls';

const EXAM_DURATION = 55 * 60; // 55 minutes

export default function ReadingTestPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const testId = params.testId as string;
  const mode = (searchParams.get('mode') ?? 'practice') as TestMode;

  const [test, setTest] = useState<ReadingTestData | null>(null);
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
    startSession,
    answerQuestion,
    nextQuestion,
    prevQuestion,
    submitExam,
  } = useReadingSession();

  useEffect(() => {
    fetch(`/api/reading/${testId}`)
      .then((r) => r.json())
      .then((t) => {
        setTest(t);
        startSession(testId, mode, t.questions);
      })
      .catch(() => router.replace('/'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testId, mode]);

  useEffect(() => {
    if (isComplete && activeTestId) {
      sessionStorage.setItem(`toefl_reading_answers_${testId}`, JSON.stringify(answers));
      sessionStorage.setItem(`toefl_reading_mode_${testId}`, mode);
      router.push(`/reading/review/${testId}`);
    }
  }, [isComplete, activeTestId, testId, answers, mode, router]);

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
    if (timeLeft === 0 && !isComplete) submitExam();
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

  const currentPassage: ReadingPassage | undefined = test.passages.find(
    (p) => p.id === currentQuestion.passageId
  );

  const answeredCount = Object.keys(answers).length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === questions.length - 1;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <button
            onClick={() => router.push('/')}
            className="text-gray-400 hover:text-[#1a3a5c] text-sm font-medium transition-colors cursor-pointer"
          >
            ← Home
          </button>
          <h2 className="text-[#1a3a5c] font-bold text-lg mt-0.5">{test.title} — Reading</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono font-bold text-sm ${
            timeLeft <= 300
              ? 'bg-red-50 text-red-600 border border-red-200'
              : timeLeft <= 600
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

      <ProgressBar answered={answeredCount} total={questions.length} />

      {/* Split layout: passage left, question right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" style={{ minHeight: '520px' }}>
        {/* Passage panel */}
        <div className="lg:sticky lg:top-4 lg:self-start" style={{ maxHeight: '600px' }}>
          {currentPassage && <ReadingPassageView passage={currentPassage} />}
        </div>

        {/* Question panel */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
          <p className="text-xs font-semibold text-gray-400">
            Question {currentIndex + 1}
          </p>
          <ReadingQuestionView
            question={currentQuestion}
            selectedAnswer={currentAnswer}
            feedbackShown={feedbackShown}
            mode={mode}
            onAnswer={(label: OptionLabel) => answerQuestion(currentQuestion.id, label)}
          />
        </div>
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
