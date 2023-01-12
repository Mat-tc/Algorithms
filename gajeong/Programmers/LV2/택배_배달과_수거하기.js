function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let d = cap;
  let p = 0;
  let length = 0;
  let idx = n - 1;
  for (let i = n - 1; i >= 0; i--) {
    if (deliveries[i] || pickups[i]) {
      idx = i;
      break;
    }
  }
  for (let i = idx; i >= 0; i--) {
    d -= deliveries[i];
    p += pickups[i];
    length++;
    if (d < 0 || p > cap) {
      answer += (length + i) * 2;
      d + cap > cap ? (d = cap) : (d = d + cap);
      p <= cap ? (p = 0) : (p = pickups[i]);
      length = 1;
    }
  }
  answer += length * 2;
  return answer;
}
solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]);
solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]);
