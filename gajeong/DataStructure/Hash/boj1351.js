const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `256 2 4`
)
    .trim()
    .split('\n');

const main = (input) => {
    const [N, P, Q] = input[0].split(' ').map(Number);
    const cnt = {};

    const recursion = (num) => {
        if (num < 1) {
            return 1;
        } else if (cnt[num]) {
            return cnt[num];
        }
        cnt[num] = recursion(parseInt(num / P)) + recursion(parseInt(num / Q));
        return cnt[num];
    };
    let ans = recursion(N);

    console.log(ans);
};

main(input);
