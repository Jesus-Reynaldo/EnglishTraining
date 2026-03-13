'use client';

import type { StructureQuestion, OptionLabel, TestMode } from '@/lib/types';

interface Props {
  question: StructureQuestion;
  selectedAnswer: OptionLabel | undefined;
  feedbackShown: boolean;
  mode: TestMode;
  onAnswer: (label: OptionLabel) => void;
}

function getButtonStyle(
  label: OptionLabel,
  selected: OptionLabel | undefined,
  correct: OptionLabel,
  feedbackShown: boolean,
  mode: TestMode
): string {
  const base = 'w-full text-left rounded-xl border-2 px-4 py-3 flex items-start gap-3 transition-all duration-150 cursor-pointer';
  const isSelected = selected === label;
  const isCorrect = label === correct;
  const locked = mode === 'practice' && !!selected;

  if (feedbackShown) {
    if (isCorrect) return `${base} border-[#2e7d32] bg-green-50 text-[#2e7d32]`;
    if (isSelected && !isCorrect) return `${base} border-[#c62828] bg-red-50 text-[#c62828]`;
    return `${base} border-gray-200 bg-white text-gray-500`;
  }

  if (isSelected) return `${base} border-[#1a3a5c] bg-[#1a3a5c] text-white`;
  if (locked) return `${base} border-gray-200 bg-white text-gray-400 cursor-default`;
  return `${base} border-gray-200 bg-white text-gray-700 hover:border-[#1a3a5c]/50 hover:bg-gray-50`;
}

export default function StructureQuestion({ question, selectedAnswer, feedbackShown, mode, onAnswer }: Props) {
  const locked = mode === 'practice' && !!selectedAnswer;

  return (
    <div className="space-y-5">
      {/* Section badge */}
      <span className="inline-flex items-center rounded-full bg-[#1a3a5c]/10 text-[#1a3a5c] text-xs font-semibold px-3 py-1">
        Structure
      </span>

      {/* Sentence */}
      <p className="text-gray-800 text-lg leading-relaxed font-medium">
        {question.text}
      </p>

      {/* Options */}
      <div className="space-y-2.5">
        {question.options.map(({ label, text }) => (
          <button
            key={label}
            onClick={() => !locked && onAnswer(label)}
            disabled={locked && !feedbackShown}
            className={getButtonStyle(label, selectedAnswer, question.answer, feedbackShown, mode)}
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
              {label}
            </span>
            <span className="pt-0.5 text-sm leading-snug">{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
