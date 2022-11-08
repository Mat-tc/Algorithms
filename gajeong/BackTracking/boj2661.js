const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `3`
).split('\n');

const [N] = stdin[0].trim().split(' ').map(Number);

const solution = (N) => {
  let str = '1';
  const visited = Array(4).fill(false);
  visited[1] = true;
  let cnt = 1;
  let point = 1; // visited 의 인덱스가 작으면서, 방문하지 않은 원소를 먼저 접근하기 위함
  // 0. 최종 종료 조건
  while (cnt !== N) {
    if (visited[point]) {
      point + 1 > 3 ? (point = 1) : (point += 1); //방문 했으면 다음 인덱스
      continue;
    }

    str += point;

    //1.  문자열 비교 검색 조건에 타당하다면
    if (checkStr(str, (cnt += 1))) {
      visited[point] = true;
      visited[point + 1 > 3 ? 1 : point + 1] = false;
      visited[point - 1 < 1 ? 3 : point - 1] = false;
      point = 1; // 1-(1) point 초기화
      continue;
    } else {
      //2. 조건이 타당하지 않으면, 더해준 마지막 문자열을 빼고, point + 1 이동
      str = str.slice(0, -1);
      cnt -= 1;
      point + 1 > 3 ? (point = 3) : (point += 1); // 2-(1) point 증가
    }
  }
  console.log(str);
};

// 문자열 비교 검색
const checkStr = (str, cnt) => {
  if (cnt > 3) {
    for (let split = 2; split <= parseInt(cnt / 2); split++) {
      for (let i = 1; i < parseInt(cnt / split); i++) {
        let before = str.slice((i - 1) * split, (i - 1) * split + split);
        let now = str.slice(i * split, i * split + split);
        if (before === now) return false;
      }
    }
    return true;
  }
  return true;
};

solution(N);
