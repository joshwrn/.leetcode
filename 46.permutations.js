/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let temp = [];

  const back = () => {
    if (nums.length === 0) {
      res.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // push current number
      temp.push(nums[i]);
      // remove number from nums array
      nums.splice(i, 1);
      // recurse
      back();
      // add the number back before the loop repeats
      nums.splice(i, 0, temp.pop());
    }
  };

  back();

  return res;
};

// @lc code=end
