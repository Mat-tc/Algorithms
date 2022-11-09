let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
//input[0]~부터 문장 들어옴

let answer =[]
let stack =[]

for ( let x of input){
    let str = x.toLowerCase().replace(/[a-z]/g,'')
    let str_2 = str.replace(/\s/g,'');
    
    for ( let i of str_2){
        if(i === '(') stack.push(i)
        else if(  i ==='[' ) stack.push(i)
        else if( i ===']') {
            if( stack[stack.length-1] === '[') stack.pop()
        }
        else if( i ===')'){
            if( stack[stack.length-1] ==='(')stack.pop()
        }
    }

    if( stack.length === 0 ) answer+= 'yes' + '\n'
    else answer+= 'no' + '\n'
    stack = []
}


console.log(answer)









