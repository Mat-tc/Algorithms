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
    if (stack.length == N) {
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        sum += Math.abs(stack[i] - stack[i + 1]);
      }
      return sum > max ? (max = sum) : '';
    }
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
