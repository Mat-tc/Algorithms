let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
let frame = input[0]    //액자 개수
let n = input[1]   //명령어 개수
let arr = [...input[2].split(' ')]  //추천 된 학생들

// function solution(frame, n , arr){
//     let stack = []
//     // ch = Array.from({length:n}, ()=> 0 )
    
//     for ( let i =0 ; i < n ; i++){  
        
//         if( stack.some(item => item === arr[i])){
//             stack.splice(stack.findIndex(item => item === arr[i]),1,arr[i])
//         }
//         else{
//             stack.push(arr[i])
//         }

//     }
    
//     return stack

// }        이렇게 하면 누가 추천을 많이 받았는지 알 수가 없음..

function solution(frame, n, arr){
    let stack = []  //객체로 만들어서 키 밸류값을 한다음 밸류를 증가시킨다
    let ob = {}
   

    for( let x of arr){
        let cnt = 0
        if( stack.some(item => item.key === Number(x))){
            ob.count = cnt++
         }
          else{
            ob.key = Number(x)
            ob.count = cnt
            stack.push({ ...ob });
         }
       
    }


    console.log(stack)

}





console.log(solution(frame, n , arr))



