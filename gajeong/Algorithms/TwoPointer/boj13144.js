const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `6
1 2 3 1 2 2`
)
    .trim()
    .split('\n');

const main = (input) => {
    const N = Number(input.shift());
    input = input[0].split(' ').map(Number);
    // 해당 원소들이 존재하는지 검사하는 상태 배열 (인덱스값 = 원소값)
    const st = Array(100001).fill(false);
    let start = 0;
    let end = start;
    let ans = 0;

    while (start < N) {
        if (end === N) {
            ans += end - start;
            start++;
            continue;
        }
        if (st[input[end]] === false) {
            st[input[end]] = true;
            if (end < N) end++;
        } else {
            ans += end - start;
            st[input[start]] = false;
            start++;
        }
    }

    console.log(ans);
};

main(input);
