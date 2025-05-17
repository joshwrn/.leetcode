import { expect, test } from 'vitest'
import { intToRoman } from './12.integer-to-roman'

const testCases = [
  { input: 3749, output: 'MMMDCCXLIX' },
  { input: 58, output: 'LVIII' },
  { input: 1994, output: 'MCMXCIV' },
]

test(`integer-to-roman`, () => {
  for (const testCase of testCases) {
    expect(intToRoman(testCase.input)).toBe(testCase.output)
  }
})
