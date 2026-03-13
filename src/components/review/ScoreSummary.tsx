'use client';

import { OptionLabel, TestData } from '@/lib/types';

interface Props {
  test: TestData;
  answers: Record<number, OptionLabel>;
}

function ScorePill({ label, correct, total }: { label: string; correct: number; total: number }) {
  const pct = total > 0 ? (correct / total) * 100 : 0;
  const color =
    pct >= 70 ? 'text-[#2e7d32] bg-green-50 border-green-200' :
    pct >= 50 ? 'text-yellow-700 bg-yellow-50 border-yellow-200' :
    'text-[#c62828] bg-red-50 border-red-200';

  return (
    <div className={`rounded-xl border px-5 py-4 text-center ${color}`}>
      <p className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-1">{label}</p>
      <p className="text-3xl font-bold">{correct}<span className="text-lg font-medium">/{total}</span></p>
      <p className="text-sm font-medium mt-0.5">{Math.round(pct)}%</p>
    </div>
  );
}

export default function ScoreSummary({ test, answers }: Props) {
  let structureCorrect = 0, structureTotal = 0;
  let weCorrect = 0, weTotal = 0;

  for (const q of test.questions) {
    const userAns = answers[q.id];
    if (q.type === 'structure') {
      structureTotal++;
      if (userAns === q.answer) structureCorrect++;
    } else {
      weTotal++;
      if (userAns === q.answer) weCorrect++;
    }
  }

  const totalCorrect = structureCorrect + weCorrect;
  const totalQ = structureTotal + weTotal;

  return (
    <div className="space-y-6">
      {test.incomplete && (
        <div className="flex items-start gap-2 rounded-xl bg-orange-50 border-l-4 border-[#e65100] px-4 py-3">
          <span className="text-[#e65100] font-bold text-lg">⚠</span>
          <p className="text-[#e65100] text-sm font-medium">
            Written Expression Q26–40 were not available in the source material.
            Score is out of {totalQ} questions.
          </p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3">
        <ScorePill label="Structure" correct={structureCorrect} total={structureTotal} />
        <ScorePill label="Written Expr." correct={weCorrect} total={weTotal} />
        <ScorePill label="Total" correct={totalCorrect} total={totalQ} />
      </div>
    </div>
  );
}
