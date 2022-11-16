const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7 2
2 1 2 3 1 2 3`
)
  .trim()
  .split('\n');

//Map 자료구조 이용해서 풀었음
// Map은 입력 순서를 기억함
const main = (input) => {
  const [N, MAX] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);
  const map = new Map();
  for (let i = 0; i < N; i++) {
    if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
    else map.set(arr[i], 1);
  }

  let ans = [];
  let sorted = new Map([...map].sort((a, b) => b[1] - a[1]));
  const length = sorted.size;

  const iterator = sorted.keys();

  for (let i = 0; i < length; i++) {
    let key = iterator.next().value;
    let value = map.get(key);
    for (let j = 0; j < value; j++) ans.push(key);
  }
  console.log(ans.join(' '));
};

main(input);
