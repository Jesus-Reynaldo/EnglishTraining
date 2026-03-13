'use client';

import type { WrittenExpressionQuestion, OptionLabel, TestMode, Segment } from '@/lib/types';

interface Props {
  question: WrittenExpressionQuestion;
  selectedAnswer: OptionLabel | undefined;
  feedbackShown: boolean;
  mode: TestMode;
  onAnswer: (label: OptionLabel) => void;
}

function getOptionStyle(
  label: OptionLabel,
  selected: OptionLabel | undefined,
  correct: OptionLabel,
  feedbackShown: boolean,
  mode: TestMode
): React.CSSProperties {
  const isSelected = selected === label;
  const isCorrect = label === correct;

  if (feedbackShown) {
    if (isCorrect) return { borderBottom: '2px solid #2e7d32', color: '#2e7d32', backgroundColor: '#f0fdf4', borderRadius: '2px' };
    if (isSelected && !isCorrect) return { borderBottom: '2px solid #c62828', color: '#c62828', backgroundColor: '#fff5f5', borderRadius: '2px' };
    return { borderBottom: '2px solid #9ca3af', color: '#6b7280' };
  }

  if (isSelected) return { borderBottom: '2px solid #1a3a5c', color: '#1a3a5c', fontWeight: 700 };
  return { borderBottom: '2px solid #374151', color: '#374151' };
}

function getOptionClass(
  label: OptionLabel,
  selected: OptionLabel | undefined,
  mode: TestMode
): string {
  const locked = mode === 'practice' && !!selected;
  if (locked) return 'cursor-default';
  return 'cursor-pointer hover:opacity-75';
}

export default function WrittenExpressionQuestion({
  question, selectedAnswer, feedbackShown, mode, onAnswer,
}: Props) {
  const locked = mode === 'practice' && !!selectedAnswer;

  return (
    <div className="space-y-5">
      {/* Section badge */}
      <span className="inline-flex items-center rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">
        Written Expression
      </span>

      {/* Instruction */}
      <p className="text-gray-500 text-sm italic">
        Identify the underlined word or phrase that must be changed for the sentence to be correct.
      </p>

      {/* Sentence with inline option buttons */}
      <p className="text-gray-800 text-lg leading-loose">
        {question.segments.map((seg: Segment, i: number) => {
          if (seg.type === 'text') {
            return <span key={i}>{seg.content}</span>;
          }

          const label = seg.label as OptionLabel;
          return (
            <span key={i} className="inline-flex items-baseline gap-0.5">
              <button
                onClick={() => !locked && onAnswer(label)}
                disabled={locked}
                style={getOptionStyle(label, selectedAnswer, question.answer, feedbackShown, mode)}
                className={`inline px-0.5 text-base font-medium transition-all duration-150 bg-transparent border-0 outline-none focus:outline-none ${getOptionClass(label, selectedAnswer, mode)}`}
              >
                <sup className="text-[10px] font-bold mr-0.5 opacity-60">({label})</sup>
                {seg.content}
              </button>
            </span>
          );
        })}
      </p>
    </div>
  );
}
