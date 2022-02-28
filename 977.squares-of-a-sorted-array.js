/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// square each number in array
// then resort them so the negatives are in order
/**
 * @param {Array<number>} arr
 * @return {Array<number>}
 */
const sortedSquares = (arr) => {
  if (arr[0] < 0 && arr.length > 1) {
    const newArr = new Array(arr.length).fill(0);
    // newInd is keeping track of what index were currently filling in on the newArr.
    let newInd = arr.length - 1;
    sort(arr, 0, arr.length - 1, newArr, newInd);
    return newArr;
  }

  square(arr);
  return arr;
};

const sort = (arr, left, right, newArr, newInd) => {
  while (left <= right) {
    if (arr[left] ** 2 > arr[right] ** 2) {
      newArr[newInd] = arr[left] ** 2;
      left++;
    } else {
      newArr[newInd] = arr[right] ** 2;
      right = right - 1;
    }
    newInd--;
  }
};

const square = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
};

// @lc code=end
