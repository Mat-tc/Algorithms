const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
3 4
1 1
1 -1
2 2
3 3
`
)
  .trim()
  .split('\n');

const main = (input) => {
  input.shift();
  input.sort((a, b) => {
    const [x, y] = a.split(' ').map(Number);
    const [x2, y2] = b.split(' ').map(Number);
    if (x < x2) return -1;
    if (x > x2) return 1;
    if (x == x2 && y < y2) return -1;
  });
  console.log(input.join('\n'));
};

main(input);
