const fs = require("fs");
let input = fs
  .readFileSync("C:/project/Algorithms/gajeong/예제.txt")
  .toString()
  .trim()
  .split("\r\n");
solution(input);
function solution(input) {
  class Node {
    // value 외에도 priority 클래스를 함께 담기 위해 Node 클래스를 사용한다.
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }

  class PriorityQueue {
    constructor() {
      this.values = [];
    }

    enqueue(val, priority) {
      // 이진 힙에서 만든 Insert 메서드에서 이름을 바꿨다.
      const newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
    }

    bubbleUp() {
      let idx = this.values.length - 1;
      while (idx > 0) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if (this.values[idx].priority >= this.values[parentIdx].priority) break;
        [this.values[idx], this.values[parentIdx]] = [
          this.values[parentIdx],
          this.values[idx],
        ];
        idx = parentIdx;
      }
    }

    dequeue() {
      // 이진 힙에서 만든 extractMax 메서드에서 이름을 바꿨다.
      const min = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return min;
    }

    sinkDown() {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      while (true) {
        const leftChildIdx = 2 * idx + 1;
        const rightChildIdx = 2 * idx + 2;
        let leftChild;
        let rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          // 최소이진힙이라 최대이진힙과 달리 부등호 방향이 반대고, 비교하는 값은 priority 프로퍼티다.
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }

  //교차로 개수 N, 골목 개수 M, 시작 교차로 번호 A, 도착 교차로 번호 B, 가진 돈 C
  const [N, M, A, B, C] = input[0].split(" ").map(Number);
  const max = 5e10;

  const linked = Array.from(Array(N + 1), () => []);
  for (let i = 1; i <= M; i++) {
    let [start, end, cost] = input[i].split(" ").map(Number);
    linked[start].push([end, cost]);
    linked[end].push([start, cost]);
  }

  const stack = [[1, 0]];
  const visited = Array(N + 1).fill(false);
  visited[1] = true;
  let sum = 0;
  let shy = 0;
  while (stack.length) {
    let [point, cost] = stack.pop();

    sum += cost;
    if (point == B && sum <= C) continue;
    for (let i = 0; i < linked[point].length; i++) {
      let [nxt, c] = linked[point][i];
      if (visited[nxt]) continue;
      visited[nxt] = true;
      stack.push([nxt, c]);
    }
    sum -= cost;
  }
  console.log(shy);
}
