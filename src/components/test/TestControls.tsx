'use client';

import { TestMode } from '@/lib/types';

interface Props {
  mode: TestMode;
  feedbackShown: boolean;
  hasAnswer: boolean;
  isFirst: boolean;
  isLast: boolean;
  unansweredCount: number;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export default function TestControls({
  mode, feedbackShown, hasAnswer, isFirst, isLast,
  unansweredCount, onNext, onPrev, onSubmit,
}: Props) {
  if (mode === 'practice') {
    // Practice: only show Next after feedback
    if (!feedbackShown) return null;
    return (
      <div className="flex justify-end pt-2">
        <button
          onClick={onNext}
          className="rounded-xl bg-[#1a3a5c] hover:bg-[#14304f] text-white font-semibold px-6 py-3 transition-colors cursor-pointer"
        >
          {isLast ? 'See Results →' : 'Next →'}
        </button>
      </div>
    );
  }

  // Exam mode: free navigation
  const handleSubmit = () => {
    if (unansweredCount > 0) {
      const ok = window.confirm(
        `You have ${unansweredCount} unanswered question${unansweredCount > 1 ? 's' : ''}. Submit anyway?`
      );
      if (!ok) return;
    }
    onSubmit();
  };

  return (
    <div className="flex items-center justify-between pt-2 gap-3">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="rounded-xl border-2 border-gray-200 text-gray-600 font-semibold px-6 py-3 transition-colors
          hover:border-[#1a3a5c] hover:text-[#1a3a5c] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      >
        ← Prev
      </button>

      <div className="flex gap-2">
        {!isLast && (
          <button
            onClick={onNext}
            className="rounded-xl bg-[#1a3a5c] hover:bg-[#14304f] text-white font-semibold px-6 py-3 transition-colors cursor-pointer"
          >
            Next →
          </button>
        )}
        {isLast && (
          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#2e7d32] hover:bg-[#256427] text-white font-semibold px-6 py-3 transition-colors cursor-pointer"
          >
            Submit Exam
          </button>
        )}
      </div>
    </div>
  );
}
