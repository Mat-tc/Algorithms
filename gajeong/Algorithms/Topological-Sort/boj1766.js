const fs = require('fs');
let input =
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : fs
              .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
              .toString()
              .trim()
              .split('\r\n');
solution(input);

function solution(input) {
    const [N, M] = input[0].split(' ').map(Number);
    const in_degree = Array(N + 1).fill(0);
    const visited = Array(N + 1).fill(false);
    const node = [];
    for (let i = 1; i <= M; i++) {
        let [pre, after] = input[i].split(' ').map(Number);
        in_degree[after] += 1;
    }

    const stack = [];
    for (let i = 1; i <= N; i++) {
        if (in_degree[i] == 0) {
            stack.push(i);
            visited[i] = true;
        }
    }
    const answer = [];
    while (stack.length) {
        let num = stack.pop();
    }
}
