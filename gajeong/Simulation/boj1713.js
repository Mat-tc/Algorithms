const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
8
1 2 3 1 3 4`
)
  .trim()
  .split("\n");

const solution = (stdin) => {
  let N = Number(stdin[0]);
  let cnt = Number(stdin[1]);
  const recom = stdin[2].split(" ").map(Number);
  const photo = [];
  const status = Array(101).fill(0);
  recom.forEach((num) => {
    //포토존에 해당 숫자가 있다면
    if (photo.includes(num)) {
      status[num] += 1;
    } else {
      // 넣어줌
      status[num] = 1;
      // photo 가 꽉 안찼다면 그냥 넣어줌
      if (photo.length < N) {
        photo.push(num);
      } else {
        let min = 1001;
        let index = 0;
        // [5,6,1]
        for (let i = 0; i < N; i++) {
          if (status[photo[i]] < min) {
            min = status[photo[i]];
            index = i;
          }
        }
        //splice의 용도를 잘 알아야 함   splice(시작인덱스,삭제할 개수)
        let del = photo.splice(index, 1);
        status[del[0]] = 0;
        photo.push(num);
      }
    }
  });

  console.log(photo.sort().join(" "));
};

solution(stdin);
