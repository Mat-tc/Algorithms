const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 0
0 0
0 0`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const [N, K] = input[0].split(' ').map(Number);

  const map = [];
  for (let i = 1; i <= N; i++) {
    map.push(input[i].split(' ').map(Number));
  }

  const visited = Array(N).fill(false);
  const time = Array(N).fill(-1);

  for (let middle = 0; middle < N; middle++) {
    for (let start = 0; start < N; start++) {
      for (let end = 0; end < N; end++) {
        if (start == middle || start == end || middle == end) continue;
        map[start][end] = Math.min(
          map[start][end],
          map[start][middle] + map[middle][end]
        );
      }
    }
  }

  visited[K] = true;

  let now = K;
  let answer = 0;
  while (true) {
    let min = 9999999;
    let idx = -1;
    for (let i = 0; i < N; i++) {
      if (visited[i]) continue;
      if (now == i) continue;
      if (map[now][i] < min) {
        min = map[now][i];
        idx = i;
      }
    }
    now = idx;
    answer += min;
    visited[now] = true;
    if (visited.every((status) => status == true)) break;
  }
  console.log(answer);
};

solution(input);
