function solution(m, n, board) {
  var answer = 0;

  const map = board.map((el) => el.split(''));
  const visited = Array.from(Array(m), () => Array(n).fill(false));

  //방향 -> 오른쪽 , 아래, 오른쪽 대각선
  const dx = [1, 0, 1];
  const dy = [0, 1, 1];

  const BFS = (x, y, c) => {
    for (let d = 0; d < 3; d++) {
      let toX = x + dx[d];
      let toY = y + dy[d];

      if (toX > n - 1 || toY > m - 1) return false;
      if (c != board[toY][toX]) return false;
    }
    return true;
  };

  const remover = [];
  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      if (BFS(i, j, board[j][i])) remover.push([i, j]);
    }
  }
  console.log(remover);

  return answer;
}

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']));
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
);
