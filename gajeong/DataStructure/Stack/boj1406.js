/**
 * Queue를 사용할 수도 있는 문제. 하지만 선입선출을 위해
 * shift() 내장 함수 사용  => O(N)의 시간복잡도
 *
 * Stack을 이용하면
 * pop()  => O(1)
 *
 */

const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `abc
9
L
L
L
L
L
P x
L
B
P y`
)
  .trim()
  .split('\n');

function solution(input) {
  let front = input[0].split('');
  let back = [];
  let cnt = Number(input[1]);

  for (let i = 2; i < 2 + cnt; i++) {
    let order = input[i].split(' ');

    switch (order[0]) {
      case 'L':
        front.length ? back.push(front.pop()) : '';
        break;
      case 'D':
        back.length ? front.push(back.pop()) : '';
        break;
      case 'B':
        front.pop();
        break;
      default:
        front.push(order[1]);
    }
  }
  console.log([...front, ...back.reverse()].join(''));
}

solution(stdin);
