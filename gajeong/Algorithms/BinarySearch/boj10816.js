const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const sang = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  const M = Number(input[2]);
  const card = input[3].split(' ').map(Number);

  let ans = [];
  const upper_idx = (target, len) => {
    let st = 0;
    let en = len;
    while (st < en) {
      let mid = parseInt((st + en) / 2);
      if (sang[mid] > target) en = mid; // > 인지, >= 인지에 따른.
      else st = mid + 1;
    }
    return st;
  };

  const lower_idx = (target, len) => {
    let st = 0;
    let en = len;
    while (st < en) {
      let mid = parseInt((st + en) / 2);
      if (sang[mid] >= target) en = mid;
      else st = mid + 1;
    }
    return st;
  };

  for (let i = 0; i < M; i++) {
    ans.push(upper_idx(card[i], N) - lower_idx(card[i], N));
  }

  console.log(ans.join(' '));
};

solution(input);
