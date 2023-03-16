function solution(board) {
  board = board.map((el) => el.split(""));
  const W = board[0].length;
  const H = board.length;
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  const visited = Array.from({ length: H }, () => Array(W).fill(-1));
  let startX = 0;
  let startY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (board[y][x] == "R") {
        startX = x;
        startY = y;
        break;
      }
    }
  }

  const queue = [[startX, startY, 0]];

  while (queue.length) {
    let [x, y, dept] = queue.shift();

    if (board[y][x] == "G") return dept;
    for (let d = 0; d < 4; d++) {
      let toX = x + dx[d];
      let toY = y + dy[d];
      if (toX < 0 || toY < 0 || toX > W - 1 || toY > H - 1) continue;
      while (true) {
        if (board[toY][toX] == "D") {
          // 빠져나오지 못하는 경우에 무한루프 돔
          if (visited[toY - dy[d]][toX - dx[d]] == d) break;
          visited[toY - dy[d]][toX - dx[d]] = d;
          queue.push([toX - dx[d], toY - dy[d], dept + 1]);
          break;
        }
        if (
          toX + dx[d] < 0 ||
          toY + dy[d] < 0 ||
          toX + dx[d] > W - 1 ||
          toY + dy[d] > H - 1
        )
          break;
        toX += dx[d];
        toY += dy[d];
      }
    }
  }
  return -1;
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "....", ".G..", "...D"]));
