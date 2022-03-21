/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const s = x + '';
  const flag = s.startsWith('-') ? '-' : '';
  const res = s.split('').filter(item => item != '-').reverse().join('');
  const num = flag ? 0 - parseInt(res) : parseInt(res) ;
  return num > (Math.pow(2, 31) - 1) || num < Math.pow(-2, 31) ? 0 : num 
};

// console.log(reverse(123))
// console.log(reverse(-123))
// console.log(reverse(120))
// console.log(reverse(0))


// @lc code=end

