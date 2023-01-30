const getCombinations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};

function solution(relation) {
  var answer = 0;

  let column = relation.length;
  let row = relation[0].length;

  let numbers = Array.from({ length: row }, (v, i) => i);
  console.log(numbers);
  const P = [];
  for (let i = 0; i < row; i++) {
    let t = {};
    for (c = 0; c < column; c++) {
      if (t.hasOwnProperty(relation[c][i])) {
        t[relation[c][i]].push(c);
      } else {
        t[relation[c][i]] = [c];
      }
    }
    P.push(t);
  }

  // for (let i = 0; i < row; i++){
  //   for (let j = i + 1;  )
  // }

  return answer;
}

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])
);
