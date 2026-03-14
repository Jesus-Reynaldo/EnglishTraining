'use client';

import { OptionLabel, TestMode, ReadingQuestion } from '@/lib/types';

interface Props {
  question: ReadingQuestion;
  selectedAnswer?: OptionLabel;
  feedbackShown: boolean;
  mode: TestMode;
  onAnswer: (label: OptionLabel) => void;
}

export default function ReadingQuestionView({ question, selectedAnswer, feedbackShown, mode, onAnswer }: Props) {
  const getOptionStyle = (label: OptionLabel) => {
    const isSelected = selectedAnswer === label;
    const isCorrect = label === question.answer;

    if (feedbackShown && mode === 'practice') {
      if (isCorrect) return 'border-[#2e7d32] bg-green-50 text-[#2e7d32]';
      if (isSelected && !isCorrect) return 'border-[#c62828] bg-red-50 text-[#c62828]';
    }

    if (isSelected) return 'border-[#1a3a5c] bg-[#1a3a5c] text-white';
    return 'border-gray-200 text-gray-700 hover:border-[#1a3a5c] hover:bg-blue-50 cursor-pointer';
  };

  const isLocked = feedbackShown && mode === 'practice';

  return (
    <div className="space-y-4">
      <p className="text-gray-800 font-medium leading-relaxed">{question.text}</p>
      <div className="space-y-2">
        {question.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => !isLocked && onAnswer(opt.label)}
            disabled={isLocked}
            className={`w-full text-left rounded-xl border-2 px-4 py-3 text-sm font-medium transition-all ${getOptionStyle(opt.label)}`}
          >
            <span className="font-bold mr-2">({opt.label})</span>
            {opt.text}
          </button>
        ))}
      </div>

      {feedbackShown && mode === 'practice' && (
        <div className={`mt-3 rounded-xl px-4 py-3 text-sm font-medium ${
          selectedAnswer === question.answer
            ? 'bg-green-50 text-[#2e7d32] border border-green-200'
            : 'bg-red-50 text-[#c62828] border border-red-200'
        }`}>
          {selectedAnswer === question.answer
            ? 'Correct!'
            : `Incorrect. The correct answer is (${question.answer}).`}
        </div>
      )}
    </div>
  );
}
