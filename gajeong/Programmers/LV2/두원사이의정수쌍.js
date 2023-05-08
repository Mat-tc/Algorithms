function solution(r1, r2) {
  var answer = 0;
  let big = Math.max(r1, r2);
  let small = Math.min(r1, r2);

  for (let i = 1; i <= big; i++) {
    let y1 = Math.floor(Math.sqrt(big ** 2 - i ** 2));

    let y2 =
      small ** 2 - i ** 2 > 0 ? Math.ceil(Math.sqrt(small ** 2 - i ** 2)) : 0;
    answer += y1 - y2 + 1;
  }

  return answer * 4;
}

console.log(solution(3, 2));
