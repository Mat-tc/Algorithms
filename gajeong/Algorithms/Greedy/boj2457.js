<<<<<<< HEAD
const fs = require('fs');
=======
const fs = require("fs");
>>>>>>> 420df707a811d7b0d52bb3f8ec0f1a634d53ca4a
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
2 15 3 23
4 12 6 5
5 2 5 31
9 28 12 24
6 15 9 3
6 3 6 15
2 28 4 25
6 15 9 27
10 5 12 31
7 14 9 1`
)
  .trim()
  .split("\n");

/*
중간에 이어지지 않는 오류의 경우의 수를 생각하지 못함 !
난 빡대가뤼야 .. . 
 */
const main = (input) => {
  const N = Number(input.shift());
  const arr = [];

  for (let i = 0; i < N; i++) {
    let date = input[i].split(" ").map(Number);
    let start = date[0] * 100 + date[1];
    let end = date[2] * 100 + date[3];

    arr.push([start, end]);
  }

  let cnt = 1;

  const flower = sort(arr);
  let index = 0;
  let end_st = flower[0][1] > 1130 ? true : false;

  console.log(start_st && end_st && !trigger ? cnt : 0);
};

// end Date 기준 내림차순 정렬
const sort = (arr) => {
  arr.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[0] == b[0] && a[1] >= b[1]) return -1;
    else return 1;
  });
  return arr;
};

main(input);
