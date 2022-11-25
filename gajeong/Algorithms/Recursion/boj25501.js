const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
    AAA
    ABBA
    ABABA
    ABCA
    PALINDROME
`
).split('\n');
const arr = stdin.map((el) => el.trim());

const solution = (input) => {
  const T = Number(input[0]);
  let ans = '';
  for (let i = 1; i <= T; i++) {
    [res, cnt] = isPalindroem(input[i]);

    ans += `${res} ${cnt}\n`;
  }
  return ans;
};

// 1. cnt 매개변수를 추가해서, recurtion에 들어갈때 마다, cnt ++
const recursion = (s, l, r, cnt) => {
  if (l >= r) {
    return [1, cnt];
  } else if (s.charAt(l) != s.charAt(r)) return [0, cnt];
  else {
    // 3. 들어가는 순간에 cnt ++
    cnt++;
    return recursion(s, l + 1, r - 1, cnt);
  }
};

const isPalindroem = (s) => {
  //2. 무조건 한번은 들어가고, 실패 / 성공을 반환
  let cnt = 1;
  return recursion(s, 0, s.length - 1, cnt);
};

console.log(solution(arr));
