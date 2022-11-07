let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');  
var n = Number(input[0].split(' '));    //모인 사람의 수 

var a = input[1].split(' '); //뽑은 자연수 m개 
var b = input[2].split(' ')
var c = input[3].split(' ')
var d = input[3].split(' ')

var arr = []
arr.push(a)
arr.push(b)
arr.push(c)
arr.push(d)

var answer = []

function solution(n, arr){

    let assi = Array.from({length:n}, ()=>0 )
    let ch = Array.from({length:n}, ()=> 0)
    let a = Array.from({length:n}, (v,i)=> i+1 )

    function DFS(k){
        const set = new Set( assi )
        let an = [...set]
        
        if(an.length === n){ //종료조건 
            for (let i =0 ; i < an.length; i ++){
               // an[i], an[i+1], //an[i+2], an[i+3]
               // an[i+1], an[i], //an[i+3], an[i+2]
                

            }
        }
        
        for ( let i =0 ; i < n ; i ++){
            if ( !ch[i]){
                assi[k] = i
                ch[i]=1 
                DFS(k+1)
                ch[i]=0
            }
        }

    }

    DFS(0)
    return answer 
}


console.log(solution(n,arr))     




