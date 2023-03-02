const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 40 50
50 30
20 40
`
)
  .trim()
  .split('\n');

//
solution(input);
function solution(input) {
  let answer = 0;
  const [N, L, R] = input[0].split(' ').map(Number);
  const Map = [];
  for (let i = 1; i <= N; i++) {
    Map.push(input[i].split(' ').map(Number));
  }
  let sum = 0;
  const BFS = (x, y) => {
    // 방문처리
    let area = [];
    visited[y][x] = true;
    sum += Map[y][x];
    area.push([x, y]);
    const dx = [1, 0, -1, 0];
    const dy = [0, -1, 0, 1];
    for (let d = 0; d < 4; d++) {
      let toX = x + dx[d];
      let toY = y + dy[d];
      if (toX < 0 || toY < 0 || toX > N - 1 || toY > N - 1) continue;
      if (visited[toY][toX]) continue;
      if (
        Math.abs(Map[y][x] - Map[toY][toX]) >= L &&
        Math.abs(Map[y][x] - Map[toY][toX]) <= R
      ) {
        let a = BFS(toX, toY);
        area = [...area, ...a];
      }
    }
    return area;
  };

  let n = 5;
  while (true) {
    let status = false;
    visited = Array.from({ length: N }, () => Array(N).fill(false));
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (visited[y][x]) continue;
        let division = BFS(x, y);
        if (division.length > 1) {
          status = true;
          let avg = parseInt(sum / division.length);
          for (let i = 0; i < division.length; i++) {
            Map[division[i][1]][division[i][0]] = avg;
          }
        }
        sum = 0;
      }
    }
    if (!status) break;
    ++answer;
  }
  console.log(answer);
}
