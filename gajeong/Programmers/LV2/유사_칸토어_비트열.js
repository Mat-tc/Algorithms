function solution(n, l, r) {
  let answer = 0;

  let zero = [5 ** (n - 1) * 2 + 1, 5 ** (n - 1) * 3];

  for (let i = l; i <= r; i++) {
    if (i >= zero[0] && i <= zero[1]) continue;
    if (i % 5 == 3) continue;
    if (i % 5 ** 2 == 3) continue;
    answer += 1;
  }
  return answer;
}

console.log(solution(2, 4, 17));
