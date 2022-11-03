const input = [];
require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    console.log(solution(input));
    process.exit();
  });

const solution = (input) => {
  [n, m] = input[0].split(' ').map(Number);
  input = input.slice(1);
  const map = input.map((row) => row.split('').map(Number));

  const dequeue = [[0, 0]];
  const short = Array.from({ length: m }, () => new Array(n).fill(-1));
  short[0][0] = 0;

  // 우 상 좌 하
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  while (dequeue.length) {
    let [x, y] = dequeue.shift();

    let point_legnth = short[y][x];

    //0. 조건에 해당하면 바로 출력
    if (x === n - 1 && y === m - 1) return short[m - 1][n - 1];

    for (let d = 0; d < 4; d++) {
      // 조건 1. 지도의 범위를 벗어남
      const [nx, ny] = [x + dx[d], y + dy[d]];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      // 조건 2. 해당 구역을 방문하지 않았다면
      if (short[ny][nx] === -1) {
        if (map[ny][nx] === 0) {
          // 2 -(1) 벽이 없으면 먼저 수행하도록
          dequeue.unshift([nx, ny]);
          short[ny][nx] = point_legnth;
        } else {
          // 2 -(2) 벽이 있으면 나중에 수행하도록
          dequeue.push([nx, ny]);
          short[ny][nx] = point_legnth + 1;
        }
      }
    }
  }

  return short[m - 1][n - 1];
};
