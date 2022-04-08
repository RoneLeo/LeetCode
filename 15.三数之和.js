/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  if (len < 3) return [];

  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    // a去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let l = i + 1, r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) { l++; continue };
      if (sum > 0) { r--; continue };
      res.push([nums[i], nums[l], nums[r]])
      // b c 去重 
      while (l < r && nums[l] === nums[++l]);
      while (l < r && nums[r] === nums[--r]);
    }
  }
  return res;
};

// console.log('答案是: ', threeSum([-1, 0, 1, 2, -1, -4]))
// console.log( '答案是: ', threeSum([1,2,-2,-1]))
// console.log( '答案是: ', threeSum([0,7,-4,-7,0,14,-6,-4,-12,11,4,9,7,4,-10,8,10,5,4,14,6,0,-9,5,6,6,-11,1,-8,-1,2,-1,13,5,-1,-2,4,9,9,-1,-3,-1,-7,11,10,-2,-4,5,10,-15,-4,-6,-8,2,14,13,-7,11,-9,-8,-13,0,-1,-15,-10,13,-2,1,-1,-15,7,3,-9,7,-1,-14,-10,2,6,8,-6,-12,-13,1,-3,8,-9,-2,4,-2,-3,6,5,11,6,11,10,12,-11,-14]))

// @lc code=end

