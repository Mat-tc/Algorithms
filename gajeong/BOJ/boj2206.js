const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6 4
0100
1110
1000
0000
0111
0000`
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
