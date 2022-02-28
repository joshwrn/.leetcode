/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = {};
  const arr = [];

  for (const letter of s) {
    if (!map[letter]) {
      map[letter] = { count: 1 };
    } else {
      map[letter].count = map[letter].count + 1;
    }
  }

  for (let key in map) {
    arr.push([key, map[key]]);
  }

  const sort = arr.sort((a, b) => b[1].count - a[1].count);

  let result = '';

  sort.forEach((arr) => {
    for (let i = 0; i < arr[1].count; i++) {
      result += arr[0];
    }
  });

  return result;
};
// @lc code=end
