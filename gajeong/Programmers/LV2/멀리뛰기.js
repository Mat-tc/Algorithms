function solution(n) {
  const cnt = [1, 2];
  for (let i = 2; i <= n - 1; i++) {
    cnt[i] = (cnt[i - 1] + cnt[i - 2]) % 1234567;
  }

  return cnt[n - 1];
}

console.log(solution(8));
console.log(solution(3));
