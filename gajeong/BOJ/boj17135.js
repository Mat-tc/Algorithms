// TODO 커플디펜스

// ! 틀린이유 => "동시에 공격한다"
const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5 1
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
1 1 1 1 1
`
)
  .trim()
  .split('\n');

//
solution(input);
function solution(input) {
  //N : 세로 , M : 가로, D : 공격 제한 거리
  const [N, M, D] = input[0].split(' ').map(Number);
  const Map = [];
  for (let i = 1; i < input.length; i++) {
    Map.push(input[i].split(' ').map(Number));
  }
  Map.push(Array(M).fill(0));
  console.log(Map);
  let result = [];
  const list = Array.from({ length: M }, (value, index) => index); // 중복 조합의 원소들

  const CB = getCombinations(list, 3);

  let m = [];
  // 궁수들의 좌표이동
  const answer = [];
  CB.forEach((element) => {
    m = [];
    m = Map.map((v) => v.slice());
    let cnt = 0;
    for (let i = N; i > 0; i--) {
      for (let e = 0; e < 3; e++) {
        let queue = [];
        //x좌표, y좌표
        queue.push([element[e], i, 0]);
        let st = false;
        while (queue.length) {
          console.log(queue);
          let [x, y, dist] = queue.shift();
          if (m[y][x] == 1) {
            m[y][x] = 0;
            st = true;
            break;
          }
          //양궁 거리 조건
          if (dist == D) continue;
          const dx = [-1, 0, 1];
          const dy = [0, -1, 0];
          for (let d = 0; d < 3; d++) {
            let toX = x + dx[d];
            let toY = y + dy[d];
            //범위 조건
            if (toX < 0 || toY < 0 || toX > M || toY > N) continue;
            queue.push([toX, toY, dist + 1]);
          }
        }
        if (st) cnt++;
      }
      console.log(cnt);
    }
    answer.push(cnt);
  });
  console.log(answer);
  console.log(Math.max(...answer));
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}
