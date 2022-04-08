/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length;
  if (len < 3) return [];

  nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < len - 2; i++) {
    let l = i + 1, r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      const diff1 = Math.abs(res - target);
      const diff2 = Math.abs(sum - target);
      if (diff2 == 0) return sum;
      if (diff2 < diff1) {
        res = sum;
      }
      if (sum < target) { l++; continue };
      if (sum > target) { r--; continue };
      return target;
    }
  }
  return res;

};

console.log(threeSumClosest([-1, 2, 1, -4]))

// @lc code=end

