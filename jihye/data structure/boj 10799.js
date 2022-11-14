let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split(' ');
let n = input[0]


function solution(n){

    let stack = []
    let cnt = 0 
    let answer =0 
    
    for ( let i = 0 ; i < n.length ; i ++){
        if(n[i] ==='(') stack.push('(')
        else{
            stack.pop()
            if(n[i-1]==='(') answer += stack.length;
            else answer++;
           
        }

    }

    console.log(answer)
}

solution(n)





