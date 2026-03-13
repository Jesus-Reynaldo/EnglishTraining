'use client';

import { TestMode } from '@/lib/types';

interface Props {
  mode: TestMode;
  onChange: (mode: TestMode) => void;
}

const MODES: { value: TestMode; label: string; description: string }[] = [
  { value: 'practice', label: 'Practice', description: 'Immediate feedback after each answer' },
  { value: 'exam', label: 'Exam', description: 'Navigate freely, submit at the end' },
];

export default function ModeSelector({ mode, onChange }: Props) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
        Select Mode
      </p>
      <div className="flex gap-3 flex-wrap">
        {MODES.map(({ value, label, description }) => {
          const active = mode === value;
          return (
            <button
              key={value}
              onClick={() => onChange(value)}
              className={`flex-1 min-w-40 rounded-xl px-5 py-4 text-left border-2 transition-all duration-150 cursor-pointer
                ${active
                  ? 'bg-[#1a3a5c] border-[#1a3a5c] text-white shadow-md'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-[#1a3a5c]/40 hover:bg-gray-50'
                }`}
            >
              <span className="block font-bold text-base">{label}</span>
              <span className={`text-sm mt-0.5 block ${active ? 'text-blue-200' : 'text-gray-400'}`}>
                {description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
