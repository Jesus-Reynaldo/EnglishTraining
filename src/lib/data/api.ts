import { createClient } from '@/lib/supabase/client';
import { Question, TestData, OptionLabel } from '@/lib/types';

export async function fetchTests(): Promise<Omit<TestData, 'questions'>[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('tests').select('*').order('id');
  if (error) throw error;
  return data.map((t) => ({
    id: t.id,
    title: t.title,
    incomplete: t.incomplete ?? false,
    incompleteFrom: t.incomplete_from ?? undefined,
  }));
}

export async function fetchTestWithQuestions(testId: number): Promise<TestData> {
  const supabase = createClient();
  const [{ data: t, error: te }, { data: qs, error: qe }] = await Promise.all([
    supabase.from('tests').select('*').eq('id', testId).single(),
    supabase.from('questions').select('*').eq('test_id', testId).order('question_number'),
  ]);
  if (te) throw te;
  if (qe) throw qe;

  const questions: Question[] = qs.map((q) =>
    q.type === 'structure'
      ? { id: q.id, type: 'structure' as const, text: q.text!, options: q.options, answer: q.answer as OptionLabel }
      : { id: q.id, type: 'written_expression' as const, segments: q.segments, answer: q.answer as OptionLabel, correction: q.correction! }
  );

  return {
    id: t.id,
    title: t.title,
    incomplete: t.incomplete ?? false,
    incompleteFrom: t.incomplete_from ?? undefined,
    questions,
  };
}
