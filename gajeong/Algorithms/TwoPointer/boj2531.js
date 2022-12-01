const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `8 30 4 30
7
9
7
30
2
7
9
25`
)
    .trim()
    .split("\n");

const main = (input) => {
    const [N, d, k, c] = input.shift().split(" ").map(Number);
    const arr = input.map(Number);

    let start = 0;
    let end = start + k;
    let cnt = 0;
    let ans = 0;
    //슬라이딩 윈도우
    while (start < N) {
        //영역 벗어나면 재영역 할당하기 위해
        if (end > N - 1) {
            end = end - N;
        }
        let p = [];
        //영역1.
        if (start < end) {
            p = arr.slice(start, end);
        }
        //영역2.
        else {
            p = [...arr.slice(start, N), ...arr.slice(0, N)];
        }
        //set함수 활용해서 하도록
        if (p.includes(c)) cnt = [...new Set(arr.slice(start, end + 1))].length;
        else cnt = [...new Set(p)].length;
        start++;
        end++;

        ans = Math.max(ans, cnt);
    }

    console.log(ans);
};

main(input);
