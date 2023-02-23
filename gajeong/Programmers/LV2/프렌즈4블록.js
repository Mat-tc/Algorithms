function solution(m, n, board) {
  var answer = 0;

  const map = board.map((el) => el.split(""));
  const visited = Array.from(Array(m), () => Array(n).fill(false));

  //방향 -> 오른쪽 , 아래, 오른쪽 대각선
  const dx = [1, 0, 1];
  const dy = [0, 1, 1];

  const BFS = (x, y, c) => {
    for (let d = 0; d < 3; d++) {
      let toX = x + dx[d];
      let toY = y + dy[d];

      if (toX > n - 1 || toY > m - 1) return;
      if (c != board[toY][toX]) return;
    }

    //삭제 될 배열 체크해주기
    visited[y][x] = true;
    for (let d = 0; d < 3; d++) {
      let toX = x + dx[d];
      let toY = y + dy[d];

      visited[toY][toX] = true;
    }
    return true;
  };

  while (true) {
    for (let j = 0; j < m; j++) {
      for (let i = 0; i < n; i++) {
        BFS(i, j, map[j][i]);
      }
    }

    for (let j = 0; j < m; j++) {
      for (let i = 0; i < n; i++) {
        if (visited[j][i]) {
          ++answer;
          map[j][i] = "0";
        }
      }
    }
  }

  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
