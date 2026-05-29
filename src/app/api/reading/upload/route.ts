import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { OptionLabel } from '@/lib/types'

interface UploadPassage {
  title: string
  text: string
}

interface UploadOption {
  label: OptionLabel
  text: string
}

interface UploadQuestion {
  passageIndex: number
  text: string
  options: UploadOption[]
  answer: OptionLabel
}

interface UploadReadingTest {
  title: string
  passages: UploadPassage[]
  questions: UploadQuestion[]
}

export async function POST(req: NextRequest) {
  let body: UploadReadingTest

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { title, passages, questions } = body

  if (!title || !Array.isArray(passages) || !Array.isArray(questions)) {
    return NextResponse.json(
      { error: 'Body must include title, passages[], and questions[]' },
      { status: 400 }
    )
  }

  try {
    const test = await prisma.$transaction(async (tx) => {
      const createdTest = await tx.readingTest.create({ data: { title } })

      const createdPassages = await Promise.all(
        passages.map((p, i) =>
          tx.readingPassage.create({
            data: { testId: createdTest.id, orderIndex: i, title: p.title, text: p.text },
          })
        )
      )

      await Promise.all(
        questions.map((q, i) =>
          tx.readingQuestion.create({
            data: {
              testId: createdTest.id,
              passageId: createdPassages[q.passageIndex].id,
              orderIndex: i,
              text: q.text,
              options: JSON.parse(JSON.stringify(q.options)),
              answer: q.answer,
            },
          })
        )
      )

      return createdTest
    })

    return NextResponse.json({ id: test.id, title: test.title }, { status: 201 })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
