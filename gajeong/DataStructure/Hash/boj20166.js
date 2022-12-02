const fs = require('fs');
const input = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `3 4 3
abcb
bcaa
abac
aba
abc
cab`
)
    .trim()
    .split('\n');

const main = (input) => {
    const [N, M, K] = input.shift().split(' ').map(Number);
};

main(input);
