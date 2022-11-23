const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 3
10 10 15`
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
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let cnt = 0;

    for (let i = 0; i < N; i++) {
      cnt += parseInt(arr[N - i - 1] / mid);
      if (cnt > M) break;
    }

    if (M <= cnt) start = mid + 1;
    else end = mid - 1;
  }
  console.log(end);
};

solution(input);
