const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5
    10 25 7 8 13
    68 24 -78 63 32
    12 -69 100 -29 -25
    -16 -22 -57 -33 99
    7 -76 -11 77 15
`
).split('\n');
const arr = stdin.map((el) => el.trim());

const solution = (input) => {
  let line = input[0].split(' ');
  //n 은 열(세로) , m은 행(가로)
  let n = parseInt(line[0]);
  let m = parseInt(line[1]);

  //0d으로 채운 n+1, m+1의 이차원 배열 만들기 ~ / 인덱스 쉽게 접근하기 위함
  let a = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    line = input[i].split(' ');

    for (let j = 1; j <= m; j++) {
      a[i][j] = parseInt(line.shift());
    }
  }

  // arr[i][j] => Array(i), => Array(j)
  let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  let temp = Array.from(Array(m + 2), () => Array(2).fill(0));

  for (let i = 1; i <= m; i++) {
    dp[1][i] = dp[1][i - 1] + a[1][i];
  }

  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      temp[0][0] = dp[i - 1][1];
      for (let j = 1; j <= m; j++) {
        temp[j][0] = Math.max(temp[j - 1][0], dp[i - 1][j]) + a[i][j];
      }
      temp[m + 1][1] = dp[i - 1][m];

      for (let j = m; j > 1; j--) {
        temp[j][1] = Math.max(temp[j + 1][1], dp[i - 1][j]) + a[i][j];
      }

      for (let j = 1; j <= m; j++) {
        dp[i][j] =
          Math.max(dp[i - 1][j], Math.max(temp[j - 1][0], temp[j + 1][1])) +
          a[i][j];
      }
    }
  }

  console.log(dp[n][m]);
};

solution(arr);
