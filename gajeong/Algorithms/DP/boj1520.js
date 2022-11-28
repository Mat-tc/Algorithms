const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `4 5
50 45 37 32 30
35 50 40 20 25
30 30 25 17 28
27 24 22 15 10`
)
    .trim()
    .split('\n');

/*
 */
const main = (input) => {
    const [N, M] = input[0].split(' ').map(Number);
    const Map = [];
    const visited = Array.from(Array(N), () => Array(M).fill(-1));
    for (let i = 1; i <= N; i++) {
        Map.push(input[i].split(' ').map(Number));
    }

    const stack = [[0, 0]];

    //상 우 하 좌
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    visited[0][0] = 1;

    while (stack.length) {
        let [y, x] = stack.pop();

        for (let i = 0; i < 4; i++) {
            let nX = x + dx[i];
            let nY = y + dy[i];
            if (nX < 0 || nY < 0 || nX > M - 1 || nY > N - 1) continue;
            // 조건에 맞는 좌표를 stack에 집어넣음
            if (Map[nY][nX] < Map[y][x]) {
                stack.push([nY, nX]);
                if (visited[nY][nX] === -1) visited[nY][nX] = visited[y][x];
                // +=1  이 맞는지도 정확히 모르겠음
                else visited[nY][nX] += 1;
            }
        }
    }
    console.log(visited[N - 1][M - 1]);
};

main(input);
