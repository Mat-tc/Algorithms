let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('');
//input[0]

let cnt = 0
let answer = 0
let stack = []

for( let i = 0 ; i < input.length ; i ++){
   if(input[i] === '(') stack.push(input[i])
    else{  
        stack.pop()
        if(input[i-1]==='(') answer+=stack.length;
        else { answer++ }
        
        answer += cnt
    }
    
}



console.log(answer)









