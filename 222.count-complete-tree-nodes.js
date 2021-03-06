/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function (root) {
  let i = 0;
  const getNodes = (node) => {
    if (!node) return;
    if (node.val !== null) i++;
    getNodes(node.left);
    getNodes(node.right);
  };
  getNodes(root);
  return i;
};
// @lc code=end
