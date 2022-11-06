let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
var n = parseInt(input[0].split(' ')); //명령 개수 
//input[1]~input[14]까지의 명령이 있음


function solution(n){

    let stack = [] //스택 배열 
    

    for ( let i = 1 ; i <= n ; i ++){
       
        let assi = input[i].split(' ');

        switch(assi[0].replace(/\r/g, ""))  //명령어
        {
            case 'push':  // if (assi[0] === push) ok
                stack.push(Number(assi[1]))
               
            break;
          
            case 'pop':  
                if(stack.length ===0 ) console.log(-1)
                else console.log( stack.pop() )
               
            break;

            case 'size':  //ok
                console.log(stack.length)
            break;
          
            case 'empty': 
                if(stack.length=== 0) console.log(1) 
                else console.log(0)
            break;

            case 'top':  
                if(stack.length=== 0 ) console.log(-1)
                else console.log(stack[stack.length-1])
                
            break;
          }

    }
}


console.log(solution(n))



