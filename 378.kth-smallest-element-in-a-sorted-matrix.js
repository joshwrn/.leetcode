/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (matrix, k) {
  let arr = [];
  for (a of matrix) {
    for (b of a) {
      arr.push(b);
    }
  }
  let left = 0;
  let right = arr.length - 1;

  return partition(arr, k, left, right);
};

const partition = (arr, k, left, right) => {
  if (left > right) return -1;
  const n = arr.length;
  const chosenPivotIndex = getRandomInt(left, right);
  const pivotValue = arr[chosenPivotIndex];
  let tail = left;
  swap(arr, chosenPivotIndex, right);

  for (let i = left; i < right; i++) {
    if (arr[i] > pivotValue) {
      swap(arr, i, tail);
      tail++;
    }
  }

  swap(arr, right, tail);

  // its n-k because we are looking for the kth smallest element, so that will be its final spot once the array is sorted
  // ex: 8th smallest item is at index 1 because arr.length = 9 and 8 will be second to last. once sorted low to high, the 8th smallest item will be at index 1
  if (tail === n - k) {
    return arr[tail];
  } else if (tail > n - k) {
    // if the tail position is greater than the length - the kth position, then the kth largest is in the left partition
    right = tail - 1;
  } else {
    left = tail + 1;
  }
  return partition(arr, k, left, right);
};

const swap = (arr, first, second) => {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// [[1,2],[1,3]]\n3
// [[1,2],[1,3]]\n2 expected 1
// @lc code=end
