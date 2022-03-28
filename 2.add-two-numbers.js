/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// you end up modifying the original object when you assign dummy to head.
// aka traverse the head node with dummy

var addTwoNumbers = function (l1, l2) {
  let head = new ListNode();
  let dummy = head;
  let carry = 0;

  while (l1 || l2 || carry) {
    if (!l1 && !l2) {
      dummy.next = new ListNode(carry);
      carry = 0;
    } else {
      if (!l1) l1 = new ListNode(0);
      if (!l2) l2 = new ListNode(0);
      const val = (l1.val + l2.val + carry).toString();

      const add = Number(val[val.length - 1]);
      carry = val >= 10 ? Number(val.slice(0, -1)) : 0;

      dummy.next = new ListNode(add);
      dummy = dummy.next;
      l1 = l1.next;
      l2 = l2.next;
    }
  }

  return head.next;
};

// RECURSIVE

// const rec = (l1, l2, head, carry) => {
//   if (!l1 && !l2) {
//     if (carry) head.next = new ListNode(carry);
//     return;
//   }
//   if (!l1) l1 = new ListNode(0);
//   if (!l2) l2 = new ListNode(0);
//   const val = (l1.val + l2.val + Number(carry)).toString();

//   const add = Number(val[val.length - 1]);
//   carry = val >= 10 ? val.slice(0, -1) : 0;

//   head.next = new ListNode(add);
//   return rec(l1.next, l2.next, head.next, carry);
// };

// @lc code=end
