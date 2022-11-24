const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4
-100 -2 -1 103`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const arr = input[1].split(' ').map(Number);

  //인덱스 값으로 관리함
  let start = 0;
  let end = arr.length - 1;
  let min = 2000000000;
  const min_idx = [start, end];
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      min_idx[0] = start;
      min_idx[1] = end;
    }
    if (sum == 0) break;
    else if (sum < 0) start += 1;
    else end -= 1;
  }

  console.log(arr[min_idx[0]], arr[min_idx[1]]);
};

solution(input);
