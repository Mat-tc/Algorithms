const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1
5 3 6
0 2
1 2
2 2
3 2
4 2
4 0`
)
  .trim()
  .split('\n');

// * 섬갯수 구하기 문제 => BFS 가 더 편할듯
function solution(input) {
  const T = Number(input.shift());
  const answer = [];
  let j = 0;
  for (let t = 0; t < T; t++) {
    let [M, N, K] = input[0 + j].split(' ').map(Number);
    let baechu = [];
    for (let i = 1 + j; i <= K + j; i++) {
      baechu.push(input[i].split(' ').map(Number));
    }
    answer.push(BFS(M, N, K, baechu));
    j += K + 1;
  }
  console.log(answer.join('\n'));
}

//가로 M 새로 N
function BFS(M, N, K, baechu) {
  const map = Array.from(Array(N), () => Array(M).fill(0));
  baechu.forEach((el) => {
    let [x, y] = el;
    map[y][x] = 1;
  });
  const visited = Array.from(Array(N), () => Array(M).fill(false));
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < M; i++) {
      let queue = [];
      let idx = 0;
      if (visited[j][i] == false && map[j][i] == 1) {
        queue.push([i, j]);
        ++cnt;
        visited[j][i] = true;
        //BFS 의 시작
        while (idx < queue.length) {
          let [x, y] = queue[idx];

          const dx = [1, 0, -1, 0];
          const dy = [0, -1, 0, 1];
          for (let d = 0; d < 4; d++) {
            if (
              y + dy[d] < 0 ||
              x + dx[d] < 0 ||
              x + dx[d] > M - 1 ||
              y + dy[d] > N - 1
            )
              continue;
            if (map[y + dy[d]][x + dx[d]] && !visited[y + dy[d]][x + dx[d]]) {
              queue.push([x + dx[d], y + dy[d]]);
              visited[y + dy[d]][x + dx[d]] = true;
            }
          }
          idx++;
        }
      }
    }
  }

  return cnt;
}

solution(input);
