const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `4 1
1 1
4 1 2 3 4
`
)
    .trim()
    .split("\n");
function solution(input) {
    // 0. 진실을 아는 member 생성, 기본 로직
    const [N, P] = input.shift().split(" ").map(Number);
    const truth = input.shift().split(" ").map(Number);
    const member = Array(N + 1).fill(false);
    for (let i = 0; i < truth.length; i++) {
        if (i == 0 && truth[i] == 0) return P;
        if (i > 0) member[truth[i]] = true;
    }

    // 1. 연결리스트로 받기
    const node = Array.from({ length: N + 1 }, () => []);
    for (let i = 0; i < input.length; i++) {
        let party = input[i].split(" ").map(Number);
        if (party[0] > 1) {
            for (let j = 1; j < party.length - 1; j++) {
                node[party[j]].push(party[j + 1]);
                node[party[j + 1]].push(party[j]);
            }
        }
    }

    // 2. 노드 돌면서 T 상태 재확인 (사람 수 만큼)
    const q = [...truth.slice(1, truth.length)];
    let start = 0;
    while (start < q.length) {
        let arr = node[q[start]];
        for (let i = 0; i < arr.length; i++) {
            if (member[arr[i]] == false) {
                member[arr[i]] = true;
                q.push(arr[i]);
            }
        }
        start++;
    }

    let answer = 0;
    // 3. 파티 돌면서 거짓말 할 수 있는지 확인
    for (let i = 0; i < input.length; i++) {
        let ar = input[i].split(" ").map(Number);
        let st = true;
        for (let k = 1; k <= ar[0]; k++) {
            if (member[ar[k]] == true) {
                st = false;
                break;
            }
        }
        if (st == true) answer += 1;
    }

    return answer;
}

console.log(solution(input));
