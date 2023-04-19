function solution(users, emoticons) {
  var answer = [0, 0];
  const n = emoticons.length;
  const ratio = [1, 2, 3, 4];
  const map = Array.from(Array(emoticons.length), () => Array(5));

  //할인율 가격 저장해놓은 정보 map
  for (let i = 0; i < emoticons.length; i++) {
    for (let j = 1; j <= 4; j++) {
      map[i][j] = (1 - 0.1 * j) * emoticons[i];
    }
  }

  const list = permutation(ratio, emoticons.length);

  //조합 이용해서 사람, 가격 구하기
  list.forEach((el) => {
    let totalCnt = 0;
    let totalSum = 0;
    //모든 사람 경우의 수
    for (let u = 0; u < users.length; u++) {
      let sum = 0;
      for (let r = 0; r < el.length; r++) {
        if (users[u][0] <= el[r] * 10) {
          sum += map[r][el[r]];
        }
      }
      if (sum >= users[u][1]) ++totalCnt;
      else totalSum += sum;
    }
    if (totalCnt > answer[0]) answer = [totalCnt, totalSum];
    else if (totalCnt == answer[0] && totalSum > answer[1])
      answer = [totalCnt, totalSum];
  });
  return answer;
}

// 이모티콘 할인율 조합
function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
  )
);
