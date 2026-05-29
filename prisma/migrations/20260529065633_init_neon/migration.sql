-- CreateTable
CREATE TABLE "test_sessions" (
    "id" TEXT NOT NULL,
    "test_id" INTEGER NOT NULL,
    "mode" TEXT NOT NULL,
    "answers" JSONB NOT NULL DEFAULT '{}',
    "score" INTEGER,
    "total" INTEGER,
    "completed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reading_tests" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "reading_tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reading_passages" (
    "id" TEXT NOT NULL,
    "test_id" TEXT NOT NULL,
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "reading_passages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reading_questions" (
    "id" TEXT NOT NULL,
    "test_id" TEXT NOT NULL,
    "passage_id" TEXT NOT NULL,
    "order_index" INTEGER NOT NULL DEFAULT 0,
    "text" TEXT NOT NULL,
    "options" JSONB NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "reading_questions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reading_passages" ADD CONSTRAINT "reading_passages_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "reading_tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reading_questions" ADD CONSTRAINT "reading_questions_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "reading_tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reading_questions" ADD CONSTRAINT "reading_questions_passage_id_fkey" FOREIGN KEY ("passage_id") REFERENCES "reading_passages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
