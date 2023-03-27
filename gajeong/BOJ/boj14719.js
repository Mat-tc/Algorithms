const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 8
3 1 2 3 4 1 1 2`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const [H, W] = input[0].split(' ').map(Number);
  const map = [];
  let total = 0;
  let max = 0;
  const height = input[1].split(' ').map(Number);
  for (let i = 0; i < height.length; i++) {
    map.push(Array(height[i]).fill(true));
    if (height[i] > max) max = height[i];
  }

  let end = 0;
  let start = 0;
  //빗물 담을 수 있는 갯수 세기
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[j][i]) {
        total += end - start;
        start = j;
        end = j;
      }
      if (!map[j][i]) ++end;
    }
  }
  console.log(total);
};

solution(input);
