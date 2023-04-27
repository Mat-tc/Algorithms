function solution(line) {
  var answer = [];
  const INF = Number.MAX_SAFE_INTEGER;
  let minX = INF;
  let minY = INF;
  let maxX = -INF;
  let maxY = -INF;

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let [A, B, E] = line[i];
      let [C, D, F] = line[j];
      let x = (B * F - E * D) / (A * D - B * C);
      let y = (E * C - A * F) / (A * D - B * C);
      if (A * D === B * C) continue;
      if (x % 1 === 0 && y % 1 === 0) {
        answer.push([x, y]);
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  const draw = Array.from(Array(maxY - minY + 1), () =>
    Array(maxX - minX + 1).fill('.')
  );
  answer.forEach(([x, y]) => {
    draw[maxY - y][x - minX] = '*';
  });

  return draw.map((v) => v.join(''));
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
