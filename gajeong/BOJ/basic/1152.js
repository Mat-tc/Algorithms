'use strict';
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : 'C:/project/Algorithms/gajeong/예제.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.trim());

function solution(input) {
  const answer = [];
  for (let i = 0; i < input.length - 1; i++) {
    const data = input[i].split('');
    let status = palindrome(data);
    status ? answer.push('yes') : answer.push('no');
  }

  console.log(answer.join('\n'));
}

function palindrome(data) {
  let [head, tail] = [0, data.length - 1];
  while (head <= tail) {
    if (data[head] != data[tail]) break;
    head += 1;
    tail -= 1;
  }

  if (head > tail) return true;
  else return false;
}

solution(input);
