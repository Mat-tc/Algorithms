const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs
        .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
        .toString()
        .trim()
        .split("\r\n");
solution(input);

function solution(input) {
  const [n, k] = input[0].split(" ").map(Number);

  const NB = new Array(10001);

  for (let i = 1; i <= n; i++) {
    let n = Number(input[i]);
    if (n <= 10000) NB[n] = 1;
  }
  NB[0] = 0;

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j < i; j++) {
      let left = j;
      let right = i - j;
      if (!NB[i]) NB[i] = 999999;
      if (!NB[left] || !NB[right]) continue;
      NB[i] = Math.min(NB[left] + NB[right], NB[i]);
    }
  }
  console.log(NB[k] == 999999 ? -1 : NB[k]);
}
