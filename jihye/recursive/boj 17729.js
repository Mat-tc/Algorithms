let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');

var n = parseInt(input[0].split(' ')); //원판의 개수 
let cnt = 0 
let arr = []


function Hanoi(n,start,assi,end){
    cnt++

    if( n  === 0){   //종료조건
        return;
    }
    else{
        Hanoi(n-1, start, end, assi)        //젤 큰 원반 빼고 시작지점에 있는 n-1개를 assi로 옮긴다 
        arr.push([start, end])
        Hanoi(n-1, assi, start, end)
    }
}



Hanoi(n,1,2,3)
console.log(cnt)
console.log(arr);


