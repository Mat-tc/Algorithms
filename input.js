const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 5
    10 25 7 8 13
    68 24 -78 63 32
    12 -69 100 -29 -25
    -16 -22 -57 -33 99
    7 -76 -11 77 15
`
).split("\n");
const arr = stdin.map((el) => el.trim());

const solution = (input) => {
  console.log("gg");
};

solution(arr);

function solution(A) {
  let answer = 0;
  A.forEach((num) => {
    if (num >= 0 && num < 10) answer = Math.max(answer, num);
  });
  return answer;
}
