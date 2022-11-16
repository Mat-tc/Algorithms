const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
5 3
8 1 7 3 1
3 6 1
3 4
2 13 7
103 11 290 215`
)
  .trim()
  .split('\n');

const main = (input) => {
  const T = Number(input.shift());
  const ans = [];
  for (let i = 0; i < T; i++) {
    let [N, M] = input[3 * i].split(' ').map(Number);
    //여기서 a와 b를 sort 시켜주면 시간초과가 안나는데, sort를 안시켜주면 시간초과가 남 신기하지 ?
    let a = input[3 * i + 1]
      .split(' ')
      .map(Number)
      .sort((a, b) => b - a);
    let b = input[3 * i + 2]
      .split(' ')
      .map(Number)
      .sort((a, b) => b - a);

    //대소비교
    let cnt = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (a[i] > b[j]) cnt++;
      }
    }
    ans.push(cnt);
  }
  console.log(ans.join('\n'));
};

main(input);
