'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TestMode, TestData } from '@/lib/types';
import { fetchTests } from '@/lib/data/api';
import ModeSelector from '@/components/home/ModeSelector';
import TestCard from '@/components/home/TestCard';

export default function HomePage() {
  const [mode, setMode] = useState<TestMode>('practice');
  const [tests, setTests] = useState<Omit<TestData, 'questions'>[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchTests().then(setTests).catch(console.error);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#1a3a5c]">Choose a Test</h2>
        <p className="text-gray-500 mt-1 text-sm">
          5 complete tests · Structure Q1–15 + Written Expression Q16–40
        </p>
      </div>

      <ModeSelector mode={mode} onChange={setMode} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tests.map((test) => (
          <TestCard
            key={test.id}
            test={test as TestData}
            mode={mode}
            onStart={() => router.push(`/test/${test.id}?mode=${mode}`)}
          />
        ))}
      </div>
    </div>
  );
}
