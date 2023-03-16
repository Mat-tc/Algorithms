function solution(grade) {
  var answer = [];
  const score = {};
  grade.forEach((sc) => {
    if (score[sc]) score[sc]++;
    else score[sc] = 1;
  });

  const keys = Object.keys(score).sort((a, b) => b - a);
  let k = 1;
  const rank = {};
  for (let i = 0; i < keys.length; i++) {
    rank[keys[i]] = k;
    k += score[keys[i]];
  }

  for (let i = 0; i < grade.length; i++) {
    answer.push(rank[grade[i]]);
  }
  console.log(answer);
  return answer;
}

solution([3, 2, 1, 2]);
