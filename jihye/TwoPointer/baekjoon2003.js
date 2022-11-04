let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');



var a = parseInt(input[0]); //처음 주어진 숫자 
let arr = []  //주어진 수열
for ( let x of input[1].split(' ')){
  arr.push(Number(x))
}
let m = a 

let answer=0, lt=0, sum=0;

for(let rt=0; rt<arr.length; rt++){
    sum += arr[rt];
    if(sum===m) answer++;
    while(sum>=m){
        sum-=arr[lt++];
        if(sum===m) answer++;       
    }
    
}        

console.log(answer);