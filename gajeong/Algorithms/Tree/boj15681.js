const fs = require('fs');
let input =
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : fs
        .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
        .toString()
        .trim()
        .split('\n');

solution(input);

function solution(input) {
  const [N, R, Q] = input[0].split(' ').map(Number);
  const node = [];

  //1 . 연결리스트로 만들기
  for (let i = 1; i <= N - 1; i++) {
    let [n1, n2] = input[i].split(' ').map(Number);
    if (!node[n1]) node[[n1]] = [];
    if (!node[n2]) node[[n2]] = [];
    node[n1].push(n2);
    node[n2].push(n1);
  }

  // 각 정점별 노드 레벨
  let visited = Array(N + 1).fill(false);
  let priority = Array(N + 1).fill(0);

  let queue = [R];
  let idx = 0;
  while (queue.length > idx) {
    let num = queue[idx];
    visited[num] = true;
    let child = node[num];
    for (let i = 0; i < child.length; i++) {
      if (visited[child[i]]) continue;
      priority[child[i]] = priority[num] + 1;
      queue.push(child[i]);
    }
    idx++;
  }

  const answer = [];
  const subTree = [];

  queue = [Q];
  idx = 0;
  while (queue.length > 0) {
    let num = queue.shift();
    let child = node[num];
    for (let k = 0; k < child.length; k++) {
      if (priority[child[k]] <= priority[num]) continue;
      queue.push(child[k]);
    }
    idx++;

    for (let i = 1; i <= N; i++) {
      queue = [i];
      idx = 0;
      while (queue.length > 0) {
        let num = queue.shift();
        let child = node[num];
        for (let k = 0; k < child.length; k++) {
          if (priority[child[k]] <= priority[num]) continue;
          queue.push(child[k]);
        }
        idx++;
      }
      subTree[i] = idx;
    }
  }

  for (let i = N; i < N + Q; i++) {
    answer.push(subTree[Number(input[i])]);
  }
  console.log(answer.join('\n'));
}
