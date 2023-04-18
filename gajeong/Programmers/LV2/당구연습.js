function solution(m, n, startX, startY, balls) {
  var answer = [];

  const dir = [
    [-startX, startY], //왼쪽벽 친 경우
    [2 * m - startX, startY], // 오른쪽 벽 친 경우
    [startX, 2 * n - startY], // 위쪽 벽 친 경우
    [startX, -startY], //아래 벽 친 경우
  ];

  balls.forEach((el) => {
    let [x, y] = [el[0], el[1]];
    let dmp = [];

    if (!(startX > x && startY == y))
      dmp.push((dir[0][0] - x) ** 2 + (dir[0][1] - y) ** 2);
    if (!(startX < x && startY == y))
      dmp.push((dir[1][0] - x) ** 2 + (dir[1][1] - y) ** 2);
    if (!(startY < y && startX == x))
      dmp.push((dir[2][0] - x) ** 2 + (dir[2][1] - y) ** 2);
    if (!(startY > y && startX == x))
      dmp.push((dir[3][0] - x) ** 2 + (dir[3][1] - y) ** 2);

    answer.push(Math.min(...dmp));
  });

  return answer;
}

solution(10, 10, 3, 7, [
  [7, 7],
  [2, 7],
  [7, 3],
]);
