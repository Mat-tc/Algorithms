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

const main = (input) => {
    const [M, N, K] = input.shift().split(' ').map(Number);
    const map = {};
    const answer = [];

    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

    //문자마다 좌표 위치 배열 객체 만듬
    for (let j = 0; j < M; j++) {
        for (let i = 0; i < N; i++) {
            if (map[input[j][i]]) map[input[j][i]].push([i, j]);
            else map[input[j][i]] = [[i, j]];
        }
    }

    //경우의 수 count
    for (let c = M + 1; c <= M + K + 1; c++) {
        let cnt = 0;
        for (let y = 0; y < M; y++) {
            for (let x = 0; x < N; x++) {
                check(x);
            }
        }
    }

    const check = () => {};
};

main(input);
