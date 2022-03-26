/*
 * @lc app=leetcode id=1029 lang=javascript
 *
 * [1029] Two City Scheduling
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  const diff = costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  let res = 0;

  for (let i = 0; i < diff.length; i++) {
    if (i < diff.length / 2) res += diff[i][0];
    if (i >= diff.length / 2) res += diff[i][1];
  }

  return res;
};
// @lc code=end
