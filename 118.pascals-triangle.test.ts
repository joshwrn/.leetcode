import { expect, test } from "vitest"
import { pascalsTriangle } from "./118.pascals-triangle"

const testCases = [
  { input: 5, output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] },
  { input: 1, output: [[1]] },
]

test(`118.pascals-triangle`, () => {
  for (const testCase of testCases) {
    console.log("starting", testCase.input)
    expect(pascalsTriangle(testCase.input).toString()).toBe(
      testCase.output.toString(),
    )
    console.log("passed: ", testCase.input)
  }
})
