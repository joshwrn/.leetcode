/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const getLevels = (node) => {
    if (!node) return;

    const left = node.left;
    const right = node.right;

    node.right = left;
    node.left = right;

    getLevels(node.left);
    getLevels(node.right);
  };

  getLevels(root);
  return root;
};
// @lc code=end
