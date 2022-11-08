const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `7`
).split('\n');

const [N] = stdin[0].trim().split(' ').map(Number);

const solution = (N) => {
  let str = '1';
  let cnt = 1;

  // 0. 최종 종료 조건
  while (cnt !== N) {
    if (!checkStr((str += '1'), (cnt += 1))) {
      str = str.slice(0, -1);
      cnt -= 1;
    }
    if (!checkStr((str += '2'), (cnt += 1))) {
      str = str.slice(0, -1);
      cnt -= 1;
    }
    if (!checkStr((str += '3'), (cnt += 1))) {
      str = str.slice(0, -1);
      cnt -= 1;
    }
  }
  console.log(str);
};

// 문자열 비교 검색
const checkStr = (str, cnt) => {
  if (cnt > 2) {
    //새로 추가된 문자열 기준으로 split을 증가시키면서 비교
    for (let split = 1; split <= parseInt(cnt / 2); split++) {
      let a = str.slice(cnt - split, cnt);
      let b = str.slice(cnt - split * 2, cnt - split);
      if (a === b) return false;
    }
    return true;
  }
  return true;
};

solution(N);
