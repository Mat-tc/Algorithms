const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 10
..........
..XXX.XXX.
XXX.......`
)
  .trim()
  .split("\n");

const solution = (input) => {
  [y, x] = input.shift().split(" ");
  //1. 지도 만들기
  const map = [];
  for (let i = 0; i < y; i++) {
    map.push(input[i].split(""));
  }

  //2면 이상이 땅인 땅만 남겨두고 나머지 지우기
  for(let j = 0; j<x ; j++){
    for(let x=0; )
  }
};

solution(input);
