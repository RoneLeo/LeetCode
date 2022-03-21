/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  const strsArr = strs.sort((a,b) => (a.length - b.length))

  // console.log(strsArr)

const currentStr = strsArr[0]

  return strsArr.reduce((res, curr, index) => {
    console.log(curr,currentStr)
    if(!currentStr) return '';
    if(!curr.startsWith(currentStr)) {
      return currentStr.slice(0, -1)
    }else {
      return currentStr
    }
  }, '')
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))

// @lc code=end

