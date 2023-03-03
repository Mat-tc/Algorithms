const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5
1 2 3 4 5
5 4 3 2 1
2 3 4 5 6
6 5 4 3 2
1 2 1 2 1
`
)
  .trim()
  .split('\n');

//
solution(input);
function solution(input) {
  //N : 세로 , M : 가로
  const [N, M] = input[0].split(' ').map(Number);
  const Map = [];
  for (let i = 1; i < input.length; i++) {
    Map.push(input[i].split(' ').map(Number));
  }

  console.log(Map);
}
