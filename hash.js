function solution(A) {
  let answer = 0;
  A.sort((a, b) => {
    return a - b;
  });
  let sIdx = 0;
  let eIdx = A.length - 1;
  while (sIdx < eIdx) {
    let s = A[sIdx];
    let e = A[eIdx];
    if (Math.abs(s) < Math.abs(e)) {
      eIdx--;
    } else if (Math.abs(s) > Math.abs(e)) {
      sIdx++;
    } else {
      return Math.abs(s);
    }
  }
  return answer;
}

solution([3, 2, -2, 5, -3]);
