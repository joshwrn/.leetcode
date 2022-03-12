/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
var deleteDuplicates = function (head) {
  let start = new ListNode(0, head);
  let cur = head;
  while (cur && cur.next) {
    let next = cur.next.next;
    let sec = cur.next;

    if (cur.val === sec.val) {
      cur.next = next;
    } else {
      cur = cur.next;
    }
  }

  return start.next;
};
// @lc code=end
