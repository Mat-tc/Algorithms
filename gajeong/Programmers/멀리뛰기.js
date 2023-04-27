function solution(n) {
  var answer = Array(2001).fill(0);
  answer[1] = 1;
  answer[2] = 2;

  for (let i = 3; i < 2001; i++) {
    answer[i] = answer[i - 1] + answer[i - 2];
  }
  console.log(answer);
  return answer[n];
}

console.log(solution(11));
