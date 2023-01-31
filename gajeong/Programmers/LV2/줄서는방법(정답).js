function solution(n, k) {
  let nums = Array.from({ length: n }, (v, i) => i + 1);
  let answer = [];
  let fac = 1;
  for (let i = 2; i <= n; i++) fac *= i;
  let i = n;
  while (i > 0) {
    let slice = fac / i;
    fac /= i;
    let now = parseInt((k - 1) / slice);
    answer.push(nums[now]);
    nums.splice(now, 1);

    i--;
    k %= slice;
    if (k == 0) k = slice;
  }

  return answer;
}
console.log(solution(4, 8));

//* fac(n) / n 의 구간 크기만큼 반복됨을 이용
