const arr = Array.from(Array(32), () => new Array(32));
function solution(S1, S2) {
  let answer = 0;

  index = 0;
  divide(0, 0, 32, S1);
  index = 0;
  divide(0, 0, 32, S2);

  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 32; j++) {
      if (arr[i][j] == 1) {
        answer++;
      }
    }
  }
  console.log(answer);
  return answer;
}

function divide(r, c, size, S) {
  if (size == 1) {
    if (S[index] == "b") {
      arr[r][c] = 1;
    }
    return;
  }

  if (S[index] == "p") {
    index++;
    divide(r, c + size / 2, size / 2, S);
    index++;
    divide(r, c, size / 2, S);
    index++;
    divide(r + size / 2, c, size / 2, S);
    index++;
    divide(r + size / 2, c + size / 2, size / 2, S);
    return;
  }
  if (S[index] == "b") {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        arr[r + i][c + j] = 1;
      }
    }
  }
}

solution("pwwwb", "pwbbb");
