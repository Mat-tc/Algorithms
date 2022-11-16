const internal = require('stream');
const { CLIENT_RENEG_LIMIT } = require('tls');

let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');  
var n = Number(input[0].split(' '));    //사람의 수 

function solution(n){
    let arr = []
    let obj = {}
    
    for( let i =1; i <n+1 ; i ++ ){
        let a = input[i].split(' ')
        
        obj.age = a[0]
        obj.name = a[1].replace(/\r/g, "")

        arr.push({...obj})
    }   //객체로 배열에 담아줬음 

    arr.sort((a,b) => a.age-b.age)
    
    for ( let x of arr){
         
        console.log(x.age+ ' '+x.name )
    }

}



console.log(solution(n))     




