'use client';

import { Question, OptionLabel } from '@/lib/types';

interface Props {
  question: Question;
  selectedAnswer: OptionLabel | undefined;
  shown: boolean;
}

export default function FeedbackPanel({ question, selectedAnswer, shown }: Props) {
  if (!shown || !selectedAnswer) return null;

  const isCorrect = selectedAnswer === question.answer;

  return (
    <div
      className={`mt-4 rounded-xl px-5 py-4 border-l-4 flex items-start gap-3 animate-in slide-in-from-bottom-2 duration-200
        ${isCorrect
          ? 'bg-green-50 border-[#2e7d32]'
          : 'bg-red-50 border-[#c62828]'
        }`}
    >
      {/* Icon */}
      <span className={`text-2xl flex-shrink-0 ${isCorrect ? 'text-[#2e7d32]' : 'text-[#c62828]'}`}>
        {isCorrect ? '✓' : '✗'}
      </span>

      {/* Message */}
      <div>
        {isCorrect ? (
          <p className="font-semibold text-[#2e7d32]">Correct!</p>
        ) : (
          <div className="space-y-0.5">
            <p className="font-semibold text-[#c62828]">Incorrect</p>
            <p className="text-gray-700 text-sm">
              The correct answer is{' '}
              <strong className="text-[#1a3a5c]">{question.answer}</strong>
              {question.type === 'written_expression' && question.correction && question.correction !== '——' && (
                <>
                  {' '}— correct form:{' '}
                  <em className="text-[#2e7d32] font-semibold">{question.correction}</em>
                </>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
