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
  let stack = [];

  for (let i = 0; i < N; i++) {
    //첫번째 값 넣어줌
    stack.push(arr[i]);
    visited[i] = true;

    while (stack.length) {
      if (stack.length === N) {
        let sum = 0;
        for (let i = 0; i < N - 1; i++) sum += Math.abs(arr[i] - arr[i + 1]);
        result.push(sum);
      }
      for (let i = 0; i < N; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        stack.push(arr[i]);
      }
    }
  }

  let max = result.reduce(function (a, b) {
    return Math.max(a, b);
  });
  console.log(result);
};

solution(N, arr);
