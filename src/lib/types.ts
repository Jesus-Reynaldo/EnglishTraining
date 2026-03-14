export type OptionLabel = 'A' | 'B' | 'C' | 'D';
export type TestMode = 'practice' | 'exam';
export type Section = 'structure' | 'reading';

export interface StructureOption {
  label: OptionLabel;
  text: string;
}

export interface StructureQuestion {
  id: number;
  type: 'structure';
  text: string;
  options: StructureOption[];
  answer: OptionLabel;
}

export interface Segment {
  type: 'text' | 'option';
  content: string;
  label?: OptionLabel;
}

export interface WrittenExpressionQuestion {
  id: number;
  type: 'written_expression';
  segments: Segment[];
  answer: OptionLabel;
  correction: string;
}

export type Question = StructureQuestion | WrittenExpressionQuestion;

export interface TestData {
  id: number;
  title: string;
  questions: Question[];
  incomplete?: boolean;
  incompleteFrom?: number;
}

export interface TestSession {
  id?: string;
  testId: number;
  mode: TestMode;
  answers: Record<number, OptionLabel>;
  completedAt?: string;
  score?: number;
  total?: number;
}

export interface ScoreBreakdown {
  structureCorrect: number;
  structureTotal: number;
  weCorrect: number;
  weTotal: number;
  totalCorrect: number;
  totalQuestions: number;
}

// Reading Comprehension types

export interface ReadingOption {
  label: OptionLabel;
  text: string;
}

export interface ReadingQuestion {
  id: string;
  text: string;
  options: ReadingOption[];
  answer: OptionLabel;
  passageId: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  text: string;
}

export interface ReadingTestData {
  id: string;
  title: string;
  passages: ReadingPassage[];
  questions: ReadingQuestion[];
}

export interface ReadingTestSession {
  testId: string;
  mode: TestMode;
  answers: Record<string, OptionLabel>;
  currentIndex: number;
  isComplete: boolean;
}
