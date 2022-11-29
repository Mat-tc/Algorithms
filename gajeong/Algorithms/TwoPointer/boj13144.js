const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5
1 2 3 4 5`
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

    //start가 갱신되면, end 도 start값과 함께 갱신된다.
    while (start < N) {
        //end가 N에 도달하면, (전체원소) start++와 end 갱신
        if (end === N) {
            for (let i = start; i <= end; i++) {
                st[input[i]] = false;
            }
            start++;
            end = start;
            continue;
        }
        if (st[input[end]] == false) {
            ans++;
            st[input[end]] = true;
            end++;
        } else {
            //연속된 수열로 만들 수 없다면, start ++, end 갱신
            st[input[start]] = false;
            for (let i = start; i <= end; i++) {
                st[input[i]] = false;
            }
            start++;
            end = start;
        }
    }

    console.log(ans);
};

main(input);
