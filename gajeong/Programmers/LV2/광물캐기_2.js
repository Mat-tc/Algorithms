function solution(picks, minerals) {
  const nums = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < picks[i]; j++) {
      nums.push(i + 1);
    }
  }
  const selectNum = Math.min(parseInt(minerals.length / 5) + 1, nums.length);

  const C = combination(nums, selectNum);
  const answer = [];
  C.forEach((order) => {
    let idx = -1;
    let sum = 0;
    let l = Math.min(5 * selectNum, minerals.length);
    for (let i = 0; i < l; i++) {
      if (i % 5 == 0) ++idx;
      sum += getTired(order[idx], minerals[i]);
    }
    answer.push(sum);
  });

  return Math.min(...answer);
}

function combination(arr, selectNum) {
  const res = [];
  if (selectNum === 1) return arr.map((value) => [value]);
  arr.forEach((item, idx, origin) => {
    const remain = origin.slice(idx + 1);
    const reCall = combination(remain, selectNum - 1);
    const attach = reCall.map((value) => [item, ...value]);

    res.push(...attach);
  });
  return res;
}

function getTired(g, name) {
  if (g == 1) return 1;
  if (g == 2) {
    if (name == 'diamond') return 5;
    else return 1;
  }
  if (g == 3) {
    if (name == 'diamond') return 25;
    else if (name == 'iron') return 5;
    else return 1;
  }
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
