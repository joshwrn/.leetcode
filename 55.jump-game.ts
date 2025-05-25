/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
export function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true
  }
  let right = nums.length - 1
  let left = right - 1
  let curJump = nums[left]
  while (left > 0) {
    curJump = nums[left] ?? 0
    if (curJump >= right - left) {
      right = left
    }
    --left
  }
  return (nums[left] ?? 0) >= right - left
}
// @lc code=end

/*
- had to look up general way to correctly do the problem but I still implemented it myself after seeing that i needed two pointers
*/

// original brute force solution:
export function canJumpBruteForce(nums: number[]): boolean {
  let currentIndex = 0
  const target = nums.length - 1
  while (currentIndex < target) {
    const currentToJump = nums[currentIndex]
    if (Number.isNaN(currentToJump) || currentToJump === undefined) {
      break
    }
    nums.splice(currentIndex, 1, NaN)
    let newIndex = currentToJump + currentIndex
    if (newIndex > target) {
      currentIndex = target
      break
    }
    while (Number.isNaN(nums[newIndex])) {
      --newIndex
    }
    currentIndex = newIndex
  }
  return currentIndex === target
}
