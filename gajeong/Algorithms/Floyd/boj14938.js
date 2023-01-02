//예시 입력 시,
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
  const [n, m, r] = input[0].split(' ').map(Number);
  const items = [0, ...input[1].split(' ').map(Number)];
  const map = Array.from(Array(n + 1), () => Array(n + 1).fill(m + 1));
  const answer = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    map[i][i] = 0;
  }

  //비용 삽입
  for (let i = 2; i < 2 + r; i++) {
    let [start, end, cost] = input[i].split(' ').map(Number);
    map[start][end] = cost;
    map[end][start] = cost;
  }

  //플로이드
  for (let middle = 1; middle <= n; middle++) {
    for (let start = 1; start <= n; start++) {
      for (let end = 1; end <= n; end++) {
        if (middle == start || start == end || end == middle) continue;
        map[start][end] = Math.min(
          map[start][end],
          map[start][middle] + map[middle][end]
        );
      }
    }
  }

  //정답
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (map[i][j] <= m) answer[i] += items[j];
    }
  }
  console.log(Math.max(...answer));
}
