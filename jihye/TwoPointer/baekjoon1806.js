let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');


var a = parseInt(input[0]); //처음 주어진 숫자 
let arr = []  //주어진 수열
for ( let x of input[1].split(' ')){
  arr.push(Number(x))
}
let m = a 


let answer = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (m <= sum) {
      answer = Math.min(answer, right - left + 1);
      sum -= arr[left++];
    }
  }
  answer = answer === Number.MAX_SAFE_INTEGER ? 0 : answer;
 console.log( answer)
