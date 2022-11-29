const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5
1 2 3 1 2`
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
        if (st[input[end]] === true || end === N) {
            for (let i = 1; i < end - start + 1; i++) {
                ans += i;
            }
            for (let i = start; i < end; i++) {
                st[input[i]] = false;
            }
            start = end;
        } else {
            st[input[end]] = false;
            end++;
        }
    }

    console.log(ans);
};

main(input);
