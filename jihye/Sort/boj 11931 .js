const { group } = require('console');
const internal = require('stream');
const { CLIENT_RENEG_LIMIT } = require('tls');
const { isBooleanObject } = require('util/types');

let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');  
let n = input[0].split(' ')



function solution(){
    let arr =  []

    for( let i = 1; i < input.length ; i ++){

        arr.push(Number(i))
    }

    let newarr = [] 
    newarr =arr.sort((a,b)=> b-a)

    console.log(newarr)
}

solution()




