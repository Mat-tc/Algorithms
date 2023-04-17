function solution(picks, minerals) {
  var answer = 0;
  const initialValue = 0;
  let cnt = picks.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const mineral = {
    diamond: 25,
    iron: 5,
    stone: 25,
  };
  //1. 미네랄을 5씩 잘라서 picks * 5 이하 길이의 합을 구합 값을 새로운 배열로 만들어 둔다.
  const min = Math.min(cnt * 5, minerals.length);
  const s = [];
  let sum = 0;
  for (let i = 0; i < min; i++) {
    sum += mineral[minerals[i]];
    if (i % 5 == 4 || i == min - 1) {
      s.push(sum);
      sum = 0;
    }
  }
  const order = Array(...s);
  order.sort((a, b) => b - a);

  //2. 새로운 배열 기준으로 내림차순 정렬을 해서, 다이아몬드 -> 철 -> 돌 곡괭이로 값 계산

  return answer;
}

solution(
  [1, 3, 2],
  ['diamond', 'diamond', 'diamond', 'iron', 'iron', 'diamond', 'iron', 'stone']
);
solution(
  [0, 1, 1],
  [
    'diamond',
    'diamond',
    'diamond',
    'diamond',
    'diamond',
    'iron',
    'iron',
    'iron',
    'iron',
    'iron',
    'diamond',
  ]
);
