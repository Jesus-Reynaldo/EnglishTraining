'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { OptionLabel, ReadingTestData } from '@/lib/types';
import { fetchReadingTestWithData } from '@/lib/data/reading-api';

export default function ReadingReviewPage() {
  const params = useParams();
  const router = useRouter();
  const testId = params.testId as string;

  const [answers, setAnswers] = useState<Record<string, OptionLabel>>({});
  const [test, setTest] = useState<ReadingTestData | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem(`toefl_reading_answers_${testId}`);
    if (raw) {
      try { setAnswers(JSON.parse(raw)); } catch { setAnswers({}); }
    }
    fetchReadingTestWithData(testId)
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

  const totalCorrect = test.questions.filter((q) => answers[q.id] === q.answer).length;
  const total = test.questions.length;
  const pct = Math.round((totalCorrect / total) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#1a3a5c]">Reading Results</h2>
          <p className="text-gray-500 text-sm">{test.title}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => router.push(`/reading/${testId}`)}
            className="rounded-xl border-2 border-[#1a3a5c] text-[#1a3a5c] font-semibold px-5 py-2.5 hover:bg-[#1a3a5c] hover:text-white transition-colors cursor-pointer text-sm"
          >
            Retry
          </button>
          <button
            onClick={() => router.push('/')}
            className="rounded-xl bg-[#1a3a5c] text-white font-semibold px-5 py-2.5 hover:bg-[#14304f] transition-colors cursor-pointer text-sm"
          >
            ← Home
          </button>
        </div>
      </div>

      {/* Score card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#1a3a5c]">{totalCorrect}<span className="text-xl text-gray-400">/{total}</span></p>
            <p className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wide">Correct</p>
          </div>
          <div className="h-12 w-px bg-gray-100 hidden sm:block" />
          <div className="text-center">
            <p className="text-4xl font-bold text-[#2e7d32]">{pct}%</p>
            <p className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wide">Score</p>
          </div>
          <div className="flex-1" />
          <div className="text-sm text-gray-500">
            Reading Comprehension · {total} questions
          </div>
        </div>
      </div>

      {/* Question review */}
      <div>
        <h3 className="text-lg font-bold text-[#1a3a5c] mb-4">Question Review</h3>
        <div className="space-y-3">
          {test.questions.map((q, i) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.answer;
            const passage = test.passages.find((p) => p.id === q.passageId);

            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl border-2 p-5 ${
                  isCorrect ? 'border-green-200' : userAnswer ? 'border-red-200' : 'border-gray-100'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${
                    isCorrect ? 'bg-green-100 text-[#2e7d32]' : userAnswer ? 'bg-red-100 text-[#c62828]' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {isCorrect ? '✓' : userAnswer ? '✗' : '—'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-400 mb-1">Q{i + 1} · {passage?.title}</p>
                    <p className="text-sm font-medium text-gray-800 mb-3">{q.text}</p>
                    <div className="space-y-1">
                      {q.options.map((opt) => {
                        const isOptCorrect = opt.label === q.answer;
                        const isOptUser = opt.label === userAnswer;
                        return (
                          <div
                            key={opt.label}
                            className={`text-xs rounded-lg px-3 py-2 ${
                              isOptCorrect
                                ? 'bg-green-50 text-[#2e7d32] font-semibold'
                                : isOptUser && !isOptCorrect
                                ? 'bg-red-50 text-[#c62828]'
                                : 'text-gray-500'
                            }`}
                          >
                            <span className="font-bold mr-1">({opt.label})</span>{opt.text}
                            {isOptCorrect && ' ✓'}
                            {isOptUser && !isOptCorrect && ' ✗'}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
