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
  const T = Number(input.shift());

  //테스트케이스 만큼 반복
  let idx = 0;
  for (let i = 0; i < T; i++) {
    const [N, M] = input[idx].split(' ').map(Number);
    flight(N, M, input.slice(idx + 1, idx + 1 + M));
    idx += 1 + M;
  }
}

// N 국가  M 비행기의 종류
function flight(N, M, arr) {
  const visit = Array(N + 1).fill(false);
  const route = Array.from({ length: N + 1 }, () => []);
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let [n1, n2] = arr[i].split(' ').map(Number);
    route[n1].push(n2);
    route[n2].push(n1);
  }

  const queue = [1];
  let idx = 0;
  visit[1] = true;
  while (idx < queue.length) {
    let c = queue[idx];

    let neighbors = route[c];
    for (let i = 0; i < neighbors.length; i++) {
      if (visit[neighbors[i]]) continue;
      visit[neighbors[i]] = true;
      queue.push(neighbors[i]);
      answer += 1;
    }
    idx++;
  }
  console.log(answer);
}
