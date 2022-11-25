const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `15
    push 1
    push 2
    front
    back
    size
    empty
    pop
    pop
    pop
    size
    empty
    pop
    push 3
    empty
    front
`
).split('\n');
const arr = stdin.map((el) => el.trim());

const solution = (input) => {
  let ans = '';
  let q = [];
  let head = 0,
    tail = 0;
  for (let i = 1; i <= parseInt(input[0]); i++) {
    let line = input[i].split(' ');
    switch (line.shift()) {
      case 'push':
        q.push(parseInt(line.shift()));
        tail += 1;
        break;
      case 'pop':
        if (tail - head == 0) ans += '-1\n';
        else {
          ans += `${q[head]}\n`;
          head++;
        }
        break;
      case 'size':
        ans += `${tail - head}\n`;
        break;
      case 'empty':
        tail - head == 0 ? (ans += `1\n`) : (ans += '0\n');
        break;
      case 'front':
        if (tail - head == 0) ans += '-1\n';
        else {
          ans += `${q[head]}\n`;
        }
        break;
      case 'back':
        if (tail - head == 0) ans += '-1\n';
        else {
          ans += `${q[tail - 1]}\n`;
        }
        break;
    }
  }
  console.log(ans);
};

solution(arr);
