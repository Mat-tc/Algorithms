function solution(expression) {
  var answer = [];

  const exp = [];
  const num = [];
  // 수와 연산자 분리하기
  let str = '';
  let check = /^[0-9]+$/;
  for (let i = 0; i < expression.length; i++) {
    let c = expression[i];
    if (check.test(c)) str += c;
    else {
      num.push(Number(str));
      exp.push(c);
      str = '';
    }
    if (i === expression.length - 1) num.push(Number(str));
  }
  const set = [...new Set(exp)];
  const P = permutation(set, set.length);

  //순열의 경우만큼 반복한다.
  P.forEach((op) => {
    let priority = 0;
    const numbers = [...num];
    const operand = [...exp];
    let idx = 0;
    while (operand.length > 0) {
      if (idx === operand.length) {
        ++priority;
        idx = 0;
      }
      //우선순위 연산자를 만난 경우
      if (op[priority] === operand[idx]) {
        let n;
        switch (op[priority]) {
          case '*':
            n = numbers[idx] * numbers[idx + 1];
            break;
          case '+':
            n = numbers[idx] + numbers[idx + 1];
            break;
          case '-':
            n = numbers[idx] - numbers[idx + 1];
            break;
        }
        numbers.splice(idx, 2, n);
        operand.splice(idx, 1);
      } else ++idx;
    }
    answer.push(Math.abs(numbers));
  });

  return Math.max(...answer);
}

function permutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  });
  return res;
}

console.log(solution('100-200*300-500+20'));
console.log(solution('50*6-3*2'));
