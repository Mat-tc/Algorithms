// 제출용

//예시 입력 시,
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : 'C:/project/Algorithms/gajeong/예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
