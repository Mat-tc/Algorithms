const fs = require('fs');
let input =
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : fs
        .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
        .toString()
        .trim()
        .split('\r\n');

function solution(input) {
  const n = Number(input[0]);
  const m = Number(input[1]);
  const map = Array.from({ length: n + 1 }, () => []);
  for (let i = 2; i < m + 2; i++) {
    let [start, end, cost] = input[i].split(' ').map(Number);
    map[start][end] = cost;
  }

  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      if (i == j) continue;
    }
  }

  console.log(map);
}

solution(input);
