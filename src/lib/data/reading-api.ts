import { prisma } from '@/lib/prisma'
import { ReadingTestData, ReadingPassage, ReadingQuestion, OptionLabel } from '@/lib/types'

export async function fetchReadingTests(): Promise<Omit<ReadingTestData, 'questions' | 'passages'>[]> {
  const tests = await prisma.readingTest.findMany({ orderBy: { id: 'asc' } })
  return tests.map((t) => ({ id: t.id, title: t.title }))
}

export async function fetchReadingTestWithData(id: string): Promise<ReadingTestData> {
  const t = await prisma.readingTest.findUniqueOrThrow({
    where: { id },
    include: {
      passages: { orderBy: { orderIndex: 'asc' } },
      questions: { orderBy: { orderIndex: 'asc' } },
    },
  })

  const passages: ReadingPassage[] = t.passages.map((p) => ({
    id: p.id,
    title: p.title,
    text: p.text,
  }))

  const questions: ReadingQuestion[] = t.questions.map((q) => ({
    id: q.id,
    passageId: q.passageId,
    text: q.text,
    options: q.options as unknown as ReadingQuestion['options'],
    answer: q.answer as OptionLabel,
  }))

  return { id: t.id, title: t.title, passages, questions }
}
