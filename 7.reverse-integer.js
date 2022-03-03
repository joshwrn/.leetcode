/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return x;

  let neg = false;
  const arr = x.toString().split('');
  if (arr[0] === '-') {
    arr.shift();
    neg = true;
  }

  const rev = arr.reverse();

  let checking = true;
  while (checking) {
    if (rev[0] === '0') {
      rev.shift();
    }
    if (rev[0] !== '0') {
      checking = false;
    }
  }

  let ans;
  if (neg) {
    rev.unshift('-');
    ans = rev.join('');
  } else {
    ans = rev.join('');
  }

  if (ans < Math.pow(2, 31) * -1 || ans > Math.pow(2, 31) - 1) return 0;
  return ans;
};
// @lc code=end
