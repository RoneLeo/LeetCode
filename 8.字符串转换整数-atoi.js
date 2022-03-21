/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  const res = s.match(/^([-|+]?[0-9])\w*/g);
  const num = Array.isArray(res) && res[0] ? parseInt(res[0]) : 0
  if (num > (Math.pow(2, 31) - 1)) return Math.pow(2, 31) - 1
  if (num < Math.pow(-2, 31)) return Math.pow(-2, 31)
  return num
};

// console.log(myAtoi('42'))
// console.log(myAtoi('-91283472332'))
// console.log(myAtoi('4193 with words'))
// console.log(myAtoi('words and 987'))
// @lc code=end

