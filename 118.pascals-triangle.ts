/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const tri = [[1]]

  for (let row = 1; row < numRows; row++) {
    let curRow = []
    for (let cell = 0; cell <= row; cell++) {
      if (cell === 0 || cell === row) {
        curRow.push(1)
        continue
      }
      const sum = tri[row - 1]![cell - 1]! + tri[row - 1]![cell]!
      curRow.push(sum)
    }
    tri.push(curRow)
  }
  return tri
}
// @lc code=end

export { generate as pascalsTriangle }
