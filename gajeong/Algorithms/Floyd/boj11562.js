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
  const [n, m] = input[0].split(' ').map(Number);
  const map = Array.from(Array(n + 1), () => Array(n + 1).fill(30001));

  for (let i = 1; i <= m; i++) {
    let [start, end, way] = input[i].split(' ').map(Number);
    //양 방향일때 비용  0
    if (way == 1) {
      map[end][start] = 0;
      map[start][end] = 0;
    }
    //단방향이면 1
    else {
      map[start][end] = 0;
      map[end][start] = 1;
    }
  }

  for (let i = 1; i <= n; i++) {
    map[i][i] = 0;
  }

  for (let middle = 1; middle <= n; middle++) {
    for (let start = 1; start <= n; start++) {
      for (let end = 1; end <= n; end++) {
        //if (start == middle || start == end || middle || end) continue;
        map[start][end] = Math.min(
          map[start][end],
          map[start][middle] + map[middle][end]
        );
      }
    }
  }

  const answer = [];
  const order = Number(input[1 + m]);

  for (let i = 2 + m; i < 2 + m + order; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    answer.push(map[start][end]);
  }
  console.log(answer.join('\n'));
}
