const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "C:/project/Algorithms/gajeong/예제.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

class Node {
  constructor(value = "") {
    this.value = value; //현재 경로까지의 누적값
    this.end = false; //해당 노드에서 끝나는 문자열이 있는지 여부
    this.child = {}; //자식
    this.cnt = 1;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root; //루트노드를 시작으로 탐색하면서 삽입한다
    let nick = "";
    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];

      //만일, 해당 키를 가진 자식이 없다면 새 노드를 만들어준다.
      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new Node(
          currentNode.value + currentChar
        );
        if (nick.length == 0) nick = currentNode.value + currentChar;
      }

      currentNode = currentNode.child[currentChar]; // 자식 노드로 이동한다.
      if (currentNode.value == string && currentNode.end == true) {
        currentNode.cnt += 1;
        nick = currentNode.value + `${currentNode.cnt}`;
      }

      if (currentNode.value == string && nick.length == 0)
        nick = currentNode.value;
    }
    currentNode.end = true; //해당 노드에서 끝나는 단어가 있음을 알린다

    return nick;
  }

  search(string) {
    let currentNode = this.root; //역시나 시작은 루트

    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar]; // 있으면 노드 이동
      } else {
        return false;
      }
    }
    //찾는 문자열의 마지막까지 탐색했다는것은, 문자열을 찾았다는 것.
    return true;
  }
}

const t = new Trie();
const answer = [];
for (let i = 1; i <= N; i++) {
  let str = t.insert(input[i]);
  answer.push(str);
}
console.log(answer.join("\n"));
