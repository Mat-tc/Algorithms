function solution(targets) {
  var answer = 0;

  targets.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let cut = -1;
  targets.forEach((el) => {
    if (el[0] >= cut) {
      ++answer;
      cut = el[1];
    }
  });

  return answer;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);
