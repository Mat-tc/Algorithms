let size = 0;
function solution(topping, tasting) {
  size = topping.length;
  const arr = Array.from(Array(size / 2 + 1), () => new Array(2));

  for (let i = 0; i < size; i++) {
    if (arr[topping[i]][0] > 0) {
      arr[topping[i]][1] = i + 1;
      continue;
    }
    arr[topping[i]][0] = i + 1;
  }

  let now1 = 1;
  let now2 = 1;
  let cost1 = 0;
  let cost2 = 0;

  for (let i = 0; i < tasting.length; i++) {
    let tmp1 = cost1 + move(now1, arr[tasting[i]][0]);
    let tmp2 = cost2 + move(now2, arr[tasting[i]][0]);

    let tmp3 = cost1 + move(now1, arr[tasting[i]][1]);
    let tmp4 = cost2 + move(now2, arr[tasting[i]][1]);

    now1 = arr[tasting[i]][0];
    if (tmp1 > tmp2) {
      cost1 = tmp2;
    } else {
      cost1 = tmp1;
    }

    now2 = arr[tasting[i]][1];
    if (tmp3 > tmp4) {
      cost2 = tmp4;
    } else {
      cost2 = tmp3;
    }
  }
  let answer = Math.min(cost1, cost2);

  return answer;
}

function move(start, end) {
  let tmp = Math.abs(start - end);

  if (tmp > size / 2) {
    tmp = size - tmp;
  }
  return tmp;
}

solution([2, 1, 3, 1, 2, 4, 4, 3], [1, 2, 3, 4]);
solution([2, 1, 3, 1, 2, 4, 4, 3], [3, 1, 2, 4]);
