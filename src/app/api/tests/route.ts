import { NextResponse } from 'next/server'
import { fetchTests } from '@/lib/data/api'

export async function GET() {
  const tests = await fetchTests()
  return NextResponse.json(tests)
}
