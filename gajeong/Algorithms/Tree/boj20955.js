const fs = require('fs');
let input =
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : fs
              .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
              .toString()
              .trim()
              .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const node = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
let cycle = 0;

//01. 노드 삽입
for (let i = 1; i <= M; i++) {
    let [n1, n2] = input[i].split(' ').map(Number);

    node[n1].push(n2);
    node[n2].push(n1);
}

// 02. 각 시작점으로부터 dfs 수행 (사이클 갯수 구하기)
for (let i = 1; i <= N; i++) {
    visited.fill(false);
    visited[i] = true;
    DFS(i, 0);
}

// 03. DFS
function DFS(now, before) {
    // 연결된 노드
    let neighbor = node[now];

    for (let i = 0; i < neighbor.length; i++) {
        if (neighbor[i] < i) continue;
        if (neighbor[i] == -1) continue;
        // 바로 직전에 방문한 노드라면 넘김,
        if (neighbor[i] == before) continue;
        //사이클 있다는 조건
        if (neighbor[i] != before && visited[neighbor[i]] == true) {
            neighbor[i] = -1;
            cycle++;
            return;
        }
        DFS(neighbor[i], now);
    }
}

let remove = cycle / 2;
let e = M - remove;
let add = N - 1 - e;
console.log(add + remove);
