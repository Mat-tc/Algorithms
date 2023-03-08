const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
-5 1 12 1
7
1 1 8
-3 -1 1
2 2 2
5 5 1
-4 5 1
12 1 1
12 1 2
-5 1 5 1
1
0 0 2`
)
  .trim()
  .split('\n');

// * 도착점과, 출발점을 포함하는 원의 갯수
// 한 원에 대하여 도착점과 출발점으로 모두 가지고 있다면 => 0
// 둘다 가지고 있지 않다면 => 0
// 하나만 가지고 있다면 => 1

// 원의 좌표 + 반지름의 길이   이내에 x, y 좌표가 있는경우

const solution = (input) => {
  const T = Number(input.shift());
  const answer = [];
  let j = 0;
  for (let t = 0; t < T; t++) {
    let [x1, y1, x2, y2] = input[0 + j].split(' ').map(Number);
    let n = Number(input[1 + j]);
    let cnt = 0;
    for (let i = 2 + j; i < 2 + n + j; i++) {
      let [cx, cy, r] = input[i].split(' ').map(Number);

      let start = false;
      let end = false;

      if ((cx - x1) ** 2 + (cy - y1) ** 2 < r ** 2) start = true;
      if ((cx - x2) ** 2 + (cy - y2) ** 2 < r ** 2) end = true;

      if (start ^ end) ++cnt;
    }
    answer.push(cnt);
    j += n + 2;
  }
  console.log(answer.join('\n'));
};

solution(input);
