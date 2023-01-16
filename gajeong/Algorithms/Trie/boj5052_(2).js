const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : 'C:/project/Algorithms/gajeong/예제.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\r\n');

let idx = 1;
const T = Number(input[0]);
const answer = [];
for (let i = 0; i < T; i++) {
  let n = Number(input[idx]);
  let strs = input.slice(1 + idx, 1 + idx + n);
  strs.sort();

  for (let k = 1; k < n; k++) {
    let min =
      strs[k - 1].length < strs[k].length ? strs[k - 1].length : strs[k].length;
    if (strs[k - 1].slice(0, min) == strs[k].slice(0, min)) {
      answer.push('NO');
      break;
    }
  }
  if (!answer[i]) answer.push('YES');
  idx += n + 1;
}

console.log(answer.join('\n'));
