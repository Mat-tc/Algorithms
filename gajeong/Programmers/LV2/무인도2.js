function solution(maps) {
  const map = maps.map((arr) => arr.split(""));
  const m = map.length;
  const n = map[0].length;
  const answer = [];

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  const BFS = (x, y) => {
    visited[y][x] = true;
    const dx = [1, 0, -1, 0];
    const dy = [0, -1, 0, 1];
    let sum = 0;
    sum += Number(map[y][x]);

    for (let i = 0; i < 4; i++) {
      let toX = x + dx[i];
      let toY = y + dy[i];

      if (toX < 0 || toY < 0 || toX > n - 1 || toY > m - 1) continue;
      if (visited[toY][toX] || map[toY][toX] == "X") continue;
      sum += BFS(toX, toY);
    }
    return sum;
  };
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (visited[y][x] || map[y][x] == "X") continue;
      answer.push(BFS(x, y));
    }
  }

  return answer.length == 0 ? [-1] : answer.sort();
}

console.log(
  solution([
    "XXXXXXXX",
    "1X11111X",
    "1XX1XXXX",
    "11XXX111",
    "1111XXXX",
    "1111111X",
    "1111111X",
    "1111111X",
  ])
);
console.log(solution(["1X1", "X1X", "1XX"]));
