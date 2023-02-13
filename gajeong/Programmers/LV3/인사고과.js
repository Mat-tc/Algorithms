function solution(scores) {
  let mine = scores.shift();
  let sum = mine[0] + mine[1];
  scores.sort((a, b) => {
    if (b[0] + b[1] > a[0] + a[1]) return b[0] + b[1] - (a[0] + a[1]);
    else if (b[0] + b[1] == a[0] + a[1] && b[0] != a[0]) return b[0] - a[0];
    else return a[0] - b[0];
  });

  let rank = 1;

  console.log(scores);
  for (let i = 0; i < scores.length; i++) {
    if (mine[0] < scores[i][0] && mine[1] < scores[i][1]) return -1;
    // 내 점수의 합이 정렬된 점수들의 합보다 같거나 클때, 랭킹 리턴
    if (sum >= scores[i][0] + scores[i][1]) return rank;
    // 해당 수 둘다 의 값이 max 보다 작을때 랭크 안올림
    if (i == 0) {
      rank++;
      continue;
    }
    if (scores[i][0] < scores[0][0] && scores[i][1] < scores[0][1]) continue;
    rank++;
  }
}

console.log(
  solution([
    [3, 4],
    [10, 3],
    [9, 0],
    [6, 2],
    [7, 1],
    [5, 3],
    [4, 4],
    [3, 5],
    [6, 1],
  ])
);

// 다시 생각해야해  , ,
