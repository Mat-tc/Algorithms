let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split(' ');
var n = parseInt(input[0].split('')); //1~n까지의 수
var m = parseInt(input[1].split('')); //뽑은 자연수 m개 


function solution(n,m){
    let arr = Array.from({length:m}, ()=> 0)
    let ch = Array.from ({length:n}, ()=> false)    //근데 여기서 false가 아니라 0으로 초기화하면 안되던데 이유가 뭘까
    let answer = ''

    function DFS(k){    //k는 고른 개수
        if(k === m){   // 종료 조건
            const array = []
            for(let i =0; i < m ; i ++){
                array.push(arr[i])
            }
            return answer += array.join(' ') + "\n"
        }
        
            for ( let i =1 ; i <= n; i++){
                if( !ch[i])    //check 배열이 0이면 (사용되지 않았으면)
                arr[k] =i   //k번째에 i를 집어넣는다 
                ch[i] = 1 //그리고 check 배열을 체크 !
                DFS(k+1)
                ch[i]=0 //재귀로 다른 숫자들 모두 타고 들어갔으면 0으로 check를 해지함
            }
    
    }

    DFS(0)
    return answer

}

console.log(solution(n,m))




