const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 20
4 42 40 26 46`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const [N, target] = input[0].split(' ').map(Number);
  const arr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let min = 0;
  let max = arr[arr.length - 1];
  let mid = 0;

  // TTTFF 인 경우의 문제는 T에서 F로 전환하는 순간에 답이 있다는 것
  // min + 1 < max를 통해 전환하는 순간 캐치  (좀 헷깔리지 ?)
  while (min + 1 < max) {
    mid = parseInt((min + max) / 2);
    let sum = 0;
    for (let i = 0; i < N; i++) {
      if (arr[i] > mid) sum += arr[i] - mid;
    }

    if (sum >= target) min = mid;
    else max = mid;
  }

  console.log(min);
};

solution(input);
