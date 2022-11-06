let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
var n = parseInt(input[0].split(' ')); //명령 개수 
//input[1]~input[14]까지의 명령이 있음


function solution(n ){

    let stack = [] //스택 배열 
    let pos = 0 //인덱스를 저장할 변수 

    for ( let i = 1 ; i <= n ; i ++){
       let assi = input[i].split(' ');
        switch(assi[1]) 
        {
            case 'push':  // if (assi[1] === push)
                stack.push(assi[2])
                pos++
            break
          
            case 'pop':  
                stack.pop(assi[2])
                pos--
            break

            case 'size':  
                console.log(pos)
            break
          
            case 'empty': 
                if(pos === 0) console.log('1') 
                else console.log('0')
            break;

            case 'top':  
              
            break
   
            default:
              
              break
          }

    }
}


console.log(input[1].split(' '))



