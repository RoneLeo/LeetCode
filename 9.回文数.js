/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  const s = x + '';
  const str = s.split('').reverse().join('')
  return s === str
};
// @lc code=end

