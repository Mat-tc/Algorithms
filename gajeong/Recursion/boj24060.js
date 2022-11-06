const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 7
    4 5 1 3 2`
).split('\n');
const arr = stdin.map((el) => el.trim());

const solution = (input) => {
  const [N, idx] = input[0].split(' ').map(Number);
  let arr = input[1].split(' ').map(Number);
  let now = 0;
  merge_sort(arr, 0, N - 1, idx, now);
};

function merge_sort(arr, p, r, idx, now) {
  if (p < r) {
    q = parseInt((p + r) / 2);
    merge_sort(arr, p, q, idx, now);
    merge_sort(arr, q + 1, r, idx, now);
    if (now < idx) {
      now++;
      merge(arr, p, q, r, idx, now);
    }
  }
}

function merge(arr, p, q, r, idx, now) {
  let i = p;
  let j = q + 1;
  let t = 1;
  let tmp = Array(r).fill(0);

  while (i <= q && j <= r) {
    if (arr[i] < arr[j]) tmp[t++] = arr[i++];
    else tmp[t++] = arr[j++];
  }
  while (i <= q) tmp[t++] = arr[i++];
  while (j <= r) tmp[t++] = arr[j++];
  i = p;
  t = 1;
  while (i <= r) arr[i++] = tmp[t++];

  if (now === idx) console.log(tmp[t++]);
}
solution(arr);
