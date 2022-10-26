const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7
pop
top
push 123
top
pop
top
pop
`
).split('\n');
const arr = stdin.map((el) => el.trim());

const solution = (input) => {};

solution(arr);
