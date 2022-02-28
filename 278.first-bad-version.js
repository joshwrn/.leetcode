/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    let lastBad = 0;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      const check = isBadVersion(mid);
      if (check === true) {
        right = mid - 1;
        lastBad = mid;
      } else if (check === false) {
        left = mid + 1;
        lastBad = mid + 1;
      }
    }
    return lastBad;
  };
};
// @lc code=end

/*
    Mistakes:
    I was returning when left and right were equal but the while loop was supposed to go until left <= right, which means it needed one extra loop to get the correct last bad version.
*/
