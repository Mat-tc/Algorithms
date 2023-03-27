const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 2
1 2 1 2 1 2`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const [N, K] = input[0].split(' ').map(Number);
  const S = input[1].split(' ').map(Number);
  let zero = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] == 0) ++zero;
  }

  let step = 0;
  while (true) {
    //종료조건
    if (zero == K) return;
  }
};

solution(input);
