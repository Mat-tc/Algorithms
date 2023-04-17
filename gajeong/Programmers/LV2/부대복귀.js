// * memoization 을 해야할 것 같은데
// * 100,000 * 100,000 이면 메모리 초과가 나지 않을까 ?

function solution(n, roads, sources, destination) {
  var answer = [];
  const map = Array.from(Array(n + 1), () => []);

  for (let i = 0; i < roads.length; i++) {
    let [a, b] = roads[i];
    map[a].push(b);
    map[b].push(a);
  }

  for (let i = 0; i < sources.length; i++) {
    //시작점
    let start = sources[i];

    // 시작지랑 목적지 같을 경우 0
    if (start === destination) {
      answer.push(0);
      continue;
    }

    let idx = 0;
    const visited = Array(n + 1).fill(false);
    visited[start] = true;
    const queue = [];
    for (let v = 0; v < map[start].length; v++) {
      let nxt = map[start][v];
      visited[nxt] = true;
      queue.push([nxt, 1]);
    }

    while (true) {
      //종료조건
      if (queue.length <= idx) {
        answer.push(-1);
        break;
      }
      if (queue[idx][0] === destination) {
        answer.push(queue[idx][1]);
        break;
      }

      let [now, d] = queue[idx];

      for (let k = 0; k < map[now].length; k++) {
        let nxt = map[now][k];
        if (visited[nxt]) continue;
        queue.push([nxt, d + 1]);
        visited[nxt] == true;
      }

      ++idx;
    }
  }
  return answer;
}

solution(
  5,
  [
    [1, 2],
    [1, 4],
    [2, 4],
    [2, 5],
    [4, 5],
  ],
  [1, 3, 5],
  5
);
