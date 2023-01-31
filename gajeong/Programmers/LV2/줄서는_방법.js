// n! 으로 인한 깊은 재귀로 런타임에러

function solution(n, k) {
  var answer = [];

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

      const permutations = getPermutations(rest, selectNumber - 1);

      const attached = permutations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results;
  };

  const numbers = Array.from({ length: n }, (v, i) => i + 1);
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }

  if (fac - k < k) {
    numbers.reverse();
    k = fac - k + 1;
  }

  let sum = 1;
  let point = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
    if (sum >= k) {
      point = i;
      break;
    }
  }

  let pro = numbers.slice(0, n - point);
  answer = getPermutations(numbers.slice(n - point, n), point);

  return [...pro, ...answer[k - 1]];
}
console.log(solution(5, 5));
