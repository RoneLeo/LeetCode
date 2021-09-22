/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (!nums.length) return []
    let res = [0, 1]
    for (let i = 0; i < nums.length; i++) {
        res[0] = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                res[1] = j;
                return res
            }
        }
    }
    return []
};

console.log(twoSum([2, 7, 11, 15], 9))