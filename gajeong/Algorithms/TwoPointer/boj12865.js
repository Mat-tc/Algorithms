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

  //무게를 기준으로 오름차순 정렬
  B.sort((a, b) => a[0] - b[0]);

  //투포인터 사용하기
  let end = 0;
  let start = 0;
  let sum = B[0][0];
  let value = B[0][1];

  while (end < N && start < N) {
    if (end == N - 1) {
      if (sum <= K) answer = value;
      break;
    }
    if (sum < K) {
      ++end;
      sum += B[end][0];
      value += B[end][1];
    } else {
      sum -= B[start][0];
      value -= B[start][1];
      ++start;
    }
    if (sum > K) continue;
    if (answer < value) answer = value;
  }

  console.log(answer);
}
