/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (list) {
  if (!list) return list;
  let head = new ListNode(null, null);
  return rev(list, head);
};

// store head
// replace
// head.next = stored

const rev = (node, head) => {
  if (node === null) return head;
  if (head.val !== null) {
    let val = new ListNode(node.val, null);
    const prev = head;
    head = val;
    head.next = prev;
  } else {
    let val = new ListNode(node.val, null);
    head = val;
  }

  return rev(node.next, head);
};
// @lc code=end
