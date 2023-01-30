function solution(n, l, r) {
  let answer = 0;

  for (let i = l; i <= r; i++) {
    if (i % 5 == 3) continue;
    let ip = i - 1;
    while (ip) {
      ip = parseInt(ip / 5);
      if (ip % 5 == 2) break;
    }
    if (ip % 5 != 2) answer += 1;
  }
  return answer;
}

console.log(solution(2, 4, 17));
