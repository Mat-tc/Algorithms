const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`
)
    .trim()
    .split('\n');

const main = (input) => {
    const CASE = Number(input.shift());
    const ans = [];
    let idx = 0;
    for (let i = 0; i < CASE; i++) {
        let cnt = Number(input[idx]);
        let clothes = {};
        for (let j = 1; j <= cnt; j++) {
            let [item, k] = input[idx + j].split(' ');
            if (clothes[k]) {
                clothes[k].push(item);
            } else {
                clothes[k] = [item];
            }
        }
        let keys = Object.keys(clothes);
        let arr = [];
        for (let i = 0; i < keys.length; i++) {
            arr.push(clothes[keys[i]].length);
        }

        //모든 경우의 수 계산해야하는데. .  방법이 떠오르지 않는다.

        idx += cnt + 1;
        console.log(clothes);
    }
};

main(input);
