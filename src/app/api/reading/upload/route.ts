import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { OptionLabel } from '@/lib/types';

interface UploadPassage {
  title: string;
  text: string;
}

interface UploadOption {
  label: OptionLabel;
  text: string;
}

interface UploadQuestion {
  // passageIndex refers to the index in the passages array (0-based)
  passageIndex: number;
  text: string;
  options: UploadOption[];
  answer: OptionLabel;
}

interface UploadReadingTest {
  title: string;
  passages: UploadPassage[];
  questions: UploadQuestion[];
}

export async function POST(req: NextRequest) {
  let body: UploadReadingTest;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { title, passages, questions } = body;

  if (!title || !Array.isArray(passages) || !Array.isArray(questions)) {
    return NextResponse.json(
      { error: 'Body must include title, passages[], and questions[]' },
      { status: 400 }
    );
  }

  const supabase = await createClient();

  // 1. Insert test
  const { data: test, error: testError } = await supabase
    .from('reading_tests')
    .insert({ title })
    .select('id')
    .single();

  if (testError) return NextResponse.json({ error: testError.message }, { status: 500 });
  if (!test) return NextResponse.json({ error: 'Failed to create test' }, { status: 500 });

  // 2. Insert passages
  const { data: insertedPassages, error: passageError } = await supabase
    .from('reading_passages')
    .insert(
      passages.map((p, i) => ({
        test_id: test.id,
        order_index: i,
        title: p.title,
        text: p.text,
      }))
    )
    .select('id, order_index');

  if (passageError) return NextResponse.json({ error: passageError.message }, { status: 500 });
  if (!insertedPassages) return NextResponse.json({ error: 'Failed to insert passages' }, { status: 500 });

  // Map passageIndex → real passage id
  const passageIdByIndex: Record<number, string> = {};
  for (const p of insertedPassages) {
    passageIdByIndex[p.order_index] = p.id;
  }

  // 3. Insert questions
  const { error: questionError } = await supabase
    .from('reading_questions')
    .insert(
      questions.map((q, i) => ({
        test_id: test.id,
        passage_id: passageIdByIndex[q.passageIndex],
        order_index: i,
        text: q.text,
        options: q.options,
        answer: q.answer,
      }))
    );

  if (questionError) return NextResponse.json({ error: questionError.message }, { status: 500 });

  return NextResponse.json({ id: test.id, title }, { status: 201 });
}
