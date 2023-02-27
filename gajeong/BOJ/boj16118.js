const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 6
1 2 3
1 3 2
2 3 2
2 4 4
3 5 4
4 5 3
`
)
  .trim()
  .split('\n');

//
solution(input);
function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const Map = Array.from({ length: N + 1 }, () => Array(N + 1));
  for (let i = 1; i <= M; i++) {
    let [s, e, v] = input[i].split(' ').map(Number);
    Map[s][e] = v;
    Map[e][s] = v;
  }
  console.log(Map);
}
