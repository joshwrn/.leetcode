/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// return the index of the target number
// if it's not found return the index of where it should be
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let last = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      last = mid + 1;
      left = mid + 1;
    } else if (nums[mid] > target) {
      last = mid;
      right = mid - 1;
    }
  }
  return last >= 0 ? last : 0;
};
// @lc code=end
