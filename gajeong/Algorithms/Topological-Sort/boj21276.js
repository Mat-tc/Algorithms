const fs = require('fs');
let input =
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : fs
              .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
              .toString()
              .trim()
              .split('\r\n');
solution(input);

//객체 이용
function solution(input) {
    const N = Number(input[0]);
    const name = input[1].split(' ');
    const M = Number(input[2]);
    const People = {};

    for (let i = 0; i < N; i++) {
        People[name[i]] = {
            sb: [],
            in: 0,
        };
    }

    //자식 입력받기
    for (let i = 3; i < 3 + M; i++) {
        let [sb, p] = input[i].split(' ');
        People[p].sb.push(sb);
        People[sb].in += 1;
    }
    const root = [];
    const stack = [];
    for (let i = 0; i < N; i++) {
        if (People[name[i]].in == 0) {
            root.push(name[i]);
            stack.push(name[i]);
        }
    }

    const sb_ans = [];
    //queue 이용해서 BFS
    //1. in이 0인 사람 받기
    while (stack.length) {
        let p = stack.pop();
        let siblings = People[p].sb;
        let ans = [p, 0];
        for (let i = 0; i < siblings.length; i++) {
            People[siblings[i]].in -= 1;
            if (People[siblings[i]].in == 0) {
                ans.push(siblings[i]);
                ans[1] += 1;
                stack.push(siblings[i]);
            }
        }
        sb_ans.push(ans);
    }
    sb_ans.sort();
    root.sort();
    const answer = [];
    answer.push(root.length);
    answer.push(root.join(' '));
    for (let i = 0; i < sb_ans.length; i++) {
        answer.push(sb_ans[i].join(' '));
    }
    console.log(answer.join('\n'));
}
