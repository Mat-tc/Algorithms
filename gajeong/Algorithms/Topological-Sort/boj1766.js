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
    const node = [];
    for (let i = 1; i <= M; i++) {
        let [pre, after] = input[i].split(' ').map(Number);
        if (!node[pre]) node[pre] = [];
        node[pre].push(after);
        in_degree[after] += 1;
    }

    const stack = [];
    for (let i = 1; i <= N; i++) {
        if (in_degree[i] == 0) {
            stack.push(i);
        }
    }
    const answer = [];
    while (stack.length) {
        let num = stack.pop();
        let arr = node[num];
        for (let i = 0; i < arr.length; i++) {
            in_degree[arr[i]] -= 1;
            if (in_degree[arr[i]] == 0) {
                stack.push(arr[i]);
            }
        }
    }
    console.log(answer);
}
