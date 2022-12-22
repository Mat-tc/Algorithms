const fs = require("fs");
let input =
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : fs
              .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
              .toString()
              .trim()
              .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const total = Array(N).fill(0);
const sub = Array.from({ length: N + 1 }, () => []);
const Parent = input[1].split(" ").map(Number);
const visited = Array(N + 1).fill(false);

// 직속 부하 정보를 담은 2차원 배열
for (let i = 1; i < N; i++) {
    sub[Parent[i]].push(i + 1);
}

// M 만큼 점수 누적 계산

for (let i = 2; i < input.length; i++) {
    let [id, score] = input[i].split(" ").map(Number);
    let q = [id];
    let start = 0;
    visited.fill(false);
    while (start < q.length) {
        visited[q[start]] = true;
        total[q[start] - 1] += score;

        let s = sub[q[start]];
        for (let k = 0; k < s.length; k++) {
            if (visited[s[k]] == true) continue;
            q.push(s[k]);
        }
        start++;
    }
}

console.log(total.join(" "));

/**
 * DFS를 이용하여 칭찬을 한번에 하도록 수정해보기
 */
