/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];
  let temp = [];

  const back = (curSum) => {
    if (curSum === target) {
      res.push([...temp]);
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      if (temp.length === 0 || candidates[i] >= temp[temp.length - 1]) {
        if (candidates[i] + curSum <= target) {
          temp.push(candidates[i]);
          curSum += candidates[i];

          back(curSum);

          curSum -= temp[temp.length - 1];
          temp.pop();
        }
      }
    }
  };

  back(0);

  return res;
};

// @lc code=end
