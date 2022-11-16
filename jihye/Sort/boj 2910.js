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
  }

  const set = new Set(arr)
  let setL = [...set]

  let nextarr = []
  let nextobj ={}

  for ( let x of set){
    let a = Number(x)
    let count = 0
  
    for ( let i of newarr){
        if( a === i.key){
            count++
        }
    }
    nextobj.key = a
    nextobj.count = count
    
    nextarr.push({...nextobj})
  }

  let cntresult = nextarr.sort((a,b) =>
    b.count - a.count
  )

  let sum = ''

    for ( let x = 0 ; x< setL.length ; x ++){
        
        for( let j = 0 ; j < Number(cntresult[x].count) ; j ++){
            sum += String(cntresult[x].key)+ ' '
        }
        
    }

    console.log(sum)

}



solution(n)




