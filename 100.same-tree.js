/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let not = true;
  const test = (node1, node2) => {
    if (!node1 && !node2) return;
    if (node1?.val !== node2?.val) {
      return (not = false);
    }
    test(node1.left, node2.left);
    test(node1.right, node2.right);
  };
  test(p, q);
  return not;
};
// @lc code=end
