let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split(' ');

let n = Number(input[0])
let k = Number(input[1])
let answer= []

function solution(n,k){
    let queue = Array.from({length: n}, (v,i)=>i+1 )
    //1,2,3,4,5,6,7 까지 넣은 배열 생성

    while(queue.length){    //다 뺄때까지 돌린다.
        for ( let i =1; i < k; i ++)    //k-1만큼 돌린다.
           {
            queue.push(queue.shift())
           }
           answer.push(queue.shift())
        
    }
    console.log(answer)
}



solution(n,k)





