const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
((
))
())(()
`
).split('\n');

const arr = stdin.map((el) => el.trim());

// ( 이 나오면 +1 , ) 이면 -1
const solution = (input) => {
  for (let i = 1; i < parseInt(input[0]) + 1; i++) {
    let line = input[i].split('');
    let index = 0;
    let sum = 0;
    for (j = 0; j < line.length; j++) {
      line[j] === '(' ? (sum += 1) : (sum -= 1);
      if (sum < 0) break;
      index += 1;
    }
    //인덱스가 line의 길이만큼 도달하고, sum = 0 일때만 성공
    index === line.length && sum == 0 ? console.log('YES') : console.log('NO');
  }
};

solution(arr);
