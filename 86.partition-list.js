/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */

// Iterative Version
var partition = function (head, x) {
  let less = new ListNode(0);
  let greater = new ListNode(0);

  let dummy = head;

  let lessDummy = less;
  let greaterDummy = greater;

  while (dummy) {
    const temp = new ListNode(dummy.val);
    if (dummy.val < x) {
      lessDummy.next = temp;
      lessDummy = lessDummy.next;
    } else if (dummy.val >= x) {
      greaterDummy.next = temp;
      greaterDummy = greaterDummy.next;
    }
    dummy = dummy.next;
  }
  lessDummy.next = greater.next;

  return less.next;
};

// Recursive Version
var partitionRecursion = function (head, x) {
  let less = new ListNode(0);
  let greater = new ListNode(0);

  let dummy = head;

  const rec = (l, r) => {
    if (!dummy) {
      l.next = greater.next;
      return;
    }
    const temp = new ListNode(dummy.val);
    if (dummy.val < x) {
      l.next = temp;
      dummy = dummy.next;
      rec(l.next, r);
    } else if (dummy.val >= x) {
      r.next = temp;
      dummy = dummy.next;
      rec(l, r.next);
    }
  };

  rec(less, greater);

  return less.next;
};

// @lc code=end
