const fs = require('fs');
let input = fs
  .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
  .toString()
  .trim()
  .split('\r\n');
solution(input);

function solution(input) {
  const [N, M] = input.shift().split(' ').map(Number);
  const map = input.map((arr) => arr.split(' ').map(Number));


  // 1. 집의 위치 좌표 : H, 치킨집의 위치좌표 : C 기억
  const H = [];
  const C = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] == 1) H.push([j, i]);
      else if (map[i][j] == 2) C.push([j, i]);
    }
  }

  const HLength = H.length;


  //2. BFS를 이용해서 하나하나씩 조합을 만들어서 실행해보도록 하지 . .>>>>>>> 8675aeee8dc3128fb308cf44ef19e72f9227c848
  // start => 현재 방문한 치킨짐 위치, cnt => M의 값을 넘는지 확인하기 위함
  // return 값 => 현재 좌표와의 거리
  const BFS = (start, cnt) => {
    let c_h = [];

    let min = 99999;

    for (let home = 0; home < HLength; home++) {
      c_h[home] =
        Math.abs(H[home][0] - C[start][0]) + Math.abs(H[home][1] - C[start][1]);
    }

    // ! 종료조건
    if (cnt == M) return c_h;

    for (let i = start + 1; i < C.length; i++) {
      let res = BFS(i, cnt + 1);
      // 여기부분 수정해야해

      let buffer = [];
      for (let k = 0; k < HLength; k++) {
        buffer[k] = Math.min(res[k], c_h[k]);
      }
      let buffer_sum = buffer.reduce((a, b) => a + b, 0);
      if (min > buffer_sum)
        // c_h 값이 여기서 갱신되면 안돼
        min = buffer_sum;
    }

    console.log(min);
    return min;
  };

  let min = 9999;
  for (let i = 0; i < C.length; i++) {
    min = Math.min(BFS(i, 1), min);
  }
  console.log(min);

  return min;
