import { NextRequest, NextResponse } from 'next/server'
import { fetchTestWithQuestions } from '@/lib/data/api'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const test = await fetchTestWithQuestions(Number(id))
  if (!test) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(test)
}
