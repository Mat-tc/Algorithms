const fs = require('fs');
const { start } = require('repl');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `11
8 26 9 2
2 15 3 23
4 12 6 5
5 2 5 31
9 14 12 24
9 12 12 28
6 15 9 3
6 3 6 15
2 28 4 25
6 15 9 27
10 5 12 31
7 14 9 1`
)
  .trim()
  .split('\n');

/*
 */
const main = (input) => {
  const N = Number(input.shift());
  const arr = [];

  for (let i = 0; i < N; i++) {
    let date = input[i].split(' ').map(Number);
    let start = date[0] * 100 + date[1];
    let end = date[2] * 100 + date[3];

    arr.push([start, end]);
  }

  let cnt = 1;

  const flower = sort(arr);
  let index = 0;
  let end_st = false;
  let start_st = false;

  // 1. 불가능 조건  cnt = 0 일때,
  for (let i = 0; i < N; i++) {
    if (flower[i][1] > 1130 && flower[index][0] > flower[i][0]) {
      index = i;
      end_st = true;
    }
    if (flower[i][0] <= 301) start_st = true;
  }

  while (start_st && end_st) {
    //현재의 꽃의 시작 기간이 3/1을 넘으면 종료
    if (flower[index][0] <= 301) break;
    let range = index + 1;

    // 종료일 기준 내림차순이므로,
    for (let i = index + 1; i++; i < N) {
      // 현재 선택된 꽃의 시작일 보다 이전에 선택될 꽃의 종료일이 크거나 같다면, 선택
      if (flower[index][0] <= flower[i][1]) {
        // 현재 선택된 꽃의 시작일보다, 새로 비교할 꽃의 시작일이 더 작다면, range 교체
        if (flower[i][0] < flower[range][1]) range = i;
        else continue;

        //작다면, 현재 인덱스 값 저장하고 끝냄
      } else {
        index = range;
        cnt += 1;
        break;
      }
    }
  }
  console.log(start_st && end_st ? cnt : 0);
};

// end Date 기준 내림차순 정렬
const sort = (arr) => {
  arr.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    else if (a[0] == b[0] && a[1] >= b[1]) return -1;
    else return 1;
  });
  console.log(arr);
  return arr;
};

main(input);
