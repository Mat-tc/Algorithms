const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
    20 1 15 8 4 10`
).split("\n");

const N = Number(stdin[0]);
const arr = stdin[1].trim().split(" ").map(Number);

const solution = (N, arr) => {
  let visited = Array(N).fill(false);
  const result = [];

  for (let i = 0; i < N - 1; i++) {
    let stack = [arr[i]];
    visited[i] = true;
    let sum = backtracking(1, stack, visited, result);
    visited = Array(N).fill(false);
  }
  let max = result.reduce(function (a, b) {
    return Math.max(a, b);
  });
  console.log(max);
};

const backtracking = (cnt, stack, visited, result) => {
  if (cnt === N) {
    let sum = 0;
    for (let i = 0; i < N - 1; i++) sum += Math.abs(arr[i] - arr[i + 1]);
    result.push(sum);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    stack.push(arr[i]);
    backtracking(cnt + 1, stack, visited, result);
    stack.pop();
    visited[i] = false;
    cnt -= 1;
  }
};

solution(N, arr);
