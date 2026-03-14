'use client';

import { ReadingPassage } from '@/lib/types';

interface Props {
  passage: ReadingPassage;
}

export default function ReadingPassageView({ passage }: Props) {
  const paragraphs = passage.text.split('\n\n').filter(Boolean);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h3 className="text-sm font-semibold text-[#1a3a5c] uppercase tracking-wide mb-4 pb-3 border-b border-gray-100">
        Reading Passage
      </h3>
      <div className="overflow-y-auto flex-1 pr-1">
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          {paragraphs.map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
