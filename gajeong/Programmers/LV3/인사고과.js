function solution(scores) {
  let mine = scores[0];
  let sum = mine[0] + mine[1];

  scores.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1];
    else return b[0] - a[0];
  });

  let rank = 1;
  let hold = 0;

  console.log(scores);
  for (let i = 0; i < scores.length; i++) {
    let el = scores[i];
    if (mine[0] < el[0] && mine[1] < el[1]) return -1;
    if (hold <= el[1]) {
      if (sum < el[0] + el[1]) rank++;
      hold = el[1];
    }
  }
  return rank;
}

console.log(
  solution([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ])
);
console.log(
  solution([
    [3, 1],
    [1, 4],
    [4, 4],
    [3, 4],
    [2, 3],
    [2, 3],
    [1, 5],
    [1, 2],
    [1, 0],
  ])
);

// 다시 생각해야해  , ,
