const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `7
6
1 2
2 3
1 5
5 2
5 6
4 7
`
)
    .trim()
    .split("\n");

/*
인접행렬 이용, 양방향 
*/
const count = Number(input[0]);
const node = Array.from({ length: count + 1 }, () => []);
const visited = Array(count + 1).fill(false);
for (let i = 2; i < 2 + Number(input[1]); i++) {
    let [n1, n2] = input[i].split(" ").map(Number);
    node[n1].push(n2);
    node[n2].push(n1);
}

//감염된 컴퓨터 보관
const warm = [];
warm.push(1);
visited[1] = true;
start = 0;
while (start < warm.length) {
    let neighbor = node[warm[start]];
    for (let i = 0; i < neighbor.length; i++) {
        if (visited[neighbor[i]] === false) {
            warm.push(neighbor[i]);
            visited[neighbor[i]] = true;
        }
    }
    start++;
}

console.log(warm.length - 1);
