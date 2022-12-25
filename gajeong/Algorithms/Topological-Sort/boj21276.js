const fs = require("fs");
let input =
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : fs
              .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
              .toString()
              .trim()
              .split("\n");
solution(input);

function solution(input) {
    const N = Number(input[0]);
    const name = input[1].split(" ")[0];
    const M = Number(input[2]);
    const People = {};
}
