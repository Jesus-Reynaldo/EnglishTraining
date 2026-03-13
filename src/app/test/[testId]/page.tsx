'use client';

import { useEffect, useCallback, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useTestSession } from '@/hooks/useTestSession';
import { fetchTestWithQuestions } from '@/lib/data/api';
import { OptionLabel, TestMode, TestData } from '@/lib/types';
import ProgressBar from '@/components/test/ProgressBar';
import StructureQuestion from '@/components/test/StructureQuestion';
import WrittenExpressionQuestion from '@/components/test/WrittenExpressionQuestion';
import FeedbackPanel from '@/components/test/FeedbackPanel';
import TestControls from '@/components/test/TestControls';

export default function TestPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const testId = Number(params.testId);
  const mode = (searchParams.get('mode') ?? 'practice') as TestMode;

  const [test, setTest] = useState<TestData | null>(null);

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
        <div className="text-right">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide capitalize">{mode}</span>
          <p className="text-gray-600 font-bold text-sm">
            {currentIndex + 1} / {questions.length}
          </p>
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
