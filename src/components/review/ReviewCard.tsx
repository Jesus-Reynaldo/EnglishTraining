'use client';

import { Question, OptionLabel, Segment } from '@/lib/types';

interface Props {
  question: Question;
  userAnswer: OptionLabel | undefined;
  questionNumber: number;
}

function renderWESentence(segments: Segment[], answer: OptionLabel, userAnswer: OptionLabel | undefined) {
  return segments.map((seg, i) => {
    if (seg.type === 'text') return <span key={i}>{seg.content}</span>;

    const label = seg.label as OptionLabel;
    const isCorrect = label === answer;
    const isUser = label === userAnswer;

    let color = 'border-gray-400 text-gray-700';
    if (isCorrect) color = 'border-[#2e7d32] text-[#2e7d32] font-bold';
    else if (isUser && !isCorrect) color = 'border-[#c62828] text-[#c62828] font-bold';

    return (
      <span key={i} className="inline">
        <sup className="text-[9px] opacity-60 mr-0.5">({label})</sup>
        <span
          className={`${color}`}
          style={{ borderBottom: `2px solid currentColor` }}
        >
          {seg.content}
        </span>
      </span>
    );
  });
}

export default function ReviewCard({ question, userAnswer, questionNumber }: Props) {
  const isCorrect = userAnswer === question.answer;
  const unanswered = !userAnswer;

  const borderColor = unanswered
    ? 'border-gray-200'
    : isCorrect
    ? 'border-[#2e7d32]'
    : 'border-[#c62828]';

  const badgeStyle = unanswered
    ? 'bg-gray-100 text-gray-500'
    : isCorrect
    ? 'bg-green-100 text-[#2e7d32]'
    : 'bg-red-100 text-[#c62828]';

  return (
    <div className={`rounded-xl border-2 ${borderColor} bg-white p-5 space-y-3`}>
      {/* Header */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-400">Q{questionNumber}</span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
            question.type === 'structure'
              ? 'bg-[#1a3a5c]/10 text-[#1a3a5c]'
              : 'bg-teal-50 text-teal-700'
          }`}>
            {question.type === 'structure' ? 'Structure' : 'Written Expression'}
          </span>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${badgeStyle}`}>
          {unanswered ? 'Not answered' : isCorrect ? '✓ Correct' : '✗ Incorrect'}
        </span>
      </div>

      {/* Question content */}
      {question.type === 'structure' ? (
        <div className="space-y-2">
          <p className="text-gray-800 text-sm leading-relaxed">{question.text}</p>
          <div className="grid grid-cols-2 gap-1.5">
            {question.options.map(({ label, text }) => {
              const isOpt = label === question.answer;
              const isUserOpt = label === userAnswer;
              return (
                <div
                  key={label}
                  className={`text-xs px-2 py-1.5 rounded-lg flex gap-1.5 ${
                    isOpt
                      ? 'bg-green-50 border border-[#2e7d32] text-[#2e7d32]'
                      : isUserOpt && !isOpt
                      ? 'bg-red-50 border border-[#c62828] text-[#c62828]'
                      : 'bg-gray-50 border border-gray-100 text-gray-500'
                  }`}
                >
                  <strong>{label}.</strong> {text}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <p className="text-gray-800 text-sm leading-loose">
            {renderWESentence(question.segments, question.answer, userAnswer)}
          </p>
          {question.correction && question.correction !== '——' && (
            <p className="text-xs text-gray-500">
              Correction: <em className="text-[#2e7d32] font-semibold">{question.correction}</em>
            </p>
          )}
        </div>
      )}

      {/* Answer row */}
      <div className="flex gap-4 text-xs text-gray-500 pt-1 border-t border-gray-100">
        <span>Your answer: <strong className={userAnswer ? (isCorrect ? 'text-[#2e7d32]' : 'text-[#c62828]') : 'text-gray-400'}>{userAnswer ?? '—'}</strong></span>
        <span>Correct: <strong className="text-[#2e7d32]">{question.answer}</strong></span>
      </div>
    </div>
  );
}
