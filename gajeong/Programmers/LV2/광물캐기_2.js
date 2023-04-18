function solution(picks, minerals) {
  const combination = (idx, now, tired) => {
    if (idx >= minerals.length || picks.every((el) => el === 0)) return tired;

    for (let i = 0; i < 5; i++) {
      ++idx;
      if (idx >= minerals.length) break;

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
    }

    for (k = 0; k < 3; k++) {
      if (picks[k] != 0) {
        picks[k] -= 1;
        combination(idx, k, 0);
      }
    }
  };
}

console.log(
  solution(
    [1, 3, 2],
    [
      'diamond',
      'diamond',
      'diamond',
      'iron',
      'iron',
      'diamond',
      'iron',
      'stone',
    ]
  )
);
console.log(
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
  )
);
