//예시 입력 시,
const fs = require('fs');
let input = fs
  .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
  .toString()
  .trim()
  .split('\r\n');
solution(input);

function solution(input) {
  let idx = -1;
  const answer = [];
  const arr = [];
  for (let i = 1; i <= Number(input[0]); i++) {
    let num = Number(input[i]);
    arr.push(num);
    idx++;
    arr.sort((a, b) => a - b);
    answer.push(arr[Math.floor(idx / 2)]);
  }

  console.log(answer.join('\n'));
}
