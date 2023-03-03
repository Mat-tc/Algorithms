// TODO 줄세우기
const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
10 -1
10 1 -1
4 1 -1
4 3 1 -1
3 3 -1
`
)
  .trim()
  .split('\n');
solution(input);

function solution(input) {
  const N = Number(input[0]);
  const Time = Array(N + 1);
  const in_degree = Array(N + 1).fill(0);
  const Order = Array(N + 1);

  for (let i = 1; i <= N; i++) {
    let line = input[i].split(' ').map(Number);
    Time[i] = line[0];
    in_degree[line[0]] = line.length - 2;
    Order[line[0]] = [...line.slice(1, in_degree[line[0]] + 1)];
  }
  

  for (let i = 1; i <= N; i++){
    if(in_degree[i] == 0 ) 
  }
  while()
}
