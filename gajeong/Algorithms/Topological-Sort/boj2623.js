const fs = require("fs");
let input =
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : fs
              .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
              .toString()
              .trim()
              .split("\n");
solution(input);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const node = [];
    const visited = Array(N + 1).fill(false);
    const indegree = Array(N + 1).fill(0);

    //연결리스트 받기 , indegree 갱신
    for (let i = 1; i <= M; i++) {
        let arr = input[i].split(" ").map(Number);
        for (let j = 1; j < arr[0]; j++) {
            if (!node[arr[j]]) {
                node[arr[j]] = [arr[j + 1]];
            } else {
                node[arr[j]].push(arr[j + 1]);
            }
            indegree[arr[j + 1]] += 1;
        }
    }

    //in_degree 가 0인 얘부터 큐에 담기
    const queue = [];
    for (let i = 1; i <= N; i++) {
        if (indegree[i] == 0) {
            queue.push(i);
            visited[i] = true;
        }
    }
    //BFS ? DFS 이용해서 출력순서 받기
    let idx = 0;
    while (idx < queue.length) {
        let num = queue[idx];
        let nxt = node[num];
        if (!node[num]) {
            idx++;
            continue;
        }
        for (let i = 0; i < nxt.length; i++) {
            if (nxt[i] == visited) break;

            indegree[nxt[i]] -= 1;
            if (indegree[nxt[i]] == 0) {
                queue.push(nxt[i]);
                visited[[nxt[i]]] = true;
            }
        }
        idx++;
    }
    if (queue.length == N) console.log(queue.join("\n"));
    else console.log(0);
}
