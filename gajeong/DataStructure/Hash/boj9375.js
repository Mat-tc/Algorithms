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
        let number = 1;
        for (let i = 0; i < keys.length; i++) {
            number *= clothes[keys[i]].length + 1;
        }
        ans.push(number - 1);

        idx += cnt + 1;
    }
    console.log(ans.join('\n'));
};

main(input);
