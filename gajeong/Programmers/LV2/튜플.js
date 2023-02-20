function solution(s) {
  let answer = [];
  let tuples = s
    .slice(2, -2)
    .split(/},{/g)
    .sort((a, b) => a.length - b.length);

  tuples.forEach((v) => {
    let tuple = v.split(',');
    answer.push(tuple.find((e) => !answer.includes(e)));
  });

  return answer.map((e) => Number(e));
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,2}}'));
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
console.log(solution('{{20,111},{111}}'));
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'));
