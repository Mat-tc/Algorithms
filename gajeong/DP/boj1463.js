const fs = require('fs');
const input = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `10`
)
  .trim()
  .split('\n');

/*
 */
const main = (input) => {
  let num = Number(input[0]);

  const arr = Array(num + 1).fill(0);

  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + 1;
    if (i % 2 == 0) arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    if (i % 3 == 0) arr[i] = Math.min(arr[i], arr[i / 3] + 1);
  }

  console.log(arr[num]);
};

main(input);
