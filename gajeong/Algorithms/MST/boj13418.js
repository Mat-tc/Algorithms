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
  const node = [];
  let parent = Array.from({ length: N + 1 }, (value, index) => index);
  //경로 입력받기
  for (let i = 1; i <= M + 1; i++) {
    node.push(input[i].split(' ').map(Number));
  }
  node.sort((a, b) => a[2] - b[2]);

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

  let min = 0;
  let max = 0;

  for (let i = 0; i < node.length; i++) {
    let [n1, n2, cost] = node[i];
    if (findParent(n1, n2)) continue;
    else unionParent(n1, n2);

    if (cost == 0) max += 1;
  }

  parent = Array.from({ length: N + 1 }, (value, index) => index);
  for (let i = M + 1; i > 0; i--) {
    let [n1, n2, cost] = node[i - 1];
    if (findParent(n1, n2)) continue;
    else unionParent(n1, n2);

    if (cost == 0) min += 1;
  }

  console.log(max ** 2 - min ** 2);
}
