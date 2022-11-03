const fs = require('fs');
const { join } = require('path');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const arr = [];
  hanoi(1, 3, N, arr);

  let ans = `${arr.length}`;
  arr.map((el) => (ans += `\n${el[0]} ${el[1]}`));
  console.log(ans);
};

const hanoi = (from, end, N, arr) => {
  if (N === 1) arr.push([from, end]);
  //목표가 3이면 보조는 2, 목표가 2면 보조는 3
  else {
    const empty = 6 - from - end;
    hanoi(from, empty, N - 1, arr);
    arr.push([from, end]);
    hanoi(empty, end, N - 1, arr);
  }
};

solution(stdin);
