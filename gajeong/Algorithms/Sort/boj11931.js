const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1
2
3
4
5`
)
  .trim()
  .split('\n');

const solution = (input) => {
  const arr = [];
  for (let i = 1; i <= Number(input[0]); i++) {
    arr.push(Number(input[i]));
  }
  arr.sort((a, b) => b - a);
  console.log(arr.join('\n'));
};

/*
   출력문에 바로 내림차순 정렬을 해주니까 오류가 나고,
  위처럼 정렬후, 출력해 주니까 안남. 차이가 뭐지 ? 
  
const solution = (input) => {
  const arr = [];
  for (let i = 1; i <= Number(input[0]); i++) {
    arr.push(Number(input[i]));
  }
  console.log(
    arr
      .sort((a, b) => {
        return b - a;
      })
      .join('\n')
  );
};

*/
solution(input);
