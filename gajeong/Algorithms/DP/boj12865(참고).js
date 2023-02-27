const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 7
6 13    
4 8    
1 0    
3 6
`
)
  .trim()
  .split('\n');

//
solution(input);
function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);
  let answer = 0;
  const B = [];
  for (let i = 1; i < 1 + N; i++) {
    B.push(input[i].split(' ').map(Number));
  }
  B.unshift(undefined);

  // * maxVSu[n][k] : n번까지의 물건들 중 몇 개를 골라,
  // * 그 무게 합이 k 이하인 경우들 각각의 가치 합 중 최댓값

  const maxVSum = [];
  for (let i = 0; i <= N; i++) {
    maxVSum.push(Array(K + 1).fill(0));
  }

  for (let n = 1; n <= N; n++) {
    const [weight, value] = B[n];

    for (let k = 0; k <= K; k++) {
      // 물건의 무게가 k 보다 클 때 ,,
      if (k < weight) {
        maxVSum[n][k] = maxVSum[n - 1][k];
      } else {
        maxVSum[n][k] = Math.max(
          maxVSum[n - 1][k],
          maxVSum[n - 1][k - weight] + value
        );
      }
    }
  }
  console.log(maxVSum[N][K]);

  console.log(answer);
}
