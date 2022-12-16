const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `7
0 0 0 1 0 0 0
0 0 0 0 0 0 1
0 0 0 0 0 0 0
0 0 0 0 1 1 0
1 0 0 0 0 0 0
0 0 0 0 0 0 1
0 0 1 0 0 0 0
`
)
    .trim()
    .split("\n");

/*
인접행렬 이용
이차원 배열로 하려고 했는데, 중첩 반복문 / 조건문이 많이 사용되어 중단함.
*/
const edge = Number(input.shift());

const visited = Array(edge).fill(false);
const graph = Array.from(Array(edge), () => Array(edge).fill(0));
let answer = [];
const node = Array.from({ length: edge }, () => []);
for (let i = 0; i < edge; i++) {
    let way = input[i].split(" ").map(Number);
    for (let j = 0; j < edge; j++) {
        if (way[j] === 1) node[i].push(j);
    }
}

for (let i = 0; i < edge; i++) {
    visited.fill(false);
    let queue = [i];
    let start = 0;
    while (start < queue.length) {
        let ngb = node[queue[start]];
        for (let k = 0; k < ngb.length; k++) {
            if (visited[ngb[k]] == false) {
                queue.push(ngb[k]);
                visited[ngb[k]] = true;
            }
        }
        start++;
    }
    for (let idx = 0; idx < edge; idx++) {
        if (visited[idx] === true) {
            graph[i][idx] = 1;
        }
    }
    answer.push(graph[i].join(" "));
}

console.log(answer.join("\n"));
