/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const trim = s.replace(/\s+/g, ' ').trim().split('');
  console.log(trim);
  for (let i = trim.length - 1; i >= 0; i--) {
    console.log(i, trim[i]);
    if (trim[i] === ' ') {
      return trim.length - 1 - i;
    }
  }
  return trim.length;
};
// @lc code=end
