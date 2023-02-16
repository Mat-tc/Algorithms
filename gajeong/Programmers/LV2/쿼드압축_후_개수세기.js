function solution(arr) {
  var answer = [];

  const rcs = (x, y, n) => {
    //1개의 사각형일때 return
    if (n == 1) return;

    //영역별 좌상, 우상, 좌하, 우하
    rcs(x - x / 2, y - y / 2, 2 / n);
    rcs(x + x / 2, y - y / 2, n / 2);
    rcs(x - x / 2, y + y / 2, 2 / n);
    rcs(x + x / 2, y + y / 2, n / 2);
  };
  return answer;
}

console.log(
  solution(
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1]
  )
);
