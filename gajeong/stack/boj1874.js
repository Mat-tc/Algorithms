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
  let status = Array(input[0] + 1).fill(true);
  let ans = [];
  let index = 0;
  for (let i = 1; i < input.length + 1; i++) {
    while (index != input[i]) {
      if (index < input[i] && status[index]) {
        index += 1;
        console.log('1', index, input[i]);
        ans.push('+');
      } else if (index > input[i] && status[index]) {
        ans.push('-');
        console.log('2', index, input[i]);
        status[index] = false;
        index -= 1;
      } else break;
    }
    console.log('3', index, input[i]);
    ans.push('-');
    status[index] = false;
    index -= 1;
  }
};

solution(arr);
