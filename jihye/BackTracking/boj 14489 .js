const internal = require('stream');
const { CLIENT_RENEG_LIMIT } = require('tls');

let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');  
var n = Number(input[0].split(' '));    //모인 사람의 수 


var arr = []
for ( let i = 1; i < n+1; i ++){
    arr.push(input[i].split(' '))
}

var answer =0
let min = 1000000

function solution(n, arr){

    let assi = Array.from({length:n}, ()=>0 )
    let ch = Array.from({length:n}, ()=> 0)
   

    function DFS(k){
        const set = new Set( assi )
        let an = [...set]   //중복제거
        let st = 0
        let lt = 0
        
        if(an.length === n){ //종료조건 
           for( let i =0 ; i <  an.length/2 ; i ++){ //an{1,2,3,/4,5,6}을 탐색
                for(let j = 0; j < an.length/2; j++){
                    st += Number(arr[an[i]][an[j]])
                }
           }

           for( let i = an.length/2; i <  an.length ; i ++){ //an{1,2,3,/4,5,6}을 탐색
            for(let j = an.length/2; j < an.length; j++){
                lt += Number(arr[an[i]][an[j]])
            }
         }

         answer = Math.abs(st-lt)
         if(min > answer ) min = answer
       
        }
       
        for ( let i =0 ; i < n ; i ++){
            if ( !ch[i]){
                assi[k] = i
                ch[i]=1 
                DFS(k+1)
                ch[i]=0
            }
        }

    }

    DFS(0)
    return min 
}


console.log(solution(n,arr))     




