const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `4`
)
    .trim()
    .split('\n');

const main = (input) => {
    const width = Number(input[0]);
    const branch = [0, 1, 2, 3];

    if (width < 4) console.log(branch[width] % 10007);
    else {
        for (let i = 4; i <= width; i++) {
            let way = branch[i - 1] + branch[i - 2];
            branch.push(way % 10007);
        }
        console.log(branch[width]);
    }
};

main(input);
