/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// return the index of the target value
// get a pivot check if it's < or > the target
// if it's less than; increase the right bound
// if it's greater than; increase the left bound
// equal then return
// if the number is not in the array return -1
// getting a midpoint made it faster, instead of a random number.
// i'm assuming because it is already sorted.

var search = function (nums, target) {
  let right = nums.length - 1;
  let left = 0;
  while (left <= right) {
    const pivotIndex = Math.floor(left + (right - left) / 2);
    console.log(pivotIndex);
    if (nums[pivotIndex] < target) {
      left = pivotIndex + 1;
    } else if (nums[pivotIndex] > target) {
      right = pivotIndex - 1;
    } else if (nums[pivotIndex] === target) {
      return pivotIndex;
    }
  }
  return -1;
};

// [-1,0,3,5,9,12]\n2
// expected = -1

// @lc code=end
