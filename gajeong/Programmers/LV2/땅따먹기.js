function solution(land) {
  var answer = 0;
  const N = land.length;
  const arr = [];
  land.forEach((row) => {
    arr.push(row.indexOf(Math.max(...row)));
  });

  for (let now = 0; now < N; now++) {
    // 첫번째 열, 마지막 열 조건 처리 해줘야함
    let pre = now - 1;
    let nxt = now + 1;

    if (pre == now) {
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
