/**
 * EXAMPLE FILE — Copy this to `tests.ts` and replace with your own questions.
 *
 * Structure:
 *   - Questions 1–15:  Structure (multiple choice, 4 options A–D, blank to fill)
 *   - Questions 16–40: Written Expression (underlined options in a sentence)
 *
 * Helpers:
 *   t(content)         → plain text segment
 *   o(label, content)  → clickable underlined option segment
 */

import { TestData, Segment, OptionLabel } from '@/lib/types';

function t(content: string): Segment {
  return { type: 'text', content };
}

function o(label: OptionLabel, content: string): Segment {
  return { type: 'option', content, label };
}

export const TESTS: Record<number, TestData> = {
  1: {
    id: 1,
    title: 'Example Test One',
    questions: [
      // ── STRUCTURE (Q1–15) ────────────────────────────────────────────
      // Sentence with a blank (______). The student picks the option that fills it correctly.
      {
        id: 1, type: 'structure',
        text: '______ range in color from pale yellow to bright orange.',
        options: [
          { label: 'A', text: 'Canaries which' },
          { label: 'B', text: 'Canaries' },
          { label: 'C', text: 'That canaries' },
          { label: 'D', text: 'Canaries that are' },
        ],
        answer: 'B',
      },
      {
        id: 2, type: 'structure',
        text: '______ of precious gems is determined by their hardness, color, and brilliance.',
        options: [
          { label: 'A', text: 'The valuable' },
          { label: 'B', text: 'It is the value' },
          { label: 'C', text: 'It is valuable' },
          { label: 'D', text: 'The value' },
        ],
        answer: 'D',
      },
      // Add questions 3–15 following the same pattern...

      // ── WRITTEN EXPRESSION (Q16–40) ──────────────────────────────────
      // A full sentence where four words/phrases are underlined (options A–D).
      // The student picks the one that contains a grammatical error.
      {
        id: 16, type: 'written_expression',
        //        ┌─ option A ──┐         ┌─ option B ──┐                              ┌─ option C ─┐       ┌── option D ──┐
        segments: [o('A','Light'), t(' can '), o('B','travels'), t(' from the Sun to the Earth '), o('C','in'), t(' eight minutes and twenty '), o('D','seconds'), t('.')],
        answer: 'B',
        correction: 'travel',
      },
      {
        id: 17, type: 'written_expression',
        segments: [t('Every human '), o('A','typically'), t(' '), o('B','have'), t(' twenty-three pairs of chromosomes in '), o('C','most'), t(' '), o('D','cells'), t('.')],
        answer: 'B',
        correction: 'has',
      },
      // Add questions 18–40 following the same pattern...
    ],
  },

  // Add more tests following the same structure:
  // 2: { id: 2, title: 'Example Test Two', questions: [...] },
};
