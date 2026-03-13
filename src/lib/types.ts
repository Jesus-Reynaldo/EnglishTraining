export type OptionLabel = 'A' | 'B' | 'C' | 'D';
export type TestMode = 'practice' | 'exam';

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
