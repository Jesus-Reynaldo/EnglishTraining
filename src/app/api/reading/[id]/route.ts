import { NextRequest, NextResponse } from 'next/server'
import { fetchReadingTestWithData } from '@/lib/data/reading-api'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const test = await fetchReadingTestWithData(id)
  if (!test) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(test)
}
