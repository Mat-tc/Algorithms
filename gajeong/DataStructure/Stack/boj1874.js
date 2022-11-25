const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8
4
3
6
8
7
5
2
1
`
).split('\n');
const arr = stdin.map((el) => el.trim());

const solution = (input) => {
  let stack = [];
  let index = 1;
  let ans = '';
  for (let i = 1; i <= parseInt(input[0]); i++) {
    stack.push(i);
    ans += '+\n';

    while (stack[stack.length - 1] === parseInt(input[index])) {
      stack.pop();
      ans += '-\n';
      index++;
    }
  }
  console.log(!stack.length ? ans : 'NO');
};

solution(arr);
