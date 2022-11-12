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
  console.log(map);
  //우하좌상
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const sea = [];
  //2면 이상이 땅인 땅만 남겨두고 나머지 지우기
  for (let j = 0; j < y; j++) {
    for (let i = 0; i < x; i++) {
      if (map[j][i] === ".") continue;
      let area = 0;
      for (let d = 0; d < 4; d++) {
        if (area > 1) continue;
        // 조건1. 영역을 벗어나는 경우
        if (
          i + dx[d] > x - 1 ||
          i + dx[d] < 0 ||
          j + dy[d] > y - 1 ||
          j + dy[d] < 0
        )
          continue;

        // 조건2. 땅인 경우
        if (map[j + dy[d]][i + dx[d]] === "X") area += 1;
      }
      if (area < 2) sea.push([j, i]);
    }
  }
  console.log(sea);
  sea.forEach((point) => {
    map[point[0]][point[1]] = ".";
  });

  for (let j = 0; j < y; j++) {}

  console.log(map);
};

solution(input);
