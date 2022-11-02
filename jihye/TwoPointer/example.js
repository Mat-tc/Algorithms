const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 1 3 1 2 3 
`
).split('\n');
const arr = stdin.map((el) => el.trim());

const solution = (input) => {
  let line = input[0].split(' ');

  let m = line[0]   //구해야하는 숫자
  let arr = line.splice(1,line.length-1)

  let answer = 0, lt =0 , sum =0;




  console.log(arr) 
};

solution(arr);
