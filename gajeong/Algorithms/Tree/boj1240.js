const fs = require("fs");
let input =
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : fs
              .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
              .toString()
              .trim()
              .split("\n");

const [N, Q] = input[0].split(" ").map(Number);
const node = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
const answer = [];
for (let i = 1; i < N; i++) {
    let [n1, n2, d] = input[i].split(" ").map(Number);

    node[n1].push([n2, d]);
    node[n2].push([n1, d]);
}

for (let i = input.length - Q; i < input.length; i++) {
    visited.fill(false);

    let [start, end] = input[i].split(" ").map(Number);

    visited[start] = true;

    DFS(start, 0, end);
}

function DFS(num, dt, end) {
    //종료조건
    if (num == end) {
        answer.push(dt);
        return;
    }

    let nodes = node[num];
    for (let i = 0; i < nodes.length; i++) {
        if (visited[nodes[i][0]] == false) {
            visited[nodes[i][0]] = true;
            DFS(nodes[i][0], dt + nodes[i][1], end);
        }
    }
    return;
}

console.log(answer.join("\n"));
