function solution(k, ranges) {
  var width = [];
  var answer = [];
  while (k !== 1) {
    let before = k;
    if (k % 2 == 0) {
      k /= 2;
    } else {
      k = k * 3 + 1;
    }
    let after = k;
    width.push((before + after) / 2);
  }
  ranges.forEach((range) => {
    let [start, end] = range;
    let sum = 0;
    let status = false;
    for (let i = start; i < width.length + end; i++) {
      sum += width[i];
      status = true;
    }
    if (start > width.length + end) answer.push(-1);
    else if (start == width.length + end) answer.push(0);
    else answer.push(sum);
  });
  console.log(answer);
  return answer;
}

solution(5, [
  [0, 0],
  [0, -1],
  [2, -3],
  [3, -3],
]);
