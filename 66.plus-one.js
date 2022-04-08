/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length - 1;
  for (let i = len; i >= 0; i--) {
    if (digits[i] + 1 === 10) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
// @lc code=end
