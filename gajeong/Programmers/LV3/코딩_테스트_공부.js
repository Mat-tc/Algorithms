function solution(alp, cop, problems) {
  var answer = 0;

  //0. 문제 모든 원소별 오름차순 정렬
  problems.sort((a, b) => {
    if (a[0] === b[0] && a[1] != b[1]) {
      return a[1] - b[1];
    } else if (a[1] === b[1] && a[2] != b[2]) {
      return a[2] - b[2];
    } else if (a[2] === b[2] && a[3] != b[3]) {
      return a[3] - b[3];
    } else if (a[3] === b[3] && a[4] != b[4]) {
      return a[4] - b[4];
    }
  });

  //1.반복해서 목표력에 도달하는지 확인
  let idx = 0;
  while (true) {
    let lv = problems[idx];
    if (alp >= lv[0] && cop >= lv[1]) idx++;
		if (alp < lv[0]) 
  }

  return answer;
}

console.log(
  solution(10, 10, [
    [
      [10, 15, 2, 1, 2],
      [20, 20, 3, 3, 4],
    ],
  ])
);
console.log(
  solution(0, 0, [
    [0, 0, 2, 1, 2],
    [4, 5, 3, 1, 2],
    [4, 11, 4, 0, 2],
    [10, 4, 0, 4, 2],
  ])
);
