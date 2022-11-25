const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 10
..........
..XXX.XXX.
XXX.......`
)
  .trim()
  .split('\n');

const solution = (input) => {
  [y, x] = input.shift().split(' ');
  //1. 지도 만들기
  const map = [];
  for (let i = 0; i < y; i++) {
    map.push(input[i].split(''));
  }

  //우하좌상
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  //바다로 변할 좌표를 저장해 놓을 배열
  const sea = [];
  //2면 이상이 땅인 땅만 남겨두고 나머지 지우기
  for (let j = 0; j < y; j++) {
    for (let i = 0; i < x; i++) {
      if (map[j][i] === '.') continue;
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
        if (map[j + dy[d]][i + dx[d]] === 'X') area += 1;
      }
      if (area < 2) sea.push([j, i]);
    }
  }
  sea.forEach((point) => {
    map[point[0]][point[1]] = '.';
  });

  // 지도 자르기
  //땅이 발견되는 x의 최소/최대 좌표값 + 1  과
  // 동일한 y의 최소/최대 좌표값+1  을 구할거임
  let point_y = [0, y - 1];
  let point_x = [-1, -1];

  for (let j = 0; j < y; j++) {
    if (map[j].includes('X')) {
      point_y[0] = j;
      break;
    }
  }
  for (let j = 0; j < y; j++) {
    if (map[y - j - 1].includes('X')) {
      point_y[1] = y - j;
      break;
    }
  }

  for (let i = 0; i < x; i++) {
    if (point_x[0] != -1 && point_x[1] != -1) break;
    for (let j = 0; j < y; j++) {
      if (map[j][i] === 'X' && point_x[0] == -1) point_x[0] = i;
      if (map[j][x - i - 1] === 'X' && point_x[1] == -1) point_x[1] = x - i;
    }
  }

  const ans = [];

  for (let j = point_y[0]; j < point_y[1]; j++) {
    ans.push(map[j].slice(point_x[0], point_x[1]).join(''));
  }
  console.log(ans.join('\n'));
};

solution(input);
