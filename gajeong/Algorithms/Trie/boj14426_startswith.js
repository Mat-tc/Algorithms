const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : 'C:/project/Algorithms/gajeong/예제.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\r\n');

let strs = input.slice(1).sort();
console.log(strs);
let ans = 0;
for (let i = 0; i < strs.length; i++)
  if (strs[i].indexOf(strs[i - 1]) === 0) ans++;

console.log(ans);
