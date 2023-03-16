function solution(s1, s2) {
  let answer = 0;

  let S1 = draw(s1);
  let S2 = draw(s2);

  for (let i = 1; i < 1025; i++) {
    if (S1[i] || S2[i]) ++answer;
  }
  console.log(answer);
  return answer;
}

function draw(s) {
  const Image = new Array(1025);
  let size = 1024;
  let string = s.split("");

  let idx = 1;
  let cnt = 0;
  string.forEach((str) => {
    if (str == "p") {
      size /= 4;
      cnt = 0;
    } else {
      ++cnt;
      if (str == "w") {
        for (let i = idx; i < idx + size; i++) {
          Image[i] = 0;
        }
      } else if (str == "b") {
        for (let i = idx; i < idx + size; i++) {
          Image[i] = 1;
        }
      }
      idx += size;
    }
    if (cnt == 4) size *= 4;
  });
  return Image;
}

solution("pwwwb", "pwbbb");
