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
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  let res = 0;

  for (let i = 0; i < costs.length; i++) {
    if (i < costs.length / 2) {
      res += costs[i][0];
    } else {
      res += costs[i][1];
    }
  }

  return res;
};
// @lc code=end
