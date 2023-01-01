//예시 입력 시,
const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs
        .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
        .toString()
        .trim()
        .split("\r\n");

function solution() {}
