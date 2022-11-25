const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
10
20
15
25
10
20`
)
  .trim()
  .split('\n');

/*
 */
const main = (input) => {
  console.log(arr[num]);
};

main(input);
