/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start

const CONSTANT = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,

  'a': 4,
  'b': 9,
  'c': 40,
  'd': 90,
  'e': 400,
  'f': 900,
}
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  s = s.replace(/[\s]{0,}(CM)[\s]{0,}/, 'f');
  s = s.replace(/[\s]{0,}(CD)[\s]{0,}/, 'e')
  s = s.replace(/[\s]{0,}(XC)[\s]{0,}/, 'd')
  s = s.replace(/[\s]{0,}(XL)[\s]{0,}/, 'c')
  s = s.replace(/[\s]{0,}(IX)[\s]{0,}/, 'b')
  s = s.replace(/[\s]{0,}(IV)[\s]{0,}/, 'a')

  return s.split('').reduce((res, curr) => {
    return res + CONSTANT[curr]
  }, 0)
};

// console.log(romanToInt("III"))
// console.log(romanToInt("IV"))
// console.log(romanToInt("IX"))
// console.log(romanToInt("LVIII"))
// console.log(romanToInt("MCMXCIV"))



// @lc code=end

