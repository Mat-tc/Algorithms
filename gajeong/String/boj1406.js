//시간초과 문자열 splice 내장 함수 이용

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
  const string = input.shift().split('');
  let cursor = string.length;
  let cnt = Number(input.shift());

  for (let i = 0; i < cnt; i++) {
    let order = input.shift().split(' ');

    switch (order[0]) {
      case 'L':
        cursor === 0 ? '' : (cursor -= 1);
        break;
      case 'D':
        cursor === string.length ? '' : (cursor += 1);
        break;
      case 'B':
        if (cursor === 0) break;
        else {
          cursor -= 1;
          string.splice(cursor, 1);
          break;
        }
      default:
        string.splice(cursor, 0, order[1]);
        cursor += 1;
    }
  }

  console.log(string.join(''));
}

solution(stdin);
