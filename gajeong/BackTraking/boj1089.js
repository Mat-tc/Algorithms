const fs = require('fs');
const { isSharedArrayBuffer } = require('util/types');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
    20 1 15 8 4 10`
).split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].trim().split(' ').map(Number);
  let max = 0;

  for (let i = 0; i < 2; i++) {
    const isUsed = Array(N).fill(false);
    const stack = [arr[i]];
    isUsed[i] = true;

    while (stack.length) {
      // N 개의 숫자가 모두 정렬되었을때,
      if (stack.length === N) {
      }
    }
  }
};

solution(stdin);
