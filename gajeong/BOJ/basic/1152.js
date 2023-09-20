const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : 'C:/project/Algorithms/gajeong/예제.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const word = input[0].trim().split(' ');

  if (word.length === 1 && word[0] === '') console.log(0);
  else console.log(word.length);
}

solution(input);
