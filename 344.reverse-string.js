/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  for (let i = 0; i < right; i++) {
    [s[left], s[right]] = [s[right], s[left]];
    right--;
    left++;
  }
  return s;
};
// @lc code=end
