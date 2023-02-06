function solution(weights) {
  var answer = 0;
  const map = {};

  weights.sort((a, b) => a - b);
  const member = [];
  for (let i = 0; i < weights.length; i++) {
    if (!map[weights[i]]) {
      map[weights[i]] = 1;
      member.push(weights[i]);
    } else {
      answer += map[weights[i]];
      map[weights[i]] += 1;
    }
  }

  const N = member.length;
  console.log(member);

  for (let pre = 0; pre < N - 1; pre++) {
    let sum = 0;
    for (let nxt = pre + 1; nxt < N; nxt++) {
      if (member[pre] * 2 < member[nxt]) break;

      if (member[pre] * 2 == member[nxt]) {
        sum += map[member[nxt]];
      }
      if (member[pre] * 3 == member[nxt] * 2) {
        sum += map[member[nxt]];
      }
      if (member[pre] * 4 == member[nxt] * 3) {
        sum += map[member[nxt]];
      }
    }
    if (map[member[pre]] > 1) {
      answer += map[member[pre]] * sum;
    } else answer += sum;
  }
  return answer;
}

console.log(solution([100, 100, 100, 1]));
