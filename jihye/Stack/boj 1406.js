let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
var strr = input[0].split(' '); // 단어
var n = parseInt(input[1])  //명령어 개수 

// 명령어는 input[2]~ input[n+1]이렇게 존재함


function solution(strr,n){
    let str = strr[0].split('')

    for ( let i =2 ; i <= n+1; i ++){
        let a = input[i].split(' ') //a[0] 은 명령어
        let pos = str.length-1  //커서의 위치 
        
        switch(a[0]){
            
            case 'L' :
                if(pos === 0 ) break; 
                else pos--
            break;

            case 'D' :
                if(pos === str.length ) break; 
                else pos++
            break;

            case 'B' :
                if(pos === 0 ) break; 
                else str.pop()
            break;

            case 'P' :
                pos++
                str[pos] = a[1]
            break;
            
        }



    }
    return str.join('')
}


console.log(solution(strr,n))



