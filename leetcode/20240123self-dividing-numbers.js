/**
 * https://leetcode.com/problems/self-dividing-numbers/
 * @param {number} left
 * @param {number} right
 * @return {number[]}
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
