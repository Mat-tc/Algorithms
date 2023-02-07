function solution(begin, end) {
  var answer = Array(end - begin + 1).fill(0);
  let idx = 0;
  for (let i = begin; i <= end; i++) {
    if (i == 1) {
      idx++;
      continue;
    }
    if (isPrime(i)) {
      answer[idx] = 1;
      idx++;
      continue;
    }
    for (let div = parseInt(i / 2); div > 0; div--) {
      if (i % div == 0) {
        answer[idx] = div;
        break;
      }
    }
    idx++;
  }
  return answer;
}

function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
console.log(solution(1, 10));
