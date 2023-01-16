const rl = require('readline').createinterface({ input: process.stdin });
const arr = [];

rl.on('line', (l) => {
  arr.push(l);
}).on('close', () => {
  solution(arr);
});

const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString();

solution(stdin);

//예시 입력 시,
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : 'C:/project/Algorithms/gajeong/예제.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\r\n');
