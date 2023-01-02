const fs = require("fs");
let input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs
        .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
        .toString()
        .trim()
        .split("\r\n");
solution(input);

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const max = 1000 * N;
  const map = Array.from(Array(N + 1), () => Array(N + 1).fill(max));

  for (let i = 1; i <= N; i++) {
    map[i][i] = 0;
  }
  for (let i = 1; i <= M; i++) {
    let [start, end, cost] = input[i].split(" ").map(Number);
    map[start][end] = cost;
  }

  //플로이드
  for (let middle = 1; middle <= N; middle++) {
    for (let start = 1; start <= N; start++) {
      for (let end = 1; end <= N; end++) {
        if (start == end || start == middle || end == middle) continue;
        map[start][end] = Math.min(
          map[start][end],
          map[start][middle] + map[middle][end]
        );
      }
    }
  }

  // 친구의 위치로부터, 가장 거리가 짧은 지점을 구하는건데,.. .. . ㅠㅜㅜ

  const friends = input[input.length - 1].split(" ").map(Number);
  const dist = [0];
  for (let place = 1; place <= N; place++) {
    let d = 0;
    for (let i = 0; i < friends.length; i++) {
      if (map[place][friends[i]] + map[friends[i]][place] > d)
        dist[place] = map[place][friends[i]] + map[friends[i]][place];
    }
  }

  let point = Math.min(...dist.slice(1, N + 1));

  const answer = [];
  for (let i = 1; i <= N; i++) {
    if (dist[i] == point) answer.push(i);
  }

  console.log(answer.join(" "));
}
