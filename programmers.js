const str = 'TOBEORNOTTOBEORTOBEORNOT';
solution(str);

function solution(msg) {
  var answer = [];
  let dictIdx = 1;
  let dict = {};
  for (let i = 65; i <= 90; i++) {
    let st = String.fromCharCode(i);
    dict[st] = dictIdx++;
  }
  let idx = 0;
  while (idx < msg.length) {
    let w = '';
    while (idx < msg.length) {
      if (!Object.keys(w + msg.charAt(idx))) {
        break;
      } else {
        w += msg.charAt(idx);
        console.log(msg.charAt(idx));
      }
      idx++;
    }
    console.log(dict.get(w));
    answer.push(dict[w]);
    if (idx < msg.length) {
      dict[w + msg.charAt(idx)] = dictIdx++;
    }
  }
  console.log(answer);
  return answer;
}



https://code-lab1.tistory.com/113