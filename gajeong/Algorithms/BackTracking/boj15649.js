const fs = require('fs');
const { deflateSync } = require('zlib');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 1`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);

  const visit = Array(N + 1).fill(false);
  let ans = [];
  visit[0] = true;

  if (M === 1) {
    for (let i = 1; i <= N; i++) ans.push(i);
    console.log(ans.join('\n'));
  } else {
    for (let i = 1; i <= N; i++) {
      let stack = [i];
      for (let j = i + 1; j <= N + 1; j++) {
        if (stack.length === M) {
          ans.push(stack.join(' '));
          stack.pop();
        }
        stack.push(j);
      }
    }
    console.log(ans.join('\n'));
  }
};

solution(stdin);
