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
  const visited = Array.from(Array(N), () => Array(M).fill(false));
  for (let i = 1; i <= N; i++) {
    Map.push(input[i].split(' ').map(Number));
  }

  //상우하좌
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  let count = 0;
  //뒤에서부터 앞으로
  const dfs = (x, y, val) => {
    if (x < 0 || y < 0 || x > M - 1 || y > N - 1) return;
    if (Map[y][x] <= val) return;
    if (visited[y][x]) return;
    if (x == 0 && y == 0) {
      count++;
      return;
    }

    visited[y][x] = true;

    for (let d = 0; d < 4; d++) {
      dfs(x + dx[d], y + dy[d], Map[y][x]);
    }
    visited[y][x] = false;
  };

  dfs(M - 1, N - 1, 0);
  console.log(count);
};

main(input);
