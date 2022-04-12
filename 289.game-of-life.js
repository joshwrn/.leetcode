/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (oldBoard) {
  const board = [];

  for (let i = 0; i < oldBoard.length; i++) {
    let row = [];
    for (let j = 0; j < oldBoard[i].length; j++) {
      row.push(oldBoard[i][j]);
    }
    board.push(row);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let ones = 0;
      // check diagonal down
      if (board[i - 1]) {
        if (board[i - 1][j + 1]) {
          board[i - 1][j + 1] === 1 && ones++;
        }
        if (board[i - 1][j - 1]) {
          board[i - 1][j - 1] === 1 && ones++;
        }
      }
      // check diagonal up
      if (board[i + 1]) {
        if (board[i + 1][j + 1]) {
          board[i + 1][j + 1] === 1 && ones++;
        }
        if (board[i + 1][j - 1]) {
          board[i + 1][j - 1] === 1 && ones++;
        }
      }

      // check up
      if (board[i + 1] && board[i + 1][j]) {
        board[i + 1][j] === 1 && ones++;
      }

      // check down
      if (board[i - 1] && board[i - 1][j]) {
        board[i - 1][j] === 1 && ones++;
      }

      // check right
      if (board[i][j + 1]) {
        board[i][j + 1] === 1 && ones++;
      }

      //check left
      if (board[i][j - 1]) {
        board[i][j - 1] === 1 && ones++;
      }

      if (ones < 2) {
        oldBoard[i][j] = 0;
      } else if (ones > 3) {
        oldBoard[i][j] = 0;
      } else if (ones === 3) {
        oldBoard[i][j] = 1;
      }
    }
  }
};
// @lc code=end
