const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `3 3
1
5
3`
)
    .trim()
    .split('\n');

const main = (input) => {
    const [N, M] = input.shift().split(' ').map(Number);
    input = input
        .sort((a, b) => {
            return a - b;
        })
        .map(Number);
    let start = 0;
    let end = 0;
    let min = 2000000001;
    while (end < N + 1) {
        if (input[end] - input[start] >= M) {
            if (input[end] - input[start] < min)
                min = input[end] - input[start];
            start++;
        } else end++;
    }
    console.log(min);
};

main(input);
