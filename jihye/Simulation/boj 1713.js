let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");
let frame = input[0]; //액자 개수
let n = input[1]; //명령어 개수
let arr = input[2].split(" "); //추천 된 학생들

// function solution(frame, n , arr){
//     let stack = []
//     // ch = Array.from({length:n}, ()=> 0 )

//     for ( let i =0 ; i < n ; i++){

//         if( stack.some(item => item === arr[i])){
//             stack.splice(stack.findIndex(item => item === arr[i]),1,arr[i])
//         }
//         else{
//             stack.push(arr[i])
//         }

//     }

//     return stack

// }        이렇게 하면 누가 추천을 많이 받았는지 알 수가 없음..

//객체로 만들어서 키 밸류값을 한다음 밸류를 증가시킨다
// function solution(frame, n, arr){
//     let stack = []
//     let ob = {}
//     for( let x of arr){
//         let cnt = 0
//         if( stack.some(item => item.key === Number(x))){
//             ob.count = cnt++
//          }
//           else{
//             ob.key = Number(x)
//             ob.count = cnt
//             stack.push({ ...ob });
//          }

//     }
//     console.log(stack)

// }

// function solution(frame, n , arr){
//     let stack= []
//     let cursor =0

//     for ( let x of arr){

//         if(!stack.length === 3 ){
//             stack.push(x)
//             cursor++
//         }
//         else {  //만약 3개가 가득 찼으면

//             if( stack.some(item => item === Number(x))){ //있는지 없는지 확인 한개라도 있으면 true
//                 cursor = 0
//                 console.log('통과')
//             }
//              else{   //그 원소가 없으면 커서가 가리키는 곳에 추가
//                 cursor = 0
//                 stack[cursor] = Number(x)
//                 cursor++    //커서 1증가
//              }
//     }

// }

// }

function solution(frame, n, arr) {
  let stack = [];
  let cnt = 0;
  let cursor = []; //체크배열
  let count = parseInt(n / frame);

  for (let j = 0; j < count; j++) {
    for (let i = 0; i < n; i++) {
      let peo = Number(arr[i]);
      if (stack.length < 3) {
        stack.push(peo);
        cursor.push(cnt++); //액자 개수만큼 돌았다
      } else {
        //똑같은게 있으면
        if (stack.some((item) => item === peo)) {
          stack[stack.indexOf(peo)] = peo; //해당 아이템있는 자리에 덮어씌움
          cursor[stack.indexOf(peo)] = cnt++; //cnt도 해당아이템이 있는 인덱스에 덮어씌움
        } else {
          //만약 똑같은게 없으면
          let min = Math.min(...cursor); //cnt가 젤 작은 곳
          stack[cursor.indexOf(min)] = peo; //cnt가 젤 작은 곳에 추가함
          cursor[cursor.indexOf(min)] = cnt++; //cnt도 같이 덮어씌움
        }
      }
    }
  }
  console.log(stack.sort((a, b) => a - b));
}

console.log(solution(frame, n, arr));
