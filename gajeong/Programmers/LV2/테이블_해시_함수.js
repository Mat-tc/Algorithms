function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    if (a[col - 1] == b[col - 1]) return b[0] - a[0];
    else return a[col - 1] - b[col - 1];
  });

  let arr = [];
  for (let i = row_begin - 1; i < row_end; i++) {
    let sub = 0;
    data[i].forEach((num) => {
      sub += num % (i + 1);
    });
    arr.push(sub);
  }
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer ^= arr[i];
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3,
    4
  )
);
