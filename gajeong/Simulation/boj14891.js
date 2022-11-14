const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10001011
10000011
01011011
00111101
5
1 1
2 1
3 1
4 1
1 -1`
)
  .trim()
  .split('\n');

const main = (input) => {
  // 톱니 바퀴의 12 시 방향 시작점
  // 시계방향 회전 =>  point[num] -1  |  반시계 => point[num] + 1
  const point = [0, 0, 0, 0, 0];

  const t = [[0, 0, 0, 0, 0, 0, 0, 0]];
  for (let i = 0; i < 4; i++) {
    t.push(input[i].split('').map(Number));
  }

  const way = Number(input[4]);
  input.splice(0, 5);
  const order = input;

  const change_t = (num, way, before) => {
    if (num < 1 || num > 4) return;
    if (before.includes(num)) return;

    //왼쪽 톱니바퀴 확인
    if (num != 1 && !before.includes(num - 1)) {
      if (point[num] - 2 < 3) point[num] += 8;
      if (point[num - 1] + 2 > 5) point[num - 1] -= 8;
      if (t[num][point[num] - 2] !== t[num - 1][point[num - 1] + 2]) {
        point[num - 1] += way;
        before.push(num);
        change_t(num - 1, -way, before);
      }
    }

    //오른쪽 톱니바퀴 확인
    if (num != 4 && !before.includes(num + 1)) {
      if (point[num] + 2 > 5) point[num] -= 8;
      if (point[num + 1] - 2 < 3) point[num + 1] += 8;
      if (t[num + 1][point[num + 1] - 2] !== t[num][point[num] + 2]) {
        point[num + 1] += way;
        before.push(num);
        change_t(num + 1, -way, before);
      }
    }
    point[num] -= way;
  };

  for (let i = 0; i < way; i++) {
    [num, d] = order[i].split(' ').map(Number);
    change_t(num, d, []);
  }

  let ans = 0;
  for (let i = 1; i <= 4; i++) {
    if (point[i] < 0) point[i] += 8;
    if (point[i] > 7) point[i] -= 8;
    if (t[i][point[i]] === 1) {
      ans += Math.pow(2, i - 1);
    }
  }
  console.log(ans);
};

main(input);
