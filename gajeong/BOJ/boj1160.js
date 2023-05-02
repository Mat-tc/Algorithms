const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 4
1 2
3 4
1 1 1 1
1 2 1 2
2 1 2 1
2 2 2 2
`
)
  .trim()
  .split('\n');

//
solution(input);
function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const map = input.slice(1, N + 1).map((el) => el.split(' ').map(Number));

  //누적합 구하기
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (x > 0 && y > 0) {
        map[y][x] += map[y - 1][x] + map[y][x - 1] - map[y - 1][x - 1];
        continue;
      } else if (x > 0) {
        map[y][x] += map[y][x - 1];
        continue;
      } else if (y > 0) {
        map[y][x] += map[y - 1][x];
      }
    }
  }

  console.log(map);

  const answer = [];
  for (let t = 0; t < M; t++) {
    let [x1, y1, x2, y2] = input[N + 1 + t].split(' ').map(Number);
    let area = map[y2 - 1][x2 - 1];
    if (y2 - 1 > 0 && x1 - 1 > 0) area -= map[y2 - 1][x1 - 2];
    if (y1 - 1 > 0 && x2 - 1 > 0) area -= map[y1 - 2][x2 - 1];
    if (y1 - 1 > 0 && x1 - 1 > 0) area += map[y1 - 2][x1 - 2];
    answer.push(area);
  }
  console.log(answer.join('\n'));
}
