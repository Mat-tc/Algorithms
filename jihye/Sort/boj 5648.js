const internal = require('stream');
const { CLIENT_RENEG_LIMIT } = require('tls');

let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');  
//var n = Number(input.split(' '));    //사람의 수 

function solution(){
    let arr = []
    let newarr =  []
    for( let i =0 ; i < input.length ; i ++){
       
        arr.push(input[i].split(' '))
     
    }
    
    for ( let i =0 ; i <arr.length  ; i++){
        for( let x of input[i].split(' ')){
            let a = x.split('').reverse()
            newarr.push(Number(a.join('')))
        }
    }

    let n = newarr.splice(0,1)   //숫자 개수 
    
    newarr.sort((a,b)=> a-b)
    
    for ( let x of newarr){
        console.log(x)
    }
}



solution()




