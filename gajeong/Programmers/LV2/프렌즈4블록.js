function solution(m, n, board) {
  // n 가로 m 세로
  var answer = 0;

  const map = board.map((el) => el.split(''));

  while (true) {
    const del = Array.from(Array(m), () => Array(m).fill(false));
    let cnt = 0;
    for (let j = 0; j < m - 1; j++) {
      for (let i = 0; i < n - 1; i++) {
        let c = map[j][i];
        if (
          c == map[j + 1][i] &&
          c == map[j][i + 1] &&
          c == map[j + 1][i + 1]
        ) {
          if (!del[j][i]) {
            ++cnt;
            del[j][i] = true;
          }
          if (!del[j][i + 1]) {
            ++cnt;
            del[j][i + 1] = true;
          }
          if (!del[j + 1][i]) {
            ++cnt;
            del[j + 1][i] = true;
          }
          if (!del[j + 1][i + 1]) {
            ++cnt;
            del[j + 1][i + 1] = true;
          }
        }
      }
    }

    for (let j = 0; j < m; j++) {
      for (let i = 0; i < n; i++) {
        if (del[j][i]) map[j][i] = 'X';
      }
    }

    if (cnt == 0) break;
  }

  return answer;
}

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']));
console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
);
