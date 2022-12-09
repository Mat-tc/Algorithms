const fs = require('fs');
const input =
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : fs
              .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
              .toString()
              .trim()
              .split('\n');

console.log(input);
