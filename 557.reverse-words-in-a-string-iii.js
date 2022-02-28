/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/* 
start left
*/

var reverseWords = function (s) {
  const n = s.length - 1;

  let left = 0,
    right = 0,
    space = null,
    newStr = '';

  while (right <= n) {
    if (s[right] === ' ' || right === n) {
      space = right;

      while (left <= right) {
        s[right] !== ' ' && (newStr += s[right]);
        right--;
      }

      space !== n && (newStr += ' ');

      [left, right] = [space + 1, space + 1];
    } else {
      right++;
    }
  }
  return newStr;
};

// @lc code=end
