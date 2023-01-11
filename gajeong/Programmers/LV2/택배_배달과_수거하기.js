function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let p = 0;
  let d = 0;
  let distance = 0;
  for (let i = n - 1; i > -1; i--) {
    if (deliveries[i] || pickups[i]) {
      d += deliveries[i];
      p += pickups[i];
      distance++;
    }

    if (d > cap || pickups > cap) {
      answer += (i + distance + 1) * 2;
      d - cap < 0 ? (d = 0) : (d -= cap);
      p - cap < 0 ? (p = 0) : (p -= cap);
      distance = 0;
    }
  }
  answer += distance * 2;
  console.log(answer);
  return answer;
}

solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);
solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]);
