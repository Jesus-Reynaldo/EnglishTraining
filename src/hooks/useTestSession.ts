'use client';

import { useState, useCallback, useMemo } from 'react';
import { OptionLabel, TestMode, Question } from '@/lib/types';

interface TestSessionState {
  testId: number | null;
  mode: TestMode;
  currentIndex: number;
  answers: Record<number, OptionLabel>;
  feedbackShown: boolean;
  isComplete: boolean;
  questions: Question[];
}

const INITIAL_STATE: TestSessionState = {
  testId: null,
  mode: 'practice',
  currentIndex: 0,
  answers: {},
  feedbackShown: false,
  isComplete: false,
  questions: [],
};

export function useTestSession() {
  const [state, setState] = useState<TestSessionState>(INITIAL_STATE);

  const questions = state.questions;
  const currentQuestion = questions[state.currentIndex] ?? null;
  const currentAnswer = currentQuestion ? state.answers[currentQuestion.id] : undefined;

  const unansweredCount = useMemo(
    () => questions.filter((q) => !state.answers[q.id]).length,
    [questions, state.answers]
  );

  const startTest = useCallback((testId: number, mode: TestMode, questions: Question[]) => {
    setState({ testId, mode, currentIndex: 0, answers: {}, feedbackShown: false, isComplete: false, questions });
  }, []);

  const answerQuestion = useCallback((questionId: number, label: OptionLabel) => {
    setState((prev) => {
      if (prev.mode === 'practice' && prev.answers[questionId]) return prev;
      const newAnswers = { ...prev.answers, [questionId]: label };
      return {
        ...prev,
        answers: newAnswers,
        feedbackShown: prev.mode === 'practice' ? true : prev.feedbackShown,
      };
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setState((prev) => {
      const next = prev.currentIndex + 1;
      if (next >= prev.questions.length) {
        return prev.mode === 'practice' ? { ...prev, isComplete: true } : prev;
      }
      return { ...prev, currentIndex: next, feedbackShown: false };
    });
  }, []);

  const prevQuestion = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentIndex: Math.max(0, prev.currentIndex - 1),
      feedbackShown: false,
    }));
  }, []);

  const submitExam = useCallback(async () => {
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      try {
        const { createClient } = await import('@/lib/supabase/client');
        const supabase = createClient();
        await supabase.from('test_sessions').insert({
          test_id: state.testId,
          mode: state.mode,
          answers: state.answers,
        });
      } catch (err) {
        console.warn('Supabase save failed:', err);
      }
    }
    setState((prev) => ({ ...prev, isComplete: true }));
  }, [state.testId, state.mode, state.answers]);

  const reset = useCallback(() => setState(INITIAL_STATE), []);

  return {
    ...state,
    questions,
    currentQuestion,
    currentAnswer,
    unansweredCount,
    startTest,
    answerQuestion,
    nextQuestion,
    prevQuestion,
    submitExam,
    reset,
  };
}
