const fs = require('fs');
let input =
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : fs
        .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
        .toString()
        .trim()
        .split('\r\n');
solution(input);
function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const map = Array.from(Array(N + 1), () => Array(N + 1).fill(false));
  let answer = 0;

  for (let i = 1; i <= M; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    map[start][end] = true;
  }

  for (let middle = 1; middle <= N; middle++) {
    for (let start = 1; start <= N; start++) {
      for (let end = 1; end <= N; end++) {
        if (map[start][middle] && map[middle][end]) map[start][end] = true;
      }
    }
  }

  for (let start = 1; start <= N; start++) {
    let cnt = 0;
    for (let end = 1; end <= N; end++) {
      if (map[start][end] || map[end][start]) ++cnt;
    }
    if (cnt == N - 1) ++answer;
  }

  console.log(answer);
}
