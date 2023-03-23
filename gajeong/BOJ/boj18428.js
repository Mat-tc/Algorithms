const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
X S X X T
T X S X X
X X X X X
X T X X X
X X T X X`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const N = Number(input.shift());
  let sPosition = [];
  const map = [];
  for (let i = 0; i < N; i++) {
    map.push(input[i].split(' '));
    for (let j = 0; j < N; j++) {
      if (map[i][j] == 'T') sPosition.push([j, i]);
    }
  }
  console.log(sPosition);

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
};

solution(input);
