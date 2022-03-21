/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start 
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0, j = height.length - 1;
  let max = 0;
  while (i < j) {
    let minHeight = Math.min(height[i], height[j]);
    max = Math.max(max, minHeight * (j - i));
    height[i] < height[j] ? i++ : j--
  }
  return max;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// console.log(maxArea([1,1]))


// @lc code=end

