const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `3 4 3
abcb
bcaa
abac
aba
abc
cab`
)
    .trim()
    .split('\n');

const [M, N, K] = input[0].split(' ').map(Number);
const MAP = [];
const str = [];
for (let i = 1; i <= M; i++) {
    MAP.push(input[i].split(''));
}

for (let i = M + 1; i <= M + K; i++) {
    str.push(input[i].split(''));
}

console.log(str);
const main = () => {
    //북쪽부터 시계방향
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

    let x = 0;
    let y = 0;
};

const DFS = (x, y) => {
    while (true) {
        if (x == N - 1 && y == M - 1) break;
        if (x < 0) x = M;
        if (x > N - 1) x = 0;
        if (y < 0) y = N;
        if (y > M - 1) y = 0;
    }
};

main(input);
