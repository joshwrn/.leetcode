/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// recursive
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  return two(head, head.next.next);
};

const two = (slow, fast) => {
  if (!fast || !fast.next) return false;
  if (slow === fast) return true;

  return two(slow.next, fast.next.next);
};

// iterative

var hasCycleLoop = function (head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next.next;

  while (fast !== slow) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
// @lc code=end
