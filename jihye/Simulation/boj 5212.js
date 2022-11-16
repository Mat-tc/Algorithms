const { createPublicKey } = require('crypto');

let input = require('fs').readFileSync(__dirname+'/input.txt').toString().split('\n');

var n = input[0].split(' ');    
let w = Number(n[0])
let h = Number(n[1].replace(/\r/g, "")) //w과h는 넓이


let arr = []
for ( let i = 1; i < w+1; i ++){
    arr.push(input[i].replace(/\r/g,"").split(''))
}   //배열에 담아줌 

//w==5 ,  h==3
function solution(arr,w,h){

    let dx =  [-1, 0, 1, 0] 
    let dy =  [0 , 1, 0, -1] 
    let newarr = []
    let cnt = 0
    for ( let i =0 ;i < h; i ++){
        for ( let j = 0 ; j <h; j ++){          
            for ( let k = 0 ; k <4 ; k ++){
                let nx = i + dx[k] //가는 방향
                let ny = j + dy[k] 
                if(nx>=0&& nx<h && ny>=0&& ny>=w) {
                    if( arr[nx][ny] === '.' ){
                        cnt++   
                    }

                    console.log(cnt)
                    if( cnt >=3) {  //3면 이상이 바다면
                        newarr.push(' ')    //가라앉음
                        cnt = 0
                    }
                    else { 
                        newarr.push(arr[i][j])  //그냥 그대로 둠
                        cnt = 0
                    }
                }
                

            } 

           

        }
    }
    

}

solution(arr,w,h)









