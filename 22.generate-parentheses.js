/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // current parenthesis combo
  const stack = [];
  // final result with all combos
  const res = [];

  const backtrack = (open, closed) => {
    console.log('stack:', stack.toString(), 'res:', res.toString());
    console.log('open:', open, 'closed:', closed);
    if (open === n && closed === n) {
      // once both are equal to n push the stack to res
      res.push(stack.join(''));
      console.log('return');
      // returns from current stack
      return;
    }
    // if open is less than n
    if (open < n) {
      // add open bracket
      stack.push('(');
      // go down the line and add another parenthesis and increment open
      backtrack(open + 1, closed);
      // remove from that bracket afterwards
      stack.pop();
    }
    // if closed is less than open
    if (closed < open) {
      // add closed bracket
      stack.push(')');
      // go down the line and add another parenthesis and increment closed
      backtrack(open, closed + 1);
      // remove that bracket afterwards
      stack.pop();
    }
  };
  backtrack(0, 0);

  return res;
};
// @lc code=end
