/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  p = p.replace('.', '[a-z]')
  p = p.replace('*', '{0,}')
  const reg = new RegExp(`^${p}$`, 'g')
  return reg.test(s)
};

// console.log(isMatch("aa", "a"))
// console.log(isMatch("aa", "a*"))
// console.log(isMatch("ab", ".*"))

// @lc code=end

