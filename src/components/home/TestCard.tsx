'use client';

import { TestData, TestMode } from '@/lib/types';

interface Props {
  test: TestData;
  mode: TestMode;
  onStart: () => void;
}

export default function TestCard({ test, mode, onStart }: Props) {
  const total = test.incomplete ? test.incompleteFrom! - 1 : 40;
  const structure = 15;
  const we = total - structure;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="bg-[#1a3a5c] px-5 py-4">
        <h2 className="text-white font-bold text-lg leading-tight">{test.title}</h2>
        <p className="text-blue-200 text-sm mt-0.5">{total} questions · 25 minutes</p>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex-1 flex flex-col gap-3">
        {/* Incomplete banner */}
        {test.incomplete && (
          <div className="flex items-start gap-2 rounded-lg bg-orange-50 border-l-4 border-[#e65100] px-3 py-2">
            <span className="text-[#e65100] font-bold text-sm mt-0.5">⚠</span>
            <p className="text-[#e65100] text-xs font-medium leading-snug">
              Written Expression Q26–40 not available. Score is out of {total}.
            </p>
          </div>
        )}

        {/* Section badges */}
        <div className="flex gap-2 flex-wrap">
          <span className="inline-flex items-center rounded-full bg-[#1a3a5c]/10 text-[#1a3a5c] text-xs font-semibold px-3 py-1">
            Structure · {structure}Q
          </span>
          <span className="inline-flex items-center rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">
            Written Expr · {we}Q
          </span>
        </div>

        {/* Mode indicator */}
        <p className="text-gray-400 text-xs">
          Mode: <span className="font-semibold text-gray-600 capitalize">{mode}</span>
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5">
        <button
          onClick={onStart}
          className="w-full rounded-xl bg-[#2e7d32] hover:bg-[#256427] active:bg-[#1b4d1f] text-white font-semibold py-3 transition-colors duration-150 cursor-pointer"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}
