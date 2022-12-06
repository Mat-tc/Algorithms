const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `2
1000 1
2000 1
4
recommend -1
solved 1000
add 1000 1000
recommend -1`
)
    .trim()
    .split('\n');

const main = (input) => {
    // key : 문제번호, value : 문제 난이도
    const q = {};
    const l = {};

    const N = Number(input[0]);
    //입력처리
    for (let i = 1; i <= N; i++) {
        let [num, level] = input[i].split(' ').map(Number);
        //문제번호가 이미 있으면,
        if (q[num]) {
            let before_level = q[num];
            let arr = l[before_level];
            let res = arr.filter((e) => e != num);
            l[before_level] = res;

            //새로운 번호로 갱신
            q[num] = level;
            if (l[level]) {
                l[level].push(num);
            } else {
                l[level] = [num];
            }
        } else {
            q[num] = level;
            if (l[level]) {
                l[level].push(num);
            } else {
                l[level] = [num];
            }
        }
    }
    let answer = [];
    const M = Number(input[N + 1]);
    for (let i = 2 + N; i <= 1 + N + M; i++) {
        let od = input[i].split(' ');
        switch (od[0]) {
            case 'add':
                if (q[od[1]]) {
                    let arr = l[q[od[1]]];
                    let res = arr.filter((e) => e != od[1]);
                    l[q[od[1]]] = res;
                    q[od[1]] = Number(od[2]);
                } else {
                    q[od[1]] = Number(od[2]);
                    l[Number(od[2])] = od[1];
                }
                break;
            case 'recommend':
                if (od[1] === '1') {
                    let key = Math.max(...Object.keys(l));

                    let arr = l[key];
                    answer.push(Math.max(arr));
                } else {
                    let key = Math.min(...Object.keys(l));
                    let arr = l[key];
                    answer.push(Math.min(...arr));
                }
                break;
            case 'solved':
                let c = od[1];
                let lv = q[c];
                let arr = l[lv];
                let res = arr.filter((e) => e != c);

                if (res.length === 0) delete l[lv];
                else l[lv] = res;
                delete q[c];
        }
    }
    console.log(answer);
    // console.log(answer.join('\n'));
};

main(input);
