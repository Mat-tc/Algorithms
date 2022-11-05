let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split(' ');
var n = parseInt(input[0].split('')); //1~n까지의 수
var m = parseInt(input[1].split('')); //뽑은 자연수 m개 


function solution(n,m){
    let answer = []
    let arr = Array.from({length:m}, ()=> 0)
    let ch = Array.from({length:n} , ()=> 0)
    
    function DFS(k){
        const assi = []
        if(m === k)    //종료조건 (m개를 뽑았으면 종료 )
        {   
            for ( let i = 0; i< m ; i ++){
                assi.push(arr[i])
            }
            answer += assi+ '\n'
            return answer
        }
        
        for ( let i =1; i <= n ; i++){  //1~n까지 숫자를 넣어보면서
            if( !ch[i]){
                arr[k]=i
                ch[i]=1
                DFS(k+1)
                ch[i]=0
            }
        }
        


    }
        
 
    DFS(0)
    return answer 
}


console.log(solution(n,m))




