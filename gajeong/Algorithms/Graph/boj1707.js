const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `3
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2
3 2 
1 3
2 3
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
for (let i = 0; i < T; i++) {
    let [V, E] = input[idx].split(" ").map(Number);
    let visited = Array(V + 1).fill(-1);
    let node = Array.from({ length: V + 1 }, () => []);

    let q = [];
    for (let k = 1 + idx; k <= E + idx; k++) {
        let [start, end] = input[k].split(" ").map(Number);
        node[start].push(end);
        node[end].push(start);
        if (k == 1 + idx) {
            q.push(start);
            visited[start] = 0;
        }
    }

    let point = 0;
    let status = true;

    while (point < q.length) {
        let arr = node[q[point]];
        let st = visited[q[point]];
        for (let k = 0; k < arr.length; k++) {
            if (visited[arr[k]] == -1) {
                st == 0 ? (visited[arr[k]] = 1) : (visited[arr[k]] = 0);
                q.push(arr[k]);
            } else {
                if (visited[arr[k]] == st) {
                    status = false;
                    break;
                }
            }
        }

        point++;
    }
    for (let k = 1; k <= visited.length; k++) {
        if (visited[k] == -1) status = false;
    }
    status == true ? answer.push("YES") : answer.push("NO");

    idx += E + 1;
}

console.log(answer.join("\n"));
