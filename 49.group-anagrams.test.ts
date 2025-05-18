import { expect, test } from "vitest"
import { groupAnagrams } from "./49.group-anagrams"

const testCases = [
  {
    input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    output: [["bat"], ["eat", "tea", "ate"], ["tan", "nat"]],
  },
  {
    input: [
      "cab",
      "tin",
      "pew",
      "duh",
      "may",
      "ill",
      "buy",
      "bar",
      "max",
      "doc",
    ],
    output: [
      ["cab"],
      ["tin"],
      ["pew"],
      ["duh"],
      ["may"],
      ["ill"],
      ["buy"],
      ["bar"],
      ["max"],
      ["doc"],
    ],
  },
  { input: [""], output: [[""]] },
  { input: ["", ""], output: [["", ""]] },
  { input: ["a"], output: [["a"]] },
  { input: ["ac", "d"], output: [["d"], ["ac"]] },
  {
    input: [
      "eat",
      "tea",
      "tan",
      "ate",
      "nat",
      "bat",
      "ac",
      "bd",
      "aac",
      "bbd",
      "aacc",
      "bbdd",
      "acc",
      "bdd",
    ],
    output: [
      ["bdd"],
      ["bat"],
      ["nat", "tan"],
      ["ac"],
      ["ate", "eat", "tea"],
      ["bd"],
      ["aac"],
      ["bbd"],
      ["aacc"],
      ["bbdd"],
      ["acc"],
    ],
  },
]

test(`49.group-anagrams`, () => {
  for (const testCase of testCases) {
    const res = sortArr(groupAnagrams(testCase.input))
    const out = sortArr(testCase.output)

    expect(JSON.stringify(res)).toBe(JSON.stringify(out))
  }
})

const sortArr = (res: string[][]) => {
  const arrRes = []
  for (const outer of res) {
    arrRes.push(outer.sort())
  }
  const sorted = arrRes.sort()
  return sorted
}
