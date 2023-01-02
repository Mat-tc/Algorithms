const rl = require('readline').createInterface({ input: process.stdin });
const arr = [];

rl.on('line', (l) => {
  arr.push(l);
}).on('close', () => {
  solution(arr);
});

function solution(input) {}

//예시 입력 시,
const fs = require('fs');
let input =
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : fs
        .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
        .toString()
        .trim()
        .split('\r\n');
