let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
var n = input[0].split(' ');

var m = input[1].split(' '); //뽑은 자연수 m개 
var a = n[0]    //a개의 카드들
var b = parseInt(n[1])  //b에 가까운 숫자를 만듦

let answer =''



function solution (a,b,m){

    let ch = Array.from({length: m}, ()=> 0)
    let arr = Array.from({length:3}, ()=> 0)
    let max = 0
    
    function DFS(k){
        let sum = 0 
        if(k === 3) //3개를 다 뽑았으면 
        {
            for ( let i = 0 ; i < 3 ; i ++){
                sum += arr[i]   //넘지 않으면 해당 숫자도 가능
            }
            if( sum<= b && sum > max) max = sum

            return answer = max 
        }

        for( let i =0; i< a ; i++){
            if ( !ch[i]){
                arr[k] = Number(m[i])
                ch[i]= 1
                DFS(k+1)
                ch[i]= 0
            }
        }
    }

    DFS(0)
    return answer
}   


console.log(solution(a,b,m))




