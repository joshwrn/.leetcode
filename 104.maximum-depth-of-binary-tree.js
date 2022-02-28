/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;
  const getDepth = (node, m = 1) => {
    if (!node) return;
    if (m > max) {
      max = m;
    }
    getDepth(node.left, m + 1);
    getDepth(node.right, m + 1);
  };
  getDepth(root);
  return max;
};
// @lc code=end
