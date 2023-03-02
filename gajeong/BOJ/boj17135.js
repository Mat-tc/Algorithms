// TODO 커플디펜스

const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5 1
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
1 1 1 1 1
`
)
  .trim()
  .split('\n');

//
solution(input);
function solution(input) {
  //N : 가로 , M : 세로, D : 공격 제한 거리
  const [N, M, D] = input[0].split(' ').map(Number);
  const Map = [];
  for (let i = 1; i < input.length; i++) {
    Map.push(input[i].split(' ').map(Number));
  }
  Map.push(Array(N).fill(0));
  let result = [];
  const list = Array.from({ length: N }, (value, index) => index); // 중복 조합의 원소들

  const CB = getCombinations(list, 3);
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]);
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}
