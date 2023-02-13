function solution(scores) {
  let max_1 = -1;
  let max_2 = -1;
  for (let i = 0; i < scores.length; i++) {
    if (max_1 < scores[i][0]) {
      max_1 = scores[i][0];
    }
    if (max_2 < scores[i][1]) {
      max_2 = scores[i][1];
    }
  }

  let mine = scores.shift();
  let sum = mine[0] + mine[1];
  scores.sort((a, b) => {
    return b[0] + b[1] - (a[0] + a[1]);
  });

  let rank = 1;

  if (mine[0] < max_1 && mine[1] < max_2) return -1;
  for (let i = 0; i < scores.length; i++) {
    // 내 점수의 합이 정렬된 점수들의 합보다 같거나 클때, 랭킹 리턴
    if (sum >= scores[i][0] + scores[i][1]) return rank;
    // 해당 수 둘다 의 값이 max 보다 작을때 랭크 안올림
    if (scores[i][0] < max_1 && scores[i][1] < max_2) continue;
    rank++;
  }
}

console.log(
  solution([
    [7, 1],
    [10, 1],
    [9, 0],
    [6, 2],
    [6, 1],
  ])
);

// 다시 생각해야해  , ,
