const fs = require('fs');

const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
    20 1 15 8 4 10`
).split('\n');

const N = Number(stdin[0]);
const arr = stdin[1].trim().split(' ').map(Number);

const solution = (N, arr) => {
  let visited = Array(N).fill(false);
  let stack = [];
  let max = 0;

  const dfs = () => {
    // 종료조건
    if (stack.length == N) {
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        sum += Math.abs(stack[i] - stack[i + 1]);
      }
      return sum > max ? (max = sum) : '';
    }
    // i 가 증가했기 때문에, 재귀를 돌고 다시 돌아온다고 하더라도 i+1 을 다음으로 넣음
    // 이를 통해 완전 탐색 가능
    for (let i = 0; i < N; i++) {
      if (visited[i]) continue;
      stack.push(arr[i]);
      visited[i] = true;
      dfs();
      visited[i] = false;
      stack.pop();
    }
  };
  dfs();
  console.log(max);
};

solution(N, arr);
