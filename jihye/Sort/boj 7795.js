const { group } = require('console');
const internal = require('stream');
const { CLIENT_RENEG_LIMIT } = require('tls');
const { isBooleanObject } = require('util/types');

let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');  
let n = input[0].split(' ')
let a = n[0]
let b = n[1]






function solution(){

    let aArr = []
    let bArr = []
    let cnt = 0

    for ( let x of input[1].split(' '))  aArr.push(Number(x))

    for ( let x of input[2].split(' '))  bArr.push(Number(x))
    //-------값 대입

    for( let x of aArr){
        for ( let i of bArr){

            if( x>i) cnt ++
        }
    }
   
    console.log(cnt)
}



solution()




