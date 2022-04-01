/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let total = board.length * board[0].length;
  if (word.length > total) return false;

  let found = false;

  const rec = (row, column) => {
    if (found === true) return;
    if (row >= board.length || row < 0) return;
    if (column >= board[0].length || column < 0) return;

    if (board[row][column] === word[0]) {
      const temp = word.slice(0, 1);
      word = word.substring(1);

      let tile = board[row][column];
      board[row][column] = '*';

      if (word.length === 0) {
        found = true;
        return;
      }

      rec(row, column + 1);
      rec(row, column - 1);
      rec(row + 1, column);
      rec(row - 1, column);

      board[row][column] = tile;
      word = temp + word;
    }
  };

  for (let i = 0; i < board.length; i++) {
    if (found) return true;
    for (let j = 0; j < board[i].length; j++) {
      rec(i, j);
    }
  }

  return found;
};

// @lc code=end
