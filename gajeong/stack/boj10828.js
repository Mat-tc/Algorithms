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

const solution = (input) => {
  const stack = [];
  const ans = [];
  for (i = 1; i < parseInt(input[0]) + 1; i++) {
    line = input[i].split(' ');
    switch (line[0]) {
      case 'push':
        stack.push(line[1]);
        break;
      case 'pop':
        stack.length > 0 ? ans.push(stack.pop()) : ans.push(-1);
        break;
      case 'size':
        ans.push(stack.length);
        break;
      case 'empty':
        stack.length === 0 ? ans.push(1) : ans.push(0);
        break;
      case 'top':
        stack.length > 0 ? ans.push(stack[stack.length - 1]) : ans.push(-1);
        break;
    }
  }
  console.log(ans.join('\n'));
};

solution(arr);
