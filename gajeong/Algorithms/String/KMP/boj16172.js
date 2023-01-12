const fs = require("fs");
let input = fs
  .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
  .toString()
  .trim()
  .split("\r\n");
solution(input);

function solution(input) {
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let str = input[0]
    .split("")
    .filter((el) => !nums.includes(el))
    .join("");

  let sub = input[1];

  console.log(findString(str, sub) ? 1 : 0);

  function findString(parent, pattern) {
    let parentSize = parent.length;

    let patternSize = pattern.length;

    let parentHash = 0;
    let patternHash = 0;

    for (let i = 0; i <= parentSize - patternSize; i++) {
      if (i == 0) {
        for (let j = 0; j < patternSize; j++) {
          parentHash += parent.codePointAt(j) * 7 ** (patternSize - j);
          patternHash += pattern.codePointAt(j) * 7 ** (patternSize - j);
        }
      }
      if (parentHash % 4567 == patternHash % 4567) {
        for (let j = i; j < i + patternSize; j++) {
          if (parent[j] != pattern[j - i]) break;
          if (j == i + patternSize - 1) return true;
        }
      }
      parentHash -= parent.codePointAt(i) * 7 ** patternSize;
      parentHash *= 7;
      parentHash += parent.codePointAt(i + patternSize) * 7;
    }
    return false;
  }
}
