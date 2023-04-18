function solution(n, roads, sources, destination) {
  var answer = [];
  const map = Array.from(Array(n + 1), () => []);

  for (let i = 0; i < roads.length; i++) {
    let [a, b] = roads[i];
    map[a].push(b);
    map[b].push(a);
  }

  // 목적지에서 각 점으로 도달할 수 있는지 반대로 계산하면 됨.
  let start = destination;

  const visited = Array(n + 1).fill(false);
  const dist = Array(n + 1).fill(-1);
  visited[start] = true;
  dist[start] = 0;
  const queue = [[start, 0]];

  let idx = 0;
  while (queue.length > idx) {
    //종료조건

    let [now, d] = queue[idx];

    for (let k = 0; k < map[now].length; k++) {
      let nxt = map[now][k];
      if (visited[nxt]) continue;
      queue.push([nxt, d + 1]);
      visited[nxt] = true;
      dist[nxt] = d + 1;
    }

    ++idx;
  }

  sources.forEach((s) => {
    answer.push(dist[s]);
  });

  return answer;
}
console.log(
  solution(
    3,
    [
      [1, 2],
      [2, 3],
    ],
    [2, 3],
    1
  )
);
