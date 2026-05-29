import { NextResponse } from 'next/server'
import { fetchReadingTests } from '@/lib/data/reading-api'

export async function GET() {
  const tests = await fetchReadingTests()
  return NextResponse.json(tests)
}
