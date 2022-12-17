const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2
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
    for (let k = 1 + idx; k <= E + idx; k++) {
        let [start, end] = input[k].split(" ").map(Number);
        node[start].push(end);
        node[end].push(start);
    }
    let point = 0;
    let st = 0;
    let [start_num, end] = input[idx + 1].split(" ").map(Number);
    let status = true;
    let q = [start_num];
    visited[start_num] = 0;
    while (point < q.length) {
        let arr = node[q[point]];
        for (let k = 0; k < arr.length; k++) {
            if (visited[arr[k]] == -1) {
                visited[arr[k]] = st == 0 ? 1 : 0;
                q.push(arr[k]);
            } else {
                if (visited[arr[k]] == st) {
                    status = false;
                    break;
                }
            }
        }

        point++;
        st == 0 ? (st = 1) : (st = 0);
    }
    status == true ? answer.push("YES") : answer.push("NO");

    idx += E + 1;
}

console.log(answer.join("\n"));
