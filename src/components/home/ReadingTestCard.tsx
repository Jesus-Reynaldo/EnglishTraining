'use client';

import { TestMode } from '@/lib/types';

interface Props {
  test: { id: string; title: string };
  mode: TestMode;
  onStart: () => void;
}

export default function ReadingTestCard({ test, mode, onStart }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="bg-[#1a3a5c] px-5 py-4">
        <h2 className="text-white font-bold text-lg leading-tight">{test.title}</h2>
        <p className="text-blue-200 text-sm mt-0.5">50 questions · 55 minutes</p>
      </div>

      <div className="px-5 py-4 flex-1 flex flex-col gap-3">
        <div className="flex gap-2 flex-wrap">
          <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1">
            5 Passages
          </span>
          <span className="inline-flex items-center rounded-full bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1">
            50 Questions
          </span>
        </div>
        <p className="text-gray-400 text-xs">
          Mode: <span className="font-semibold text-gray-600 capitalize">{mode}</span>
        </p>
      </div>

      <div className="px-5 pb-5">
        <button
          onClick={onStart}
          className="w-full rounded-xl bg-[#2e7d32] hover:bg-[#256427] active:bg-[#1b4d1f] text-white font-semibold py-3 transition-colors duration-150 cursor-pointer"
        >
          Start Reading Test
        </button>
      </div>
    </div>
  );
}
