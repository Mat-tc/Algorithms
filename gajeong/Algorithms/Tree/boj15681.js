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
    const [N, R, Q] = input[0].split(" ").map(Number);
    const node = [];
    const P = Array(N + 1).fill(-1);

    //1 . 연결리스트로 만들기
    for (let i = 1; i <= N - 1; i++) {
        let [n1, n2] = input[i].split(" ").map(Number);
        if (!node[n1]) node[[n1]] = [];
        if (!node[n2]) node[[n2]] = [];
        node[n1].push(n2);
        node[n2].push(n1);
    }

    // 2.부모 노드 부터 부모 노드를 담는 리스트 채우기  부모 노드에는 0
    P[R] = 0;
    let queue = [R];
    let start = 0;
    while (start < queue.length) {
        let parent = queue[start];
        let child = node[parent];
        for (let i = 0; i < child.length; i++) {
            if (P[child[i]] != -1) continue;
            P[child[i]] = parent;
            queue.push(child[i]);
        }
        node[parent] = null;
        start++;
    }

    // 3. Q에서 지정한 부모노트를 큐에 넣어서 length 계산
    const answer = [];
    for (let i = input.length - Q; i < input.length; i++) {
        let arr = [Number(input[i])];
        let s = 0;

        while (s < arr.length) {
            let p = arr[s];
            let c = node[p];

            for (let j = 0; j < c.length; j++) {
                if (P[c[j]] == p) arr.push(c[j]);
            }
            s++;
        }
        answer.push(s);
    }

    console.log(answer.join("\n"));
}
