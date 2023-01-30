function solution(maps) {
  const map = [];
  const visit = [];
  for (let i = 0; i < maps.length; i++) {
    let arr = maps[i].split('');
    map.push(arr);
    visit.push(Array(arr.length).fill(false));
  }
  //* n 가로 m 세로
  let n = map[0].length;
  let m = map.length;

  const answer = [];

  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      if (visit[j][i] == true || map[j][i] == 'X') continue;
      let queue = [[i, j]];
      visit[j][i] = true;
      let p = 0;
      let sum = 0;
      while (p < queue.length) {
        let [x, y] = queue[p];
        sum += Number(map[y][x]);
        const dx = [1, 0, -1, 0];
        const dy = [0, -1, 0, 1];
        for (let d = 0; d < 4; d++) {
          let to_x = x + dx[d];
          let to_y = y + dy[d];

          if (to_x < 0 || to_y < 0 || to_x > n - 1 || to_y > m - 1) continue;
          if (map[to_y][to_x] == 'X') continue;
          if (visit[to_y][to_x] == true) continue;
          queue.push([to_x, to_y]);
          visit[to_y][to_x] = true;
        }

        p++;
      }
      answer.push(sum);
    }
  }
  if (answer.length == 0) answer.push(-1);
  return answer.sort();
}

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1']));
console.log(solution(['XXX', 'XXX', 'XXX']));
