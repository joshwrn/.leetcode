/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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

// My code
var middleNode = function (head) {
  const mid = findEnd(head, 1);
  return getNode(head, 1, mid);
};

const getNode = (node, i, mid) => {
  if (i !== mid && node.next !== null) {
    return getNode(node.next, ++i, mid);
  } else {
    return node;
  }
};

const findEnd = (node, i) => {
  if (node.next !== null) {
    return findEnd(node.next, ++i);
  } else {
    const half = i / 2;
    const mid = half % 1 !== 0 ? Math.ceil(half) : half + 1;
    return mid;
  }
};

/* 

Better Solution

Fast pointer will move two steps at a time while slow pointer move one step at a time. So when fast pointer reach at the end of the linked list, slow pointer will be at the middle of the linked list.

var middleNode = function(head) {
    let fast = slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

*/
// @lc code=end
