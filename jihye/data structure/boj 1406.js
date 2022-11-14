let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');
var strr = input[0].trim().split('\n'); // 단어
var n = parseInt(input[1])  //명령어 개수 

// 명령어는 input[2]~ input[n+1]이렇게 존재함

function solution(strr,n){
    let str = strr[0]   //해당단어 
    let ls = []
    let rs = []
    let answer = ''

    for ( let x of str){
        ls.push(x)       
    }


    for( let i=2 ; i < n+2 ; i ++){
        
        let [s, a] = input[i].split(' ')
       
        switch(s.trim()){

            case 'L' :
                if (ls.length) rs.push(ls.pop())
            break;

            case 'D' :
                if (rs.length) ls.push(rs.pop())
            break;

            case 'B' :
                 ls.pop()
            break;

            case 'P' :
                ls.push(a.replace(/\r/g, ""))
            break;

        }
    }

    answer = ls.join('') + rs.reverse().join('')
    console.log(answer)
}

solution(strr,n)





