const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
2 4 -10 4 -9`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const arr = input[1].split(' ').map(Number);
  const set = [...new Set(arr)];
  set.sort((a, b) => a - b);
  const len = set.length;
  const ans = [];

  const BS = (target) => {
    let start = 0;
    let end = len;

    while (start < end) {
      let mid = parseInt((start + end) / 2);
      if (set[mid] >= target) end = mid;
      else start = mid + 1;
    }
    return start;
  };

  for (let i = 0; i < N; i++) {
    ans.push(BS(arr[i]));
  }
  console.log(ans.join(' '));
};

solution(input);
