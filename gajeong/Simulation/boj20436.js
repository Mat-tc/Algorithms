/**
 * '성우는 한글 자음 쪽 자판은 왼손 검지손가락으로 입력하고, 한글 모음 쪽 자판은 오른손 검지손가락으로 입력한다.'
 * 이 말을 알았어야 함.
 * .... 할말 하않 .. . .
 * 그냥 반복문으로 풀어도 됨 ->  지금 푼거 좋은 풀이 아님. 하지만 다시 풀 정도의 가치는 없는거 같아서 안풀겠음 .. 시간낭비
 */
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `z o
    zoac`
)
  .trim()
  .split('\n');

let [left, right] = stdin[0].split(' ');
const word = stdin[1].trim();

const solution = (left, right, word) => {
  const keyboard = {
    q: [0, 0],
    w: [0, 1],
    e: [0, 2],
    r: [0, 3],
    t: [0, 4],
    y: [0, 5],
    u: [0, 6],
    i: [0, 7],
    o: [0, 8],
    p: [0, 9],

    a: [1, 0],
    s: [1, 1],
    d: [1, 2],
    f: [1, 3],
    g: [1, 4],
    h: [1, 5],
    j: [1, 6],
    k: [1, 7],
    l: [1, 8],

    z: [2, 0],
    x: [2, 1],
    c: [2, 2],
    v: [2, 3],
    b: [2, 4],
    n: [2, 5],
    m: [2, 6],
  };

  const N = word.length;
  let min = 99999999;
  let hand1 = keyboard[left];
  let hand2 = keyboard[right];
  //최단 거리 문제랑 비슷한거 아닌가 ?

  const dfs = (sum, cnt, left, right) => {
    //합이 이미 최소값을 넘었다면, 종료
    if (sum > min) return;
    if (cnt === N) {
      min = sum;
      return;
    }

    let str = word.slice(cnt, cnt + 1);
    // 새 문자의 인덱스 값 구하기
    let position = keyboard[str];
    if (left == position || right == position) cnt + 1;

    if ('yuiophjklbnm'.includes(str))
      // 오른손 계산
      dfs(
        sum +
          Math.abs(right[0] - position[0]) +
          Math.abs(right[1] - position[1]),
        cnt + 1,
        left,
        position
      );
    //왼손 계산
    else
      dfs(
        sum + Math.abs(left[0] - position[0]) + Math.abs(left[1] - position[1]),
        cnt + 1,
        position,
        right
      );
  };

  dfs(0, 0, hand1, hand2);
  console.log(min + N);
};

solution(left, right, word);
