const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 5
50 45 37 32 30
35 50 40 20 25
30 30 25 17 28
27 24 22 15 10`
)
  .trim()
  .split('\n');

/*
 */
const main = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const Map = [];
  const visited = Array.from(Array(N), () => Array(M).fill(-1));
  for (let i = 1; i <= N; i++) {
    Map.push(input[i].split(' ').map(Number));
  }

  //상우하좌
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  visited[0][0] = 1;
  const DP = (x, y, val, way) => {
    if (x < 0 || y < 0 || x > M - 1 || y > N - 1) return;
    if (Map[y][x] >= val && x != 0 && y != 0) return;
    if (visited[y][x] === -1) visited[y][x] = way;
    else visited[y][x] += way;
    for (let d = 0; d < 4; d++) {
      DP(x + dx[d], y + dy[d], Map[y][x], visited[y][x]);
    }
  };

  DP(0, 0, Map[0][0], 1);

  console.log(visited);
};

main(input);
