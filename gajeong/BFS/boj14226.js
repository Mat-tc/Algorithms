const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `18
`
).split('\n');
const arr = stdin.map((el) => el.trim());

const solution = (input) => {
  const s = Number(input[0]);
  const time = Array(1000 + 1).fill(false); // 화면만
  const queue = [[1, 0, 0]];
  time[1] = true;

  while (queue.length) {
    const [num, clip, t] = queue.shift();

    if (num === s) return t;

    // 화면에서 복사해서 클립보드 저장
    if (num > 0) {
      queue.push([num, num, t + 1]);
    }

    // 화면에 붙여넣기
    if (clip > 0 && num + clip < 1001 && time[num + clip] === false) {
      queue.push([num + clip, clip, t + 1]);
      time[num + clip] = true;
    }

    // 화면에 있는 이모티콘 중 하나 삭제
    if (num - 1 > 0 && time[num - 1] === false) {
      queue.push([num - 1, clip, t + 1]);
      time[num - 1] = true;
    }
  }
};

console.log(solution(arr));
