const fs = require("fs");
const stdin = (
    process.platform === "linux"
        ? fs.readFileSync("/dev/stdin").toString()
        : `5 5
    10 25 7 8 13
    68 24 -78 63 32
    12 -69 100 -29 -25
    -16 -22 -57 -33 99
    7 -76 -11 77 15
`
)
    .trim()
    .split("\n");

const solution = (input) => {
    console.log("gg");
};

solution(stdin);

// const input = [];
// require('readline')
//   .createInterface(process.stdin, process.stdout)
//   .on('line', (line) => {
//     input.push(line);
//   })
//   .on('close', () => {
//     console.log(solution(input));
//     process.exit();
//   });

/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let input = require("fs")
    .readFileSync("예제.txt")
    .toString()
    .trim()
    .split("\n");

/**
 * 입력을 받는 파트
 * split을 하게 되면 값타입이 string되기에 number로 만들어 줘야 한다.
 */
const [N, M] = stdin[0].split(" ").map((v) => +v);
const arr = stdin.slice(1).map((v) =>
    v
        .trim()
        .split(" ")
        .map((v) => +v)
);

/* 
     로직
 */

/**
 * console.log은 무겁다. 최대한 string에 담아서 한번에 출력하도록 하자.
 */
const print = ans.map((row) => row.join(" ")).join("\n");
console.log(print);

// 순열
function permutation(arr, selectNum) {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const fixer = v;
        const restArr = arr.filter((_, index) => index !== idx);
        const permuationArr = permutation(restArr, selectNum - 1);
        const combineFixer = permuationArr.map((v) => [fixer, ...v]);
        result.push(...combineFixer);
    });
    return result;
}

//  조합
function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
        const fixed = v;
        const restArr = arr.slice(idx + 1);
        const combinationArr = combination(restArr, selectNum - 1);
        const combineFix = combinationArr.map((v) => [fixed, ...v]);
        result.push(...combineFix);
    });
    return result;
}

//  중복순열
function permutation(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
        const fixed = v;
        const restArr = arr;
        const permutationArr = permutation(restArr, selectNum - 1);
        const combineFix = permutationArr.map((v) => [fixed, ...v]);
        result.push(...combineFix);
    });
    return result;
}
