const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `1
3 2
1 2
1 3
`
)
    .trim()
    .split("\n");
/*
0 : red 
1 : blue
*/
const T = Number(input.shift());
const answer = [];
let idx = 0;
let node = [];
visited = [];
let status = true;
for (let i = 0; i < T; i++) {
    let [V, E] = input[idx].split(" ").map(Number);
    visited = Array(V + 1).fill(-1);
    node = Array.from({ length: V + 1 }, () => []);

    for (let k = 1 + idx; k <= E + idx; k++) {
        let [start, end] = input[k].split(" ").map(Number);
        node[start].push(end);
        node[end].push(start);
    }

    visited[1] = 1;
    status = true;

    for (let j = 1; j <= V; j++) {
        let arr = node[j];
        let st = visited[j];
        if (st == -1) visited[j] = 1;
        for (let k = 0; k < arr.length; k++) {
            if (visited[arr[k]] == -1) {
                st == 0 ? (visited[arr[k]] = 1) : (visited[arr[k]] = 0);
            } else {
                if (visited[arr[k]] == st) {
                    status = false;
                    break;
                }
            }
        }
    }

    status == true ? answer.push("YES") : answer.push("NO");

    idx += E + 1;
}

console.log(answer.join("\n"));
