const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `1
10
20
15
25
10
20`
)
    .trim()
    .split('\n');

/*
 */
const main = (input) => {
    const max = Number(input[0]);
    input = input.map(Number);
    const stair_sum = Array.from(Array(max + 1), () => new Array(3));
    stair_sum[0][1] = 0;
    stair_sum[0][2] = 0;
    stair_sum[1][1] = input[1];
    stair_sum[1][2] = 0;
    if (max === 1) return console.log(input[1]);
    else {
        for (let i = 2; i <= max; i++) {
            stair_sum[i][1] =
                Math.max(stair_sum[i - 2][1], stair_sum[i - 2][2]) + input[i];
            stair_sum[i][2] = stair_sum[i - 1][1] + input[i];
        }
    }
    console.log(Math.max(stair_sum[max][1], stair_sum[max][2]));
};

main(input);
