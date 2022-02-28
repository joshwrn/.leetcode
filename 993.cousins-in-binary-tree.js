/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let foundX, foundY;

  const rec = (item, cur = 1, par) => {
    if (!item || (foundX && foundY)) return;
    if (item.val === y) {
      foundY = { val: item.val, depth: cur, par: par };
    }
    if (item.val === x) {
      foundX = { val: item.val, depth: cur, par: par };
    }
    rec(item.left, cur + 1, item);
    rec(item.right, cur + 1, item);
  };

  rec(root);

  return foundY.depth === foundX.depth && foundY.par !== foundX.par
    ? true
    : false;
};
// @lc code=end
