/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let p1 = 0;
  let p2 = 0;
  let p3 = nums.length - 1;

  const swap = (a, b) => {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  };

  while (p2 <= p3) {
    if (nums[p2] === 0) {
      swap(p1, p2);
      p2++;
      p1++;
    } else if (nums[p2] === 1) {
      p2++;
    } else if (nums[p2] === 2) {
      swap(p3, p2);
      p3--;
    }
  }

  return nums;
};

// only 2 pointers
var sortColors1 = function (nums) {
  let l1 = -1;
  let l2 = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (l1 === l2) {
        [nums[i], nums[l2 + 1]] = [nums[l2 + 1], nums[i]];
      } else {
        const store1 = nums[l1 + 1];
        const store2 = nums[l2 + 1];
        nums[l1 + 1] = 0;
        nums[l2 + 1] = store1;
        i !== l2 + 1 ? (nums[i] = store2) : null;
      }
      l1++;
      l2++;
    } else if (nums[i] === 1) {
      if (nums[l2 + 1] !== 0) {
        [nums[i], nums[l2 + 1]] = [nums[l2 + 1], nums[i]];
      }
      l2++;
    }
  }

  return nums;
};
