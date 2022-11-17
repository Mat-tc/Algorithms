const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
3 1 4 3 2`
)
  .trim()
  .split('\n');

/*
i 번째가 가장 빠르게 사용하기 위해, 
i - 1 번째 까지가 빠른 시간 내에 업무를 마쳐야함

*/
const main = (input) => {
  const arr = input[1].split(' ').map(Number);
  arr.sort((a, b) => a - b);
  const sum = [arr[0]];
  let ans = arr[0];
  for (let i = 1; i < Number(input[0]); i++) {
    sum.push(sum[i - 1] + arr[i]);
    ans += sum[i];
  }
  console.log(ans);
};

main(input);
