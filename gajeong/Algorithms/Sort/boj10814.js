const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `9
51 Junkyu
21 Dohyun
30 Sunyoung
81 Junkyu
200 Dohyun
170 Sunyoung
21 Junkyu
21 Dohyun
20 Sunyoung

`
)
  .trim()
  .split('\n');

const main = (input) => {
  // 이름을 담을 스택 이차원 배열, 나이 배열 -> 인덱스 == 나이
  const Name_Array = Array.from({ length: 201 }, () => []);
  const Age_Array = Array(201).fill(0);
  const N = Number(input[0]);
  for (let i = 1; i <= N; i++) {
    let [age, name] = input[i].split(' ');
    age = parseInt(age);
    Name_Array[age].push(name);
    Age_Array[age] += 1;
  }

  let cnt = N;
  let ans = '';
  while (cnt > 0) {
    for (let i = 1; i < 201; i++) {
      if (Age_Array[i] == 0) continue;
      else {
        for (let j = 0; j < Age_Array[i]; j++) {
          if (cnt > 1) {
            ans += `${i} ${Name_Array[i][j]}\n`;
          } else {
            ans += `${i} ${Name_Array[i][j]}`;
          }
          cnt -= 1;
        }
      }
    }
  }
  console.log(ans);
};

main(input);
