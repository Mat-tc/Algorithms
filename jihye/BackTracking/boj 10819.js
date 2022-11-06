let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
var n = parseInt(input[0].split('')); //1~n까지의 수
var m = input[1].split(' '); //뽑은 자연수 m개 

let answer =''

function soultion( n, m){

    let arr = Array.from({length:n}, ()=>0) //뽑은 걸 저장할 배열 
    let ch = Array.from({length: n+1}, ()=> 0)
    let max = 0 

    function DFS(k){
        if(k === n){//6개뽑았으면 종료 
            const assi = []
            let sum = 0
            for ( let i =0 ; i< n ; i++){
                sum += Math.abs(arr[i]-arr[i+1])
                if ( sum > max ) max = sum 
            }
            
            return answer = max 
        }
        for ( let i = 0; i < n ; i ++){
            if ( !ch[i])    // i번째 뽑은게 0이면 
            {
                arr[k] = Number(m[i])   //k번째 뽑은 거에 넣는다.   
                ch[i]=1 // i번째에 체크
                DFS(k+1)
                ch[i] =0
            }
            
        }
        

    }

    DFS(0)
    return answer
}

console.log(soultion(n,m))




