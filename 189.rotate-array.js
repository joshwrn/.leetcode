/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

/*
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4] 
*/

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// reverse all then split at k and reverse both sides
var rotate = function (arr, kth) {
  n = arr.length - 1;
  const k = kth % (n + 1);
  reverse(arr, 0, n);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n);
  return arr;
};

const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

// @lc code=end
