function solution(p) {
  let answer = 0;

  const arr = Array.from(Array(1001), () => new Array(1001));
  for (let i = 0; i < p.length; i++) {
    arr[p[i][0]][p[i][1]] = 1;
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][j] == 1 && arr[j][i] == 1) {
        answer++;
      }
    }
  }

  return answer;
}

solution([
  [1, 3],
  [3, 1],
  [3, 5],
  [2, 5],
  [5, 3],
]);
