const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5 6
1 1
3 2
2 3
5 1
5 4
`
)
  .trim()
  .split('\n');

function solution(input) {
  const [N, M, H] = input[0].split(' ').map(Number);
  const ladder = Array.from(Array(N), () => Array(M).fill(false));
  let ans = 5;

  for (let i = 1; i < input.length; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    ladder[y - 1][x - 1] = true;
  }

  const check = () => {
    for (let j = 0; j < N; j++) {
      let cur = j;
      for (let i = 0; i < H; i++) {
        if (cur && ladder[i][cur - 1]) cur--;
        else if (ladder[i][cur]) cur++;
      }
      if (cur != j) return false;
    }
    return true;
  };

  const BackTracking = (dep, k) => {
    if (ans != 5) return;
    if (dep > k) {
      if (check()) ans = k;
      return;
    }
    for (let j = 0; j < N - 1; j++) {
      for (let i = 0; i < H; i++) {
        if (ladder[i][j] || ladder[i][j - 1] || ladder[i][j + 1]) continue;
        ladder[i][j] = true;
        BackTracking(dep + 1, k);
        ladder[i][j] = false;
        while (i < H) {
          if (ladder[i][j - 1] || map[i][j + 1]) break;
          i++;
        }
      }
    }
    return;
  };

  for (let i = 0; i < 3; i++) {
    BackTracking(1, i);
    if (ans != 5) {
      console.log(ans);
      return;
    }
  }
  console.log(-1);
  return;
}

solution(input);

//참고  https://2jinishappy.tistory.com/168 ---
