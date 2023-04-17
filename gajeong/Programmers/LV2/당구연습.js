function solution(m, n, startX, startY, balls) {
  var answer = [];

  const dir = [
    [-startX, startY],
    [2 * m - startX, startY],
    [startX, 2 * n - startY],
    [startX, -startY],
  ];

  balls.forEach((el) => {
    let [x, y] = [el[0], el[1]];
    let dmp = [];
    for (let d = 0; d < 4; d++) {
      if (dir[d][0] === x || dir[d][1] === y) continue;
      dmp.push((dir[d][0] - x) ** 2 + (dir[d][1] - y) ** 2);
    }
    answer.push(Math.min(...dmp));
  });

  return answer;
}

solution(10, 10, 3, 7, [
  [7, 7],
  [2, 7],
  [7, 3],
]);
