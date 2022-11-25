const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10 5 2233
1601 90100 13009 802
50000000
301 7654321
210`
)
  .trim()
  .split('\n');

const main = (input) => {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    let temp = input[i].trim().split(' ');
    if (i === 0) temp.shift();

    temp.forEach((element) => {
      let el = element.split('').reverse();
      arr.push(Number(el.join('')));
    });
  }
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr.join('\n'));
};

main(input);
