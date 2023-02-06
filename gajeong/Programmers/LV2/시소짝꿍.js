function solution(weights) {
  var answer = 0;

  weights.sort((a, b) => a - b);

  for (let pre = 0; pre < weights.length - 1; pre++) {
    for (let nxt = pre + 1; nxt < weights.length; nxt++) {
      if (weights[pre] * 3 < weights[nxt]) break;
      if (weights[pre] == weights[nxt]) {
        ++answer;
        continue;
      }
      if (weights[pre] * 2 == weights[nxt]) {
        ++answer;
        continue;
      }
      if (weights[pre] * 3 == weights[nxt] * 2) {
        ++answer;
        continue;
      }
      if (weights[pre] * 4 == weights[nxt] * 3) {
        ++answer;
      }
    }
  }
  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));
