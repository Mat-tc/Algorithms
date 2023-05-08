function solution(skill, skill_trees) {
  var answer = 0;
  const skills = skill.split('');

  skill_trees.forEach((el) => {
    let str = el.split('');
    let point = 0;

    for (let i = 0; i < str.length; i++) {
      if (skill.includes(str[i])) {
        if (str[i] === skills[point]) point++;
        else break;
      }
      if (i === str.length - 1) ++answer;
    }
  });
  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
