/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;
  rec(root.left, root.right);
  return root;
};

const rec = (left, right) => {
  if (!left || !right) return;
  left.next = right;
  rec(left.left, left.right);
  rec(left.right, right.left);
  rec(right.left, right.right);
};
// @lc code=end
