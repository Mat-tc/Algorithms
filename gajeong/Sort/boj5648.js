const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
100 
0
100000000000
10`
)
  .trim()
  .split('\n');

const main = (input) => {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    let temp = input[i].trim().split(' ');
    if (i === 0) temp.shift();

    temp.forEach((element) => {
      let el = element.split('').reverse().join('');
      arr.push(Number(el));
    });
  }
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr.join('\n'));
};

main(input);
