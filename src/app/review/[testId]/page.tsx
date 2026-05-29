'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { OptionLabel, TestData } from '@/lib/types';
import ScoreSummary from '@/components/review/ScoreSummary';
import ReviewCard from '@/components/review/ReviewCard';

export default function ReviewPage() {
  const params = useParams();
  const router = useRouter();
  const testId = Number(params.testId);

  const [answers, setAnswers] = useState<Record<number, OptionLabel>>({});
  const [test, setTest] = useState<TestData | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem(`toefl_answers_${testId}`);
    if (raw) {
      try { setAnswers(JSON.parse(raw)); } catch { setAnswers({}); }
    }

    fetch(`/api/tests/${testId}`)
      .then((r) => r.json())
      .then(setTest)
      .catch(() => setTest(null))
      .finally(() => setLoaded(true));
  }, [testId]);

  if (!loaded) {
    return <div className="text-gray-400 text-sm text-center py-16">Loading results...</div>;
  }

  if (!test) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">Test not found.</p>
        <button onClick={() => router.push('/')} className="mt-4 text-[#1a3a5c] font-semibold underline cursor-pointer">
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#1a3a5c]">Results</h2>
          <p className="text-gray-500 text-sm">{test.title}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => router.push(`/test/${testId}`)}
            className="rounded-xl border-2 border-[#1a3a5c] text-[#1a3a5c] font-semibold px-5 py-2.5 hover:bg-[#1a3a5c] hover:text-white transition-colors cursor-pointer text-sm"
          >
            Retry Test
          </button>
          <button
            onClick={() => router.push('/')}
            className="rounded-xl bg-[#1a3a5c] text-white font-semibold px-5 py-2.5 hover:bg-[#14304f] transition-colors cursor-pointer text-sm"
          >
            ← Home
          </button>
        </div>
      </div>

      <ScoreSummary test={test} answers={answers} />

      <div>
        <h3 className="text-lg font-bold text-[#1a3a5c] mb-4">Question Review</h3>
        <div className="space-y-3">
          {test.questions.map((q, i) => (
            <ReviewCard
              key={q.id}
              question={q}
              userAnswer={answers[q.id]}
              questionNumber={i + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
