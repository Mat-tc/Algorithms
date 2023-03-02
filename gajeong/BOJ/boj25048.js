// 제출용

//예시 입력 시,
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : 'C:/project/Algorithms/gajeong/예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution(input) {
  //N : 스위치 갯수  , S : 스위치 번호와 비용, M: 컴퓨터 갯수
  const N = Number(input[0]);
  const M = Number(input[N + 1]);
  let total = 0;
  const S = [];
  for (let i = 1; i < 1 + N; i++) {
    let s = input[i].split(' ').map(Number);
    S.push(s);
    total += s[0] - 1;
  }

  if (M == 1) return console.log(0);
  if (total < M) return console.log(-1);

  S.unshift(undefined);
  const Map = Array.from({ length: N + 1 }, () => Array(M + 1).fill(99999));

  for (let n = 1; n <= N; n++) {
    let [count, cost] = S[n];
    count -= 1;

    for (let k = 1; k <= M; k++) {
      if (k <= count) {
        Map[n][k] = Math.min(Map[n - 1][k], cost);
      } else {
        Map[n][k] = Math.min(Map[n - 1][k], Map[n - 1][k - count] + cost);
      }
    }
  }
  console.log(Map[N][M]);
}
