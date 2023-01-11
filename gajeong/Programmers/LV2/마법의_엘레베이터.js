function solution(storey) {
  let idx = storey.toString().length;
  let answer = 0;
  for (let i = 1; i <= idx; i++) {
    let num = storey % 10 ** i;
    let div = num / 10 ** (i - 1);

    if (div < 5) {
      storey -= num;
      answer += Math.floor(num / 10 ** (i - 1));
    } else if (div > 5) {
      storey += 10 ** i - num;
      answer += 10 - Math.floor(num / 10 ** (i - 1));
    } else {
      let pre = Math.floor(storey / 10 ** (i + 1));
      if (pre >= 5) {
        storey += 10 ** i - num;
        answer += 10 - Math.floor(num / 10 ** (i - 1));
      } else {
        storey -= num;
        answer += Math.floor(num / 10 ** (i - 1));
      }
    }
  }
  return answer;
}

solution(16);
solution(2554);
