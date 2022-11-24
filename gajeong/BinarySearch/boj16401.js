const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 10
1 2 3 4 5 6 7 8 9 10`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const [M, N] = input[0].split(' ').map(Number);
  const arr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let start = 1;
  let end = arr[N - 1];
  let mid = 0;

  while (start + 1 < end) {
    mid = parseInt((start + end) / 2);
    let cnt = 0;

    for (let i = 0; i < N; i++) {
      cnt += parseInt(arr[N - i - 1] / mid);
      if (cnt > M) break;
    }

    if (cnt >= M) start = mid;
    else end = mid;
  }
  console.log(start);
};

solution(input);
