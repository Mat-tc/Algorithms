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
  const N = Number(input.shift());
  const node = [];
  const parent = Array.from({ length: N }, (value, index) => index);
  let answer = 0;

  const getParent = (x) => {
    if (parent[x] == x) return x;
    return (parent[x] = getParent(parent[x]));
  };

  const unionParent = (a, b) => {
    a = getParent(a);
    b = getParent(b);
    if (a < b) parent[a] = b;
    else parent[b] = a;
  };

  const findParent = (a, b) => {
    a = getParent(a);
    b = getParent(b);
    if (a == b) return true;
    else return false;
  };
  //1. 행열의 좌표와, 비용 입력받기
  //[세로, 가로 ]
  for (let j = 0; j < input.length; j++) {
    let map = input[j].split(' ').map(Number);
    for (let i = 0; i < j; i++) {
      node.push([i, j, map[i]]);
    }
  }

  //2. 비용을 기준으로 정렬하기
  node.sort((a, b) => a[2] - b[2]);

  //3. 비용을 가지고 반복하기
  for (let i = 0; i < node.length; i++) {
    let [n1, n2, cost] = node[i];
    if (findParent(n1, n2)) continue;
    else unionParent(n1, n2);

    answer += cost;
  }
  console.log(answer);
}
