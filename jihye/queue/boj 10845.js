let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
var n = parseInt(input[0].split(' ')); // 명령어 개수
//명령어는 input[1]~ input[15]까지 있음

let queue = []
let answer = []

for ( let i = 1 ; i< n+1 ; i++){
    
    let str = input[i].split(' ')   //str[0]은 명령어, str[1]은 숫자

    switch(str[0]){

        case 'push' :
           queue.push(Number(str[1]))
        break;

        case 'pop' :
           if(queue.length === 0) answer.push(-1)
           else answer.push(queue.pop(queue[0]))
         
        break;

        case 'size' :
           answer.push(queue.length)
        break;
        
        case 'empty' :
           if(queue.length === 0) answer.push(1)
           else answer.push(0)
        break;

        case 'front' :
           if(queue.length ===0)answer.push(-1)
           else answer.push(queue[0])
        break;

        case 'back' :
           if(queue.length ===0 )answer.push(-1)
           else answer.push(queue[queue.length-1])
        break;
    }

}



console.log(answer)
