/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;

  const strArr = s.split('');
  const gap = 2 * (numRows - 1);

  //step1: 计算这个二维数组最大有多少列
  const ArrLength = Math.ceil(s.length / gap) * (numRows - 1);
  //step2:初始化一个 ArrLength * numRows 的二维数组
  const resArr = new Array(numRows).fill().map(() => { return new Array(ArrLength).fill('') });

  strArr.forEach((item, index) => {
    const chart = item;
    const listIndex = parseInt(index / gap);
    const rowIndex = parseInt(index % gap);
    let i = 0, j = 0;
    if (rowIndex < numRows) {
      i = rowIndex;
      j = listIndex * (numRows - 1);
    } else {
      i = gap - rowIndex;
      j = listIndex * (numRows - 1) + (numRows - 1 - i)
    }
    resArr[i][j] = chart;
  })

  return resArr.reduce((res, curr) => {
    return res + curr.join('')
  }, '')
};

// console.log(convert('PAYPALISHIRING', 3))
// console.log(convert('PAYPALISHIRING', 4))
// console.log(convert('A', 1))

// @lc code=end

