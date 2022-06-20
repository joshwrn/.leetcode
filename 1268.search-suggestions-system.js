/*
 * @lc app=leetcode id=1268 lang=javascript
 *
 * [1268] Search Suggestions System
 */

// @lc code=start
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// binary search (two pointers)
var suggestedProducts = function (products, searchWord) {
  const results = []
  const sorted = products.sort()
  let p1 = 0
  let p2 = sorted.length
  for (let i = 0; i < searchWord.length; i++) {
    const currentWord = searchWord.slice(0, i + 1)
    const currentResults = []
    for (let j = p1; j < p2 && currentResults.length < 3; j++) {
      const currentProduct = sorted[j].slice(0, i + 1)
      if (currentProduct === currentWord) {
        currentResults.push(sorted[j])
      } else if (currentResults.length === 0) {
        p1++
      } else {
        p2--
      }
    }
    results.push(currentResults)
  }
  return results
}

// brute force
var suggestedProductsBrute = function (products, searchWord) {
  const results = []
  const sorted = products.sort()
  for (let i = 0; i < searchWord.length; i++) {
    const currentWord = searchWord.slice(0, i + 1)
    const currentResults = []
    for (let j = 0; j < sorted.length && currentResults.length < 3; j++) {
      const currentProduct = sorted[j].slice(0, i + 1)
      if (currentProduct === currentWord) {
        currentResults.push(sorted[j])
      }
    }
    results.push(currentResults)
  }
  return results
}

// @lc code=end
