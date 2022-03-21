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
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) return strs[0];
  const strsArr = strs.sort((a, b) => (a.length - b.length))
  const minLengthArr = strsArr[0].split('');
  let res = '';

  for (let i = 0; i < minLengthArr.length; i++) {
    res = strsArr[0].slice(0, i + 1);
    const isAllStartWith = strs.every(item => item.startsWith(res));
    if (!isAllStartWith) {
      return res.slice(0, -1);
    }
  }

  return res
};

// console.log(longestCommonPrefix(["ab", "a"]))
// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))

// @lc code=end

