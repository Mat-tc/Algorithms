function solution(land) {
  var answer = 0;
  const N = land.length;
  const map = Array.from({ length: N }, () => Array(4).fill(0));
  console.log(map);
  for (let i = 0; i < 4; i++) {
    map[0][i] = land[0][i];
  }

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < 4; j++) {
      map[i][j] =
        Math.max(...map[i - 1].slice(0, j), ...map[i - 1].slice(j + 1, 4)) +
        land[i][j];
    }
  }

  return Math.max(...map[N - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
