function solution(board, skill) {
  // N 가로 M 세로
  const N = board[0].length;
  const M = board.length;

  var answer = 0;
  const tmp = Array.from(Array(M + 1), () => Array(N + 1).fill(0));

  skill.forEach((el) => {
    let [mode, startY, startX, endY, endX, degree] = el;
    tmp[startY][startX] += mode === 1 ? -degree : degree;
    tmp[startY][endX + 1] += mode === 1 ? degree : -degree;
    tmp[endY + 1][startX] += mode === 1 ? degree : -degree;
    tmp[endY + 1][endX + 1] += mode === 1 ? -degree : degree;
  });

  // 누적합 구하기
  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      tmp[y][x + 1] += tmp[y][x];
    }
  }
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      tmp[y + 1][x] += tmp[y][x];
    }
  }

  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      board[y][x] += tmp[y][x];
      if (board[y][x] > 0) answer += 1;
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
);
console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
);
