/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */


// var isPalindRome = 


// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function isPalindRome(str) {
    let len = str.length;
    let str1 = "";
    for (let i = len - 1; i >= 0; i--) {
      str1 += str[i];
    }
    return str1 == str;
  }

  if (!s) return '';
  if (isPalindRome(s)) return s;

  return s.split('').reduce((resStr, curr, index, arr) => {
    const strArr = [curr];
    for (let i = index + 1; i < arr.length; i++) {
      const str = s.substring(index, i + 1)
      if (isPalindRome(str)) {
        strArr.push(str)
      }
    }
    const currentLongest = strArr.length ? strArr.sort((a, b) => (a.length - b.length)).pop() : '';
    return currentLongest.length > resStr.length ? currentLongest : resStr
  }, '')
};



console.log('最终结果：', longestPalindrome("daomdukomcayjwgmmetypncdeixarhbectjcwftjjtwjrctixtrsehegwlfotpljeeqhntacfihecdjysgfmxxbjfeskvvfqdoedfxriujnoeteleftsjgdsagqvcgcdjbxgmguunhbjxyajutohgbdwqtjghdftpvidkbftqbpeahxbfyamonazvubzirhqseetaneptnpjbtrtitttxsyjckjvwtrmuwgidkofvobrwrffzrpnxbectsydbvswstfiqranjzhsebjnmprjoirqkgttahrivkcjtitdcpohwwerwgrdivqbltfnigavydxpmitttjjzyrmpaptkczzgnsovebvxezkkovgqegctxacvjfqwtiycnhartzczcgosiquhmdbljjzyrnmffcwnkyzytnsvyzayrieqyrfpxintbbiyrawxlguzaisedwabpzvevlejadztuclcpwvonehkhknicdksdcnjfaoeaqhcdkdtywilwewadcnaprcasccdcnvdgjdqirrsqwzhqqorlhbgpelpupdvuynzybcqkffnnpocidkkigimsa"))
// @lc code=end

