const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `99997 99999`
).split('\n');
const arr = stdin.map((el) => el.trim());

const solution = (input) => {
  input = input[0].split(' ');
  const n = Number(input.shift());
  const k = Number(input.shift());

  if (k <= n) return n - k;

  let visited = Array(100000 + 1).fill(-1);
  let ans = 0;
  let queue = [n];
  visited[n] = 0;
  while (true) {
    let head = queue.shift();
    if (head === k) break;
    if (head > 2 * k - 1 || head < 0) continue;
    let degree = visited[head];

    if (visited[head - 1] === -1 && head - 1 >= 0) {
      queue.push(head - 1);
      visited[head - 1] = degree + 1;
    }

    if (visited[head + 1] === -1 && head + 1 <= 100000) {
      queue.push(head + 1);
      visited[head + 1] = degree + 1;
    }

    if (visited[2 * head] === -1 && 2 * head <= 100000) {
      queue.push(2 * head);
      visited[2 * head] = degree + 1;
    }
  }
  ans = visited[k];
  return ans;
};

console.log(solution(arr));
