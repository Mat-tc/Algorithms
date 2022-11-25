const fs = require('fs');
const input = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7 3`
)
  .trim()
  .split('\n');

//투포인터 사용 했음
const solution = (input) => {
  const [N, diff] = input[0].split(' ').map(Number);
  let queue = Array(N);
  const MAX_INDEX = N;
  let i = diff;
  for (let j = 0; j < N; j++) {
    if (i > N) i -= N;
    queue[j] = i;
    i++;
  }
  let stack = [];
  let head = 0;
  let tail = queue.length;
  while (stack.length != N) {
    //head를 stack 에 푸시
    head > MAX_INDEX ? (head = head - MAX_INDEX - 1) : '';
    stack.push(queue[head]);
    head++;
    //tail에 diff-1개 추가
    for (let i = 0; i < diff - 1; i++) {
      tail > MAX_INDEX ? (tail = tail - MAX_INDEX - 1) : '';
      head > MAX_INDEX ? (head = head - MAX_INDEX - 1) : '';
      queue[tail] = queue[head];
      head++;
      tail++;
    }
  }
  console.log(`<${stack.join(', ')}>`);
};

solution(input);
