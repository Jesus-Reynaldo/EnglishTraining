'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TestMode, TestData, Section } from '@/lib/types';
import { fetchTests } from '@/lib/data/api';
import { fetchReadingTests } from '@/lib/data/reading-api';
import ModeSelector from '@/components/home/ModeSelector';
import TestCard from '@/components/home/TestCard';
import ReadingTestCard from '@/components/home/ReadingTestCard';

export default function HomePage() {
  const [mode, setMode] = useState<TestMode>('practice');
  const [section, setSection] = useState<Section>('structure');
  const [tests, setTests] = useState<Omit<TestData, 'questions'>[]>([]);
  const [readingTests, setReadingTests] = useState<{ id: string; title: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchTests().then(setTests).catch(console.error);
    fetchReadingTests().then(setReadingTests).catch(console.error);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1a3a5c]">Choose a Test</h2>
        <p className="text-gray-500 mt-1 text-sm">
          {section === 'structure'
            ? '5 complete tests · Structure Q1–15 + Written Expression Q16–40'
            : '5 complete tests · Reading Comprehension · 5 passages · 50 questions'}
        </p>
      </div>

      {/* Section selector */}
      <div className="flex gap-2">
        <button
          onClick={() => setSection('structure')}
          className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer border-2 ${
            section === 'structure'
              ? 'bg-[#1a3a5c] text-white border-[#1a3a5c]'
              : 'bg-white text-[#1a3a5c] border-[#1a3a5c] hover:bg-[#1a3a5c]/5'
          }`}
        >
          Structure &amp; Grammar
        </button>
        <button
          onClick={() => setSection('reading')}
          className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer border-2 ${
            section === 'reading'
              ? 'bg-[#1a3a5c] text-white border-[#1a3a5c]'
              : 'bg-white text-[#1a3a5c] border-[#1a3a5c] hover:bg-[#1a3a5c]/5'
          }`}
        >
          Reading Comprehension
        </button>
      </div>

      <ModeSelector mode={mode} onChange={setMode} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {section === 'structure'
          ? tests.map((test) => (
              <TestCard
                key={test.id}
                test={test as TestData}
                mode={mode}
                onStart={() => router.push(`/test/${test.id}?mode=${mode}`)}
              />
            ))
          : readingTests.map((test) => (
              <ReadingTestCard
                key={test.id}
                test={test}
                mode={mode}
                onStart={() => router.push(`/reading/${test.id}?mode=${mode}`)}
              />
            ))}
      </div>
    </div>
  );
}
