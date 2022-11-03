let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');

// input[1]부터 <=5까지 있음 
//문제는 팰린드롬이면 1 아니면 0을 반환 
var n = parseInt(input[0]); //개수 
let cnt = 0 

function recursion(s, l, r){
    cnt ++ 

    if(l >= r) return 1+" "+ cnt ;
    else if(s[l] !== s[r]) {    //처음과 끝이 같지 않으면
        
        return 0 +" "+cnt ;
    }
    else {
        
        return recursion(s, l+1, r-1); // 앞에 return 꼭 쓰기!!
    }
}

function isPalind(str){
    return recursion(str, 0, str.length-1);
}

for ( let i =1 ; i <= n ;i ++){
    console.log(isPalind(input[i].trim()));
    cnt = 0 
}


