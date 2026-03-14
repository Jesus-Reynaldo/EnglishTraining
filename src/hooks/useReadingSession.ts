'use client';

import { useState, useCallback, useMemo } from 'react';
import { OptionLabel, TestMode, ReadingQuestion } from '@/lib/types';

interface ReadingSessionState {
  testId: string | null;
  mode: TestMode;
  currentIndex: number;
  answers: Record<string, OptionLabel>;
  feedbackShown: boolean;
  isComplete: boolean;
  questions: ReadingQuestion[];
}

const INITIAL_STATE: ReadingSessionState = {
  testId: null,
  mode: 'practice',
  currentIndex: 0,
  answers: {},
  feedbackShown: false,
  isComplete: false,
  questions: [],
};

export function useReadingSession() {
  const [state, setState] = useState<ReadingSessionState>(INITIAL_STATE);

  const questions = state.questions;
  const currentQuestion = questions[state.currentIndex] ?? null;
  const currentAnswer = currentQuestion ? state.answers[currentQuestion.id] : undefined;

  const unansweredCount = useMemo(
    () => questions.filter((q) => !state.answers[q.id]).length,
    [questions, state.answers]
  );

  const startSession = useCallback((testId: string, mode: TestMode, questions: ReadingQuestion[]) => {
    setState({ testId, mode, currentIndex: 0, answers: {}, feedbackShown: false, isComplete: false, questions });
  }, []);

  const answerQuestion = useCallback((questionId: string, label: OptionLabel) => {
    setState((prev) => {
      if (prev.mode === 'practice' && prev.answers[questionId]) return prev;
      return {
        ...prev,
        answers: { ...prev.answers, [questionId]: label },
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

  const submitExam = useCallback(() => {
    setState((prev) => ({ ...prev, isComplete: true }));
  }, []);

  const reset = useCallback(() => setState(INITIAL_STATE), []);

  return {
    ...state,
    questions,
    currentQuestion,
    currentAnswer,
    unansweredCount,
    startSession,
    answerQuestion,
    nextQuestion,
    prevQuestion,
    submitExam,
    reset,
  };
}
