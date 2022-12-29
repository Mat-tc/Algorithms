const fs = require('fs');
let input =
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : fs
        .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
        .toString()
        .trim()
        .split('\r\n');
solution(input);

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);

  //1. 좌표 입력받기, 부모 배열
  const map = [];
  const parent = [];
  for (let i = 1; i <= 4; i++) {
    map[i] = input[i].split(' ').map(Number);
    parent[i] = i;
  }

  for (let i = 1 + N; i < 1 + N + M; i++) {
    let [n1, n2] = input[i].split(' ').map(Number);

    n1 < n2 ? (parent[n2] = n1) : (parent[n1] = n2);
  }

  const getParent = (x) => {
    if (parent[x] == x) return x;
    return (parent[x] = getParent(parent[x]));
  };

  const unionParent = (a, b) => {
    a = getParent(a);
    b = getParent(b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
  };

  const findParent = (a, b) => {
    a = getParent(a);
    b = getParent(b);
    if (a == b) return true;
    else return false;
  };

  const D = [];

  //각 점별 거리 계산하기
  for (let i = 1; i < N; i++) {
    let [x, y] = map[i];
    for (let j = i + 1; j <= N; j++) {
      let [x2, y2] = map[j];
      D.push([i, j, Math.sqrt((x2 - x) ** 2 + (y2 - y) ** 2)]);
    }
  }
  D.sort((a, b) => a[2] - b[2]);

  let answer = 0;
  let cnt = M;

  for (let i = 0; i < D.length; i++) {
    if (cnt >= N) break;
    let [a, b, d] = D[i];
    if (findParent(a, b)) continue;
    unionParent(a, b);
    answer += d;
  }
  console.log(answer.toFixed(2));
}
