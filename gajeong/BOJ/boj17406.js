const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 6 2
1 2 3 2 5 6
3 8 7 2 1 3
8 2 3 1 4 5
3 4 5 1 1 1
9 3 2 1 4 3
3 4 2
4 2 1`
)
  .trim()
  .split('\n');

function solution(input) {
  const [N, M, K] = input[0].split(' ').map(Number);
}

solution(input);
