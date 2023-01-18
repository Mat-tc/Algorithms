// 1  , A , AABAA, AAAABBAAAA
// A :  1 => 4  0=> 1   ,   B : 0 => 5
function solution(n, l, r) {
  var answer = 0;
  let str = '';
  if (n == 1) str = 'A';
  else
    str =
      'A'.repeat(2 ** (n - 1)) +
      'B'.repeat(n - 1 < 1 ? 0 : 2 ** (n - 2)) +
      'A'.repeat(2 ** (n - 1));

  let start = parseInt(l / 5);
  let end = Math.ceil(r / 5);

  let word = str.slice(start, end + 1);
  for (let i = start + 1; i < end - 1; i++) {
    if (word[i] == 'A') answer += 4;
  }

  let a = '011011';
  if (word[0] == 'A') {
    for (let i = l % 5; i <= 5; i++) {
      if (a[i] == '1') answer += 1;
    }
  }

  if (word[end - 1] == 'A') {
    for (let i = 1; i <= r % 5; i++) {
      if (a[i] == '1') answer += 1;
    }
  }
  return answer;
}

console.log(solution(3, 4, 27));
