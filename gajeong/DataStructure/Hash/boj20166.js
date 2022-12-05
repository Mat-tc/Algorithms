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

const [M, N, K] = input.shift().split(' ').map(Number);

const map = [];
for (let i = 0; i < M; i++) {
    map.push(input[i].split(''));
}

const answer = [];

//비교해야할 문자, 지금 좌표 위치
const dfs = (str, x, y) => {
    let queue = [];
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
    let arr = map[str];
    for (let d = 0; i < 8; d++) {
        let to_x = x + dx[d];
        let to_y = y + dy[d];
        if (to_x < 0) to_x = N - 1;
        if (to_x > N - 1) to_x = 0;
        if (to_y < 0) to_y = M - 1;
        if (to_y > M - 1) to_y = 0;
    }
    return queue;
};
