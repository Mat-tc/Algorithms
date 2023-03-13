// 제출용
//예시 입력 시,
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : 'C:/project/Algorithms/gajeong/예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution(input) {
  const answer = [];
  const T = Number(input.shift());
  let j = 0;
  for (let t = 0; t < T; t++) {
    let [N, K] = input[j].split(' ').map(Number);
    let time = input[j + 1].split(' ').map(Number);
    let duration = Array(N + 1).fill(-1);
    time.unshift(undefined);
    let map = Array(N + 1);
    for (let k = j + 2; k < j + 2 + K; k++) {
      let [before, after] = input[k].split(' ').map(Number);
      if (!map[after]) map[after] = [before];
      else map[after].push(before);
    }

    const DFS = (n) => {
      if (duration[n] > -1) return duration[n];
      if (!map[n]) {
        duration[n] = time[n];
        return duration[n];
      }
      //우선 순위가 있음
      const dist = [];
      for (let i = 0; i < map[n].length; i++) {
        dist.push(DFS(map[n][i]));
      }
      duration[n] = Math.max(...dist) + time[n];
      return duration[n];
    };

    answer.push(DFS(Number(input[j + 2 + K])));
    j += K + 3;
  }
  console.log(answer.join('\n'));
}
