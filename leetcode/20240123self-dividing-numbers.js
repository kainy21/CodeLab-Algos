/**
 * https://leetcode.com/problems/self-dividing-numbers/
 * 728. Self Dividing Numbers
 *  Easy Topics Companies
 * 
 * A self-dividing number is a number that is divisible by every digit it contains.
 * For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.
 * Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
 * 
 * Constraints: 1 <= left <= right <= 104

 * @param {number} left
 * @param {number} right
 * @return {number[]}
 * 
 * Example 1:
    Input: left = 1, right = 22
    Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

  * Example 2:
    Input: left = 47, right = 85
    Output: [48,55,66,77]
 */
var selfDividingNumbers = function (left, right) {
  let arr1 = [];
  let arr2 = [];
  for (i = left; i <= right; i++) {
    `${i}`.split("").forEach((u) => {
      if (i % u || u === "0") {
        return arr2.push(i);
      } else if (!arr1.includes(i)) arr1.push(i);
    });
  }

  return arr1.filter((i) => !arr2.includes(i));
};
// Runtime 233ms
// Beats 5.16% of users with JavaScript
