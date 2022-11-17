const { group } = require('console');
const internal = require('stream');
const { CLIENT_RENEG_LIMIT } = require('tls');
const { isBooleanObject } = require('util/types');

let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');  
let inp = input[0].split(' ');    
let n = Number(inp[0])//문자 개수 
let c = Number(inp[1])  //C


function solution(n){
  let arr = input[1].split(' ')
  let obj ={}
  let newarr = []
  

  for ( let x of arr){
    obj.key = Number(x)
    newarr.push({...obj})
  } //객체로 만들어

  const set = new Set(arr)
  let setL = [...set]

  let nextarr = []
  let nextobj ={}

  for ( let x of set){  //중복 제거 한 거에서 돌린다
    let a = Number(x)
    let count = 0
  
    for ( let i of newarr){ 
        if( a === i.key){//set에 있는게 객체로 만든 거에 있으면?
            count++ //카운트해준다.
        }
    }
    nextobj.key = a     
    nextobj.count = count//그리고 해당 값과 count 를 객체로 푸시해준다.
    
    nextarr.push({...nextobj})
  }

  let cntresult = nextarr.sort((a,b) => // 아까 만든 객체를 count 내림차순으로 정렬한다
    b.count - a.count
  )

  let sum = ''  

    for ( let x = 0 ; x< setL.length ; x ++){   //중복 제거 해준거를?

        for( let j = 0 ; j < Number(cntresult[x].count) ; j ++){       //count 만큼 출력해준다!
            sum += String(cntresult[x].key)+ ' '
        }
        
    }

    console.log(sum)

}



solution(n)




