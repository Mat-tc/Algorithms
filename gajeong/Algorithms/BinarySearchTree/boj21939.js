const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `5
1000 1
1001 2
1002 1
19998 78
2667 37
2042 55
8
add 1402 59
recommend 1
solved 1000
solved 19998
recommend 1
recommend -1
solved 1001
recommend -1`
)
    .trim()
    .split("\n");

const main = (input) => {
    // key : 문제번호, value : 문제 난이도
    const Q = {};
    const LV = {};

    const insert = (num, level) => {
        if (Q[num]) {
            let before_level = Q[num];
            let before_arr = LV[before_level];
            //이전 레벨에서 해당 문제 번호 삭제
            let res = before_arr.filter((e) => e != num);
            if (res.length === 0) {
                delete LV.before_level;
            } else LV[before_level] = res;

            //새 레벨에 해당 문제 삽입
            if (LV[level]) LV[level].push(num);
            else LV[level] = [num];
        } else {
            if (LV[level]) LV[level].push(num);
            else LV[level] = [num];
        }
        Q[num] = level;
    };

    const del = (num) => {
        let lv = Q[num];
        let p = LV[lv];
        let res = p.filter((e) => e != num);
        if (res.length === 0) delete LV.lv;
        else LV[lv] = res;
        delete Q.num;
    };

    const N = Number(input[0]);
    //입력처리
    for (let i = 1; i <= N; i++) {
        let [num, level] = input[i].split(" ");
        insert(num, level);
    }

    console.log(Q, LV);

    let answer = [];
    //명령어 처리
    const M = Number(input[N + 1]);
    for (let i = 2 + N; i <= 1 + N + M; i++) {
        let od = input[i].split(" ");
        let order = od[0];
        switch (order) {
            case "recommend":
                let way = od[1];
                if (way === "1") {
                    let high_level = Math.max(...Object.keys(LV));
                    answer.push(Math.max(...LV[high_level]));
                } else {
                    let low_level = Math.min(...Object.keys(LV));
                    answer.push(Math.min(...LV[low_level]));
                }
                break;
            case "add":
                let num = od[1];
                let level = od[2];
                insert(num, level);
                break;
            case "solved":
                del(od[1]);
                break;
        }
    }

    console.log(answer.join("\n"));
};

main(input);
