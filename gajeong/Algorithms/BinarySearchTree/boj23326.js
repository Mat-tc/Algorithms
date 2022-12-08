const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5 7
0 1 0 0 1
3
1 2
3
2 9
3
1 5
3`
)
    .trim()
    .split('\n');

const move = (size) => {
    size %= N;
    point += size;
    if (point > N - 1) point -= N;
};

const cnt = () => {
    let dummy = [...Map.slice(point, Map.length), ...Map.slice(0, point)];
    for (let i = 0; i < N; i++) {
        if (dummy[i] == 1) return i;
    }
    return -1;
};

const ans = [];
const [N, Q] = input[0].split(' ').map(Number);
const M = [];
const Map = input[1].split(' ');
let point = 0;

for (let i = 2; i < 2 + Q; i++) {
    let od = input[i].split(' ');
    switch (od[0]) {
        case '1':
            let num = Number(od[1]) - 1;
            Map[num] ? (Map[num] = 0) : (Map[num] = 1);
            break;
        case '2':
            let size = Number(od[1]);
            move(size);
            break;
        case '3':
            ans.push(cnt());
    }
}

console.log(ans.join('\n'));
