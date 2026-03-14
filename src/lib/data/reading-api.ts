import { createClient } from '@/lib/supabase/client';
import { ReadingTestData, ReadingPassage, ReadingQuestion, OptionLabel } from '@/lib/types';

export async function fetchReadingTests(): Promise<Omit<ReadingTestData, 'questions' | 'passages'>[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from('reading_tests').select('*').order('id');
  if (error) throw error;
  return (data ?? []).map((t) => ({ id: t.id, title: t.title }));
}

export async function fetchReadingTestWithData(id: string): Promise<ReadingTestData> {
  const supabase = createClient();
  const [{ data: t, error: te }, { data: ps, error: pe }, { data: qs, error: qe }] =
    await Promise.all([
      supabase.from('reading_tests').select('*').eq('id', id).single(),
      supabase.from('reading_passages').select('*').eq('test_id', id).order('order_index'),
      supabase.from('reading_questions').select('*').eq('test_id', id).order('order_index'),
    ]);

  if (te) throw te;
  if (pe) throw pe;
  if (qe) throw qe;

  const passages: ReadingPassage[] = (ps ?? []).map((p) => ({
    id: p.id,
    title: p.title,
    text: p.text,
  }));

  const questions: ReadingQuestion[] = (qs ?? []).map((q) => ({
    id: q.id,
    passageId: q.passage_id,
    text: q.text,
    options: q.options,
    answer: q.answer as OptionLabel,
  }));

  return { id: t.id, title: t.title, passages, questions };
}
