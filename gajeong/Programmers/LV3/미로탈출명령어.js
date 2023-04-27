function solution(n, m, x, y, r, c, k) {
  var answer = '';
  //(1) 조건 1. dlru 순으로 방문
  //(2) 조건 2. | 현재좌표 - 목표좌표 | > 남은 K 라면 종료

  const DFS = (x, y, k, str) => {
    if (x < 1 || y < 1 || x > n || y > m) return;
    if (Math.abs(x - r) + Math.abs(y - c) > k) return;
    if (Math.abs(x - r) + Math.abs(y - c) == 1 && k % 2 == 0) return; //어떻게든 도달할 수 없는 경우
    if (k === 0) {
      if (x === r && y === c) {
        answer = str;
        return;
      }
      return;
    }

    //진행 아래, 왼, 오른, 위 순서대로
    const dy = [0, -1, 1, 0];
    const dx = [1, 0, 0, -1];
    const ch = ['d', 'l', 'r', 'u'];
    for (let d = 0; d < 4; d++) {
      DFS(x + dx[d], y + dy[d], k - 1, str + ch[d]);
      if (answer) return;
    }
  };

  DFS(x, y, k, '');

  return answer ? answer : 'impossible';
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
