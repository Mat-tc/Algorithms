const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `8 2
1 2 3 4 5 6 7 8`
)
    .trim()
    .split('\n');

const main = (input) => {
    const [N, K] = input.shift().split(' ').map(Number);
    const arr = input[0].split(' ').map(Number);

    let [start, end] = [0, 0];
    let cnt = K;
    let len = 0;

    while (end < N) {
        if (cnt < 0) {
            len = end - start - K - 1;
            //시작점이 짝수라면
            if (arr[start] % 2 === 0) start++;
            //시작점 -> 홀수
            else {
                start++;
                if (cnt < K) cnt++;
            }
        }
        //홀수라면,
        if (arr[end] % 2 == 1) {
            cnt--;
            end++;
            continue;
        } else {
            end++;
            continue;
        }
    }
    len = Math.max(len, end - start - (K - cnt));
    console.log(len);
};

main(input);
