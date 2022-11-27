const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `9
1 2
1 3
2 4
3 5
3 6
4 7
4 8
4 9`
)
    .trim()
    .split("\n");

const main = (input) => {
    const N = Number(input[0]);
    const Node = Array.from({ length: N + 1 }, () => []);
    const COUNT = Array(N + 1).fill(0);
    const visited = Array(N + 1).fill(false);
    let LINE = input.length;
    for (let i = 1; i < LINE; i++) {
        let [n1, n2] = input[i].split(" ").map(Number);
        Node[n1].push(n2);
        Node[n2].push(n1);
        COUNT[n1]++;
        COUNT[n2]++;
    }

    let idx = 1;
    const zero = (element) => element > 0;
    const EA = [];
    while (COUNT.some(zero)) {
        if (idx === N + 1) idx = 1;

        if (COUNT[idx] === 1) {
        } else {
        }

        idx++;
    }

    console.log(EA.length);
};

main(input);
