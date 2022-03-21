/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2);
  arr.sort((a, b) => {
    return a - b
  })

  if (arr.length % 2 == 0) {
    const mid = arr.length / 2
    return (arr[mid - 1] + arr[mid]) / 2
  } else {
    const mid = parseInt(arr.length / 2)
    return arr[mid]
  }

};

// console.log(findMedianSortedArrays([0,0], [0,0]))
// console.log(findMedianSortedArrays([1,3], [2]))
// console.log(findMedianSortedArrays([1,2], [3,4]))
// @lc code=end

