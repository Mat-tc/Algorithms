let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
var n = input[0].split(' ');

var m = input[1].split(' '); //뽑은 자연수 m개 
var a = n[0]    //a개의 카드들
var b = parseInt(n[1])  //b에 가까운 숫자를 만듦

let answer =''



console.log(solution(a,b,m))




