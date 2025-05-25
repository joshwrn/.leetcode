import { expect, test } from "vitest"
import { canJump } from "./55.jump-game"

const testCases = [
  { input: [2, 3, 1, 1, 4], output: true },
  { input: [3, 2, 1, 0, 4], output: false },
  { input: [2, 0], output: true },
  { input: [2, 5, 0, 0], output: true },
  { input: [1, 2, 3], output: true },
  { input: [0], output: true },
  { input: [1, 2, 0, 1], output: true },
  { input: [0, 1], output: false },
  { input: [0, 2, 3], output: false },
]

test(`jump-game`, () => {
  for (const testCase of testCases) {
    console.log("starting", testCase.input)
    expect(canJump(testCase.input)).toBe(testCase.output)
    console.log("passed: ", testCase.input)
  }
})
