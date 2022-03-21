/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */


// @lc code=start


const CONSTANT = [{
  str: 'IV',
  value: 4
}, {
  str: 'IX',
  value: 9
}, {
  str: 'XL',
  value: 40
}, {
  str: 'XC',
  value: 90
}, {
  str: 'CD',
  value: 400
}, {
  str: 'CM',
  value: 900
}]

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  if (num < 1 || num > 3999) return '';

  let res = [];
  const thround = parseInt(num / 1000);
  const hundred = parseInt(parseInt(num % 1000) / 100);
  const ten = parseInt(parseInt(num % 100) / 10);
  const unit = parseInt(parseInt(num % 10) / 1);

  if (thround > 0) {
    const arr = new Array(thround).fill('M');
    res = res.concat(arr)
  }

  if (hundred > 0) {
    let arr = [];
    if (hundred < 4) {
      arr = new Array(hundred).fill('C');
    } else if (hundred == 4) {
      arr = ['CD']
    } else if (hundred < 9) {
      arr = new Array(hundred - 5).fill('C');
      arr.unshift('D')
    } else if (hundred == 9) {
      arr = ['CM']
    }
    res = res.concat(arr)
  }

  if (ten > 0) {
    console.log('ten: ', ten)
    let arr = [];
    if (ten < 4) {
      arr = new Array(ten).fill('X');
    } else if (ten == 4) {
      arr = ['XL']
    } else if (ten < 9) {
      arr = new Array(ten - 5).fill('X');
      arr.unshift('L')
    } else if (ten == 9) {
      arr = ['XC']
    }
    res = res.concat(arr)
  }

  if (unit > 0) {
    let arr = [];
    if (unit < 4) {
      arr = new Array(unit).fill('I');
    } else if (unit == 4) {
      arr = ['IV']
    } else if (unit < 9) {
      arr = new Array(unit - 5).fill('I');
      arr.unshift('V')
    } else if (unit == 9) {
      arr = ['IX']
    }
    res = res.concat(arr)
  }
  return res.join('')
};

// console.log(intToRoman(3))
// console.log(intToRoman(4))
// console.log(intToRoman(9))
// console.log(intToRoman(58))
// console.log(intToRoman(1994))

// @lc code=end

