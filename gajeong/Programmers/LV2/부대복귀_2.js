// * memoization 을 해야할 것 같은데
// * 100,000 * 100,000 으로 하고 있는데 ..

function solution(n, roads, sources, destination) {
  var answer = [];
  const map = Array.from(Array(100000), () => Array(100000).fill(99999));

  for (let i = 0; i < roads.length; i++) {
    let [a, b] = roads[i];
    map[a][b] = 1;
    map[b][a] = 1;
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
    for (let v = 1; v < 100001; v++) {
      if (map[start][v] == 99999) continue;
      let nxt = map[start][v];
      visited[nxt] = true;
      queue.push([nxt, map[start][nxt]]);
    }

    // queue 에 [[현재 값, dist길이]] 순으로 넣을거임
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

      for (let k = 1; k < 100001; k++) {
        if (map[now][k] == 99999 || visited[now][k]) continue;
        let nxt = map[now][k][0];
        queue.push([nxt, d + 1 + map[now][k][1]]);
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
