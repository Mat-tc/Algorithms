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
  const [N, M] = input[0].split(' ').map(Number);
  const in_degree = Array(N + 1).fill(0);
  const visited = Array(N + 1).fill(false);
  const node = [];
  for (let i = 1; i <= M; i++) {
    let [pre, after] = input[i].split(' ').map(Number);
    if (!node[pre]) node[pre] = [];
    node[pre].push(after);
    in_degree[after] += 1;
    visited[pre] = true;
    visited[after] = true;
  }

  const stack = [];
  for (let i = 1; i <= N; i++) {
    if (in_degree[i] == 0 && visited[i]) {
      stack.push(i);
    }
  }

  const answer = [];
  for (let i = 0; i < stack.length; i++) {
    dfs(stack[i]);
  }

  //DFS 를 이용하면 된다.
  function dfs(num) {
    answer.push(num);
    let arr = node[num];
    if (!arr) {
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      in_degree[arr[i]] -= 1;
      if (in_degree[arr[i]] == 0) {
        dfs(arr[i]);
      }
    }
  }

  if (answer.length < N) {
    for (let i = 1; i <= N; i++) {
      if (visited[i] == false) answer.push(i);
    }
  }

  console.log(answer.join(' '));
}
