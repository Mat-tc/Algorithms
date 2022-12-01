const fs = require("fs");
const input = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `3
4
7
10`
)
    .trim()
    .split("\n");

/*
f(1) = 1 
f(2) = 1 + 1  ||  2 
f(3) = f(1) + 2 | | f(2) + 1 
f(4) = f(1) + 3    ||  f(2)+2   ||  f(3)+ 1  

 */
const main = (input) => {
    const cnt = Number(input.shift());
    const numbers = input.map(Number);

    const branch = [0, 1, 2, 4, 7];
    const max = Math.max(...numbers);

    for (let i = 5; i <= max; i++) {
        let c = branch[i - 1] + branch[i - 2] + branch[i - 3];
        branch.push(c);
    }
    const ans = [];
    for (let i = 0; i < cnt; i++) {
        ans.push(branch[numbers[i]]);
    }
    console.log(ans.join("\n"));
};

main(input);
