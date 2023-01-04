const fs = require('fs');
let input = fs
  .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
  .toString()
  .trim()
  .split('\r\n');
solution(input);
function solution(input) {
  const [N, M, X] = input[0].split(' ').map(Number);
  const max = 100 * N;
  const map = Array.from(Array(N + 1), () => Array(N + 1).fill(max));

  for (let i = 1; i <= M; i++) {
    let [start, end, cost] = input[i].split(' ').map(Number);
    map[start][end] = cost;
  }

  for (let i = 1; i <= N; i++) {
    map[i][i] = 0;
  }

  for (let middle = 1; middle <= N; middle++) {
    for (let start = 1; start <= N; start++) {
      for (let end = 1; end <= N; end++) {
        if (start == middle || middle == end) continue;
        map[start][end] = Math.min(
          map[start][end],
          map[start][middle] + map[middle][end]
        );
      }
    }
  }
  const dist = [];
  for (let i = 1; i <= N; i++) {
    dist.push(map[X][i] + map[i][X]);
  }

  console.log(Math.max(...dist));
}
