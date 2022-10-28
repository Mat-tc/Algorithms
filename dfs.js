const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5 6
    1 1
    3 2
    2 3
    5 1
    5 4
`
).split('\n');
const arr = stdin.map((el) => el.trim());

class Ledder {
  constructor(input) {
    this.ans = -1;
    this.complete = false;
    let order = input[0].split(' ');
    this.n = parseInt(order.shift());
    this.m = parseInt(order.shift());
    this.h = parseInt(order.shift());
    this.map = Array.from(Array(this.h + 2), () => Array(this.n + 1).fill(0));
  }

  getComplete() {
    return this.complete;
  }

  getAns() {
    return this.ans;
  }

  //map 이차원 배열 초기화
  init(data) {
    for (let i = 1; i <= this.m; i++) {
      let line = data[i].split(' ');
      let a = parseInt(line.shift());
      let b = parseInt(line.shift());
      this.map[a][b] = 1;
    }
  }

  dfs(r, c, deptNow, dept) {
    if (this.complete) return;
    if (deptNow == dept) {
      if (this.isPossible()) {
        this.ans = deptNow;
        this.complete = true;
      }
      return;
    }
    for (let i = r; i <= this.h; i++) {
      for (let j = 1; j < this.n; j++) {
        if (
          this.map[i][j] == 0 &&
          this.map[i][j - 1] == 0 &&
          this.map[i][j + 1] == 0
        ) {
          this.map[i][j] = 1;
          this.dfs(i, j, deptNow + 1, dept);
          this.map[i][j] = 0;
        }
      }
    }
  }

  isPossible() {
    for (let i = 1; i <= this.n; i++) {
      let r = 1;
      let c = i;
      for (let j = 1; j <= this.h; j++) {
        if (this.map[r][c - 1] == 1) {
          c -= 1;
          r += 1;
          continue;
        }
        if (this.map[r][c] == 1) {
          r += 1;
          c += 1;
          continue;
        }
        r += 1;
      }
      if (c != i) return false;
    }
    return true;
  }
}

const solution = (input) => {
  const ledder = new Ledder(input);
  ledder.init(input);

  for (let i = 0; i <= 3; i++) {
    ledder.dfs(1, 1, 0, i);
    if (ledder.getComplete()) break;
  }
  console.log(ledder.getAns());
};

solution(arr);
