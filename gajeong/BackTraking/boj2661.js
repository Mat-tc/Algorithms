const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `7`
).split("\n");

const [N] = stdin[0].trim().split(" ").map(Number);

const solution = (N) => {
  let str = "1";
  const isUsed = Array(4).fill(false);
  isUsed[1] = true;
  isUsed[0] = true;
  addStr(str, 1, isUsed);
};

const addStr = (str, cnt, visited) => {
  for (let i = 1; i <= 3; i++) {
    if (visited[i]) continue;
    let status = compareStr((str += i), cnt + 1);
    if (status === false) continue;
    else {
      if (i === 1) visited[3] = false;
      else visited[i - 1] = false;
      visited[i] = true;
      return (str += i);
    }
  }
};
const compareStr = (str, cnt, visited) => {
  // 2. 문자열비교조건
  if (cnt > 3) {
    for (let i = 2; i < parseInt(cnt / 2); i++) {
      for (let j = 1; j < parseInt(cnt / i) - 1; j++) {
        let before = str.slice(i * (j - 1), i * j + 1);
        let now = str.slice(i * j + 1, i * 2 * j);
        if (before === now) return false;
      }
    }
  }

  // 3. 2번을 통과하고, cnt가 N이라면 바로 출력 !
  if (cnt === N) console.log(str);
  addStr(str, cnt + 1, visited);
};

solution(N);
