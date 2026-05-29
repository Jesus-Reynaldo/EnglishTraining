import { TestData } from '@/lib/types'
import { TESTS } from './tests'

export async function fetchTests(): Promise<Omit<TestData, 'questions'>[]> {
  return Object.values(TESTS).map(({ questions: _, ...t }) => t)
}

export async function fetchTestWithQuestions(testId: number): Promise<TestData | null> {
  return TESTS[testId] ?? null
}
