function solution(n, l, r) {
  let answer = 0;

<<<<<<< HEAD
  let zero = [5 ** (n - 1) * 2 + 1, 5 ** (n - 1) * 3];

  for (let i = l; i <= r; i++) {
    if (i >= zero[0] && i <= zero[1]) continue;
    if (i % 5 == 3) continue;
    if (i % 5 ** 2 == 3) continue;
    answer += 1;
=======
  for (let i = l; i <= r; i++) {
    if (i % 5 == 3) continue;
    let ip = i - 1;
    while (ip) {
      ip = parseInt(ip / 5);
      if (ip % 5 == 2) break;
    }
    if (ip % 5 != 2) answer += 1;
>>>>>>> e716bfc61be03f20b8a41b0dbd4ebd975cbbfeb5
  }
  return answer;
}

console.log(solution(2, 4, 17));
