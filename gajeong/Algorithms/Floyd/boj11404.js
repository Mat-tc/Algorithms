const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs
        .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
        .toString()
        .trim()
        .split("\r\n");

function solution(input) {
  const n = Number(input[0]);
  const m = Number(input[1]);
  const map = Array.from(Array(n + 1), () => Array(n + 1).fill(10000001));
  for (let i = 2; i < m + 2; i++) {
    let [start, end, cost] = input[i].split(" ").map(Number);
    map[start][end] = Math.min(map[start][end], cost);
  }

  for (let i = 1; i <= n; i++) {
    map[i][i] = 0;
  }

  //floyd
  for (let middle = 1; middle <= n; middle++) {
    for (let start = 1; start <= n; start++) {
      for (let end = 1; end <= n; end++) {
        if (start == end || middle == end || start == middle) continue;
        map[start][end] = Math.min(
          map[start][end],
          map[start][middle] + map[middle][end]
        );
      }
    }
  }
  const answer = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (map[i][j] >= 10000001) map[i][j] = 0;
    }
    answer.push(map[i].slice(1, n + 1).join(" "));
  }
  console.log(answer.join("\n"));
}

solution(input);
