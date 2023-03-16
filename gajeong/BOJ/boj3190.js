const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync(0).toString().trim().split("\n")
    : `20
13
6 15
7 18
20 14
14 13
11 9
7 10
3 18
10 10
13 13
13 5
6 9
10 4
4 3
19
17 D
36 D
41 D
54 D
56 L
57 L
63 L
68 L
72 L
73 L
76 D
79 D
82 D
85 D
87 D
93 L
105 D
110 D
114 D`
)
  .trim()
  .split("\n");

function solution(input) {
  const N = Number(input[0]);
  const K = Number(input[1]);
  const Map = Array.from(Array(N), () => Array(N).fill(0));
  for (let i = 2; i < 2 + K; i++) {
    let [r, c] = input[i].split(" ").map(Number);
    Map[r - 1][c - 1] = 1;
  }

  const C = Number(input[2 + K]);
  const Direction = [];
  for (let i = K + 3; i < K + 3 + C; i++) {
    Direction.push(input[i].split(" "));
  }

  // [ y , x ] 순으로 합시다.
  const baem = [[0, 0]];
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let d = 0;
  let t = 0;
  let c = 0;
  let length = 0;
  //조건에 걸릴때까지 while 조건
  while (true) {
    ++t;

    let head = [baem[length][0] + dy[d], baem[length][1] + dx[d]];
    length++;
    // 사과가 없다면, 꼬리 없애 주기
    if (Map[head[0]][head[1]] != 1 && t > 1) {
      let tail = baem.shift();
      --length;
      Map[tail[0]][tail[1]] = 0;
    }
    // 종료 조건 - (1) 범위
    if (head[0] < 0 || head[1] < 0 || head[0] > N - 1 || head[1] > N - 1) break;
    // 종료조건 - (2) 내 몸 닿기
    if (Map[head[0]][head[1]] == 2) break;

    //머리 위치 갱신
    Map[head[0]][head[1]] = 2;

    // 바꿔야하는 지시사항 시간에 도달했을 때.
    if (c < Direction.length) {
      if (t == Number(Direction[c][0])) {
        if (Direction[c][1] == "D") d++;
        else d--;

        if (d > 3) d = 0;
        if (d < 0) d = 3;
        c++;
      }
    }

    // 진행
    baem.push(head);
  }
  console.log(t);
}

solution(input);
