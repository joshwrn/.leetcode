/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let node = null;

  if (list2.val > list1.val) {
    node = list1;
    node.next = mergeTwoLists(list1.next, list2);
  } else if (list2.val <= list1.val) {
    node = list2;
    node.next = mergeTwoLists(list1, list2.next);
  }
  return node;
};

// if (!l1 || !l2) return l1 || l2;

// if (l1.val < l2.val) {
//   l1.next = mergeTwoLists(l1.next, l2);
//   return l1;
// } else if (l1.val >= l2.val) {
//   l2.next = mergeTwoLists(l1, l2.next);
//   return l2;
// }

// @lc code=end
