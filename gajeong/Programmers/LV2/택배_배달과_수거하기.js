function solution(cap, n, deliveries, pickups) {
  let dPoint = -1;
  let pPoint = -1;
  let answer = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (deliveries[i] > 0) {
      dPoint = i;
      break;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (pickups[i] > 0) {
      pPoint = i;
      break;
    }
  }

  while (dPoint > -1 || pPoint > -1) {
    answer += Math.max(dPoint + 1, pPoint + 1) * 2;
    let dCnt = 0;
    let pCnt = 0;
    //배달
    while (dCnt < cap || deliveries[dPoint] === 0) {
      if (dPoint < 0) break;
      if (deliveries[dPoint] && dCnt < cap) {
        deliveries[dPoint]--;
        dCnt++;
      } else {
        dPoint--;
      }
    }

    //픽업
    while (pCnt < cap || pickups[pPoint] === 0) {
      if (pPoint < 0) break;
      if (pickups[pPoint] && pCnt < cap) {
        pickups[pPoint]--;
        pCnt++;
      } else {
        pPoint--;
      }
    }
  }

  return answer;
}
console.log(solution(2, 5, [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]));
//console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
