/*
 * @lc app=leetcode id=1663 lang=javascript
 *
 * [1663] Smallest String With A Given Numeric Value
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// start in reverse to get highest numbers first
var getSmallestString = function (n, k) {
  // prettier-ignore
  const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

  let str = [];
  let left = k - n;
  let numsLeft = n;
  while (numsLeft) {
    temp = left <= 25 ? left : 25;
    str.push(alpha[temp]);
    numsLeft = numsLeft - 1;
    left = left - temp;
  }

  return str.reverse().join('');
};
// @lc code=end
