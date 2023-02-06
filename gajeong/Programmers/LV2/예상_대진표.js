function solution(n, a, b) {
  var answer = 1;
  let x = 0;
  let y = 0;
  if (a < b) {
    x = a - 1;
    y = b - 1;
  } else {
    x = b - 1;
    y = a - 1;
  }

  while (!(x % 2 == 0 && y == x + 1)) {
    answer += 1;

    x = parseInt(x / 2);
    y = parseInt(y / 2);
  }

  return answer;
}
console.log(solution(8, 4, 7));
console.log(solution(1024, 25, 18));
console.log(solution(1024, 12, 15));
