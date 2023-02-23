function solution(w, h) {
  var answer = 0;
  const ratio = (h / w).toFixed(20);

  for (let i = 0; i < w; i++) {
    answer += parseInt((h / w) * i);
  }
  return answer * 2;
}

console.log(solution(8, 12));
