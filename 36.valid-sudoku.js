/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const store = {};
  for (let i = 0; i < board.length; i++) {
    const row = i + 1;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== '.') {
        const curNumber = board[i][j];
        const column = j + 1;
        let grid;

        const check = (col1, col2, r1, r2) => {
          if (column >= col1 && column <= col2 && row >= r1 && row <= r2)
            return true;
          else return false;
        };

        if (check(1, 3, 1, 3)) {
          grid = 1;
        } else if (check(4, 6, 1, 3)) {
          grid = 2;
        } else if (check(7, 9, 1, 3)) {
          grid = 3;
        } else if (check(1, 3, 4, 6)) {
          grid = 4;
        } else if (check(4, 6, 4, 6)) {
          grid = 5;
        } else if (check(7, 9, 4, 6)) {
          grid = 6;
        } else if (check(1, 3, 7, 9)) {
          grid = 7;
        } else if (check(4, 6, 7, 9)) {
          grid = 8;
        } else if (check(7, 9, 7, 9)) {
          grid = 9;
        }

        const stored = store[curNumber];

        if (stored) {
          if (
            stored.row.includes(row) ||
            stored.column.includes(column) ||
            stored.grid.includes(grid)
          ) {
            return false;
          } else {
            stored.row.push(row);
            stored.column.push(column);
            stored.grid.push(grid);
          }
        } else {
          store[curNumber] = { row: [row], column: [column], grid: [grid] };
        }
      }
    }
  }
  return true;
};
// @lc code=end
