const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
    0 1 2 3 4 5
    1 0 2 3 4 5
    1 2 0 3 4 5
    1 2 3 0 4 5
    1 2 3 4 0 5
    1 2 3 4 5 0`
).split('\n');

const [N] = stdin[0].trim().split(' ').map(Number);
const arr = stdin.slice(1).map((v) =>
  v
    .trim()
    .split(' ')
    .map((v) => +v)
);

//시간초과 남 ㅎㅎ
const solution = (N, arr) => {
  let min = -1;
  let START_TEAM = [];

  const visited = Array(N).fill(false);
  const back = (cnt) => {
    if (cnt === N / 2) {
      let LINK_TEAM = [];
      let SUM_OF_START_TEAM = 0;
      let SUM_OF_LINK_TEAM = 0;
      // 다 돌면서 합침

      for (let i = 0; i < cnt; i++) {
        for (let j = 0; j < cnt; j++) {
          if (i === j) continue;
          SUM_OF_START_TEAM += arr[START_TEAM[i]][START_TEAM[j]];
        }
      }

      for (let idx = 0; idx < N; idx++) {
        visited[idx] ? '' : LINK_TEAM.push(idx);
      }

      for (let i = 0; i < cnt; i++) {
        for (let j = 0; j < cnt; j++) {
          if (i === j) continue;
          SUM_OF_LINK_TEAM += arr[LINK_TEAM[i]][LINK_TEAM[j]];
        }
      }

      let res = Math.abs(SUM_OF_START_TEAM - SUM_OF_LINK_TEAM);
      if (min == -1) min = res;
      else min > res ? (min = res) : '';
      return;
    }

    for (let i = 0; i < N; i++) {
      if (visited[i]) continue;
      START_TEAM.push(i);
      visited[i] = true;

      back(cnt + 1);
      START_TEAM.pop();
      visited[i] = false;
    }
  };

  back(0);
  console.log(min);
};

solution(N, arr);
