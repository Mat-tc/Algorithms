const fs = require('fs');
let input = fs
  .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
  .toString()
  .trim()
  .split('\r\n');
solution(input);

function solution(input) {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let str = input[0]
    .split('')
    .filter((el) => !nums.includes(el))
    .join('');

  let sub = input[1];
  let max_idx = sub.length - 1;
  let list = [];

  console.log(findString(str, sub) ? 1 : 0);

  function findString(parent, pattern) {
    let parentSize = parent.length;

    let patternSize = pattern.length;

    let parentHash = 0;
    let patternHash = 0;

    for (let i = 0; i <= parentSize - patternSize; i++) {
      if (i == 0) {
        for (let j = 0; j < patternSize; j++) {
          parentHash += parent.codePointAt(j) * 2 ** (patternSize - j);
          patternHash += pattern.codePointAt(j) * 2 ** (patternSize - j);
        }
      }
      if (parentHash == patternHash) {
        for (let j = i; j < i + patternSize; j++) {
          if (parent[j] != pattern[j - i]) break;
          if (j == i + patternSize - 1) return true;
        }
      }
      parentHash -= parent.codePointAt(i) * 2 ** patternSize;
      parentHash *= 2;
      parentHash += parent.codePointAt(i + patternSize) * 2;
    }
    return false;
  }
}
