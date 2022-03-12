/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
  let start = new ListNode(0, head);
  let prev = start;
  let cur = head;
  while (cur && cur.next) {
    let next = cur.next.next;
    let sec = cur.next;

    sec.next = cur;
    cur.next = next;
    prev.next = sec;

    prev = cur;
    cur = next;
  }

  return head;
};

// @lc code=end
