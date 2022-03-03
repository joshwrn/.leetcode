/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// goes from [0] to [1] but there's a new 0 on [0]

var moveZeroes = function (arr) {
  const n = arr.length - 1;
  let left = 0;
  let right = n;

  // traverse array
  while (left < right) {
    // move the 0

    if (arr[left] === 0) {
      arr.splice(left, 1);
      arr.push(0);

      --right;
      --left;
    }

    ++left;
  }
};

/*
no splice
var moveZeroes = function (arr) {
  const n = arr.length - 1;
  let last = 0;
  let right = n;
  let found = false;
  // traverse array
  while (last < right) {
    // move the 0
    for (let i = last; i < right; i++) {
      if (arr[i] === 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        if (i + 1 === right) {
          --right;
          found = true;
        }
      }
    }

    if (found === false) {
      last = last + 1;
    } else {
      found = false;
    }
  }
};
*/
// @lc code=end
