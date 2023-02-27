// TODO 줄세우기
const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 2
1 3
2 3
`
)
  .trim()
  .split('\n');
solution(input);

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);

  const answer = [];
  const child = Array.from({ length: N + 1 }, () => []);
  const in_degree = Array(N + 1).fill(0);

  for (let i = 1; i <= M; i++) {
    let [pre, nxt] = input[i].split(' ').map(Number);
    child[pre].push(nxt);
    ++in_degree[nxt];
  }

  let queue = [];
  for (let i = 1; i <= N; i++) {
    if (in_degree[i] == 0) queue.push(i);
  }

  let idx = 0;
  while (idx < queue.length) {
    let num = queue[idx];
    if (in_degree[num] == 0) {
      answer.push(num);
    }

    for (let i = 0; i < child[num].length; i++) {
      let nxt = child[num][i];
      in_degree[nxt]--;
      if (in_degree[nxt] == 0) queue.push(nxt);
    }

    idx++;
  }
  console.log(answer.join(' '));
}
