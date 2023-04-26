function solution(line) {
  var answer = [];
  let minX = 9999999;
  let minY = 9999999;
  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let [A, B, E] = line[i];
      let [C, D, F] = line[j];
      let x = (B * F - E * D) / (A * D - B * C);
      let y = (E * C - A * F) / (A * D - B * C);
      if (A * D == B * C) continue;
      if (x % 1 == 0 && y % 1 == 0) {
        answer.push([x, y]);
        if (x < minX) minX = x;
        if (y < minY) minY = y;
      }
    }
  }

  let maxX = -9999999;
  let maxY = -9999999;

  const crossPoint = [];
  answer.forEach((el) => {
    if (el[0] > maxX) maxX = el[0];
    if (el[1] > maxY) maxY = el[1];
  });

  // 보드를 생성한다.
  let board = Array.from(
    Array(maxY - minY + 1 > 1000 ? 1000 : maxY - minY + 1),
    () => Array(maxX - minX + 1 > 1000 ? 1000 : maxX - minX + 1).fill('.')
  );

  // 교점의 위치에 별을 그린다.
  answer.forEach(([x, y]) => {
    if (maxY - y < 1000 && x - minX < 1000) board[maxY - y][x - minX] = '*';
  });

  return board.map((x) => x.join(''));
}

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
);
