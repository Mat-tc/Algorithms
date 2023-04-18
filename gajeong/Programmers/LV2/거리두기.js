function solution(places) {
  var answer = [];
  places.forEach((el) => {
    const map = [];
    for (let i = 0; i < el.length; i++) {
      map.push(el[i].split(''));
    }
    answer.push(check(map));
  });

  return answer;
}

function check(map) {
  const visited = Array.from(Array(5), () => Array(5).fill(false));

  //불가능 조건에 도달하면 무조건 false 리턴
  const dfs = (x, y, dep) => {
    // 종료조건
    if (map[y][x] == 'X') return true;
    if (dep > 0 && dep <= 2 && map[y][x] == 'P') {
      return false;
    }
    if (dep > 2) return true;
    const dx = [1, 0, -1, 0];
    const dy = [0, -1, 0, 1];

    for (let d = 0; d < 4; d++) {
      let toX = x + dx[d];
      let toY = y + dy[d];
      if (toX < 0 || toY < 0 || toX > 4 || toY > 4) continue;
      // 또 나를 할 경우가 있음. 방문처리는 pass
      if (visited[toY][toX]) continue;
      let st = dfs(toX, toY, dep + 1);
      if (st === false) {
        return false;
      }
    }
    return true;
  };

  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      //1. P인 얘들만 수행, 방문처리 먼저 해줘서 중복체크 안하도록
      if (map[j][i] == 'P') {
        visited[j][i] = true;
        let status = dfs(i, j, 0);
        //false 리턴 하나라도 받으면 그냥 바로 불가능 리턴
        if (!status) {
          return 0;
        }
      }
    }
  }

  return 1;
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
);
