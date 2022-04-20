/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// using map
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const leftOver = target - nums[i];

    if (map[nums[i]] === undefined) {
      map[leftOver] = i;
    } else {
      return [map[nums[i]], i];
    }
  }
};

// brute force solution
var twoSum2 = function (nums, target) {
  let d = 0;
  while (d < nums.length) {
    for (let j = d + 1; j < nums.length; j++) {
      if (nums[j] + nums[d] === target) {
        return [d, j];
      }
    }
    d++;
  }
};
// @lc code=end
