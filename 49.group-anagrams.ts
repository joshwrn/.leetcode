/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
export function groupAnagrams(strs: string[]): string[][] {
  const res: Record<string, string[]> = {}
  for (let index = 0; index < strs.length; index++) {
    const str = strs[index]
    if (!str) {
      res[0] ? res[0].push("") : (res[0] = [""])
      continue
    }
    let total = 1
    for (const s of str) {
      const code = s.charCodeAt(0) - 97
      const map = primeMap[code] ?? NaN
      total *= map
    }
    if (res[total]) {
      res[total]?.push(str)
    } else {
      res[total] = [str]
    }
  }
  const final = Object.values(res)
  return final
}

const primeMap = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
  79, 83, 89, 97, 101,
]
// @lc code=end

/* 
Mistakes:
- Had to look up best way to create a unique number
*/
