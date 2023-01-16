const fs = require('fs');
let input = fs
  .readFileSync('C:/project/Algorithms/gajeong/예제.txt')
  .toString()
  .trim()
  .split('\r\n');
solution(input);

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  class Node {
    constructor(value = '') {
      this.value = value; //현재 경로까지의 누적값
      this.end = false; //해당 노드에서 끝나는 문자열이 있는지 여부
      this.child = {}; //자식
    }
  }

  class Trie {
    constructor() {
      this.root = new Node();
    }

    insert(string) {
      let currentNode = this.root; //루트노드를 시작으로 탐색하면서 삽입한다

      for (let i = 0; i < string.length; i++) {
        const currentChar = string[i];

        //만일, 해당 키를 가진 자식이 없다면 새 노드를 만들어준다.
        if (currentNode.child[currentChar] === undefined) {
          currentNode.child[currentChar] = new Node(
            currentNode.value + currentChar
          );
        }

        currentNode = currentNode.child[currentChar]; // 자식 노드로 이동한다.
      }
      currentNode.end = true; //해당 노드에서 끝나는 단어가 있음을 알린다
    }

    search(string) {
      let currentNode = this.root; //역시나 시작은 루트

      for (let i = 0; i < string.length; i++) {
        const currentChar = string[i];
        if (currentNode.child[currentChar]) {
          currentNode = currentNode.child[currentChar]; // 있으면 노드 이동
        } else {
          return '';
        }
      }
      //찾는 문자열의 마지막까지 탐색했다는것은, 문자열을 찾았다는 것.
      return currentNode.value;
    }
  }

  const T = new Trie();
  for (let i = 1; i <= N; i++) {
    T.insert(input[i]);
  }

  let answer = 0;
  for (let i = N + 1; i <= N + M; i++) {
    if (T.search(input[i])) answer += 1;
  }
  console.log(answer);
}
