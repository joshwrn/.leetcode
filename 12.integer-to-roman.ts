/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
  const digits = num
    .toString()
    .split("")
    .map((s) => Number(s))

  let digitsLeft = digits.length
  let numerals = ""
  for (let index = 0; index < digits.length; index++) {
    const digit = digits[index] as number
    const standard = digit !== 4 && digit !== 9
    if (standard) {
      if (digit === 5) {
        numerals = numerals + getLetter(5, digitsLeft)
      } else if (digit < 5 && digit !== 5) {
        const letter = getLetter(1, digitsLeft)
        for (let i = 0; i < digit; i++) {
          numerals += letter
        }
      } else if (digit > 5) {
        numerals = numerals + getLetter(5, digitsLeft)
        const letter2 = getLetter(1, digitsLeft)
        for (let i = 0; i < digit - 5; i++) {
          numerals += letter2
        }
      }
    } else if (!standard) {
      const letter2 =
        digit === 4 ? getLetter(5, digitsLeft) : getLetter(1, digitsLeft + 1)
      numerals = numerals + getLetter(1, digitsLeft) + letter2
    }
    --digitsLeft
  }
  return numerals
}

const getLetter = (start: number, len: number) => {
  let num = start * Math.pow(10, len - 1)
  return letters[num as keyof typeof letters]
}

const letters = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
}
// @lc code=end

export { intToRoman }
/* 
Mistakes:
- It would have been easier to hard-code each combination of numerals instead of accounting for them inside the function.
*/
