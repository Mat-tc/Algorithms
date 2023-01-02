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
  const [V, E] = input[0].split(' ').map(Number);
  const max = V * 10000 + 1;
  const map = Array.from(Array(V + 1), () => Array(V + 1).fill(max));

  for (let i = 1; i <= E; i++) {
    let [start, end, cost] = input[i].split(' ').map(Number);
    map[start][end] = cost;
  }
  for (let i = 1; i <= V; i++) {
    map[i][i] = 0;
  }

  for (let middle = 1; middle <= V; middle++) {
    for (let start = 1; start <= V; start++) {
      for (let end = 1; end <= V; end++) {
        if (start == middle || start == end || middle == end) continue;
        map[start][end] = Math.min(
          map[start][end],
          map[start][middle] + map[middle][end]
        );
      }
    }
  }
  let answer = max;

  for (let start = 1; start <= V; start++) {
    for (let end = 1; end <= V; end++) {
      if (start == end) continue;
      let length = map[start][end] + map[end][start];
      if (length < answer) answer = length;
    }
  }

  console.log(answer >= max ? -1 : answer);
}
