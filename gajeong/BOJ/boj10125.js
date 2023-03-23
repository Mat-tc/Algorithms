const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 3
123
456`
)
  .trim()
  .split('\n');

// * 도착점과, 출발점을 포함하는 원의 갯수
// 한 원에 대하여 도착점과 출발점으로 모두 가지고 있다면 => 0
// 둘다 가지고 있지 않다면 => 0
// 하나만 가지고 있다면 => 1

// 원의 좌표 + 반지름의 길이   이내에 x, y 좌표가 있는경우

const solution = (input) => {
  const [N, M] = input[0].split(' ').map(Number);
  const NB = [];

  const dx = [1, 1, 1, 0, -1, -1, -1, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1];
  for (let i = 1; i <= N; i++) {
    NB.push(input[i].split('').map(Number));
  }

  console.log(NB);
};

solution(input);
