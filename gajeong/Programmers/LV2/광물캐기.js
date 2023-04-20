function solution(picks, minerals) {
  var answer = 0;
  const res = [];
  const N = minerals.length;
  const DFS = (idx, picks, tired, now) => {
    if (now !== -1) {
      for (i = 0; i < 5; i++) {
        if (idx >= N) break;
        if (now == 0) {
          tired += 1;
        } else if (now == 1) {
          if (minerals[idx] === 'diamond') tired += 5;
          else tired += 1;
        } else {
          if (minerals[idx] === 'diamond') tired += 25;
          else if (minerals[idx] === 'iron') tired += 5;
          else tired += 1;
        }
        ++idx;
      }
    }

    //종료조건
    if (picks.every((el) => el === 0) || idx >= N) return tired;
    //진행   광물 ->
    for (let i = 0; i < 3; i++) {
      if (picks[i] > 0) {
        picks[i] -= 1;
        DFS(idx, picks, tired, i) === undefined
          ? ''
          : res.push(DFS(idx, picks, tired, i));

        picks[i] += 1;
      }
    }
  };

  DFS(0, picks, 0, -1);
  console.log(Math.min(...res));
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
