function solution(p) {
  var answer = -1;

  let now = 0;
  let left = 0;
  let right = 0;
  let size = p.length;
  for (let i = 0; i < size; i++) {
    if (p[i] == "<") {
      left++;
      continue;
    }
    break;
  }
  for (let i = size - 1; i >= 0; i--) {
    if (p[i] == ">") {
      right++;
      continue;
    }
    break;
  }
  answer = left + right;
  return answer;
}

console.log(solution("<<<><"));
