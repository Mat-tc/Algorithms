let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
var strr = input[0].split(' '); // 단어
var n = parseInt(input[1])  //명령어 개수 

// 명령어는 input[2]~ input[n+1]이렇게 존재함



console.log(solution(strr,n))



