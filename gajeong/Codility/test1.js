function solution(N) {
  // Implement your solution here
  let bin = N.toString(2);
  const answer = [];
  let cnt = 0;
  let status = false;
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') status = true;
    if (bin[i] === '1' && cnt > 0 && status) {
      answer.push(cnt);
      cnt = 0;
    }
    if (bin[i] === '0') ++cnt;
  }
  return answer.length > 0 ? Math.max(...answer) : 0;
}

console.log(solution(32));
